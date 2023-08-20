import React from 'react'
import { useParams } from 'react-router-dom';
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
	console.log(arr);
 
  function che (yoyo) 
  {
    console.log("i am called");
   
  var object = {name : "" , price : "" , img: ""};
    arr.filter(function(x)
    {
      
      if(yoyo === x.uuid )
      {
        object.name = x.name;
        object.price = x.price;
       object.img = x.iconUrl
        console.log(object.img);

        return object;
      }
      
      return object;
    });
    return object;
  }
  

const Coinsinfo = () => {
 
 var { id } = useParams(); //giving the id of the clicked coin
 var object2 = che(id);

  return (
    <div>
      <br />
      <img className='Coininfoimg' alt={object2.name} src={object2.img} /> 
    <h2> Name:  {object2.name} </h2>
    <h2> Price  {object2.price}</h2>
    {/* add all the necessary information */}
    
    </div>
  )
}

export default Coinsinfo