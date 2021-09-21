const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('change', input => {
    const text = input.target.value;

    if (text.length === inputLength) {
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.add('invalid')
    }
}

)