import React from 'react';
import {connect} from 'react-redux';

import BookListItem from '../book-list-item';
import {withBookService} from '../hoc/index';
import {booksError, booksLoaded, booksRequested} from '../../actions';

import './book-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

class BookList extends React.Component {

    componentDidMount() {
        const {bookService, booksLoaded, booksError, booksRequested} = this.props;
        booksRequested();
        bookService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }
        return (
            <ul className="book-list">
                {
                    books.map((book) =>
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
    booksLoaded,
    booksError,
    booksRequested
};
const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};
export default withBookService(connect(mapStateToProps, mapDispatchToProps)(BookList));