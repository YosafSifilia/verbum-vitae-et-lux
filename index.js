const axios = require('axios');

// Example GET request using axios
axios.get('https://api.github.com')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
