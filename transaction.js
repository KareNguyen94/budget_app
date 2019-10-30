class Transaction {

  constructor(type, payee, amount, category, id) {
    this.type = type;
    this.payee = payee;
    this.amount = amount;
    this.category = category;
    this.id = id || Date.now();
  }

  saveToStorage(array){
    localStorage.setItem("transaction", JSON.stringify(array));
  }
}
