const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_LOADED',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_ERROR',
        payload: error
    };
};
const fetchBooks = (dispatch, bookService) => () => {
    dispatch(booksRequested());
    bookService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};
const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};
export {
    fetchBooks,
    bookAddedToCart
};
