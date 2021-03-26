const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const nanoid = require("nanoid")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const flash = require("connect-flash")

const app = express()
const saltRounds = 10 //For encryption
var user //For holding the user or sentinel

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(cors({
    origin: ("http://localhost:3000"),
    methods: ("GET", "POST"),
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId']

}))
app.use(session({
    key: "userID",
    secret: "infoman2",
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 60 * 60 * 24,
        secure: true
    },
}))
app.use(cookieParser("infoman2"))
app.use(passport.initialize());
app.use(passport.session());
require("./routes/passportConfig")(passport)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ricsystem",
    multipleStatements: true
})

//=========================== MIDDLEWARE DONE ===========================//

//Routes
app.post('/register', (req, res) => {
    const empID = req.body.empID;
    const empLname = req.body.empLname;
    const empFname = req.body.empFname;
    const empEmail = req.body.empEmail;
    const empPass = req.body.empPass;
    const contact = req.body.contact;
    const job = req.body.job;

    toLowerCase(job);

    // with encryption
    // bcrypt.hash(empPass, saltRounds, (err, hash) => {
    //     if (err) throw err

    //     db.query("INSERT INTO employee (employeeID, employeeLname, employeeFname, employeeEmail, employeePassword, contactNo, jobTitle) VALUES (?,?,?,?,?)",
    //         [empID, empLname, empFname, empEmail, hash, contact, job],
    //         (err, result) => {
    //             if (err) throw err
    //         })

    // })

    db.query("INSERT INTO employee (employeeID, employeeLname, employeeFname, employeeEmail, employeePassword, contactNo, jobTitle) VALUES (?,?,?,?,?)",
        [empID, empLname, empFname, empEmail, empPass, contact, job],
        (err, result) => {
            if (err) throw err
        })
})

app.post('/login', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    passport.authenticate('local-login', (err, user, info) => {
        if (err) throw err

        if(!user){
            res.send("No such employee exists")
        }else{
            req.logIn(user, err => {
                if (err) throw err
                res.send('Successfully Authenticated')
                // console.log(req.user[0])
            })
        }
    })(req, res, next)


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

    // db.query(
    //     "SELECT * FROM employee WHERE employeeEmail = ? AND employeePassword = ?;",
    //     [email, password],
    //     (err, result) => {
    //         if (err) {
    //             res.send({ err: err });
    //         }

    //         if (result.length > 0) {
    //             // user = result
    //             req.session.user = result
    //             console.log(req.session.user)
    //             res.send(result)
    //         } else {
    //             res.send({ message: "Wrong username/password" });
    //         }

    //     }
    // )
})

app.get('/user', (req, res) => {
    res.send(req.user)
    // if (req.session.user != undefined) {
    //     // req.session.user = user
    //     console.log("Logged in")
    //     res.send({ loggedIn: true, user: req.session.user })
    // } else {
    //     console.log("Not Logged in")
    //     res.send({ loggedIn: false })
    // }
})

//Start Server
app.listen(3001, () => {
    console.log("Running on port 3001")
})

