const updateCartItems = (state, id, quantity) => {
    const {shoppingCart: {cartItems}, bookList: {books}} = state;
    const cartItemId = cartItems.findIndex((element) => element.id === id);
    const book = books.find((element) => element.id === id);
    if (cartItemId === -1) {
        return [
            ...cartItems,
            {
                id: book.id,
                name: book.title,
                count: 1,
                total: book.price
            }
        ];
    }
    const cartItem = cartItems[cartItemId];
    if (cartItem.count + quantity === 0) {
        return [
            ...cartItems.slice(0, cartItemId),
            ...cartItems.slice(cartItemId + 1)
        ];
    }
    return [
        ...cartItems.slice(0, cartItemId),
        {
            ...cartItems[cartItemId],
            count: cartItem.count + quantity,
            total: cartItem.total + book.price * quantity
        },
        ...cartItems.slice(cartItemId + 1)
    ];
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return {
                orderTotal: 0,
                cartItems: updateCartItems(state, action.payload, 1)
            };
        case 'BOOK_INCREASE':
            return {
                orderTotal: 0,
                cartItems: updateCartItems(state, action.payload, 1)
            };
        case 'BOOK_DECREASE':
            return {
                orderTotal: 0,
                cartItems: updateCartItems(state, action.payload, -1)
            };
        case 'BOOK_DELETE':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return {
                orderTotal: 0,
                cartItems: updateCartItems(state, action.payload, -item.count)
            };
        default:
            return state.shoppingCart;
    }

};

export default updateShoppingCart;