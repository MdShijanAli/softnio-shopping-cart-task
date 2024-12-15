let quantityEl = document.getElementById("quantity");

// Select all color items
let colorItems = document.querySelectorAll('.color-item');
let sizeItems = document.querySelectorAll('.size-item');

// Select the image element
let productImage = document.getElementById('product-image');

colorItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    colorItems.forEach(i => {
      i.classList.remove('border-2'); 
    });

    item.classList.add('border-2'); 

    switch (index) {
      case 0:
        productImage.src = "../assets/images/product-gallery.png";
        break;
      case 1:
        productImage.src = "../assets/images/cyan.png";
        break;
      case 2:
        productImage.src = "../assets/images/blue.png";
        break;
      case 3:
        productImage.src = "../assets/images/lg-a 3.png";
        break;
      default:
        productImage.src = "../assets/images/product-gallery.png";
        break;
    }
  });
});

sizeItems.forEach((item) => {
  item.addEventListener('click', () => {
    sizeItems.forEach(i => {
      i.classList.remove('border-[#6576FF]'); 
    });

    item.classList.add('border-[#6576FF]'); 
  });
});


function increment() {
  let currentValue = parseInt(quantityEl.value);
  if (!isNaN(currentValue)) {
    quantityEl.value = currentValue + 1;
  }
}

function decrement() {
  let currentValue = parseInt(quantityEl.value);
  if (!isNaN(currentValue) && currentValue > 0) {
    quantityEl.value = currentValue - 1;
  }
}

let cartCountEl = document.getElementById("cartCount");
let checkoutButton = document.getElementById("checkoutButton");
function addToCart() {
  if(parseInt(quantityEl.value) <= 0) {
    alert("Please select a quantity");
    return;
  }
  checkoutButton.classList.remove("hidden");
  cartCountEl.innerText = parseInt(quantityEl.value) || 0;
}

checkoutButton.addEventListener("click", () => {
  openModal();
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

function openModal() {

  modal.classList.remove("hidden");

  setTimeout(() => {
    modalContent.classList.remove("scale-75", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

function onClose() {
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-75", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); 
}

let loaderEl = document.getElementById("loader");
function onSubmit() {

  console.log("Submitting form...");
  loaderEl.classList.remove("hidden");
  
  setTimeout(() => {
    document.getElementById("successMessage").classList.remove("hidden");
    loaderEl.classList.add("hidden");
    quantityEl.value = 0;
    checkoutButton.classList.add("hidden");
    onClose();
  }, 3000);
  
}

function successClose() {
  document.getElementById("successMessage").classList.add("hidden");
}