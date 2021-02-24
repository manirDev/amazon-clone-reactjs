import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const [{basket, user}]=useStateValue();
    const login=()=>{
        if (user) {
            auth.signOut();
        }
    };

    return (
        <nav className="header">
            {/*logo on the left-> img */}
            <Link to="/">
                <img className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""/>
            </Link>
            {/* search box */}
            <div className="header_search">
                 <input type="text" className="header_searchInput"/>
                 <SearchIcon className="header_searchIcon" />
            </div>
            
            {/* three links */}
            <div className="header_nav">
                {/* 1st link */}
                <Link   to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLine1">Hello {user?.email}</span>
                        <span className="header_optionLine2">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Returns</span>
                        <span className="header_optionLine2">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Your</span>
                        <span className="header_optionLine2">Prime</span>
                    </div>
                </Link>
            </div>
            {/*basket icon with a number */}
            <Link className="header_link" to="/checkout">
                <div className="header_optionBasket">
                    {/*shopping Basket icon */}
                    <ShoppingBasketIcon />
                    {/*basket number of items */}
                    <span className="header_optionLine2 header_basketCount">
                        {basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
