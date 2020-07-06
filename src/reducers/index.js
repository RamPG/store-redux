const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const cartItemId = state.cartItems.findIndex((element) => element.id === action.payload);
            if (cartItemId === -1) {
                const book = state.books.find((element) => element.id === action.payload);
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        {
                            id: book.id,
                            name: book.title,
                            count: 1,
                            total: book.price
                        }
                    ]
                };
            } else {
                const item = {
                    ...state.cartItems[cartItemId],
                    count: state.cartItems[cartItemId].count + 1
                };
                console.log(state);
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, cartItemId),
                        item,
                        ...state.cartItems.slice(cartItemId + 1)
                    ]
                };

            }
        default:
            return state;
    }
};

export default reducer;
