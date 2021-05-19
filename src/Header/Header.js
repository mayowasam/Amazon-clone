import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateVal} from '../StateProvider'
import './Header.css'
import {auth} from '../firebase/Firebase'
import AmazonLogo from '../images/amazon logo.png'



function Header() {

const [{basket,user}] = useStateVal()
const ToggleLogin = () =>{
    auth.signOut();
}

    return (
        <nav className='header' >

            {/* amazon image */}
            <Link to='/'>
                <img className="header__logo"
                    src={AmazonLogo}
                    alt='amazon logo'
                />
            </Link>


            {/* input field */}

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 3 links */}

            <div className="header__Nav">
                <Link to={!user && "/login"} className="header__link" >
                    <div className="header__options" onClick={ToggleLogin}>
                        <span className="header__optionlineOne">Hello {user?.email}</span><br />
                        <span className="header__optionlineTwo">{user ? 'Signout': 'Signin'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionlineOne">Returns</span><br />
                        <span className="header__optionlineTwo"> & Order</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionlineOne">Your</span><br />
                        <span className="header__optionlineTwo">Prime</span>
                    </div>
                </Link>
            </div>



            {/* basket icons */}

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className='header__basketCount'>{basket.length}</span>
                </div>
            </Link>



        </nav>
    )
}

export default Header
