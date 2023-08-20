// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col ,Row} from 'antd';
import '../App.css'
const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e7aa6cb4f4msha003796ba1c786ep185107jsn23560cfa2098',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};


const response = await fetch(url, options);
	const result = await response.text();
    const data = JSON.parse(result); 
    var arr= data.data.coins;
	console.log(data);
  const firstTenItems = arr.slice(0, 10);
console.log(firstTenItems);

// const cardStyle = {
//   textAlign: 'center',
//   color:'blue' ,
// };

const Coins = (props) => {
  return (


    <>
    <div className=' crypto-card-container' >    
         <h1 className='topCurr'> Top 10 Cryptocurrencies</h1>
     <Row gutter={[32, 32]} className="crypto-card-container , homepadd">
     <br/>
      {firstTenItems.map(item => 
 
      (
     
<Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={item.uuid}
          >
        {/* <Temp key={item.uuid} rank={item.rank} name={item.name} data={item.price} /> */}
  
        <Link  key={item.uuid} to={`coinsinfo/${item.uuid}`}>
              <Card className='cardyo' 
                title={ item.name}
                extra={<img alt='none' className="crypto-image" src={item.iconUrl} />}
                hoverable
              >
                <p className='cardInfo'> Rank :  {item.rank} </p>
                <p className='cardInfo'> Symbol : {item.symbol}</p>
                < p className='cardInfo'>Price in USD : {Math.floor(item.price * 100) / 100}</p>
                <p className='cardInfo'> Market cap : {item.marketCap}</p>


              </Card>
            </Link>
    
        </Col>
        
        ))}
  
  </Row>
  </div>
    </>
  )
}

export default Coins;