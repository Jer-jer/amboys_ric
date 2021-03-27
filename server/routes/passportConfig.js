const localStrategy = require('passport-local').Strategy
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ricsystem",
    multipleStatements: true
})

module.exports = (passport) => {
    passport.use(
        'local-login',
        new localStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            (req, email, password, done) => {
                db.query(
                    "SELECT * FROM employee WHERE employeeEmail = ?;",
                    [email],
                    (err, user) => {
                        if (err) throw (err)

                        if (!user.length) return done(null, false)

                        if ((user[0].employeePassword == password)) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: "Wrong email/password" })

                        }
                        // if (result.length > 0) {
                        //     // user = result
                        //     req.session.user = result
                        //     console.log(req.session.user)
                        //     res.send(result)
                        // } else {
                        //     res.send({ message: "Wrong username/password" });
                        // }

                    }
                )
            })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user[0].employeeID)
    })

    passport.deserializeUser((id, cb) => {
        db.query("SELECT * from employee WHERE employeeID = ?;",
            [id],
            (err, result) => {
                if (err) throw err
                cb(err, result[0])
            })
    })
}