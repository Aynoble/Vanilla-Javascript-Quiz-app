const data = [
  {
    id: 1,
    question: "What year did Nigeria gain Independence?",
    answers: [
      { answer: "1950", isCorrect: false },
      { answer: "1972", isCorrect: false },
      { answer: "1960", isCorrect: true },
      { answer: "1980", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "When was the last world cup final?",
    answers: [
      { answer: "December 18th 2022", isCorrect: true },
      { answer: "January 31st 2023", isCorrect: false },
      { answer: "November 11th 2022", isCorrect: false },
      { answer: "May 23rd 2020", isCorrect: false },
    ],
  },

  {
    id: 3,
    question: "ReactJS is what?",
    answers: [
      { answer: "A TV show", isCorrect: false },
      { answer: "A Javascript Library", isCorrect: true },
      { answer: "A political party", isCorrect: false },
      { answer: "A band", isCorrect: false },
    ],
  },

  {
    id: 4,
    question: "Who is the founder and CEO of Amazon?",
    answers: [
      { answer: "Elon Musk", isCorrect: false },
      { answer: "Bill Gates", isCorrect: false },
      { answer: "Mark Zuckerberg", isCorrect: false },
      { answer: "Jeff Bezoz", isCorrect: true },
    ],
  },

  {
    id: 5,
    question: "Which company owns Andriod?",
    answers: [
      { answer: "Google", isCorrect: true },
      { answer: "Amazon", isCorrect: false },
      { answer: "Microsoft", isCorrect: false },
      { answer: "Facebook", isCorrect: false },
    ],
  },
];

const questionText = document.querySelector(".question");
const options = document.querySelector(".options");
const submitButton = document.querySelector(".button1");
const questions = document.querySelector(".questions");
const result = document.querySelector(".result");

let qIndex = 0;
let cA = 0;
let wA = 0;
let selectedAnswer;

const showQuestionAndAnswer = (prop) => {
  selectedAnswer = null;
  questionText.textContent = data[prop].question;

  options.innerHTML = data[prop].answers
    .map(
      (answer, i) =>
        `
   <div class="optionItem">
              <input type="radio" id=${i} name="option" value=${answer.isCorrect} />
              <label for=${i}>${answer.answer}</label>
            </div>
  `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  const Inputs = document.querySelectorAll("input");

  Inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;

      console.log(selectedAnswer);
    });
  });
};

const submit = () => {
  submitButton.addEventListener("click", () => {
    if (selectedAnswer === null) {
      alert("Please choose an Option");
    } else if (selectedAnswer === "true") {
      cA++;
      console.log(cA);
      console.log(wA);
      qIndex === data.length - 1 ? showResult() : qIndex++;
      showQuestionAndAnswer(qIndex);
    } else {
      wA++;
      console.log(wA);
      qIndex === data.length - 1 ? showResult() : qIndex++;
      showQuestionAndAnswer(qIndex);
    }
  });
};

const showResult = () => {
  qIndex = 0;
  questions.style.display = "none";
  document.querySelector(
    ".correctAnswer"
  ).textContent = `Correct Answers: ${cA}`;

  document.querySelector(".wrongAnswer").textContent = `Wrong Answers: ${wA}`;
  document.querySelector("h2").textContent = `Score: ${cA * 10}`;
  result.style.display = "block";
};

document.querySelector(".button2").addEventListener("click", () => {
  cA = 0;
  wA = 0;
  questions.style.display = "block";
  result.style.display = "none";
  showQuestionAndAnswer(qIndex);
});
showQuestionAndAnswer(qIndex);
submit();
