import React from 'react';
import {connect} from 'react-redux';

import BookListItem from '../book-list-item';
import {withBookService} from '../hoc/index';
import {bookAddedToCart, fetchBooks} from '../../actions';

import './book-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }
        return <BookList books={books} onAddedToCart={onAddedToCart}/>;
    }
}

const BookList = ({onAddedToCart, books}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) =>
                    <li key={book.id}>
                        <BookListItem onAddedToCart={onAddedToCart} book={book}/>
                    </li>
                )
            }
        </ul>
    );
};

const mapDispatchToProps = (dispatch, {bookService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};
const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};
export default withBookService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));