module.exports = {
    addVehicle: (req, res) => {
        const { type, color, description } = req.body;
        let db = req.app.get('db');
        db.add_vehicle([req.user.id, type, color, description]).then(newVehicle => {
            res.status(200).send(newVehicle)
        })
    },
    getVehicles: (req, res) => {
        let db = req.app.get('db');
        db.get_vehicles().then(vehicles => {
            res.status(200).send(vehicles)
        })
    },
    getVehicle: (req, res) => {
        let db = req.app.get('db');
        db.get_vehicle([req.params.vehicleId]).then(vehicle => {
            res.status(200).send(vehicle)
        })
    }
};