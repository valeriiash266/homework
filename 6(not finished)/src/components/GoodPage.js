


function GoodPage(goodData) {

    const pageContent = document.createElement('div');


    if (!goodData) {

        pageContent.textContent = 'Good not found';
    } else {



        const { name, description, images, categories } = goodData;


        const goodNameElement = document.createElement('h2');
        goodNameElement.textContent = `Good: ${name}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${description}`;

        const imagesElement = document.createElement('div');
        imagesElement.innerHTML = images.map(image => `<img src="${image}" alt="Good Image">`).join('');

        const categoriesElement = document.createElement('p');
        categoriesElement.textContent = `Categories: ${categories.join(', ')}`;


        pageContent.appendChild(goodNameElement);
        pageContent.appendChild(descriptionElement);
        pageContent.appendChild(imagesElement);
        pageContent.appendChild(categoriesElement);
    }


    return pageContent;
}


export { GoodPage };
