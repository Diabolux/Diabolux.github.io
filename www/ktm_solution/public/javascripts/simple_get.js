const axios = require('axios');

axios.get('/order?ID=CDZUGG3YK')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {

    });