
const express = require('express');
const app = express();
const port = 4000;
const sql = require('mssql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var config = {
    user: 'dynamatch',
    password: 'Dynamatch@1234',
    server: 'localhost',
    database: 'uipath',
    port: 1433,
    options: {
        "encrypt": false,
        trustedConnection: true
    }
};
sql.on('error', err => {
    console.log(err.message);
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/getDonors', async(req, res) => {
        try {
            console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query("Select * from Donors", function (err, recordset) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    dbConn.close();
                }
                else {
                    // res.send(recordset);
                    dbConn.close();
                    res.status(200);
                    res.send(recordset);
                }
            });
        }
        catch (error) {
            console.log(error.message);
        }
})

app.post('/addDonor', async (req, res) => {
    var { Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, FatalHealth } = req.body;
    var query = `INSERT INTO Donors (Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, FatalHealth) VALUES ('${Name}', ${Age}, ${Phoneno}, '${Gender}', '${Bloodgroup}', '${Email}', '${Address}', '${Type}', '${FatalHealth}');`
    console.log(query);
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.status(200);
                    res.send({success: true, message: "Donor added successfully"});
                    dbConn.close();
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

// app.get('/getDonor/:id', async (req, res) => {
//     var id = req.params.id;
//     var query = `SELECT * FROM Donors WHERE id=${id};`
//     try {
//         console.log("Trying to connect to database");
//             let dbConn = await sql.connect(config);
//             console.log("Connected to database");
//             var request = new sql.Request(dbConn);
//             request.query(query, function (err, recordset) {
//                 if (err) {
//                     console.log(err);
//                     dbConn.close();
//                 }
//                 else {
//                     res.send(recordset);
//                     dbConn.close();
//                 }
//             });
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// })

app.put('/updateDonor/:id', async (req, res) => {
    var { Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, FatalHealth } = req.body;
    var query = `UPDATE Donors SET Name = '${Name}', Age = ${Age}, Phoneno = ${Phoneno}, Gender = '${Gender}', Bloodgroup = '${Bloodgroup}', Email = '${Email}', Address = '${Address}', Type = '${Type}', FatalHealth = '${FatalHealth}' WHERE id = ${id}`;
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.send({success: true, message: "Donor updated successfully"});
                    dbConn.close();
                    // res.send(recordset);
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

app.delete('/deleteDonor/:id', async (req, res) => {
    var id = req.params.id;
    var query = `DELETE FROM Donors WHERE id = ${id}`;
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.send({success: true, message: "Donor deleted successfully"});
                    dbConn.close();
                    // res.send(recordset);
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

app.get('/getRecipients', async (req, res) => {
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query("Select * from Recipients", function (err, recordset) {
                if (err) {
                    res.status(500);
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.status(200);
                    res.send(recordset);
                    dbConn.close();
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

app.post('/addRecipient', async (req, res) => {
    var { id, Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, Reason, DeadlineDate,Messagesent,Noofdonorsfound } = req.body;
    console.log(DeadlineDate)
    const newDate1=DeadlineDate.split("T")[0]
    const newDate2=new Date(newDate1)
    const newDate3=`${newDate2.getMonth()<10?"0".concat(newDate2.getMonth()):newDate2.getMonth()}/${newDate2.getDate()<10?"0".concat(newDate2.getDate()):newDate2.getDate()}/${newDate2.getFullYear()}`
    //const newTime=DeadlineDate.split("T")[1].substring(0,8)
    
    var query = `INSERT INTO Recipients (Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, Reason, Date ,Messagesent,Noofdonorsfound) VALUES ('${Name}', ${Age}, ${Phoneno}, '${Gender}', '${Bloodgroup}', '${Email}', '${Address}', '${Type}', '${Reason}', '${newDate3}', 'No', 0)`;
    console.log(query);
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.status(200);
                    res.send({success: true, message: "Recipient added successfully"});
                    dbConn.close();
                    // res.send(recordset);
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

// app.get('/getRecipient/:id', async (req, res) => {
//     var id = req.params.id;
//     var query = `SELECT * FROM Recipients WHERE id=${id};`
//     try {
//         console.log("Trying to connect to database");
//             let dbConn = await sql.connect(config);
//             console.log("Connected to database");
//             var request = new sql.Request(dbConn);
//             request.query(query, function (err, recordset) {
//                 if (err) {
//                     console.log(err);
//                     dbConn.close();
//                 }
//                 else {
//                     res.send(recordset);
//                     dbConn.close();
//                 }
//             });
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// })

app.post('/updateRecipient/:id', async (req, res) => {
    var { Name, Age, Phoneno, Gender, Bloodgroup, Email, Address, Type, Reason, Date } = req.body;
    var query = `UPDATE Donors SET Name = ${Name}, Age = ${Age}, Phoneno = ${Phoneno}, Gender = ${Gender}, Bloodgroup = ${Bloodgroup}, Email = ${Email}, Address = ${Address}, Type = ${Type}, Reason = ${Reason}, Date=${Date} WHERE id = ${id}`;
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.send({success: true, message: "Donor updated successfully"});
                    dbConn.close();
                    // res.send(recordset);
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

app.post('/deleteRecipient/:id', async (req, res) => {
    var id = req.params.id;
    var query = `DELETE FROM Recipients WHERE id = ${id}`;
    try {
        console.log("Trying to connect to database");
            let dbConn = await sql.connect(config);
            console.log("Connected to database");
            var request = new sql.Request(dbConn);
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log(err);
                    dbConn.close();
                }
                else {
                    res.send({success: true, message: "Recipient deleted successfully"});
                    dbConn.close();
                    // res.send(recordset);
                }
            });
    }
    catch (error) {
        console.log(error.message);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
