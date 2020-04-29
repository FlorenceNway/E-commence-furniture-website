const items = document.querySelector(".items");
const colorContainer = document.querySelector(".colorContainer");
const categoryContainer = document.querySelector(".categoryContainer");
const cartqty = document.querySelector('.cartqty')
const pagination_div = document.querySelector('.pagination');

const renderProduct = (product) => {
  const li = document.createElement('li')
  li.className = 'item';
  const item = `
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
        </div>`;

  li.innerHTML = item;

  li.addEventListener("click", () => {
      selectProduct(product)
  })

  items.append(li);

};

const renderProducts = (productsToRender) => {

  SetupPagination (productsToRender, pagination_div, products_per_page)

  const page1_btn = document.querySelector('.pagination button:first-child')
  page1_btn.click();
  page1_btn.classname = 'active'

};

//========== Pagination ==============================

let current_page = 1;
let products_per_page = 4;
let page = 1;

const SetupPagination = (productsToRender, pagination_div, products_per_page) => {

	pagination_div.innerHTML = "";

  let page_count = Math.ceil(productsToRender.length / products_per_page); //5


	for (i = 1; i < page_count; i++) {
    let btn = PaginationButton(i, productsToRender);

		pagination_div.appendChild(btn);
	}
}


const PaginationButton = (page, productsToRender) => { // page 1
  
  let start = products_per_page * (page - 1); 
	let end = start + products_per_page; 
  let paginatedItems = productsToRender.slice(start, end); 

	let button = document.createElement('button');
  button.innerText = page;
  
	if (current_page == page) {
    button.classList.add('active');
  }

	button.addEventListener('click', function () {
    current_page = page;
    items.innerHTML = "";

    paginatedItems.forEach(product => {
      renderProduct(product);
    })

		let current_btn = document.querySelector('.pagination button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
  });
  
	return button;
}



// ========== Color list ================
const renderColors = (products) => {
  const colours = [];
  for (let i = 0; i < products.length; i++) {
    products[i].colors.filter(color => {
      if (!colours.includes(color)) {
        colours.push(color);
      }
    });
  }

  colours.forEach((color) => {
    const color_item = `
        <div>
        <input type="checkbox" id=${color} name=${color} value=${color}>
        <label for=${color}> ${color} </label>
        </div>`;

    colorContainer.innerHTML += color_item;
  });
};

// ========== Catagories(type) list ================
const renderCategories = (products) => {
    const types = [];
    
      products.forEach(product => {
        if (!types.includes(product.type)) {
          types.push(product.type);
        }
      });
    
  
    types.forEach((type) => {
      const type_item = `
          <div>
          <input type="checkbox" id=${type} name=${type} value=${type}>
          <label for=${type}> ${type} </label>
          </div>`;
  
      categoryContainer.innerHTML += type_item;
    });
  };
  
//============== update the Cart quantity =============
  const renderNewCartSize = () => {
    console.log('cart',cart)
    cartqty.innerText = cart.length
}

