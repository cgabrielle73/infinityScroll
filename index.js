const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

const count = 10;
const apiKey = 'ZrOBpRVa2WlOVwuArPJISWvWzSLjoVGx6aAHBrJskAo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photosArray = [];

function setAttributes(item, attribute) {
    for(const key in attribute) {
        item.setAttribute(key, attribute[key]);
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })


        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
        })


        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos();
    } catch (error) {
        console.error(error);
    }
}

getPhotos()