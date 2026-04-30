let total = 0;

function addItemToOrder(name, price) {
  total = total + price;
  console.log(price, total, name);
  console.log("Der Gesamtpreis liegt bei" + total + "€");
  const totalValueElement = document.getElementById("total-value");
  totalValueElement.innerHTML = total + "€"; //alternativ: totalValueElement.innerHTML= `${total} €`;//

  const ordersItemsElement = document.getElementById("orders-items");
  ordersItemsElement.innerHTML =
    ordersItemsElement.innerHTML +
    `<p class="order-item">${name}: ${price}€</p>`;
}

function renderTotalValue() {
  //weil es mehrmals ausgegeben wird
  const totalValueElement = document.getElementById("total-value");
  totalValueElement.innerHTML = total + "€"; //order Items
}

function reset() {
  total = 0;
  const ordersItemsElement = document.getElementById("orders-items");
  ordersItemsElement.innerHTML = "";
  renderTotalValue(); //reset function um die Value zu nullen
}
function checkoutInHouse() {
  //gib einen alert aus
  alert(`Bestellung in Höhe von ${total}€ für vor Ort aufgeben`);
  //reset
  reset();
}

function checkoutDelivery() {
  //check den Mindestestellwert
  if (total < 20) {
    alert("Der Mindestbestellwert beträgt 20€");
  } else {
    addItemToOrder("Liefergebübhr", 2.5);
    alert(`Bestellung in Höhe von ${total}€ für Lieferung aufgeben`);
    reset();
  }
}
