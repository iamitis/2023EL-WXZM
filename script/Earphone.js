let mediaRecorder;

function startRecording(stream) {
    mediaRecorder = new MediaRecorder(stream);

    const chunks = [];

    mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, {type: 'audio/webm'});
        const audioURL = URL.createObjectURL(blob);

        const audio = new Audio(audioURL);
        audio.play();
    };

    mediaRecorder.start();
    console.log('Recording started.');
}

function stopRecording() {
    mediaRecorder.stop();
    console.log('Recording stopped.');
}

const startButton = document.getElementById('start');
startButton.onclick = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(startRecording)
        .catch((error) => {
            console.error('Error accessing microphone:', error);
        });
};

const stopButton = document.getElementById('stop');
stopButton.onclick = () => {
    stopRecording();

}
