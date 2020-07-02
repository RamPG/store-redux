import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import {CartPage, HomePage} from '../pages';

const App = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage}/>
            <Route path='/cart' component={CartPage}/>
            <Route render={() => <h2>Page not found</h2>}/>
        </Switch>
    );
};

export default App;