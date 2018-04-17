var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.random() * 100
 var roundedPrice = Math.floor(price)
 cart.push({[item]: roundedPrice})
 console.log(item + " has been added to your cart.")
 return cart;
}

function viewCart() {
if (cart.length === 0){
  console.log("Your shopping cart is empty.")
} else {
  var itemsAndPrices = [];
  for (var i in cart) {
    var itemAndPrice = cart[i];
    for (var key in itemAndPrice){
      itemsAndPrices.push(key + " at $" + itemAndPrice[key])
    }
  }
  var cartItems = itemsAndPrices.join(", ");
  console.log("In your cart, youhave " + cartItems + ".")
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
