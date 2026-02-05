function getContentTemplate(indexContent) {
  const dish = myDishes[indexContent];
  return `  <div class="fast-food">
                <div class="description">
                    <h3> ${dish.name}</h3>
                    <p> ${dish.description}</p>
                    <span>${dish.price}€ </span>
                    <div class="designResponsive">
                      <button class="btnResponsive" onclick="addToBasket(${indexContent})">Add to basket</button>
                    </div>
                </div>
                
                
                <button class="icon-btn" onclick="addToBasket(${indexContent})">
                  <span class="material-symbols-outlined">add</span>
                </button>
                  
             

                  
                </div>
              </div>
            </div>
            `;
}

function getBasketTemplate(indexContent) {
  const dish = myDishes[indexContent];

  return `
    <div class="basket-dish body.show-basket header">
      <div class="basket-description">
        <div class="trash">
          <img src="img/delete_icon.png"
               onclick="deleteFromBasket(${indexContent})"
               class="trash_dish"/>
        </div>

        <h3>${dish.name}</h3>

        <div class="basketQuantity">
         <button class="material-symbols-outlined" onclick="changeAmount(false, ${indexContent})">remove</button>

          <span>
            ${(dish.price * dish.amount).toFixed(2)} €
          </span>

         <button class="material-symbols-outlined" onclick="changeAmount(true, ${indexContent})">add</button>
        </div>

        <p class="amount">
          Menge: ${dish.amount}x
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
        2,
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
