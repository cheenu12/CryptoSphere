import React from 'react'
// import { Col} from 'antd';
const query = 'cryptocurrency';
const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${query}`;
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': 'e7aa6cb4f4msha003796ba1c786ep185107jsn23560cfa2098',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};



const response = await fetch(url, options);
	const result = await response.text();
    const data = JSON.parse(result);
  
    console.log(data.value[0].name);
	console.log(data.value[0].description);
    console.log(data.value[0].datePublished.slice(0,10));
    console.log(data.value);
    console.log(data.value[0].image.thumbnail.contentUrl);

	
const Latestnews = () => {
  return (

    <div className="scrolling-outer">
  <div className="scrolling-container">
    {data.value.map(item => (
      <div className="news-item" key={item.id}>
        <p className='newDate'>{item.datePublished.slice(0, 10)}</p>
        {item.image && item.image.thumbnail && (
          <img className='newsImg' alt='none' src={item.image.thumbnail.contentUrl} />
        )}
        <h3 className='newsHeading'>{item.name}</h3>
        <p className='newsDes'>{item.description}</p>
        <a className='view'  href={item.url}  target="_blank"
                rel="noopener noreferrer">[View]</a>
        <br/>
      
        <hr/>
        {/* <a href={item.url}> view </a> */}
        <br/>
      </div>
    ))}
  </div>
</div>)
}

export default Latestnews;

