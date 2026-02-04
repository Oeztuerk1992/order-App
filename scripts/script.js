const countDown = document.getElementById("countdown-timer");
const startMinutes = 45;
let time = startMinutes * 60;
const header = document.querySelector("header");

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
  let btnResponsive = document.querySelectorAll(".btnResponsive");
  let amountResponsiveElements = document.querySelectorAll(".amountResponsive");

  basketValue.amount++;

  btnResponsive[indexBasket].innerHTML = "Added";

  renderBasket();
  getTotalPrice();
  updateBasketButtonCount();
}

function updateBasketButtonCount() {
  const counter = document.getElementById("basket-count");
  let totalAmount = 0;

  for (let indexBasket = 0; indexBasket < myDishes.length; indexBasket++) {
    totalAmount += myDishes[indexBasket].amount;
  }

  counter.innerHTML = totalAmount;
}

function changeAmount(raise, reduce) {
  if (raise !== null) {
    myDishes[raise].amount++;
  }

  if (reduce !== null && myDishes[reduce].amount > 0) {
    myDishes[reduce].amount--;
  }

  renderBasket();
  getTotalPrice();
  updateBasketButtonCount();
}

function deleteFromBasket(deleteIndex) {
  myDishes[deleteIndex].amount = 0;
  renderBasket();
  getTotalPrice();
  updateBasketButtonCount();
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
  document.body.classList.add("show-basket");
}

function closeBasketResponsive() {
  document.body.classList.remove("show-basket");
  const overlay = document.querySelector("#basket-overlay");
  const counter = document.getElementById("basket-count");
  const basketContent = document.getElementById("basket-content");
  const basketSum = document.querySelector(".basket-sum");

  for (let indexLength = 0; indexLength < myDishes.length; indexLength++) {
    myDishes[indexLength].amount = 0;
  }

  counter.innerHTML = 0;

  basketContent.innerHTML = "Ihr Warenkorb ist leer.";
  basketSum.innerHTML = "";

  document.body.classList.remove("show-basket");
  document.body.classList.remove("order-success");

  contentDesign();
}

function orderNow() {
  document.body.classList.add("order-success");

  const emptyCart = document.querySelector("#basket-content");
  const showTotalPrice = document.querySelector(".basket-sum");

  emptyCart.textContent = "Ihr Warenkorb ist leer.";
  showTotalPrice.textContent = "";
}

setInterval(timeCountdown, 1000);

function timeCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countDown.innerHTML = `${minutes}: ${seconds}`;
  time--;
}

function showOrderMessage() {
  const basketContent = document.querySelector(".basket");
  basketContent.innerHTML = getEmptyBasketTemplate();
}

function backToShopping() {
  const backToShopping = window.location.reload();

  return backToShopping;
}
