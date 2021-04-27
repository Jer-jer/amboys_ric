const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const nanoid = require("nanoid")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")
const flash = require("connect-flash")
const logOut = require('express-passport-logout')

const app = express()
const saltRounds = 10 //For encryption
var user //For holding the user or sentinel

app.use(express.json())
app.use(cookieParser("infoman2"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(flash())
app.use(cors({
    origin: ("http://localhost:3000"),
    methods: ("GET", "POST", "DELETE"),
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId']

}))
app.use(session({
    key: "user",
    secret: "infoman2",
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //     expires: 60 * 60 * 24, TANG INA MO
    //     secure: true
    // },
}))
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ricsystem",
    multipleStatements: true
})

//=========================== MIDDLEWARE DONE ===========================//

//Employee Routes
app.post('/register', (req, res) => {
    const empID = req.body.empID;
    const empLname = req.body.empLname.toUpperCase();
    const empFname = req.body.empFname.toUpperCase();
    const empEmail = req.body.empEmail;
    const empPass = req.body.empPass;
    const contact = req.body.contact;
    const job = req.body.job.toLowerCase();

    db.query("INSERT INTO employee (employeeID, employeeLname, employeeFname, employeeEmail, employeePassword, contactNo, jobTitle) VALUES (?,?,?,?,?,?,?)",
        [empID, empLname, empFname, empEmail, empPass, contact, job],
        (err, result) => {
            if (err) throw err
            res.send(result)
        })
})

app.post('/login', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    passport.authenticate('local-login', (err, user, info) => {
        if (err) throw err
        if(!user){
            if(!info){
                res.send("No such employee exists")
            }else{
                res.send(info)
            }
        }else{
            req.logIn(user, err => {
                if (err) throw err
                res.send('Successfully Authenticated')
                // console.log(req.user[0])
            })
        }
    })(req, res, next)
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    db.query("DELETE FROM employee WHERE employeeID = ?", id, (err, result) => {
            if (err) throw err
            res.send(result)
        }
    )

})

app.get('/users', (req, res) => {
    db.query("SELECT * FROM employee;",
        (err, result) => {
            if (err) throw err
            res.send(result)
    })
})

app.get('/user', (req, res) => {
    res.send(req.user)
})

app.get('/logout', (req, res) => {
    req.logout()
    res.send("success")
})

//Inventory Routes
app.post('/add_inventory', (req, res) => {
    const prodID = req.body.prodID;
    const prodName = req.body.prodName.toUpperCase();
    const prodQuant = req.body.prodQuant;
    const prodPrice = req.body.prodPrice;
    const prodStats = req.body.prodStats;

    db.query("INSERT INTO products VALUES (?,?,?,?,?)",
        [prodID, prodName, prodQuant, prodPrice, prodStats],
        (err, result) => {
            if (err) throw err
            res.send(result)
        })
})

app.get('/inventories', (req, res) => {
    db.query("SELECT * FROM products;",
        (err, result) => {
            if (err) throw err
            res.send(result)
    })
})

app.delete('/delete_inventory/:id', (req, res) => {
    const id = req.params.id

    db.query("DELETE FROM products WHERE productID = ?", id, (err, result) => {
            if (err) throw err
            res.send(result)
        }
    )

})

//Start Server
app.listen(3001, () => {
    console.log("Running on port 3001")
})

