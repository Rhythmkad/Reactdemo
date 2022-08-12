var config = require('./dbconfig')
var sql = require('mssql')

async function getData() {
    try {
        let pool = await sql.connect(config)
        let data = await pool.request().query("Select * from UserTable");
        console.log(data);
    } catch (error) {
        console.log("err")
    }
}


async function getuser(user){
    try {

        let pool = await sql.connect(config)
        let data = await pool.request()
        .input('input_parameter', sql.Int, user)
        .query("Select * from UserTable where Id = @input_parameter");
        return data.recordsets;

        
    } catch (error) {
        console.log(err);
    }
}


module.exports = {
    getData: getData
}