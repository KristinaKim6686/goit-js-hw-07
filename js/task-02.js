const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('ul');

const ingredientsRef = ingredients.reduce((acc, ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  return [...acc, listItem];
},[]
)
ingredientsList.append(...ingredientsRef)
console.log(ingredientsList)