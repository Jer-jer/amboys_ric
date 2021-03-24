import React, { useState, useEffect } from 'react';
import FormControl from './form_control';
import { Button } from '@material-ui/core';
import Axios from 'axios';

function Form(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const logIn = () => {
        Axios.post("http://localhost:3001/loggingin", {
            email: email,
            password: password
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus(response.data[0].employeeLname);
            }
        });
    }

    return (
        <form>
            <FormControl type="email" label="Email Address" handle={handleEmail}/>
            <br />
            <FormControl type="password" label="Password" handle={handlePassword}/>
            <br />
            <Button variant="contained" color="primary" onClick={logIn}>Submit</Button>
            <h1>{loginStatus}</h1>
        </form>
    );
}

export default Form;