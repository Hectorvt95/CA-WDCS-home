function addToCart(itemName, itemPrice) {
    // Retrieve existing cart from localStorage or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        // Increase quantity if item exists
        existingItem.quantity += 1;
    } else {
        // Add new item if it doesn't exist
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to the cart!`);
}
