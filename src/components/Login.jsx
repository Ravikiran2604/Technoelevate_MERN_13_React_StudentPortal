import { Button } from 'react-bootstrap';
import React from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/loginContext';

export default function Login() {
    const context = useContext(LoginContext);
    const history = useHistory();

    const login =()=>{
        console.log(context);
        context.changeLogin(true);
        history.push("/")
    }
    return (
        <div>
            <h1 className="logh1">Login Here</h1>

            <Button  type="button" className="btn btn-info btn-lg logbtn" onClick={login}>
             Login
            </Button>
        </div>
    )
}
