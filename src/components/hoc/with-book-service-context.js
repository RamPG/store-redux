import React from 'react';
import {BookServiceConsumer} from '../bookstore-service-context';

const withBookService = (View) => {
    return (props) => {
        return (
            <BookServiceConsumer>
                {
                    (bookService) => {
                        return <View {...props} bookService={bookService}/>;
                    }
                }
            </BookServiceConsumer>
        );
    };
};

export default withBookService;