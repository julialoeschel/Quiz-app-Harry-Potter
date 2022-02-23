export default function input() {
  const cardsContainer = document.querySelector("[data-js=cards]");
  const form = document.querySelector("[data-js=form]");

  let cards = [
    {
      question: "What is the Dursley's address?",
      answer: "4 Privet Drive",
      tags: ["Harry", "Dursley", "house"],
    },
    {
      question:
        "What was the name of the tree Harry and Ron crashed their car into?",
      answer: "The Whomping Willow",
      tags: ["flying car", "Weasley", "magic", "drive", "hogwartsExpress"],
    },
    {
      question: "What flavour are Bertie Bott’s beans?",
      answer: "Every flavour",
      tags: ["sweet", "hogwartsExpress"],
    },
  ];
  renderCards();

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
    };

    cards = [newCard, ...cards];
    renderCards();
    console.log(cards);
    form.reset();
  });

  function renderCards() {
    cardsContainer.innerHTML = "";

    cards.forEach((card) => {
      const cardItem = document.createElement("li");
      cardItem.className = "card";
      cardItem.innerHTML = `  <svg
      data-js="bookmark"
      class="bookmark bookmark--booked"
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
      const answerTextElement = cardItem.querySelector("[data-js=answerText]");
      const bookmark = cardItem.querySelector("[data-js=bookmark]");

      answerButton.addEventListener("click", () => {
        answerSpanHidden.classList.toggle("hidden");
        answerHeading.classList.toggle("hidden");
        answerTextElement.classList.toggle("hidden");
      });

      bookmark.addEventListener("click", () => {
        bookmark.classList.toggle("bookmark--booked");
      });
    });
  }
}
