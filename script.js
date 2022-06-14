const mic = document.getElementById('mic');
const screen = document.getElementById('screen');
const panelData = document.getElementById('panel-data');

// Array of actions
const commands = ['eat', 'dance', 'sleep'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new SpeechRecognition();

function onStart(){
    console.log('ciao');
    panelData.classList.add('listening');
    recog.start();
}

function onResult(e){
    console.log(e);
}

mic.addEventListener('click', onStart);
recog.addEventListener('result', onResult);