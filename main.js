

console.log();

const button = document.getElementById('button');
const input = document.getElementById('input');
const output = document.getElementById('output');

const localNumber = localStorage.getItem('number');
if (localNumber) {
  input.value = localNumber;
}

button.addEventListener('click', () => {

  if (input.value < 0 || input.value > 10) {
    alert('your  number should be between 0 and 10');
    return;
  }
  const randomNumber = generateRandomNumber(10);
  const number = input.value
  if (number == randomNumber) {
    output.innerHTML = 'Correct: your number was ' + number + 
    ' the correct number was ' + randomNumber;
  } else {
    output.innerHTML = 'Incorrect: your number was ' + number + 
    ' the correct number was ' + randomNumber;;
  }

  localStorage.setItem('number', number);
});

function generateRandomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}