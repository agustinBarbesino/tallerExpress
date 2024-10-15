import "dotenv/config.js"
import "../../config/database.js"
import Tienda from '../Tienda.js'

const tiendas = [
    { nombre: "Supermercado Central", direccion: "Calle Principal 123", telefono: 5551234567 },
    { nombre: "Tienda de Electrónicos TechPlus", direccion: "Avenida Tecnológica 456", telefono: 5552345678 },
    { nombre: "Librería El Saber", direccion: "Calle de la Cultura 789", telefono: 5553456789 },
    { nombre: "Boutique Moda Elegante", direccion: "Paseo de las Flores 321", telefono: 5554567890 },
    { nombre: "Restaurante Delicias", direccion: "Boulevard Gastronómico 654", telefono: 5555678901 }
  ];

Tienda.insertMany(tiendas)