import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import * as Session from './Session'

class Main extends Component {
    exit = () => {
        console.log(Session.getUser());
        Session.setUser(null);
        this.props.history.push('/login');
    }

    render() { 
        if(Session.getUser() === null && this.props.location.pathname !== '/login'){
            return <Redirect to="/Login" />
        }

        return Session.getUser() && 
            ( 
                <div>
                    <button onClick={this.exit}>exit</button>
                </div> 
            );
    }
}
 
export default withRouter(Main);