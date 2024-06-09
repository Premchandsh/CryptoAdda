import React, { useContext } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.svg'
import arrowIcon from '../../assets/up-right-arrow.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch(event.target.value){
      case "usd" : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur" : {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "inr" : {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={Logo} alt="Crypto Adda logo" className='logo'/>
      </Link>

        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/learn'}><li>Learn</li></Link>
            <Link to={'/pricing'}><li>Pricing</li></Link>
        </ul>

        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <Link to='/signup'><button><span>Sign up <i class="bi bi-arrow-up-right"></i></span></button></Link>
        </div>
    </div>
  )
}

// https://youtu.be/jZFaMEqEqEQ?si=7aTfWpbeZ29Vfowj&t=3917

export default Navbar