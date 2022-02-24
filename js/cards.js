const data = [
  {
    question: "What is the name of HP owl?",
    answer: "Hedwig",
    tags: ["HP", "Owl", "Hogwarts"],
  },
  {
    question: "What is Luna Lovegoods fathers name?",
    answer: "Xenohilius Lovegood",
    tags: ["Foo", "Bar", "baz"],
  },
];

function renderCards(list) {
  list.forEach((element) => {
    const cardElement = document.createElement("section");
    cardElement.className = "card";
    cardElement.setAttribute("data-js", "card");
    cardElement.innerHTML = `
    <svg
    data-js="bookmark"
    class="bookmark"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#7f0909"
  >
    <path
      d="M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z"
    />
  </svg>
  <h2>Question</h2>
  <p>${element.question}</p>
  <button data-js="answerButton">
    <span class="hidden" data-js="answerSpanHidden">hide</span>
    Answer
  </button>
  <h2 class="hidden" data-js="answerHeading">Answer</h2>
  <p class="hidden" data-js="answerText">${element.answer}</p>
  <ul class="tagList" role="list">
    ${element.tags.map((tag) => `<li class='tag'>${tag}</li>`).join("")}
  </ul>
    `;
    const main = document.querySelector('[data-js="cards-section-home"]');
    main.appendChild(cardElement);
  });
}

export default function cards() {
  renderCards(data);
  const cardSet = document.querySelectorAll("[data-js=card]");

  cardSet.forEach((card) => {
    const bookmark = card.querySelector("[data-js=bookmark]");
    const answerButton = card.querySelector("[data-js=answerButton]");
    const answerText = card.querySelector("[data-js=answerText]");
    const answerSpanHidden = card.querySelector("[data-js=answerSpanHidden]");
    const answerHeading = card.querySelector("[data-js=answerHeading]");

    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("bookmark--booked");
    });

    answerButton.addEventListener("click", () => {
      answerSpanHidden.classList.toggle("hidden");
      answerHeading.classList.toggle("hidden");
      answerText.classList.toggle("hidden");
    });
  });
}

// export { cards, cardBookmark };
// export default cards;
