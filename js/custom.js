// Fetch products from Fake Store API
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function renderProducts(products) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
      <div class="card bg-light h-100 position-relative">
        <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 300px; object-fit: cover;">
        <button class="btn btn-dark position-absolute" style="top:10px; left:10px;">Add to Cart</button>
        <div class="card-body d-flex justify-content-between align-items-center">
          <h6 class="card-title mb-0">${product.title}</h6>
          <span class="text-dark fw-bold">$${product.price}</span>
        </div>
        <div class="card-footer text-muted text-start">
          Category: ${product.category}
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

// Call the function
fetchProducts();
