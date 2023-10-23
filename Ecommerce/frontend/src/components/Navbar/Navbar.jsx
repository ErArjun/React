import React, { useState,useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'


export const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:null}</li>
        </ul>
        <div className='nav-login-cart'> 
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'> <img src={cart_icon} alt='cart'/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}