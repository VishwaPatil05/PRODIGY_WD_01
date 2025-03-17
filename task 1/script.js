const navbar = document.getElementById("navbar");

let cartItems = [];
let cartTotal = 0;  

const itemPrices = {
  "Starter: Garlic Bread": 150,
  "Starter: Spring Rolls": 270,
  "Starter: Crispy Corn": 180,
  "Starter: Crispy Veg": 250,
  "Starter: Manchow Soup": 160,
  "Starter: Veg Manchurian": 210,
  "Main Course: Paneer Butter Masala": 250,
  "Main Course: Butter Naan": 45,
  "Main Course: Veg Thali": 240,
  "Main Course: Veg Masala Pulav": 150,
  "Main Course: Dal Makhani": 160,
  "Main Course: Raita": 120,
  "Main Course: Raita": 120, 
  "Dessert: Chocolate Layered Sweet Treat": 190,
  "Dessert: Fluffy Cream Cheese Dessert": 240,
  "Dessert: Strawberry Panna Cotta": 230,
  "Dessert: Chocolate Mousse": 210,
  "Dessert: Chocolate Lasagna": 260,
  "Dessert: Mini Blueberry Cheesecakes": 150
};

window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

function addToCart(item) {
  
  if (itemPrices.hasOwnProperty(item)) {
    cartItems.push(item);
    cartTotal += itemPrices[item];  
    alert(`${item} added to the cart!`);
    updateCart();
  } else {
    alert(`Sorry, ${item} is not available.`);
  }
}

function updateCart() {
  const cartDiv = document.getElementById("cart-items");
  if (cartItems.length > 0) {
    cartDiv.innerHTML = cartItems.join("<br>") + `<br><br>Total: Rs ${cartTotal}`;
  } else {
    cartDiv.innerHTML = "No items in the cart";
  }
}

function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty! Please add some items.");
  } else {
    const paymentMethod = prompt(
      `Thank you for your order! You have ordered:\n\n${cartItems.join("\n")}\n\nTotal Bill: Rs ${cartTotal}\n\nPlease choose a payment mode:\n1. Credit Card\n2. Debit Card\n3. Cash on Delivery\n4. UPI\n\nEnter the number of your choice.`
    );

    let paymentMessage = '';
    
    switch (paymentMethod) {
      case '1':
        paymentMessage = "You have selected Credit Card.";
        break;
      case '2':
        paymentMessage = "You have selected Debit Card.";
        break;
      case '3':
        paymentMessage = "You have selected Cash on Delivery.";
        break;
      case '4':
        paymentMessage = "You have selected UPI.";
        break;
      default:
        paymentMessage = "Invalid payment option selected. Please choose a valid option.";
    }

    alert(`Thank you for your order!\n\nYou have ordered:\n\n${cartItems.join("\n")}\n\nTotal Bill: Rs ${cartTotal}\n\n${paymentMessage}`);

    cartItems = [];  
    cartTotal = 0;   
    updateCart();    
  }
}
