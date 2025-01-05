import getData from "../utils/getData.js";
import { TESTIMONIALS_PATH } from "../variables/variables.js";
import { cardsSection, cardTemplate } from "./elementsDOM.js";

async function renderTestimonialsCards() {
  const testimonialsData = await getData(TESTIMONIALS_PATH);

  testimonialsData.forEach((card) => {
    const cardClone = cardTemplate.content.cloneNode(true);

    const cardText = cardClone.querySelector(".testimonials__card-text");
    const cardAuthor = cardClone.querySelector(".testimonials__card-author");
    const cardAuthorRole = cardClone.querySelector(
      ".testimonials__card-author-role"
    );
    const cardAuthorAvatar = cardClone.querySelector(
      ".testimonials__card-author-avatar"
    );

    cardText.innerHTML = card.text?.replace(/\n/g, "<br><br>") || "";
    cardAuthor.textContent = card.author || "uknown author";
    cardAuthorRole.innerHTML =
      card.authorRole?.replace(/@(\S+)/g, "<b>@$1</b>") || "";
    cardAuthorAvatar.src = card.avatar || "";

    cardsSection.appendChild(cardClone);
  });
}

renderTestimonialsCards();

// Пример c shadow DOM

// async function renderTestimonialsCards() {
//   const testimonialsData = await getData(TESTIMONIALS_PATH);
//   console.log(testimonialsData);

//   let shadowRoot = cardsSection.attachShadow({ mode: "open" });

//   const link = document.createElement("link");
//   link.setAttribute("rel", "stylesheet");
//   link.setAttribute("href", "./dist/css/styles.min.css");
//   shadowRoot.appendChild(link);

//   testimonialsData.forEach((card) => {
//     let cardClone = document.importNode(cardTemplate.content, true);

//     const cardText = cardClone.querySelector(".testimonials__card-text");
//     const cardAuthor = cardClone.querySelector(".testimonials__card-author");
//     const cardAuthorRole = cardClone.querySelector(
//       ".testimonials__card-author-role"
//     );
//     const cardAuthorAvatar = cardClone.querySelector(
//       ".testimonials__card-author-avatar"
//     );

//     cardText.innerHTML = card.text?.replace(/\n/g, "<br>") || "";
//     cardAuthor.textContent = card.author || "uknown author";
//     cardAuthorRole.textContent = card.authorRole || "";
//     cardAuthorAvatar.src = card.avatar || "";

//     shadowRoot.appendChild(cardClone);
//   });
// }
