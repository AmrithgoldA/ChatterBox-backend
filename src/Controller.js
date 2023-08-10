const mssql = require("mssql");

const dbConnect = new mssql.ConnectionPool({
    //db connection string
    server:'localhost',
    user:'sa',
    database:'chattingApplication',
    password:'Admin@123',
    options:{
        trustServerCertificate :true
    }
})

const postUserDetail = async(request,response) =>{
    await dbConnect.connect()

    let query = await dbConnect.query(`
    INSERT INTO 
    UserDetails (username, firstname, lastname, email, password)
    VALUES ('${request.body.userName}', '${request.body.firstName}', '${request.body.lastName}', '${request.body.email}', '${request.body.password}')
    `);

    await dbConnect.close();

    response.send(query)

}

const getUser = async (request, response) => {
    await dbConnect.connect()
    let query = await dbConnect.query(`
    SELECT * from UserDetails where userName = '${request.body.userName}' OR email = '${request.body.email}'
    `);

    await dbConnect.close();

    response.send(query);
}

const checkUser = async (request, response) => {
    await dbConnect.connect()

    let query = await dbConnect.query(`
    SELECT * from UserDetails where userName = '${request.body.userName}' AND password = '${request.body.password}'
    `);

    await dbConnect.close();

    response.send(query);
}

module.exports = {postUserDetail, getUser, checkUser};
