import React from 'react'
import { useParams } from 'react-router-dom';
import arr from '../components/Api';

var arr2 = arr.coins;
 
  function che (yoyo) 
  {
    console.log("i am called");
   
  var object = {name : "" , price : "" , img: ""};
    arr2.filter(function(x)
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
    <h2 className='coininfo'> Name:  {object2.name} </h2>
    <h2 className='coininfo'> Price  {object2.price}</h2>
    {/* add all the necessary information */}
    
    </div>
  )
}

export default Coinsinfo