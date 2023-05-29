const useSimple = document.getElementById('useSimple');
const girl = document.getElementById('title0');

let isSimple = false;

useSimple.onclick = () => {
    if (!isSimple) {
        girl.style.display = 'none';
        isSimple = true;
        useSimple.textContent = '返回';
    } else {
        girl.style.display = 'block';
        isSimple = false;
        useSimple.textContent = '简洁模式';
    }
};