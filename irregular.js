const wordData = getIrregularWordsData();

let points = 0;
let helps = 3;
const scoreBoard = document.getElementById("scoreBoard");
const helpsCount = document.getElementById("helpsCount");

const wordDisplay = document.getElementById("wordDisplay");
const inputSimplePast = document.getElementById("inputSimplePast");
const inputPastPerfect = document.getElementById("inputPastPerfect");
const meaningHungarian = document.getElementById("meaningHungarian");
const meaningSerbian = document.getElementById("meaningSerbian");

const submitButton = document.getElementById("submit");
const helpButton = document.getElementById("help");

let word;
let SimplePast;
let PastPerfect;
let Hungarian;
let Serbian;

initialisation();

inputSimplePast.addEventListener("keyup", () => {
  werifyAnswersAndClickSubmit();
});

inputPastPerfect.addEventListener("keyup", () => {
  werifyAnswersAndClickSubmit();
});

function werifyAnswersAndClickSubmit() {
  answerValidator(inputPastPerfect, PastPerfect);
  answerValidator(inputSimplePast, SimplePast);
  if (areAnswesCorrect(SimplePast, PastPerfect)) {
    submitButton.click();
  }
}

inputSimplePast.addEventListener("keypress", (e) => {
  afterEnterKeyfocusOn(e, inputPastPerfect);
  answerValidator(inputSimplePast, SimplePast);
});

inputPastPerfect.addEventListener("keypress", (e) => {
  afterEnterKeyfocusOn(e, submitButton);
});

function afterEnterKeyfocusOn(e, element) {
  if (e.keyCode === 13) {
    element.focus();
  }
}

function answerValidator(inputField, correctAnswer) {
  if (inputField.value.toLowerCase() === correctAnswer) {
    inputField.classList.add("is-valid");
    inputField.classList.remove("is-invalid");
    return true;
  } else {
    inputField.classList.add("is-invalid");
    return false;
  }
}

function areAnswesCorrect(SimplePast, PastPerfect) {
  if (
    inputSimplePast.value.toLowerCase() === SimplePast &&
    inputPastPerfect.value.toLowerCase() === PastPerfect
  ) {
    return true;
  }
  return false;
}

submitButton.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 && areAnswesCorrect(SimplePast, PastPerfect)) {
    correctAnswerAfter();
  }
});

submitButton.addEventListener("click", () => {
  if (areAnswesCorrect(SimplePast, PastPerfect)) {
    correctAnswerAfter();
  }
});

helpButton.addEventListener("click", () => {
  if (helps > 0) {
    inputSimplePast.value = SimplePast;
    inputPastPerfect.value = PastPerfect;
    helps--;
    if (helps == 0) {
      helpButton.disabled = true;
    }
    helpsCount.innerText = helps;
  } else {
    helpButton.disabled = true;
  }
});

function correctAnswerAfter() {
  initialisation();
  submitButton.innerText = "Submit";
  points++;
  scoreBoard.innerText = points;
  helpsCount.innerText = helps;
}

function wordPicker(wordData) {
  return Math.floor(Math.random() * wordData.length);
}

function initialisation() {
  randomWordNumber = wordPicker(wordData);
  word = wordData[randomWordNumber][0];
  SimplePast = wordData[randomWordNumber][1];
  PastPerfect = wordData[randomWordNumber][2];
  Hungarian = wordData[randomWordNumber][3];
  Serbian = wordData[randomWordNumber][4];

  inputPastPerfect.value = "";
  inputSimplePast.value = "";

  inputSimplePast.classList.remove("is-valid");
  inputPastPerfect.classList.remove("is-valid");

  inputSimplePast.classList.remove("is-invalid");
  inputPastPerfect.classList.remove("is-invalid");

  wordDisplay.value = word;
  meaningHungarian.value = Hungarian;
  meaningSerbian.value = Serbian;

  inputSimplePast.focus();
}

// MODAL IRREGULAR:
const irregularTrainerButton = document.getElementById(
  "irregularTrainerButton"
);
const irregularModal = document.getElementById("irregularModal");
const closeIrregularModal = document.getElementById("close-irregular-modal");

irregularTrainerButton.addEventListener("click", () => {
  initialisation();
  points = 0;
  helps = 3;
  scoreBoard.innerText = points;
  helpsCount.innerText = helps;
  helpButton.disabled = false;
  toggleModal(irregularModal);
});

closeIrregularModal.addEventListener("click", () => {
  initialisation();
  toggleModal(irregularModal);
});

// MODAL IRREGULAR->HUN
const irregularHungarianButton = document.getElementById(
  "irregularHungarianButton"
);
const irregularHungarianModal = document.getElementById(
  "irregularHungarianModal"
);
const closeIrregularHungarianModal = document.getElementById(
  "close-irregularHungarian-modal"
);

const irregularWordsDisplay = document.getElementById("irregularWordsDisplay");
const scoreBoardIrregularHungarian = document.getElementById(
  "scoreBoardIrregularHungarian"
);
const inputIrregularHungarian = document.getElementById(
  "inputIrregularHungarian"
);
const submitIrregularHungarian = document.getElementById(
  "submitIrregularHungarian"
);

irregularHungarianButton.addEventListener("click", () => {
  initIrregHun();
  points = 0;
  scoreBoardIrregularHungarian.innerText = points;
  toggleModal(irregularHungarianModal);
});
closeIrregularHungarianModal.addEventListener("click", () => {
  toggleModal(irregularHungarianModal);
});

inputIrregularHungarian.addEventListener("keyup", () => {
  answerValidator(inputIrregularHungarian, Hungarian);
});

inputIrregularHungarian.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    submitIrregularHungarian.focus();
  }
});

submitIrregularHungarian.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 && answerValidator(inputIrregularHungarian, Hungarian)) {
    correctIrregHunAfter();
  }
});

submitIrregularHungarian.addEventListener("click", () => {
  if (answerValidator(inputIrregularHungarian, Hungarian)) {
    correctIrregHunAfter();
  }
});

function correctIrregHunAfter() {
  initIrregHun();
  submitIrregularHungarian.innerText = "Submit";
  points++;
  scoreBoardIrregularHungarian.innerText = points;
}

function initIrregHun() {
  randomWordNumber = wordPicker(wordData);
  word = wordData[randomWordNumber][0];
  SimplePast = wordData[randomWordNumber][1];
  PastPerfect = wordData[randomWordNumber][2];
  Hungarian = wordData[randomWordNumber][3];
  Serbian = wordData[randomWordNumber][4];

  inputIrregularHungarian.classList.remove("is-valid");
  inputIrregularHungarian.classList.remove("is-invalid");

  irregularWordsDisplay.innerText = `${word}, ${SimplePast}, ${PastPerfect}`;

  inputIrregularHungarian.value = "";

  inputIrregularHungarian.focus();
}

function toggleModal(modalName) {
  if (modalName.classList.contains("d-none")) {
    modalName.classList.remove("d-none");
  } else {
    modalName.classList.replace("fade-in", "fade-out");
    modalName.classList.add("d-none");
    modalName.classList.replace("fade-out", "fade-in");
  }
}

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
