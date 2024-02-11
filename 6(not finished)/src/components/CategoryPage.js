
function CategoryPage(categoryData) {

    const pageContent = document.createElement('div');


    if (!categoryData) {

        pageContent.textContent = 'Category not found';
    } else {



        const { name, parentCategory, subcategories, products } = categoryData;


        const categoryNameElement = document.createElement('h2');
        categoryNameElement.textContent = `Category: ${name}`;

        const parentCategoryElement = document.createElement('p');
        parentCategoryElement.textContent = `Parent Category: ${parentCategory ? parentCategory : 'None'}`;

        const subcategoriesElement = document.createElement('p');
        subcategoriesElement.textContent = `Subcategories: ${subcategories.join(', ')}`;

        const productsElement = document.createElement('p');
        productsElement.textContent = `Products: ${products.join(', ')}`;


        pageContent.appendChild(categoryNameElement);
        pageContent.appendChild(parentCategoryElement);
        pageContent.appendChild(subcategoriesElement);
        pageContent.appendChild(productsElement);
    }


    return pageContent;
}


export { CategoryPage };
