// Menu data definition
const menuData = {
  "bibimbap": {
    name: "Bibimbap",
    price: 10,
    allergens: "Gluten, Soy",
    image: "images/bibimbap.jpg",
  },
  "jokbal": {
    name: "Jokbal",
    price: 20,
    allergens: "Gluten, Dairy",
    image: "images/jokbal.jpg",
  },
  "kimchi-stew": {
    name: "Kimchi Stew",
    price: 8,
    allergens: "Gluten, Soy",
    image: "images/kimchi-stew.jpg",
  },
  "naengmyeon": {
    name: "Naengmyeon",
    price: 10,
    allergens: "Gluten, Soy",
    image: "images/naengmyeon.webp",
  },
  "haemulpajeon": {
    name: "Hamulpajeon",
    price: 10,
    allergens: "Gluten, Soy",
    image: "images/haemulpajeon.webp",
  },
  "donkats": {
    name: "Donkats",
    price: 10,
    allergens: "Gluten, Soy",
    image: "images/donkats.webp",
  },
  "tteokbokki": {
    name: "Tteokbokki",
    price: 5,
    allergens: "Gluten, Soy",
    image: "images/tteokbokki.webp",
  }
};

// JavaScript execution starting moment
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const menuKey = params.get("menu");

  const menu = menuData[menuKey];

  // input menu data
  //document.getElementById("menu-title").textContent = menu.name;
  document.getElementById("menu-image").src = menu.image;
  document.getElementById("menu-image").alt = menu.name;
  document.getElementById("menu-name").textContent = menu.name;
  document.getElementById("menu-price").textContent = `Price: €${menu.price.toFixed(2)}`;
  document.getElementById("menu-allergens").textContent = `Allergens: ${menu.allergens}`;

  // quantity
  document.getElementById("increase-quantity").addEventListener("click", () => {
    const quantityInput = document.getElementById("menu-quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  document.getElementById("decrease-quantity").addEventListener("click", () => {
    const quantityInput = document.getElementById("menu-quantity");
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = Math.max(1, quantity - 1);
  });

  // add to cart
  document.getElementById("add-to-cart").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("menu-quantity").value);
    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === menu.name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ name: menu.name, price: menu.price, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${menu.name} has been added to the cart!`);
  });
});
