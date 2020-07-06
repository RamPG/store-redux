import React from 'react';
import './book-list-item.css';

const BookListItem = (props) => {
    const {onAddedToCart, book: {id, title, author, price, coverImage}} = props;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button
                    onClick={() => onAddedToCart(id)}
                    className="btn btn-info add-to-cart">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BookListItem;
