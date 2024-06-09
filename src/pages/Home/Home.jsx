import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';

function Home() {
  const {allCoins, currency} = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [input, setInput] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value);
    if(event.target.value === ''){
      setDisplayCoins(allCoins);
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    });
    setDisplayCoins(coins);
  }

  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins])


  return (
    <div className='home'>
        <div className="hero">
          <h1>India's Largest <br /> Crypto Marketplace</h1>
          <p>Welcome to india's largest cryptocurrency marketplace. Sign up to explore the world of cryptocurrency.</p>

          <form onSubmit={searchHandler}>

            <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='Search for crypto ...' required/>

            <datalist id='coinlist'>
              {allCoins.map((item, index) => (
              <option key={index} value={item.name} />
              ))}
            </datalist>


            <button type="submit">Search&nbsp;&nbsp;<i class="bi bi-search"></i></button>
          </form>
        </div>

        <div className="crypto-table">
          <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className='oneday_change'>24H Change</p>
            <p className='market-cap'>Market cap</p>
          </div>

          {
            displayCoins.slice(0, 10).map((item, index) => (
              <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image}/>
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                  {Math.floor(item.price_change_percentage_24h * 100)/100} % &nbsp; &nbsp;
                  {item.price_change_percentage_24h > 0 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
                </p>
                <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
              </Link>
            ))
          }
        </div>
    </div>
  )
}


// CG-3dDJsfguJNMxKN2SCRqtmonC

export default Home