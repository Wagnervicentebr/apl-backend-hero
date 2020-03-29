const connection = require('../database/connection');


module.exports = {
    async createSession(req,res) {

        const {id_ongs} = req.body;

        const ong = await connection('ongs')
            .where('id', id_ongs)
            .select('name')
            .first();
    
        if (!ong) {
            return res.status(400).json({error: "there is no ong with that id"});
        }

        
        return res.json(ong);
    }
}