import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

function Coin() {
  const {coinId} = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }


  const fetchHistoricalData = async () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }


  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency])

  
  if(coinData && historicalData){
    return (
      <div className='coin'>
          <div className="coin-name">
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>

            <div className='crypto-price-info'>
              <span className='current-crypto-price'>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</span>

              <span className={coinData.market_data.price_change_percentage_24h>0 ? "green" : "red"}>
                
              {coinData.market_data.price_change_percentage_24h>0 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}&nbsp;&nbsp;
                {Math.floor(coinData.market_data.price_change_percentage_24h*100)/100}% (1d)
                
              </span>
            </div>


          </div>

          <div className="coin-chart">
            <LineChart historicalData={historicalData}/>
          </div>

          <div className="coin-info">
            <ul>
              <li>Crypto market rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>

            <ul>
              <li>Current price</li>
              <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>

            <ul>
              <li>Market cap</li>
              <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>

            <ul>
              <li>24 Hour High</li>
              <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>

            <ul>
              <li>24 Hour Low</li>
              <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
            </ul>
          </div>
      </div>
    )
  } else{
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    )
    }
}


export default Coin