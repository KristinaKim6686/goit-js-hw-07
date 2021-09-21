const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
  refs.text.style.fontSize = e.target.value + 'px';
}


// alternative 
// const refInput = document.getElementById('font-size-control');
  
//   refInput.addEventListener('input', () => {
//   const size = event.target.value;
//   text.style.fontSize = size + 'px';
// })