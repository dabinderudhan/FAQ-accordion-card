const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const questionBtn = question.querySelector(".question-btn");

  questionBtn.addEventListener("click", function () {
    question.classList.toggle("show-text");

    questions.forEach(function (item) {
      if (item !== question) item.classList.remove("show-text");
    });
  });
});
