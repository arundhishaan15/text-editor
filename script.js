/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

// let API_KEY = 'AIzaSyC_hUzMYYbXfvpmLUep08CCuBNG3pywG6k';

 window.onload = function () {
  // document.addEventListener('keyup', pressEnter);
  document.getElementById('text-input').focus();
  document.getElementById('text-input').select();  
  document.getElementById('myInput').addEventListener('keyup', pressEnter);
}

function pressEnter(event) {
  if (event.keyCode === 13) {
    fontChange();
  }
}

//  getFontData = () => {
//   const URL = "https://www.googleapis.com/webfonts/v1/webfonts";
//   const FULL_URL = `${URL}?key=${API_KEY}&sort=popularity`;
//   const fontPromise = fetch(FULL_URL);
//   return fontPromise.then((response) => {
//     return response.json();
//   });
// };

function fontChange () {
  console.log("it works")
  const font = document.getElementById('myInput').value;
  console.log(font);
  // getFontData ()
  //   .then((res) => {
  //     // console.log(res);
  //     // let fonts = [];
  //     // for (let i = 900; i < 992; i++) {
  //     //   fonts.push(res.items[i].family);
  //     // }
  //     // console.log(fonts);
  // });
  let fontlink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=${font}">`;
  document.getElementById('fontlink').innerHTML = fontlink;
  document.getElementById('text-output').style.fontFamily = font;
  document.getElementById('heading').style.fontFamily = font;
}

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText(){
  // CODE GOES HERE
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){ 
  //CODE GOES HERE
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
  console.log(document.getElementById('text-output').classList)
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
  //CODE GOES HERE
  elem.classList.toggle('active');
  let formattedText = document.getElementById('text-output');
  
  if (formattedText.classList.contains('underline')) {
    formattedText.classList.remove('underline');
  } else {
    formattedText.classList.add('underline');
  }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonList = document.getElementsByClassName('align');
  for (let i=0; i < buttonList.length; i++) {
    buttonList[i].classList.remove('active');
  }
  elem.classList.add('active');
}

function fontSize(elem, sizeOfFont) {
  let sizes = ['small', 'medium', 'large'];
  let formattedText = document.getElementById('text-output');
  if(formattedText.classList.contains(sizeOfFont)) {
    formattedText.classList.remove(sizeOfFont);
    elem.classList.remove('active');
  } else {
    // if (formattedText.classList.length == 2) {
    //   formattedText.classList.remove(formattedText.classList[1]);
    // }
    for (s of sizes) {
      formattedText.classList.remove(s);
    }
    formattedText.classList.add(sizeOfFont);
    let buttonList = document.getElementsByClassName('size');
    for (let i=0; i < buttonList.length; i++) {
      buttonList[i].classList.remove('active');
    }
  elem.classList.add('active');
}
}

function changeColor() {
  document.getElementById('text-output').style.color = document.getElementById("ColorPickerName").value;
  document.getElementById('heading').style.color = document.getElementById("ColorPickerName").value;
}

function textToSpeech() {
  var msg = new SpeechSynthesisUtterance(document.getElementById('text-input').value);
  window.speechSynthesis.speak(msg);
}

// function speechToText() {
//   var SpeechRecognition = window.webkitSpeechRecognition;
    
//   var recognition = new SpeechRecognition();

//   var Textbox = document.getElementById('text-output');

//   var Content = '';

//   recognition.continuous = true;

//   recognition.onresult = function(event) {

//     var current = event.resultIndex;

//     var transcript = event.results[current][0].transcript;
  
//       Content += transcript;
//       Textbox.val(Content);
    
//   };

//   recognition.onerror = function(event) {
//     console.log("eror");
//   }

//   document.getElementById('speechToText').onclick(function(e) {
//     if (Content.length) {
//       Content += ' ';
//     }
//     recognition.start();
//   });

//   Textbox.on('input', function() {
//     Content = $(this).val();
//   })
// }