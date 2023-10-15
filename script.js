const pinUiElem = document.getElementById('random-pin-ui');
const pinSubmitInputElem = document.getElementById('pin-submit-ui');

// user pin variable
let userPin = '';

// event listener on pin generator button
document.getElementById('pin-gen-btn').addEventListener('click', function () {
  const randomPin = randomPinGen();
  pinUiElem.value = randomPin;
});

// set event delegation on numbrese element
document.getElementById('numbers').addEventListener('click', function (e) {
  // handle event delegation
  if (e.target.classList.contains('number')) {
    const singleNum = e.target.innerText;
    userPin += singleNum;
    pinSubmitInputElem.value = userPin;
  }
});

//  event listener on submit button
document.getElementById('submit-btn').addEventListener('click', function () {
  pinMatcher();
});

// 4 digit random pin generator
const randomPinGen = () => {
  const randomNumber = Math.round(Math.random() * 10000);
  const randomNumStr = randomNumber + '';
  if (randomNumStr.length == 4) {
    return randomNumStr;
  } else {
    return randomPinGen();
  }
};

// pin matcher arrow function
const pinMatcher = () => {
  const randomPin = pinUiElem.value;
  const userPin = pinSubmitInputElem.value;
  if (randomPin === userPin) {
    alert('Success! Number Matched.');
    pinUiElem.value = '';
    pinSubmitInputElem.value = '';
  } else {
    alert('Incorrect Number! Try Again.');
    pinUiElem.value = '';
    pinSubmitInputElem.value = '';
  }
};
