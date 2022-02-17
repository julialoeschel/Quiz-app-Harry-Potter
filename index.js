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

const homeSection = document.querySelector("[data-js=cards-section-home]");
const bookmarkSection = document.querySelector(
  "[data-js=cards-section-bookmark]"
);
const profileSection = document.querySelector(
  "[data-js=cards-section-profile]"
);

const addSection = document.querySelector("[data-js=cards-section-add]");
const bookmarkNav = document.querySelector("[data-js=nav-bookmark]");
const homeNav = document.querySelector("[data-js=nav-home]");
const addNav = document.querySelector("[data-js=nav-add]");
const profileNav = document.querySelector("[data-js=nav-profile]");

bookmarkNav.addEventListener("click", () => {
  bookmarkSection.classList.remove("hidden");
  homeSection.classList.add("hidden");
  addSection.classList.add("hidden");
  profileSection.classList.add("hidden");
});

homeNav.addEventListener("click", () => {
  bookmarkSection.classList.add("hidden");
  homeSection.classList.remove("hidden");
  addSection.classList.add("hidden");
  profileSection.classList.add("hidden");
});

addNav.addEventListener("click", () => {
  addSection.classList.remove("hidden");
  bookmarkSection.classList.add("hidden");
  homeSection.classList.add("hidden");
  profileSection.classList.add("hidden");
});

profileNav.addEventListener("click", () => {
  addSection.classList.add("hidden");
  bookmarkSection.classList.add("hidden");
  homeSection.classList.add("hidden");
  profileSection.classList.remove("hidden");
});

const createAddQuestion = document.querySelector("[data-js=text-addquestion]");
const amountLeftAddQuestion = document.querySelector(
  "[data-js=create-amount-add-question]"
);
const createAddAnswer = document.querySelector("[data-js=text-addanswer]");
const amountLeftAddAnswer = document.querySelector(
  "[data-js=create-amount-add-answer]"
);

createAddQuestion.addEventListener("input", () => {
  const questionTextLength = createAddQuestion.value.length;
  const maxLengthAddQuestion = createAddQuestion.maxLength;
  amountLeftAddQuestion.innerText = maxLengthAddQuestion - questionTextLength;
});

createAddAnswer.addEventListener("input", () => {
  amountLeftAddAnswer.innerText =
    createAddAnswer.maxLength - createAddAnswer.value.length;
});
