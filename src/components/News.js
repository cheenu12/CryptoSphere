import React from 'react'
import { Col, Row } from 'antd';
import Latestnews from './Latestnews';

const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e7aa6cb4f4msha003796ba1c786ep185107jsn23560cfa2098',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const convertToTrillion = number => (number / 1e12).toFixed(2) + " Trillion";
const convertToBillion = number => (number / 1e9).toFixed(2) + " Billion";

const response = await fetch(url, options);
	const result = await response.text();
    const data = JSON.parse(result); 
    var arr= data.data.stats;
	console.log(arr);
    var total = arr.totalCoins;
    var  marketCap = convertToTrillion(arr.totalMarketCap);
    var exchange = arr.totalExchanges;
    var market = arr.totalMarkets;
    var vol = convertToBillion(arr.total24hVolume);
const News = () => {
  return (
    <div>
      <h1 className='navOfNews'> Latest News
      <hr />
          </h1>
         
      <Row>
      <Col className='global ' xs={24} sm={24} md={8} lg={8} xl={8}>
<h1> Global Crypto Stats : </ h1>
  <h3 className='stats'>Total Cryptocurrencies : </h3>
  <p className='globalData'> {total}</p>
  <h3 className='stats'>Total Market Caps:  </h3>
  <p className='globalData'> $ {marketCap}</p>
  <h3 className='stats'>Total Exchange: </h3>
  <p className='globalData'> {exchange}</p>
  <h3 className='stats'>Total Markets: </h3>
  <p className='globalData'>{market}</p>
  <h3 className='stats'>Total 24/hr Vol : </h3>
  <p className='globalData'> $ {vol}</p>
  
 
      
      </Col>
   
      <Col className='news'  xs={24} sm={24} md={16} lg={15} xl={15}>
      <Latestnews />
      </Col>

  
    </Row>
     
    </div>
  )
}

export default News
