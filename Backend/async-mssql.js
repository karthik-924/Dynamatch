const sql = require('mssql');

var config = {
    user: 'dynamatch',
    password: 'Dynamatch@123',
    server: 'localhost',
    database: 'uipath',
    port: 1433,
    options: {
        "encrypt": false
    }
};

sql.on('error', err => {
    console.log(err.message);
})

const getDBUsersAsyncFunction = async () => {
    const query = "INSERT INTO Donors (id, Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, FatalHealth) VALUES (1, 'John Doe', 30, 1234567890, 'Male', 'A+', 'john@example.com', '123 Main St, City', 'Type A', 'Medical Checkup');"
    try {
        console.log("Trying to connect to database");
        let dbConn = await sql.connect(config);
        console.log("Connected to database");
        var request = new sql.Request(dbConn);
        request.query("Select * from Donors", function (err, recordset) {
            if (err) {
                console.log(err);
                dbConn.close();
            }
            else {
                console.log(recordset);
                dbConn.close();
            }
        });
    }
    catch (error) {
        console.log(error.message);
    }
}

getDBUsersAsyncFunction();

