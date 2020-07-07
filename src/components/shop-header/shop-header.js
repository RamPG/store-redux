import React from 'react';
import {connect} from 'react-redux';

import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ priceTotal, countTotal }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {countTotal} items (${priceTotal})
                </div>
            </Link>
        </header>
    );
};
const mapStateToProps = ({shoppingCart: {priceTotal, countTotal}}) => {
    return {
        priceTotal,
        countTotal
    }
}
export default connect(mapStateToProps)(ShopHeader);
