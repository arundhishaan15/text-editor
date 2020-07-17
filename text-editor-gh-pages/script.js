window.onload = function() {
  document.getElementById('text-input').focus();
  document.getElementById('text-input').select();
  document.getElementById('dark-theme').addEventListener('click', darkTheme);
}

darkTheme = () => {
  document.querySelector('body').classList.toggle('dark');
}

function updateText(){
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}

function makeBold(elem){ 
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

function makeUnderline(elem){
  elem.classList.toggle('active');
  let formattedText = document.getElementById('text-output');
  
  if (formattedText.classList.contains('underline')) {
    formattedText.classList.remove('underline');
  } else {
    formattedText.classList.add('underline');
  }
}

function alignText(elem, alignType) {
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
  // document.getElementById('header-title').style.color = color;
}


function activateCaps(elem){ 
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('caps');
}

// side Nav

function openNav() {
  document.getElementById("mySidenav").style.width = "15%";
  document.getElementById("container").style.gridTemplateColumns = "15% 75%";
    
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("container").style.gridTemplateColumns = "3% 97%";

}


