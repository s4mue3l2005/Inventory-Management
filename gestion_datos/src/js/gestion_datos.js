// Base product object
let products = JSON.parse(localStorage.getItem("products")) || {
    1: { id: '1', name: 'Laptop', price: 1200 },
    2: { id: '2', name: 'Mouse', price: 25 },
    3: { id: '3', name: 'Keyboard', price: 45 }
};

// Data structures
const productsSet = new Set(Object.values(products));
const productsMap = new Map();
productsSet.forEach(prod => {
    const category = prod.name.toLowerCase().includes('laptop') ? 'Technology' : 'Accessories';
    productsMap.set(category, prod.name);
});

// DOM elements
const form = document.getElementById('productForm');
const productList = document.getElementById('productList');
let editMode = false;
let currentProductId = null;

// Show products
function showProducts() {
    productList.innerHTML = '';
    Object.entries(products).forEach(([id, prod]) => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
        <p><strong>ID:</strong> ${prod.id}</p>
        <p><strong>Name:</strong> ${prod.name}</p>
        <p><strong>Price:</strong> $${prod.price}</p>
        <button onclick="editProduct('${prod.id}')">Edit</button>
        <button onclick="deleteProduct('${prod.id}')">Delete</button>
      `;
        productList.appendChild(div);
    });
}

// Delete product
window.deleteProduct = function (id) {
    delete products[id];
    // Update localStorage and re-render
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
}

// Edit product
window.editProduct = function (id) {
    const product = products[id];
    if (!product) return;

    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = getCategoryFromProduct(product.name);

    editMode = true;
    currentProductId = id;
    form.querySelector('button[type="submit"]').textContent = 'Update';
}

function getCategoryFromProduct(name) {
    for (let [cat, prodName] of productsMap.entries()) {
        if (prodName === name) return cat;
    }
    return '';
}

// Check for duplicate product
function duplicateProduct(id) {
    return products.hasOwnProperty(id);
}

// Add / Edit product
form.addEventListener('submit', e => {
    e.preventDefault();

    const id = document.getElementById('productId').value.trim();
    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value.trim());
    const category = document.getElementById('productCategory').value.trim();

    if (!id || !name || isNaN(price) || !category) {
        alert('All fields are required.');
        return;
    }

    // Validación de precio negativo
    if (price < 0) {
        alert('Price cannot be negative.');
        return;
    }

    if (editMode) {
        products[currentProductId] = { id, name, price };
        productsMap.set(category, name);
        editMode = false;
        currentProductId = null;
        form.querySelector('button[type="submit"]').textContent = 'Add';
    } else {
        if (duplicateProduct(id)) {
            alert('Duplicate product.');
            return;
        }
        const newProduct = { id, name, price };
        products[id] = newProduct;
        productsSet.add(newProduct);
        productsMap.set(category, name);
    }

    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Render updated list
    showProducts();
    form.reset();
});

// Console logs
console.log('Iteration with for...in of the products object:');
for (const key in products) {
    console.log(`${key}:`, products[key]);
}

console.log('\nIteration with for...of on the Set:');
for (const prod of productsSet) {
    console.log(prod);
}

console.log('\nIteration of the Map with forEach:');
productsMap.forEach((name, category) => {
    console.log(`Category: ${category} => Product: ${name}`);
});

// Show products on page load
showProducts();