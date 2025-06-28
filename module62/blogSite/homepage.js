// This script dynamically generates blog cards on the homepage using data from localStorage or a predefined array.

const blogData = [
  {
    id: 1,
    title: "Why JavaScript Rocks",
    description: "Explore why JS is the backbone of web dev.",
    content: "JavaScript is super versatile—it powers both frontend and backend, making it a must-know for modern web developers. From dynamic UIs to powerful APIs, it does it all!",
    author: "Abhimanyu",
    date: "2025-06-25"
  },
  {
    id: 2,
    title: "Learning Web Dev",
    description: "The basic path to becoming a web developer.",
    content: "Start with HTML to structure your pages, CSS to style them, and JavaScript to make them interactive. That’s the solid base for any web dev journey.",
    author: "Abhimanyu",
    date: "2025-06-20"
  }
];

const blogCard = document.getElementById("blogCard");

const showCard = (item) => {
     const card = document.createElement("div");
     card.className = "card";
     card.style.width = "17rem";
     card.innerHTML = `
          <img src="./image/logo.jpg" class="card-img-top" alt="...">
          <div class="card-body">
               <h5 class="card-title">${item.title}</h5>
               <p class="card-text">${item.description}</p>
               <p class="card-text"><small class="text-muted">By ${item.author} on ${item.date}</small></p>
               <a href="readblog.html?id=${item.id}" class="btn btn-primary w-100">Read</a>
          </div>`;
     blogCard.appendChild(card);
};

function appendCard(cardTemplate) {
     blogCard.innerHTML = ""; // Clear the older cards

     const localData = localStorage.getItem("blogs");
     if(localData) {
          const parsedData = JSON.parse(localData);
          parsedData.map(showCard);
     } else {
          blogData.map(showCard);
     }
};

appendCard(showCard);

export { appendCard, showCard };