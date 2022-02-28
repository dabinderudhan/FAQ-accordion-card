const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const questionBtn = question.querySelector(".question-btn");
  const questionTitle = question.querySelector(".question-title--heading");

  questionBtn.addEventListener("click", function () {
    toggleClass(question);
  });

  questionTitle.addEventListener("click", function () {
    toggleClass(question);
  });
});

function toggleClass(quest) {
  quest.classList.toggle("show-text");

  questions.forEach(function (item) {
    if (item !== quest) item.classList.remove("show-text");
  });
}
