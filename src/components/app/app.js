import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import {CartPage, HomePage} from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage}/>
                <Route render={() => <h2>Page not found</h2>}/>
            </Switch>
        </main>

    );
};

export default App;