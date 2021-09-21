const counterValue = document.querySelector('#value');
const increment = () => counterValue.textContent++;
const decrement = () => counterValue.textContent--;

const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment)