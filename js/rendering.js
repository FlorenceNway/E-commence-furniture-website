const items = document.querySelector(".items");
const colorContainer = document.querySelector(".colorContainer");
const categoryContainer = document.querySelector(".categoryContainer");

const renderProduct = (product) => {
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
    </li>`;

  items.innerHTML += li;
};

const renderProducts = (productsToRender) => {
  items.innerHTML = "";

  productsToRender.forEach((product) => {
    renderProduct(product);
  });
};

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