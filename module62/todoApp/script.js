import { createCard } from "./homepage.js";

// Load from localStorage first
let Globaldata = JSON.parse(localStorage.getItem("Globaldata")) || [
  { id: 1, title: "walk 10 min", status: "Success" },
  { id: 2, title: "Read 10 min", status: "Pending" }
];
console.log(Globaldata.length);

const cardsContainer = document.getElementById("cardsContainer");

// localStorage.setItem("Globaldata", JSON.stringify(Globaldata));

function appendCard() {
     cardsContainer.innerHTML = "";

     Globaldata.forEach(element => {
    createCard(element);
  });
};

appendCard();

export { Globaldata, appendCard };