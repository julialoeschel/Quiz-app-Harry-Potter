const createAddQuestion = document.querySelector('[data-js=text-addquestion]');
const toggleBookmark = document.querySelector('[data-js=bookmark]');

createAddQuestion.addEventListener('input', () => {
  const questionTextLength = createAddQuestion.value.length;
  console.log(questionTextLength);
});

toggleBookmark.addEventListener('click', () => {
  toggleBookmark.classList.toggel('booked');
});
