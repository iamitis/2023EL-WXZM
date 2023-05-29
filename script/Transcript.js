const languageOfVoice = document.getElementById('languageOfVoice');
let voices = [];

// 生成音源语言选项。
function populateVoiceList() {
    voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
        let option = document.createElement('option');

        let name = `${voices[i].name}`;
        name = simplifyNames(name);

        option.textContent = `${name}`;
        option.value = voices[i].lang.toString();
        if (voices[i].default) {
            option.textContent += '  (默认)';
        }
        languageOfVoice.appendChild(option);
    }
}

function simplifyNames(name) {
    let index = name.indexOf('-') + 2;
    return name.slice(index);
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'zh-cn';

// 通过'onchange'获取选项值。
languageOfVoice.onchange = getLangOfVoice;

function getLangOfVoice() {
    let index = languageOfVoice.selectedIndex;
    recognition.lang = languageOfVoice.options[index].value;
}


// 识别转化显示
recognition.continuous = true;
const transcription = document.getElementById('transcription');

recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    transcription.value += result + '\n';
};

recognition.onend = () => {
    console.log('Recognition ended.');
};

const startButton = document.getElementById('starTranscript');
startButton.onclick = () => {
    recognition.start();
    console.log('Recognition started.');
};

const stopButton = document.getElementById('stopTranscript');
stopButton.onclick = () => {
    recognition.stop();
    console.log('Recognition stopped.');
};
