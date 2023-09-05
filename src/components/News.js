import React from 'react'
import { Col, Row } from 'antd';
import Latestnews from './Latestnews';
import arr from './Api';
const convertToTrillion = number => (number / 1e12).toFixed(2) + " Trillion";
const convertToBillion = number => (number / 1e9).toFixed(2) + " Billion";

var arr2 = arr.stats;
    var total = arr2.totalCoins;
    var  marketCap = convertToTrillion(arr2.totalMarketCap);
    var exchange = arr2.totalExchanges;
    var market = arr2.totalMarkets;
    var vol = convertToBillion(arr2.total24hVolume);
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
