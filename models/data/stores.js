import "dotenv/config.js"
import "../../config/database.js"
import Store from '../Store.js'

const stores = [
  { name: "Central Supermarket", address: "123 Main Street", phone: 5551234567 },
  { name: "TechPlus Electronics Store", address: "456 Technology Avenue", phone: 5552345678 },
  { name: "The Knowledge Bookstore", address: "789 Culture Street", phone: 5553456789 },
  { name: "Elegant Fashion Boutique", address: "321 Flower Walk", phone: 5554567890 },
  { name: "Delicias Restaurant", address: "654 Gastronomic Boulevard", phone: 5555678901 }
];

Store.insertMany(stores)