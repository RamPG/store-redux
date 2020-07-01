import React from 'react';
import {BookServiceConsumer} from '../bookstore-service-context';

const withBookServiceContext = (View) => {
    return (props) => {
        return (
            <BookServiceConsumer>
                {
                    (bookService) => {
                        return <View {...props} getBooks={bookService.getBooks}/>;
                    }
                }
            </BookServiceConsumer>
        );
    };
};

export default withBookServiceContext;