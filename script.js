
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(json => {
    let allProducts = json;
    console.log(allProducts);

    let productsList = document.getElementById("products-list");
    for (let i = 0; i < allProducts.length; i++) {
        let productsElement = document.createElement("div");

        productsElement.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3", "col-xxl-3");

        productsElement.innerHTML = `
            <div class="card d-flex flex-column h-100">
                <img src="${allProducts[i].image}" class="card-img-top" alt="${allProducts[i].title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${allProducts[i].title}</h5>
                    <p class="card-text description">${allProducts[i].description}</p>
                    <div class="mt-auto">
                        <p class="card-text price">$${allProducts[i].price}</p>
                        <button type="button" class="btn btn-secondary">Add to Cart</button>
                        <button type="button" class="btn btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>`;
        productsList.appendChild(productsElement);
    }
});
