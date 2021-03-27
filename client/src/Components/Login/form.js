import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

//Custom imports
import Home from '../Home/home';
import FormControl from './form_control';

export default function Form() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // This is to store the user object
    // const [user, setUser] = useState(null);

    const [loginStatus, setLoginStatus] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    //This is for register soon
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
            if(res.data.message){
                setLoginStatus(res.data.message);
            }else if(res.data == "No such employee exists"){
                setLoginStatus(res.data)
            }else{
                history.push('/');
            }
        })
     };

    return (
        <form onSubmit={login}>
            <FormControl type="email" label="Email Address" handle={handleEmail} />
            <br />
            <FormControl type="password" label="Password" handle={handlePassword} />
            <br />
            <Button variant="contained" color="primary" onClick={login}>Submit</Button>
            <br />
            {(loginStatus) ? <h3>{loginStatus}</h3> : null}
        </form>
    );
}
