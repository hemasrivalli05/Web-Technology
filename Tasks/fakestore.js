async function getData() {
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    console.log(data)
    
    let productListElement = document.getElementById('productList');
    // let productDetailsElement = document.getElementById('productDetails');
    // data.forEach((product, index) => {

        data.forEach(product => {
        // Create elements for the product item in the sidebar
        let productItem = document.createElement('div');
        // console.log(productItem)
        // productItem.classList.add('product-item');
        productItem.setAttribute('class' , 'product-item')
        // productItem.idList.add('product-item');

        let image = document.createElement('img');
        image.src = product.image;

        let title = document.createElement('p');
        title.innerText = product.title;

        productItem.append(image, title);

        // Add click event listener to show product details
        productItem.addEventListener('click', () => showProductDetails(product));

        productListElement.appendChild(productItem);

        // if (index === 0) {
        //     showProductDetails(product);
        // }
    });
}

function showProductDetails(product) {
    let productDetailsElement = document.getElementById('productDetails');

    productDetailsElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        </div>
    `;
}

getData();
