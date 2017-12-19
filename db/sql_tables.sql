CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(40), 
    email VARCHAR(40), 
    first_name VARCHAR(40), 
    last_name VARCHAR(40), 
    personal_url VARCHAR(40), 
    img_url TEXT, 
    auth_id TEXT
);

CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    type VARCHAR(20), 
    color VARCHAR(40), 
    description VARCHAR(100), 
    photo_url TEXT
);