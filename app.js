//Grab a couple of things
const sections = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

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
    { imgSrc: "./images/twitter.png", name: "twitter" },
    { imgSrc: "./images/instagram.png", name: "instagram" },
    { imgSrc: "./images/whatsapp.png", name: "whatsapp" },
    { imgSrc: "./images/weather.png", name: "weather" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/maps.png", name: "maps" },
    { imgSrc: "./images/deliveroo.png", name: "deliveroo" },
    { imgSrc: "./images/duolingo.png", name: "duolingo" },
    { imgSrc: "./images/twitter.png", name: "twitter" },
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
        card.setAttribute("name", item.name)
        //attach the card to the section
        sections.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);


        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};

//Check Cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped"); // added new class fliiped for the check
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //Logic
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("try again");
            }
        }
    }
    //Run a check to see if we won the game
    if(toggleCard.length === 16) {
        restart("You Won!");
    }
};

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
       cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //Randomize
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
    }, 1000);

    });
   playerLives = 6;
   playerLivesCount.textContent = playerLives;
   setTimeout(() => window.alert(text), 1000);
};

cardGenerator();
