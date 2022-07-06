const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// async funtion to get image array (called on button event listener)

const getImage = async function() {
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100"
    );
    const images = await res.json();
    selectRandomImage(images);
    //console.log(images);
};

// function to select random image (called in getImage function)

const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex];
    //console.log(randomImage);
    displayImage(randomImage);
};

// function to display image (called in selectRandomImage funciton)

const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// button event listener

button.addEventListener("click", function() {
    getImage();
});