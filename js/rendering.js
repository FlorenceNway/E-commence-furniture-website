
const items = document.querySelector(".items")

const renderProduct = product => {
    const li = `
    <li class="item">
        <img src="./img/bedroom1.jpg" alt="" >
        <div class="item_details">
            <header>
                <h4>${product.name}</h4>
                <div class="extra_details">
                    <p>${product.type}</p>
                    <p>$${product.price}</p>
                </div>
            </header>
            <div class="cart"><i class="fas fa-shopping-cart"></i></div>
        </div>
    </li>`

    items.innerHTML += li
}

const renderProducts = productsToRender => {
    items.innerHTML = ""
    console.log(productsToRender.length)
    productsToRender.forEach(product => {
        renderProduct(product)
    }) 
}   

