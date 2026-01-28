function getContentTemplate(indexContent) {
  const dish = myDishes[indexContent];
  return `  <div class="fast-food">
                <div class="description">
                    <h3> ${dish.name}</h3>
                    <p> ${dish.description}</p>
                    <span>${dish.price}€ </span>
                    <button class="btnResponsive" onclick="addToBasket(${indexContent})">Add to basket</button>
                    <p class="amountResponsive" id="amountResponsive">
                      <span class="material-symbols-outlined"> shopping_cart${dish.amount}</p></span> 
                      </p>
                </div>
                <div>
                
                  <button class="btn" onclick="addToBasket(${indexContent}) ">&#43</button>
                </div>
            </div>

            `;
}

function getBasketTemplate(indexContent) {
  const dish = myDishes[indexContent];
  return `
      <div class="basket-dish">
          <div class="basket-description">
             <h3> ${dish.name}</h3>
              <img src="img/delete_icon.png" onclick ="deleteFromBasket(${indexContent})" class="trash_dish"/>
                  <div class="basketQuantity">
                      <button type="button" class="reduce" onclick="reduceAmount(${indexContent})">-</button>
                      <span id="change">${(dish.price * dish.amount).toFixed(
                        2
                      )} € </span>
                      <button type="button" class="increase"  onclick="increaseAmount(${indexContent})" >+</button>
                  </div>
                      <p class="amount" id="amount">
                      Menge: ${myDishes[indexContent].amount}x
                      </p>
          </div>
      </div>

              `;
}

function getTotalPriceTemplate(subtotal) {
  return `
    <table >
    <tr class="total-table">
      <td> Zwischensumme</td>
      <td> ${subtotal.toFixed(2)} €</td>
    </tr>
    <tr class="total-table">
      <td> Lieferkosten</td>
      <td> ${myDishes[0].deliveryCost.toFixed(2)} €</td>
    </tr>
    <tr class="total-table">
      <td class="bold"> Gesamt</td>
      <td class="bold"> ${(subtotal + myDishes[0].deliveryCost).toFixed(
        2
      )} €</td>
    </tr>
    </table>
    <button class="order-btn" onclick="orderNow()">Jetzt bestellen</button>
    
  `;
}

function getEmptyBasketTemplate() {
  return `
    <div class="empty-basket">
      <h2>Vielen Dank!</h2>
      <button class="btn_back" onclick="backToShopping()">X</button>
      <p>Ihre Bestellung wurde erfolgreich aufgegeben.</p>
    </div>
  `;
}

function getAmountResponsiveTemplate(indexContent) {
  const basketValue = myDishes[indexContent];
  return `
    <p class="amount_responsive" id="amountResponsive">
     <span class="material-symbols-outlined"> shopping_cart${basketValue.amount}</span>
    </p>
  `;
}
