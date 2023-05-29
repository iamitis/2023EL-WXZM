let mediaStream;
// 获取用户媒体并连接到语音识别实例
function getUserMedia() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            mediaStream = stream;
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const sourceNode = audioContext.createMediaStreamSource(stream);
            recognition.setAudioSource(sourceNode);
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
        });
}

const startButton = document.getElementById('starTranscript');
startButton.onclick = () => {
    startTranscript();
    getUserMedia();
};

const stopButton = document.getElementById('stopTranscript');
stopButton.onclick = () => {
    recognition.stop();
    if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
            track.stop();
        });
    }
};