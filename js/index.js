const container = document.querySelector(".container");
const closebtn = document.querySelector(".right-menu a");
const sortOptionsContainer = document.querySelector(".sort-options")

const mobile_leftmenu = document.querySelector('.mobile-left-menu')
const mobile_leftmenu1 = document.querySelector('.mobile-left-menu li:nth-child(1)')
const mobile_leftmenu2 = document.querySelector('.mobile-left-menu li:nth-child(2)')
const mobile_leftmenu3 = document.querySelector('.mobile-left-menu li:nth-child(3)')
const mobile_leftmenu4 = document.querySelector('.mobile-left-menu li:nth-child(4)')

const row2 = document.querySelector(".grid-item2");
const row3 = document.querySelector(".grid-item3");
const row4 = document.querySelector(".grid-item4");

const Shoppage = document.querySelector('#Shop')
const Homepage = document.querySelector('#Home')
const filter = document.querySelector('.filters')
const showProducts = document.querySelector('.show-products')


const start = () => {
    const home = document.getElementById('Home')
    home.className += " active";
    home.style.display='block'
}
start()

const openTab = (e, tabName) => {
  let i, tabcontent, tablinks;

  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // if(tabName == 'Shop') {
  //   sortOptionsContainer.style.display = 'flex'
  // } 

  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}


const closeNav = () => {
  container.classList.remove('overlay')
  cartqty.style.color = 'blue'
  closebtn.classList.remove('closebtn')
  closebtn.innerText = ''
  
  mobile_leftmenu.style.display = 'none'
  row2.style.display = 'flex'
  row3.style.display = 'inline'
  row4.style.display = 'flex'

  showProducts.style.display = 'flex'
  filter.style.display = 'none'

}  

const leftMenuBarsIcon = () => {
  container.classList.add("overlay");
  cartqty.style.color = 'black'
  closebtn.innerText = 'X'
  closebtn.className = "closebtn"
  mobile_leftmenu.style.display = 'block'
  mobile_leftmenu2.style.display = 'block'
  mobile_leftmenu3.style.display = 'block'
  mobile_leftmenu4.style.display = 'block'
  row2.style.display = 'none'
  row3.style.display = 'none'
  row4.style.display = 'none'

} 

const rightMenuBarsIcon = () => {
  container.classList.add("overlay");
  cartqty.style.color = 'black'
  closebtn.innerText = 'X'
  closebtn.className = "closebtn"
  mobile_leftmenu.style.display = 'block'
  mobile_leftmenu2.style.display = 'none'
  mobile_leftmenu3.style.display = 'none'
  mobile_leftmenu4.style.display = 'none'
  row2.style.display = 'none'
  row3.style.display = 'none'
  row4.style.display = 'none'

  renderUponClick()
} 

  
const renderUponClick = () => {
  if(Shoppage.style.display =='block') {
    row3.style.display = 'inline'
    showProducts.style.display = 'none'
    filter.style.display = 'block'
    sortOptionsContainer.style.display = 'block'
  } else if(Homepage.style.display == 'block') {
    sortOptionsContainer.style.display = 'none'
  }
}


//   Carousel
const carousel = document.querySelector(".carousel");
const slideQuantity = document.querySelectorAll(".carousel li").length;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next")
let counter = 0;

const handleClick = (direction) => {
    counter = direction === "-" ? counter + 1: counter + slideQuantity - 1;

    const localCounter = Math.abs(counter % slideQuantity);

    const perc = `${localCounter}00%`;
    carousel.style.transform = `translate(-${perc}, 0)`;
    
}

prevBtn.addEventListener("click",() => handleClick('+'))
nextBtn.addEventListener("click",() => handleClick('-'))
  
// ------- Filter side ----------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ----Slider--------

const sliderLeft = document.querySelector("#slider0to500");
const sliderRight = document.querySelector("#slider51to1000");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
 
function fromSliderLeft(){
    from.innerText =`£${sliderLeft.value}`;
}
function toSliderRight(){
    to.innerText =`£${sliderRight.value}`;
}
sliderLeft.addEventListener("change",fromSliderLeft);
sliderRight.addEventListener("change",toSliderRight);



renderNewCartSize()
renderProducts(PRODUCTS)
renderColors(PRODUCTS)
renderCategories(PRODUCTS)
