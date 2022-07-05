const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';


function addDoggo() {
    /* Fetch provides a generic definition of Request and Response objects 
    (and other things involved with network requests)
    When you use FETCH you are using AJAX! */
    // 
    fetch(BREEDS_URL)
    // after fecth is executed do something, .then do something with the Response
    .then(function(response) {
        //return the response in JSON format so we can use it
        return response.json();
    })
    /* after the Response is processeed, do something with the data received by the server
    Here the data parameter is what is the response form the previous Response */
    .then(function(data) {
        // Handle and/or choose what to do with the data received
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Awsome Doggo';

        document.querySelector('.doggos').appendChild(img);
    })
}

document.querySelector('.add-doggo').addEventListener("click", addDoggo);