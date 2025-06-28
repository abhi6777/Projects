const card = (movieData, container) => {
     const card = document.createElement("div");
     card.className = "card";
     card.style.width = "22rem";

     const image = document.createElement("img");
     image.classList = "card-img-top";
     image.alt = "dfd ";
     image.src = movieData.Poster;

     const cardBody = document.createElement("div");
     cardBody.className = "card-body";

     const cardTitle = document.createElement("h5");
     cardTitle.classList = "card-title text-center pb-2";
     cardTitle.textContent = movieData.Title;

     const linkButton = document.createElement("a");
     linkButton.classList = "btn btn-primary";
     linkButton.style.width = "100%";
     linkButton.innerHTML = "Watch Now"

     // Append children
     cardBody.appendChild(cardTitle);
     cardBody.appendChild(linkButton);
     // appending child element of card
     card.appendChild(image);
     card.appendChild(cardBody);

     container.appendChild(card);
}

export { card };