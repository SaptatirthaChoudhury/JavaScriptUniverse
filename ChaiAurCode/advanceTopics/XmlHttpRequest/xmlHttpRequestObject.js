// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const image = document.querySelector('img')
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    console.log(xhr);
    xhr.responseType = 'json'
    
    // xhr.addEventListener('load', () => {
    //     image.src = xhr.response.message
    //     h2 = xhr.response.message

    // })

    xhr.onload = () => {
        image.src = xhr.response.message
        console.log(xhr)
    }

    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.send()



})