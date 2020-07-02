import React from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';

class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map((book) => <BookListItem book={book}/>)
                }
            </ul>
        );
    }
}