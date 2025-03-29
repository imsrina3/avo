function addToCart(name, price, image) {
    const cart = document.getElementById('cart');
    const item = document.createElement('li');
    item.className = 'flex items-center mb-4';
    item.innerHTML = `
        <img src="${image}" alt="${name}" class="w-16 h-16 object-cover mr-4">
        <div>
            <h3 class="text-lg font-semibold">${name}</h3>
            <p class="text-gray-700">price: ${price}$</p>
        </div>
    `;
    cart.appendChild(item);
}