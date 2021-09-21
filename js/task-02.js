const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('ul');

const ingredientsRef = ingredients.forEach(ingredient => {
  const listItems = document.createElement('li');
  listItems.textContent = ingredient;
  ingredientsList.appendChild(listItems)
})
document.body.append(ingredientsList)

console.log(ingredientsList)