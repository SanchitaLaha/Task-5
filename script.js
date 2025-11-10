const products = [
  { name: "Laptop", img: "https://picsum.photos/200?random=1", desc: "High performance laptop" },
  { name: "Headphones", img: "https://picsum.photos/200?random=2", desc: "Noise-cancelling headphones" },
  { name: "Smartphone", img: "https://picsum.photos/200?random=3", desc: "Latest model smartphone" },
  { name: "Watch", img: "https://picsum.photos/200?random=4", desc: "Smart watch with features" },
  { name: "Camera", img: "https://picsum.photos/200?random=5", desc: "Professional digital camera" }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");

function render(productsToRender) {
  productGrid.innerHTML = "";
  productsToRender.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <button>Buy Now</button>
    `;
    productGrid.appendChild(card);
  });
}

// Initial render
render(products);

// Search functionality
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  render(filtered);
});
