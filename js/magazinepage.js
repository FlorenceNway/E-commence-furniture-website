// const carousel = productDetailsContainer.querySelector(".carousel")
// const carouselLeftButton = carousel.querySelector("button:nth-of-type(1)")
// const carouselRightButton = carousel.querySelector("button:nth-of-type(2)")
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

    let imageIndex = 0
    const images = ['./img/bedroom1.jpg','./img/bedroom2.jpg','./img/furniture1.jpg','./img/furniture2.jpg']

    //productImage.src = images[imageIndex]

    // if (cart.map(p => p.id).includes(product.id)) {
    //     addToCartButton.innerText = "Remove from cart"
    // } else {
    //     addToCartButton.innerText = "Add to cart"
    // }


    addToCartButton.onclick = () => {
        addToCart(product)
    }

    // carouselRightButton.onclick = () => {
    //     imageIndex++
    //     if (imageIndex > product.images.length - 1) {
    //         imageIndex = 0
    //     }
    //     console.log("NEXT IMAGE", imageIndex)
    //     productImage.src = product.images[imageIndex]
    // }

    // carouselLeftButton.onclick = () => {
    //     imageIndex--
    //     if (imageIndex < 0) {
    //         imageIndex = product.images.length - 1
    //     }
    //     console.log("PREV IMAGE", imageIndex)
    //     productImage.src = product.images[imageIndex]
    // }

}
renderProductDetails(PRODUCTS[0])