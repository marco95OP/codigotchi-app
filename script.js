const mic = document.getElementById('mic');
const screen = document.getElementById('screen');
const panelData = document.getElementById('panel-data');

// Array of actions
const commands = ['eat', 'dance', 'sleep'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new SpeechRecognition();

function onStart(){
    console.log('start listening...')
    panelData.classList.add('listening');
    recog.start();
}

function onResult(e){
    const text = e.results[0][0].transcript;
    console.log(text);

    // check if there are commands in the text
    const action = commands.find(function(command){
        return text.toLowerCase().includes(command);
    });

    console.log('action', action);

    // show the correct gif
    const actionClassname = 'codigotchi-screen_' + action;
    screen.classList.add(actionClassname);
    console.log('start action');

    // return to initial state with microphone on the screen
    panelData.classList.remove('listening');

    // to return the static image we need timeoutfunction
    setTimeout(function(){
        screen.classList.remove(actionClassname);
        console.log('stop action');    
    }, 2000);
}

mic.addEventListener('click', onStart);
recog.addEventListener('result', onResult);