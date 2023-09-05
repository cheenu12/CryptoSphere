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
    var arr= data.data;
    console.log("i am api.js")
	console.log(arr);

    export default arr;