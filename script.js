const pinUiElem = document.getElementById('random-pin-ui');
const pinSubmitInputElem = document.getElementById('pin-submit-ui');

// user pin variable
let userPin = '';

// event listener on pin generator button
document.getElementById('pin-gen-btn').addEventListener('click', function () {
  const randomPin = randomPinGen();
  pinUiElem.value = randomPin;
});

// set event delegation on numbers element
document.getElementById('numbers').addEventListener('click', function (e) {
  // handle event delegation
  if (e.target.classList.contains('number')) {
    const singleNum = e.target.innerText;
    // input user pin
    if (!isNaN(singleNum)) {
      userPin += singleNum;
      pinSubmitInputElem.value = userPin;
    }
    // delete last value from user pin
    if (isNaN(singleNum) && singleNum === '<') {
      const userPinArr = userPin.split('');
      userPinArr.pop();
      userPin = userPinArr.join('');
      pinSubmitInputElem.value = userPin;
    }
    // clear user input pin
    if (isNaN(singleNum) && singleNum === 'c') {
      userPin = '';
      pinSubmitInputElem.value = '';
    }
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
  const userPins = pinSubmitInputElem.value;
  console.log(Boolean(randomPin), Boolean(userPin));
  if (Boolean(randomPin) === true) {
    if (randomPin === userPins) {
      alert('Success! Number Matched.');
      pinUiElem.value = '';
      pinSubmitInputElem.value = '';
      userPin = '';
    } else {
      alert('Incorrect Number! Try Again.');
      pinUiElem.value = '';
      pinSubmitInputElem.value = '';
      userPin = '';
    }
  } else {
    alert('Generate the pin first');
  }
};
