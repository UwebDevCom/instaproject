const { Router } = require ('express');
const route = Router();

route.get('/user', (req, res) => {
    try {
        
    } catch(err) {
        res.status(400).send(err.message);
    }
});



module.exports = {
    route
}