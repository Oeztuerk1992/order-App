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

function increaseAmount(raise) {
  let countUp = myDishes[raise];
  countUp.amount++;
  renderBasket();
  getTotalPrice();
}

function reduceAmount(reduce) {
  if (myDishes[index].amount > 0) {
    myDishes[index].amount--;
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
  const overlay = document.querySelector("#basket-overlay");

  const myDishesInBasket = myDishes.filter((dish) => dish.amount > 0);

  if (myDishesInBasket.length === 0) {
    if (overlay) overlay.style.display = "none";
    if (header) header.style.display = "none";
  } else {
    if (overlay) overlay.style.display = "none";
    if (header) header.style.display = "none";
  }
}

function closeBasketResponsive() {
  const overlay = document.querySelector("#basket-overlay");
  const counter = document.getElementById("basket-count");
  const basketContent = document.getElementById("basket-content");
  const basketSum = document.querySelector(".basket-sum");

  for (let i = 0; i < myDishes.length; i++) {
    myDishes[i].amount = 0;
  }

  counter.innerHTML = 0;

  basketContent.innerHTML = "Ihr Warenkorb ist leer.";
  basketSum.innerHTML = "";
  overlay.style.display = "none";
  header.style.display = "block";
  document.body.classList.remove("show-basket");

  contentDesign();
}

function orderNow() {
  const overlay = document.querySelector("#basket-overlay");
  const cleanBasket = document.querySelector("#basketHead");
  let emptyCart = document.querySelector("#basket-content");
  let showTotalPrice = document.querySelector(".basket-sum");

  overlay.style.display = "block";
  emptyCart.innerHTML = "Ihr Warenkorb ist leer.";
  showTotalPrice.innerHTML = "";
}

function closePopup() {
  const closePopup = document.querySelector(".close");
  const overlay = document.querySelector("#basket-overlay");

  overlay.style.display = "none";
  if (closePopup) closeBasketResponsive();
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
