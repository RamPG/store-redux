import React from 'react';

import './error-indicator.css';

import withBookServiceContext from '../hoc/with-book-service-context';

const ErrorIndicator = (props) => {
    console.log(props);
    return (
        <div className="error-indicator">
            <span>Something has gone wrong!</span>
            <span>{props.getBooks()}</span>
        </div>
    );
};

export default withBookServiceContext(ErrorIndicator);