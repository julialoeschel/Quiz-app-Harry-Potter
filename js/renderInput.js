export default function renderInput() {
  const cardsContainer = document.querySelector("[data-js=cards]");
  const bookmarksContainer = document.querySelector("[data-js=bookmark]");
  const form = document.querySelector("[data-js=form]");
  const filterForm = document.querySelector("[data-js=filter-form]");

  let currentFilter = "all";
  let cards = [
    {
      question: "What is the Dursley's address?",
      answer: "4 Privet Drive",
      tags: ["Harry"],
      isBookmarked: false,
    },
    {
      question:
        "What was the name of the tree Harry and Ron crashed their car into?",
      answer: "The Whomping Willow",
      tags: ["Weasley", "magic", "hogwartsExpress"],
      isBookmarked: false,
    },
    {
      question: "What flavour are Bertie Bott’s beans?",
      answer: "Every flavour",
      tags: ["hogwartsExpress"],
      isBookmarked: false,
    },
  ];
  renderCards();

  filterForm.addEventListener("change", () => {
    currentFilter = filterForm.elements["tag-filter"].value;
    renderCards();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const QuestionText = form.question;
    const AnswerText = form.answer;
    const TagsText = form.tags;

    const newCard = {
      question: QuestionText.value,
      answer: AnswerText.value,
      tags: TagsText.value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length),
      isBookmarked: false,
    };

    cards = [newCard, ...cards];
    renderCards();
    console.log(cards);
    form.reset();
  });

  function renderCards() {
    cardsContainer.innerHTML = "";

    cards
      .filter(
        (card) => card.tags.includes(currentFilter) || currentFilter === "all"
      )
      .forEach((card) => {
        const cardItem = document.createElement("li");
        cardItem.className = "card";
        cardItem.innerHTML = `  <svg
      data-js="bookmark"
      class="bookmark ${card.isBookmarked ? " bookmark--booked" : ""}"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#7f0909"
    >
      <path
        d="M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z"
      />
    </svg><h2>Question</h2>
    <p>${card.question}</p>
    <button data-js="answerButton">
    <span class="hidden" data-js="answerSpanHidden">hide</span>
    Answer
     </button>
     <h2 class="hidden" data-js="answerHeading">Answer</h2>
     <p class="hidden" data-js="answerText">${card.answer}</p>
     <ul class="tagList" role="list">
     ${card.tags?.map((tag) => `<li class="tag">${tag}</li>`).join("")}
     </ul>
      `;
        cardsContainer.append(cardItem);

        const answerButton = cardItem.querySelector("[data-js=answerButton]");
        const answerHeading = cardItem.querySelector("[data-js=answerHeading]");
        const answerSpanHidden = cardItem.querySelector(
          "[data-js=answerSpanHidden]"
        );
        const answerTextElement = cardItem.querySelector(
          "[data-js=answerText]"
        );
        const bookmark = cardItem.querySelector("[data-js=bookmark]");

        answerButton.addEventListener("click", () => {
          answerSpanHidden.classList.toggle("hidden");
          answerHeading.classList.toggle("hidden");
          answerTextElement.classList.toggle("hidden");
        });

        bookmark.addEventListener("click", () => {
          bookmark.classList.toggle("bookmark--booked");
          card.isBookmarked = !card.isBookmarked;
          renderBookmarks();
        });
        return cards;
      });
  }

  function renderBookmarks() {
    bookmarksContainer.innerHTML = "";

    cards
      .filter((card) => card.isBookmarked)
      .forEach((card) => {
        const cardItem = document.createElement("li");
        cardItem.className = "card";
        cardItem.innerHTML = `  <svg
      data-js="bookmark"
      class="bookmark ${card.isBookmarked ? " bookmark--booked" : ""}"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#7f0909"
    >
      <path
        d="M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z"
      />
    </svg><h2>Question</h2>
    <p>${card.question}</p>
    <button data-js="answerButton">
    <span class="hidden" data-js="answerSpanHidden">hide</span>
    Answer
     </button>
     <h2 class="hidden" data-js="answerHeading">Answer</h2>
     <p class="hidden" data-js="answerText">${card.answer}</p>
     <ul class="tagList" role="list">
     ${card.tags?.map((tag) => `<li class="tag">${tag}</li>`).join("")}
     </ul>
      `;

        bookmarksContainer.append(cardItem);

        const answerButton = cardItem.querySelector("[data-js=answerButton]");
        const answerHeading = cardItem.querySelector("[data-js=answerHeading]");
        const answerSpanHidden = cardItem.querySelector(
          "[data-js=answerSpanHidden]"
        );
        const answerTextElement = cardItem.querySelector(
          "[data-js=answerText]"
        );
        const bookmark = cardItem.querySelector("[data-js=bookmark]");

        answerButton.addEventListener("click", () => {
          answerSpanHidden.classList.toggle("hidden");
          answerHeading.classList.toggle("hidden");
          answerTextElement.classList.toggle("hidden");
        });

        bookmark.addEventListener("click", () => {
          bookmark.classList.toggle("bookmark--booked");
          card.isBookmarked = !card.isBookmarked;
        });
      });
  }
}
