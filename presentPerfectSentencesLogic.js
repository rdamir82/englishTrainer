const sentenceData = getPresentPerfectSentences();

let points = 0;
const scoreBoard = document.getElementById('scoreBoard');

const sentensDisplay = document.getElementById('sentenceDisplay');
const wordDisplay = document.getElementById('wordDisplay');
const inputPresentTense = document.getElementById('inputPresentTense');
const submitButton = document.getElementById('submit');

let sentence;
let word;
let answer;

initialisation();

inputPresentTense.addEventListener('keyup', () => {
  answerValidator(inputPresentTense, answer, answer2);
});

inputPresentTense.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    answerValidator(inputPresentTense, answer, answer2);
    submitButton.focus();
  }
});

function answerValidator(inputField, correctAnswer, correctAnswer2) {
  if (
    inputField.value.toLowerCase() === correctAnswer ||
    inputField.value.toLowerCase() === correctAnswer2
  ) {
    inputField.classList.add('is-valid');
    inputField.classList.remove('is-invalid');
    return true;
  } else {
    inputField.classList.add('is-invalid');
    return false;
  }
}

submitButton.addEventListener('keypress', e => {
  if (
    e.keyCode === 13 &&
    (answerValidator(inputPresentTense, answer) ||
      answerValidator(inputPresentTense, answer2))
  ) {
    correctAnswerAfter();
  }
});

submitButton.addEventListener('click', () => {
  if (
    answerValidator(inputPresentTense, answer) ||
    answerValidator(inputPresentTense, answer2)
  ) {
    correctAnswerAfter();
  }
});

function correctAnswerAfter() {
  initialisation();
  submitButton.innerText = 'Submit';
  points++;
  scoreBoard.innerText = points;
}

function sentencePicker(sentenceData) {
  return Math.floor(Math.random() * sentenceData.length);
}

function initialisation() {
  randomWordNumber = sentencePicker(sentenceData);
  sentence = sentenceData[randomWordNumber][0];
  word = sentenceData[randomWordNumber][1];
  answer = sentenceData[randomWordNumber][2];
  answer2 = sentenceData[randomWordNumber][3];

  inputPresentTense.value = '';

  inputPresentTense.classList.remove('is-valid');
  inputPresentTense.classList.remove('is-invalid');

  sentenceDisplay.value = sentence;
  wordDisplay.value = word;
  inputPresentTense.focus();
}

// MODAL IRREGULAR:
const presentTrainerButton = document.getElementById('presentTrainerButton');
const irregularModal = document.getElementById('presentSentencesModal');
const closeIrregularModal = document.getElementById('close-irregular-modal');

presentTrainerButton.addEventListener('click', () => {
  initialisation();
  points = 0;
  scoreBoard.innerText = points;
  toggleModal(irregularModal);
});

closeIrregularModal.addEventListener('click', () => {
  initialisation();
  toggleModal(irregularModal);
});

function toggleModal(modalName) {
  if (modalName.classList.contains('d-none')) {
    modalName.classList.remove('d-none');
  } else {
    modalName.classList.replace('fade-in', 'fade-out');
    modalName.classList.add('d-none');
    modalName.classList.replace('fade-out', 'fade-in');
  }
}

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
