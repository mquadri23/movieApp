const axios = require("axios");

var options = {
    method: 'GET',
    url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/spiderman',
    headers: {
      'x-rapidapi-key': '1954bd9558msha0ca29475ac91b9p1f46e0jsnaafc10cad578',
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

console.log('Hello World')