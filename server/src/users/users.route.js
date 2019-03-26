const { Router } = require ('express');
const route = Router();

route.get('/users', (req, res) => {
    try {
        
    } catch(err) {
        res.status(400).send(err.message);
    }
});

module.exports = {
    route
}