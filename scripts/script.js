update();
function update() {
  contentDesign();
  renderBasket();
}

function contentDesign() {
  const content = document.querySelector(".fast-food");
  content.innerHTML = "";

  for (let indexContent = 0; indexContent < myDishes.length; indexContent++) {
    content.innerHTML += getContentTemplate(indexContent);
  }
}
function renderBasket() {
  const basket = document.querySelector("#basket-content");

  basket.innerHTML = "";

  for (let indexBasket = 0; indexBasket < myDishes.length; indexBasket++) {
    if (myDishes[indexBasket].amount > 0) {
      basket.innerHTML += getBasketTemplate(indexBasket);
    }
  }
  getTotalPrice();
}

function addToBasket(indexBasket) {
  let basketValue = myDishes[indexBasket];
  basketValue.amount++;
  if (basketValue.amount === 0) {
    basketValue.amount = 1;
  }
  renderBasket();
  getTotalPrice();
}

function increaseAmount(raise) {
  let countUp = myDishes[raise];
  countUp.amount++;
  renderBasket();
  getTotalPrice();
}

function reduceAmount(reduce) {
  let basketValue = myDishes[reduce];
  if (basketValue.amount > 0) {
    basketValue.amount--;
  }

  renderBasket();
  getTotalPrice();
}

function deleteFromBasket(deleteIndex) {
  let deleteFromBasket = myDishes[deleteIndex];
  deleteFromBasket.amount = 0;
  renderBasket();
  getTotalPrice();
}

function getTotalPrice() {
  let showTotalPrice = document.querySelector(".basket-sum");
  let emptyCart = document.querySelector("#basket-content");
  let subtotal = 0;

  for (let indexCost = 0; indexCost < myDishes.length; indexCost++) {
    if (myDishes[indexCost].amount > 0) {
      subtotal += myDishes[indexCost].price * myDishes[indexCost].amount;
    }
  }
  if (subtotal > 0) {
    showTotalPrice.innerHTML = getTotalPriceTemplate(subtotal);
  } else {
    emptyCart.innerHTML = "Ihr Warenkorb ist leer.";
    showTotalPrice.innerHTML = "";
  }
}

function getBasketResponsive() {
  let basketResponsive = document.body.classList.add("show-basket");
  return basketResponsive;
}

function closeBasketResponsive() {
  let closeBasket = document.body.classList.remove("show-basket");
  return closeBasket;
}
