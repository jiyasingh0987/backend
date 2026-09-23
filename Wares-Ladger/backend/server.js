

// --- Step 1: Import the tools we need ---
const express = require("express"); 
const cors = require("cors");       // lets the React app (different port) talk to us

const app = express();
const PORT = 5000;

// This lets our server understand JSON sent from the frontend
app.use(express.json());

// This lets the React app (running on a different port) send requests here
app.use(cors());

// --- Step 2: Our "database" ---
// This is just an array of objects living in memory.
// Every product has: id, name, category, price, stock, color, rating
let products = [
  { id: 1, name: "Enamel Camp Mug", category: "Kitchen", price: 18, stock: 42, color: "#2B6E68", rating: 4 },
  { id: 2, name: "Waxed Canvas Tool Roll", category: "Workshop", price: 64, stock: 15, color: "#8A5A34", rating: 5 },
  { id: 3, name: "Brass Pocket Compass", category: "Outdoors", price: 32, stock: 27, color: "#B8860B", rating: 4 },
  { id: 4, name: "Cast Iron Skillet", category: "Kitchen", price: 45, stock: 33, color: "#3A3A3A", rating: 5 },
  { id: 5, name: "Wool Felt Coasters", category: "Home", price: 22, stock: 61, color: "#7A4B8A", rating: 3 }
];

// We use this number to give every NEW product a unique id.
// Every time we add a product, we increase it by 1.
let nextId = 6;

// --- Step 3: The 5 CRUD routes ---

// (R)EAD — get the full list of products
// Try it in your browser: http://localhost:5000/products
app.get("/products", (req, res) => {
  res.json(products)
});

// (R)EAD — get ONE product by its id
// Example: http://localhost:5000/products/2
app.get("/products/:id", (req, res) => {
  
  
});

// (C)REATE — add a brand new product
// The frontend sends the new product's details in the request body
app.post("/products", (req, res) => {
 
});

// (U)PDATE — change an existing product
app.put("/products/:id", (req, res) => {
  
});

// (D)ELETE — remove a product
app.delete("/products/:id", (req, res) => {
  
});

// --- Step 4: Start the server ---
app.listen(PORT, () => {
  console.log(`Server is running! Open http://localhost:${PORT}/products in your browser.`);
});
