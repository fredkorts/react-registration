const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

// Use this for hashing the user password
const bcrypt = require("bcrypt");
const saltRounds = 10;

// MySQL connection config
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "authentication"
});

// Cors for cross-domain data sharing
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001, () => {
    console.log("Running server...")
})

// Check if a user with this email exists.
const uniqueUser = (email) => {

    let uuser = false;

    db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                uuser = true;
            } else {
                uuser = false;
            }
        }
    })

    return uuser;
}

// Check e-mail validity.
const validateEmail = (email) => {
    let emailValidity = false;
    let errorMessages = [];
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (uniqueUser(email)) {
        errorMessages.push("An account with this email already exists.")
        return errorMessages;
    }

    // Check if the email is in a valid format.
    if (email.match(mailFormat)) {
        emailValidity = true;
    } else {
        emailValidity = false;
        errorMessages.push("Make sure that you are using a valid email.")
    }

    if (emailValidity === true) {
        return true;
    } else {
        return errorMessages;
    }
}

// Insert user into DB.
app.post('/register', (req, res) => {

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const password = req.body.password
    const email = req.body.email

    const fieldValidation = validateEmail(email);

    if (fieldValidation === true) {
        bcrypt.hash(password, saltRounds, (err, hash) => {

            if (err) {
                console.log(err);
            }
    
            db.query("INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)", 
            [firstname, lastname, email, hash], 
            (err, result) => {
                console.log(err)
            })
        })
    } else {
        res.send({ message: fieldValidation})
    }
})

// Login user
app.post('/login', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM users WHERE email = ?;", 
    email, 
    (err, result) => {
        if (err) {
            res.send({err: err})
        } 

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) {
                    res.send(result);
                } else {
                    res.send({ message: "Wrong email/password combination!"})
                }
            })
        } else {
            res.send({message: "User doesn't exist!"});
        }
    })
})