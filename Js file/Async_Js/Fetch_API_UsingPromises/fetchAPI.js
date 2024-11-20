// fetch ghibliAPI characters names //

const fetch = require('node-fetch');

const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people')


fetchPromise.then(response => {

    return response.json();
}).then(people => {
    const names = people.map((persons) => {
        return persons.name
    }).join('\n')
    console.log(names);

}).catch((error) => {
    console.log("We got error : " + error);
})

