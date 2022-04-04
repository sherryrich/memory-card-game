//Grab a couple of things
const sections = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
[{ imgSrc: "./images/whatsapp.png" }]

const getData = () => [
    { imgSrc: "./images/whatsapp.png", name: "whatsapp" },
    { imgSrc: "./images/weather.png", name: "weather" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/app-store.png", name: "app-store" },
    { imgSrc: "./images/deliveroo.png", name: "deliveroo" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/nike.png", name: "nike" },
    { imgSrc: "./images/instagram.png", name: "instagram"},
];


//Randomize
    const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// Card Generator Function
    const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData);
};

cardGenerator();
