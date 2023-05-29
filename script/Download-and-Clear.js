// download

const downloadTranscription = document.getElementById('downloadTranscription');
downloadTranscription.onclick = () => {
    const textOfTranscription = transcription.value;
    const filenameOfTranscription = 'transcription.txt';

    const blob = new Blob([textOfTranscription], {type: 'text/plain'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filenameOfTranscription;

    link.click();

    URL.revokeObjectURL(link.href);
}

const downloadTranslation = document.getElementById('downloadTranslation');
downloadTranslation.onclick = () => {
    const textOfTranslation = translation.value;
    const filenameOfTranslation = 'translation.txt';

    const blob = new Blob([textOfTranslation], {type: 'text/plain'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filenameOfTranslation;

    link.click();

    URL.revokeObjectURL(link.href);
}


// clear

const clearTranscription = document.getElementById('clearTranscription');

clearTranscription.onclick = () => {
    transcription.value = '';
}


const clearTranslation = document.getElementById('clearTranslation');

clearTranslation.onclick = () => {
    translation.value = '';
}