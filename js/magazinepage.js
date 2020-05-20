
const fwd = document.querySelector('#fwd')
const bwd = document.querySelector('#bwd')
const productImage = document.querySelector('.main-img img')


const productName = document.querySelector('.product-name')
const productPrice = document.querySelector('.price')
const description = document.querySelector('.description')

const addToCartButton = document.querySelector('.add-to-cart');

const selectProduct = (product) => {
    console.log("SELECT PRODUCT", product)
    openTab(event, 'Magazine');
    renderProductDetails(product)
}

const renderProductDetails = product => {
    console.log("RENDER PRODUCT DETAILS", product)

    productName.innerText = product.name
    productPrice.innerText = `£${product.price}`
    description.innerText = product.description

    if (cart.map(p => p.id).includes(product.id)) {
        addToCartButton.innerText = "REMOVE FROM CART"
        addToCartButton.style.background = '#00C98C'
    } else {
        addToCartButton.innerText = "ADD TO BASKET"
        addToCartButton.style.background = '#000'
    }

    addToCartButton.onclick = () => {
        addToCart(product)
    }

    let imageIndex = 0
    const images = ['./img/bedroom1.jpg','./img/bedroom2.jpg','./img/furniture1.jpg','./img/furniture2.jpg']

    productImage.src = images[imageIndex]
    console.log(images[imageIndex])

    fwd.addEventListener('click', () => {
        imageIndex++
        if (imageIndex > images.length - 1) {
            imageIndex = 0
        }
        console.log("NEXT IMAGE", imageIndex)
        productImage.src = images[imageIndex]
    })

    bwd.addEventListener('click', () => {
        imageIndex--
        if (imageIndex < 0) {
            imageIndex = images.length - 1
        }
        console.log("PREV IMAGE", imageIndex)
        productImage.src = images[imageIndex]
    })

}

const cart = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];

const addToCart = (product) => {
    if (cart.map(p => p.id).includes(product.id)) {
        console.log("REMOVE FROM CART", product)
        cart.splice(cart.indexOf(product), 1)
    } else {
        console.log("ADD TO CART", product)
        cart.push(product)
    }

    if (cart.map(p => p.id).includes(product.id)) {
        addToCartButton.innerText = "REMOVE FROM CART"
        addToCartButton.style.background = '#00C98C'
    } else {
        addToCartButton.innerText = "ADD TO BASKET"
        addToCartButton.style.background = '#000'
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    renderNewCartSize()
}


const images = ['./img/bedroom3.jpg','./img/bedroom2.jpg','./img/furniture1.jpg','./img/furniture2.jpg']
currentSlide(0);

function currentSlide(n) {
    if(n == 0) {
        productImage.src = images[n]
    }else {
        productImage.src = images[n-1] 
    }
}   


renderProductDetails(PRODUCTS[0])

