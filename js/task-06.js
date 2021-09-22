const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('change',handleChangeInput)

function toggleClass(ref, add, rem) {
    ref.classList.add(add)
    ref.classList.remove(rem)
}
function handleChangeInput({ target: { value } }) {
    value.length === inputLength ? toggleClass(inputRef, 'valid', 'invalid') :
    toggleClass(inputRef, 'invalid', 'valid');
}