require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const bodyParser = require('body-parser');

const controller = require('./controllers/controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // check if user exists in users table
    // if they do, invoke done with users id
    // if not, then we will create new user
    // then invoke done with new user's id
    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id);
        } else {
            db.create_user([
                userData.name,
                userData.email,
                userData.given_name,
                userData.family_name,
                userData.identities[0].user_id
            ]).then(user => {
                return done(null, user[0].id);
            })
        }
    })
}))
passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/login-success',
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    console.log(req.user);
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Please log in')
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(`https://${process.env.AUTH_DOMAIN}/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000`);
})

// endpoints


const PORT = 3030;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));