var form = document.querySelector('form');
var inputs = document.querySelectorAll('.typed-input');
var cards = document.querySelector('.account-cards');
var transactionArray = [];
var type = inputs[0].value;
var payee = inputs[2].value;
var amount = inputs[3].value;
var category = inputs[4].value;

form.addEventListener('submit', onFormClick);

window.addEventListener("load", pageLoad);

function pageLoad() {
  if ("transaction" in localStorage) {
     checkLocalStorage();
  }
}

function onFormClick() {
  instantiateCard(type.value, payee.value, amount.value, category.value);
}

function parseLocalStorage() {
  var getItem = localStorage.getItem("transaction");
  var storageArray = JSON.parse(getItem);
  return storageArray;
}

function checkLocalStorage() {
  var storageArray = parseLocalStorage();
    for (var i = 0; i < storageArray.length; i++) {
      instantiateCard(storageArray[i].type, storageArray[i].payee, storageArray[i].amount, storageArray[i].category);
    }
}

function addCard(newTransaction) {
  cards.innerHTML += `
    <section id=${newTransaction.id} class="account-card">
      <img class="account-icon" src="./assets/${newTransaction.type}.svg" alt="Expenses Icon">
      <div class="account-title">
        <h3>${newTransaction.payee}</h3>
      </div>
      <p>${newTransaction.category}</p>
      <h4>$${newTransaction.amount}</h4>
    </section>
  `;
}

function instantiateCard(type, payee, amount, category) {
  event.preventDefault()
  var transaction = new Transaction(type, payee, amount, category);
  transactionArray.push(transaction);
  addCard(transaction);
  transaction.saveToStorage(transactionArray);
}
