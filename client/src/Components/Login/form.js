import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Axios from 'axios';

//Custom imports
import Home from '../Home/home';
import FormControl from './form_control';

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // This is a sentinel if a user is logged in
    const [userID, setUserID] = useState(0);

    const [loginStatus, setLoginStatus] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    Axios.default.withCredentials = true;

    //This is for register soon
    // const register = () => {
    //     Axios.post("http://localhost:3001/register", {
    //         empID: empID,
    //         empLname: empLname,
    //         empFname: empFname,
    //         empEmail: empEmail,
    //         empPass: empPass,
    //         contact: contact,
    //         job: job
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };

    const logIn = () => {
        Axios.post("http://localhost:3001/loggingin", {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].employeeLname);
                // setUserID(response.data[0].employeeID);
                // Home(userID);
            }
        });
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/loggingin").then((response) => {
            if(response.data.loggedIn == true){
                setLoginStatus(response.data.user[0].employeeLname);
            }
        })
    }, [])

    return (
        <form>
            <FormControl type="email" label="Email Address" handle={handleEmail} />
            <br />
            <FormControl type="password" label="Password" handle={handlePassword} />
            <br />
            <Button variant="contained" color="primary" onClick={logIn}>Submit</Button>
            <h1>{loginStatus}</h1>
        </form>
    );
}

export default Form;