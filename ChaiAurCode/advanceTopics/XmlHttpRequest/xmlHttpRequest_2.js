const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * create a new XMLHttpRequest object
 */
let xhr = new XMLHttpRequest();

/**
 * Configure it: GET-request for the URL /article/.../load
 */

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');

/**
 * Send the request over the network
 */
xhr.send();

/**
 * This will be called after the response is received
 */

