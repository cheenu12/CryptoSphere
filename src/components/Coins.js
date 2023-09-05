// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col ,Row} from 'antd';
import '../App.css';
import arr from './Api';

const convertToBillion = number => (number / 1e9).toFixed(2) + " Billion";

    var arr2= arr.coins;

  const firstTenItems = arr2.slice(0, 10);


// const cardStyle = {
//   textAlign: 'center',
//   color:'blue' ,
// };

const Coins = (props) => {
  return (


    <>
    <div className=' crypto-card-container' >    
    <div className='tophead'>
         <h1 className='topCurr'>Top-Ranked 10 Crypto Assets</h1>
         </div>
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
                <span className='cardInfo1' > Rank :</span> <span className='cardInfo'>{item.rank}</span>  
                <br/>
                < span className='cardInfo1'>Price : </span> <span className='cardInfo'>$‎ {Math.floor(item.price * 100) / 100} </span> 
                <br/>
                <span className='cardInfo1'> Symbol :</span>   <span className='cardInfo'>{item.symbol}</span>
                <br/>
                
                <span className='cardInfo1'> Market cap : </span> <span className='cardInfo'> {convertToBillion(item.marketCap)}</span>


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