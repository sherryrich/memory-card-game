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
    { imgSrc: "./images/maps.png", name: "maps" },
    { imgSrc: "./images/deliveroo.png", name: "deliveroo" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/nike.png", name: "nike" },
    { imgSrc: "./images/instagram.png", name: "instagram" },
    { imgSrc: "./images/whatsapp.png", name: "whatsapp" },
    { imgSrc: "./images/weather.png", name: "weather" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/maps.png", name: "maps" },
    { imgSrc: "./images/deliveroo.png", name: "deliveroo" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/nike.png", name: "nike" },
    { imgSrc: "./images/instagram.png", name: "instagram" },
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
    //Generate the HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach the info to the cards
        face.src = item.imgSrc;
        //attach the card to the section
        sections.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);


        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
        })
    });
};

cardGenerator();
