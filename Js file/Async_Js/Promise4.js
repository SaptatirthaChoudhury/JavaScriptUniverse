const fetch = require('node-fetch');

fetch('https://api.github.com/users/SaptatirthaChoudhury').then((response) => {
    //console.log(response);
    return response.json()
}).then((data) => {
     console.log(data)
}).catch((err) => {
    console.log("error message : " + err);
})
