const knex = require('knex')(require('../../knexfile').development);
module.exports = class {
    static checkIsUser = async (req, res, next) => {
        const {email} = req.body;
        const user = await knex('users').where('email', email)
        if (user.length ==0) {
            next()
        }else {
            res.json({status: 400, message: 'Email sudah tersedia'})
        }
    }
}