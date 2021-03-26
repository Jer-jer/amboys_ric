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
    const [user, setUser] = useState(null);

    const [loginStatus, setLoginStatus] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // Axios.defaults.withCredentials = true;

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

    // const logIn = () => {
    //     Axios.post("http://localhost:3001/login",
    //         {
    //             email: email,
    //             password: password
    //         },
    //         {
    //             withCredentials: true,
    //             crossorigin: true
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then((response) => {
    //             if (response.data.message) {
    //                 setLoginStatus(response.data.message);
    //             } else {
    //                 setLoginStatus(response.data[0].employeeLname);
    //                 // setUserID(response.data[0].employeeID);
    //                 // Home(userID);
    //             }
    //         });
    // }
    const get = () => { 
        Axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:3001/user",
        })
        .then(res => {
            console.log(res);
        })
    };
    const login = () => { 
        Axios({
            method: 'POST',
            data: {
                email: email,
                password: password
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
        })
        .then((res) => {
            console.log(res);
            // setUser(res.data);
        })
     };
    // const reg = () => {
    //     Axios({
    //         method: 'POST',
    //         data: {
    //             empID: empID,
    //             empLname: empLname,
    //             empFname: empFname,
    //             empEmail: empEmail,
    //             empPass: empPass,
    //             contact: contact,
    //             job: job
    //         },
    //         withCredentials: true,
    //         url: "http://localhost:3001/register",
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    // };

    // useEffect(() => {
    //     Axios({
    //         method: 'GET',
    //         withCredentials: true,
    //         url: "http://localhost:3001/user",
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //     })
    // }, []);

    return (
        <form onSubmit={login}>
            <FormControl type="email" label="Email Address" handle={handleEmail} />
            <br />
            <FormControl type="password" label="Password" handle={handlePassword} />
            <br />
            <Button variant="contained" color="primary" onClick={login}>Submit</Button>
            <Button variant="contained" color='primary' onClick={get}>Get User</Button>
        </form>
    );
}

export default Form;