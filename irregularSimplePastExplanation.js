const explanationTitle = document.getElementById('explanationTitle');
const explanationDescription = document.getElementById('explanationDescription');
const explanationSample = document.getElementById('explanationSample');

let generateSample;

sentenceData.forEach(element => {
  generateSample += ("<p class='col-6'>" + element[0] + " - " + element[2] + "</p>");
});

generateSample = (generateSample.substring(9));

explanationTitle.innerHtml = '';

explanationDescription.innerHtml = 'explanationDescription';

explanationSample.innerHTML = generateSample;