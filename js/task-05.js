const input = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


function onInputBlur() {
    if (input.value.trim() === '') {
        outputName.textContent='незнакомец'
    }
    else {
        outputName.textContent = event.currentTarget.value;
    }
}
outputName.addEventListener('blur', onInputBlur);
input.addEventListener('blur',onInputBlur)