import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BooksService from './services/book-service';
import {BookServiceProvider} from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BooksService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));