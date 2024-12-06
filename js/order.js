// Load cart and render the table
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const tableBody = document.getElementById('order-table');
  let total = 0;

  // Clear previous table content
  tableBody.innerHTML = '';

  // Populate the order table
  cart.forEach((item, index) => {
    if (item.name && item.price && item.quantity) { // Ensure all data exists
      const row = document.createElement('tr');
      const itemTotal = item.price * item.quantity;
      row.innerHTML = `
        <td>${item.name}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, -1)">-</button>
          ${item.quantity}
          <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, 1)">+</button>
        </td>
        <td>€${item.price.toFixed(2)}</td>
        <td>€${itemTotal.toFixed(2)}</td>
        <td><button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button></td>
      `;
      tableBody.appendChild(row);
      total += itemTotal; // Add to total
    }
  });

  // Update the total amount
  document.getElementById('total-amount').textContent = `Total: €${total.toFixed(2)}`;
}

// Update item quantity
function updateQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
      cart[index].quantity = 1; // Minimum quantity is 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Re-render table
  }
}

// Remove an item from the cart
function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); // Remove item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart(); // Re-render table
}

// Clear the cart
function clearCart() {
  localStorage.removeItem('cart'); // Clear localStorage
  loadCart(); // Re-render table
}

// Load cart on page load
window.onload = loadCart;
