const feedback = document.querySelector(".feedback");
const submitBtn = document.querySelector(".btn");
const submission = document.querySelector(".submission-screen");
const scoreChoiceDisplay = document.querySelector(".submission-screen_choice");
const radioFieldset = document.querySelector(".feedback_radio-field");

let score;

radioFieldset.addEventListener("click", (e) => {
  if (e.target.tagName !== "SPAN") return;
  score = Number(e.target.textContent);
});

submitBtn.addEventListener("click", () => {
  if (!score) return;
  feedback.classList.add("feedback--inactive");
  submission.classList.add("submission-screen--active");
  scoreChoiceDisplay.textContent = `You selected ${score} out of 5`;
});
