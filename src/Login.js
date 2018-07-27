import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import * as Session from './Session'


class Login extends Component {
    enter = () => {
        Session.setUser('tae');
        this.props.history.push('/home');
    }
    render() { 
        if(Session.getUser() !== null){
            return <Redirect to="/home" />
        }
        return (
            <div>
                <h1>Login</h1>
                <button onClick={this.enter}>enter</button>
            </div> 
        );
    }
}
 
export default Login   ;