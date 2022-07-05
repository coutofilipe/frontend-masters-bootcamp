const ALL_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(ALL_BREEDS_URL)
    .then(function (response) {
      return response.json();

})
.then(function (data) {
    const breedsObj = data.message;
    const breedsArray = Object.keys(breedsObj);
    console.log(Object.keys(data.message));


    for(let i = 0; i < breedsArray.length; i++) {

        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);

    }
})

select.addEventListener("change", function(event) {
    console.log(event.target.value);
    console.log(`https://dog.ceo/api/breed/${event.target.value}/images
    `);
})