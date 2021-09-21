const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;

inputRef.addEventListener('change', input => {
    const text = input.target.value;

    if (text.length == inputLength){
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')
    }
    else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
}

)