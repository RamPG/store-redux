import React from 'react';

import './app.css';

import BookstoreService from '../../services/bookstore-service';
import ErrorBoundry from '../error-boundry';
import {BookServiceProvider} from '../bookstore-service-context';
import ErrorIndicator from '../error-indicator/error-indicator';

const App = () => {
    const bookService = new BookstoreService();
    return (
        <ErrorBoundry>
            <BookServiceProvider value={bookService}>
                <ErrorIndicator/>
            </BookServiceProvider>
        </ErrorBoundry>
    );
};

export default App;