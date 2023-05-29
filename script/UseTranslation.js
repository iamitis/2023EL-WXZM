const allTranscriptArea = document.getElementById('allTranscriptArea');
const allTranslateArea = document.getElementById('allTranslateArea');
const useTranslateButton = document.getElementById('useTranslate');

let isTranslated = false;

useTranslateButton.onclick = () => {
    if (!isTranslated) {
        allTranscriptArea.style.marginLeft = '-5%';
        allTranslateArea.style.display = 'block';
        isTranslated = true;
        useTranslateButton.textContent = '取消翻译';
    } else {
        allTranscriptArea.style.marginLeft = '0';
        allTranslateArea.style.display = 'none';
        isTranslated = false;
        useTranslateButton.textContent = '翻译文字';
    }
};