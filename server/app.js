const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const nanoid =  require("nanoid")

const app = express()
const body = bodyParser

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ricsystem",
    multipleStatements: true
})

app.post('/register', (req, res) => {
    db.query("INSERT INTO employee (employeeLname, employeeFname, employeeEmail, employeePassword, contactNo, jobTitle) VALUES (?,?,?,?)",
        [empLname, empFname, empEmail, empPassword, contact, job],
        (err, result) => {
            if (err) throw err
        })
})

app.post('/loggingin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM employee WHERE employeeEmail = ? AND employeePassword = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/passowrd" });
            }

        })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})
