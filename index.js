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
