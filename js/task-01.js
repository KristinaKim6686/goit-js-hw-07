const categories = document.querySelectorAll('li.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(categories =>
    console.log(`Категория: ${categories.firstElementChild.textContent},
        Количество: ${categories.lastElementChild.children.length}`));
