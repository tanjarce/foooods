import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Catalog from './ContentSub/Catalog';
import Calendar from './ContentSub/Calendar';

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
            <Route path="/catalog" component={Catalog} />
            <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    )
  }
}
