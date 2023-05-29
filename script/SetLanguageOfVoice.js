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
