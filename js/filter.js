const sortOptionsContainer = document.querySelector("#sort-options")
const sortOptionInputs = sortOptionsContainer.querySelectorAll("input")
const slideContainer = document.querySelector("#sliderBox")

const createFilterObject = () => {
    let from = parseInt(sliderLeft.value)
    let to = parseInt(sliderRight.value)

    const selectedColors = []

    colorContainer.querySelectorAll("input:checked").forEach(colorCheckbox => {
        selectedColors.push(colorCheckbox.value)
    })

    const selectedCategories = []

    categoryContainer.querySelectorAll("input:checked").forEach(categoryCheckbox => {
        selectedCategories.push(categoryCheckbox.value)
    })

    return {
        from: from,
        to: to,
        selectedColors: selectedColors,
        selectedCategories: selectedCategories
    }
}

const applyFilters = (priceFrom, priceTo, selectedColors, selectedCategories) => {
    console.log("APPLY FILTERS", priceFrom, priceTo, selectedColors, selectedCategories)

    const filteredProducts = PRODUCTS.filter(product => {
        if (product.price >= priceFrom && product.price <= priceTo) {
            return true
        } else {
            return false
        }
    }).filter(product => {
        if (selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color))){
            return true
        } else {
            return false
        }
     }).filter(product => {
        if (selectedCategories.length === 0 || selectedCategories.includes(product.type)) {
            return true
        } else {
            return false
        }
    })
    renderProducts(filteredProducts)
}

colorContainer.addEventListener('change', () => {
    const filterObject = createFilterObject()
    applyFilters(filterObject.from, filterObject.to, filterObject.selectedColors, filterObject.selectedCategories)
})
categoryContainer.addEventListener('change', () => {
    const filterObject = createFilterObject()
    applyFilters(filterObject.from, filterObject.to, filterObject.selectedColors, filterObject.selectedCategories)
})
slideContainer.addEventListener('change', () => {
    const filterObject = createFilterObject()
    applyFilters(filterObject.from, filterObject.to, filterObject.selectedColors, filterObject.selectedCategories)
})


const applySortOption = (sortOption) => {
    if (sortOption === "DEFAULT") {
        PRODUCTS.forEach((product) => {
            return product
        })
    } else if (sortOption === "PRICE_ASC") {
        PRODUCTS.sort((a, b) => {
            return a.price - b.price
        })
    } else if (sortOption === "PRICE_DES") {
        PRODUCTS.sort((a, b) => {
            return b.price - a.price
        })
    }
}

sortOptionsContainer.addEventListener("change", (event) => {
    console.log("CHANGE OF SORT TYPE", event.target.value)
    applySortOption(event.target.value)

    const filterObject = createFilterObject()

    console.log("FILTER OBJECT", filterObject)

    applyFilters(filterObject.from, filterObject.to, filterObject.selectedColors, filterObject.selectedCategories)
})