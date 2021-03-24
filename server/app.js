const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const nanoid = require("nanoid")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express()
const saltRounds = 10 //For encryption

app.use(express.json())
app.use(cors({
    origin: ("http://localhost:3000"),
    methods: ("GET", "POST"),
    credentials: true,

}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
    key: "userID",
    secret: "infoman2",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ricsystem",
    multipleStatements: true
})

app.post('/register', (req, res) => {
    const empID = req.body.empID;
    const empLname = req.body.empLname;
    const empFname = req.body.empFname;
    const empEmail = req.body.empEmail;
    const empPass = req.body.empPass;
    const contact = req.body.contact;
    const job = req.body.job;

    toLowerCase(job);

    bcrypt.hash(empPass, saltRounds, (err, hash) => {
        if (err) throw err

        db.query("INSERT INTO employee (employeeID, employeeLname, employeeFname, employeeEmail, employeePassword, contactNo, jobTitle) VALUES (?,?,?,?,?)",
            [empID, empLname, empFname, empEmail, hash, contact, job],
            (err, result) => {
                if (err) throw err
            })

    })
})

app.get('/loggingin', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

app.post('/loggingin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // FOR BCRYPT ENCRYPTION
    // db.query(
    //     "SELECT * FROM employee WHERE employeeEmail = ?;",
    //     email,
    //     (err, result) => {
    //         if (err) {
    //             res.send({err: err});
    //         }

    //         if (result.length > 0) {
    //             bycrypt.compare(password, result[0].password, (err, response) => {
    //                 if(reponse){
    //                     res.send(result);
    //                 }else{
    //                     res.send({ message: "Wrong username/passowrd" });
    //                 }
    //             });
    //         } else {
    //             res.send({ message: "User doesn't exist" });
    //         }
    // })

    db.query(
        "SELECT * FROM employee WHERE employeeEmail = ? AND employeePassword = ?;",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                req.session.user = result
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password" });
            }

        })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})
