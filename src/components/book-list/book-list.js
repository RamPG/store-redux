import React from 'react';
import {connect} from 'react-redux';

import BookListItem from '../book-list-item';
import {withBookService} from '../hoc/index';
import {booksLoaded} from '../../actions';

import './book-list.css';

class BookList extends React.Component {

    componentDidMount() {
        const data = this.props.bookService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        return (
            <ul className="book-list">
                {
                    this.props.books.map((book) =>
                        <li key={book.id}>
                            <BookListItem book={book}/>
                        </li>
                    )
                }
            </ul>
        );
    }
}

const mapDispatchToProps = {
    booksLoaded
};
const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};
export default withBookService(connect(mapStateToProps, mapDispatchToProps)(BookList));