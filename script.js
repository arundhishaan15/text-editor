/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


window.onload = function() {
  document.getElementById('text-input').focus();
  document.getElementById('text-input').select();

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

function alignText(elem, alignType) {
  // CODE GOES HERE
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonList = document.getElementsByClassName('align');
  for (let i=0; i < buttonList.length; i++) {
    buttonList[i].classList.remove('active');
  }
  elem.classList.add('active');
}

function Changefontsize(elem, size) {
  let sizes = ['small', 'medium', 'large'];
  let defaultfontSize = document.getElementById('text-output');
  if(defaultfontSize.classList.contains(size)) {
    defaultfontSize.classList.remove(size);
    elem.classList.remove('active');
  } else {
    for(s of sizes) {
      defaultfontSize.classList.remove(s);
    }
    defaultfontSize.classList.add(size);
    let fontbuttonList = document.getElementsByClassName('fontsizes');
    for(i = 0; i < fontbuttonList.length; i++) {
      fontbuttonList[i].classList.remove('active');
    }
    elem.classList.add('active');
  }

}

function textTospeech(){
  var message = new SpeechSynthesisUtterance(document.getElementById('text-input').value);
  window.speechSynthesis.speak(message);
}

function Changecolor() {
  let color = document.getElementById('color-palette').value;
  document.getElementById('text-output').style.color = color;
  document.getElementById('header-title').style.color = color;
}



