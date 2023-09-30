import express from "express";  
import Cliente from "./cliente";
import Reserva from "./reserva";
import Cartao from "./cartao";
import Quarto from "./quarto";


const server = express();

// Rota para exibir informações do cliente
server.get('/cliente', (req, res) => {
  const clienteInfo = cliente.toString; // Supondo que 'cliente' seja uma instância válida
  return res.send(clienteInfo);
});

// Rota para exibir informações do quarto
server.get('/quarto', (req, res) => {
  const quartoInfo = quarto.toString; // Supondo que 'quarto' seja uma instância válida
  return res.send(quartoInfo);
});

// Rota para exibir informações do cartão
server.get('/cartao', (req, res) => {
  const cartaoInfo = cartao.toString; // Supondo que 'cartao' seja uma instância válida
  return res.send(cartaoInfo);
});

// Rota para exibir informações da reserva
server.get('/reserva', (req, res) => {
  const reservaInfo = reserva.toString; // Supondo que 'reserva' seja uma instância válida
  return res.send(reservaInfo);
});


server.listen(8000);


const cliente = new Cliente ("12345678910", "João", "999999999", "Masculino", "Brasileiro", 2);
console.log(cliente.toString);

const quarto = new Quarto (32, 1, "Luxo");
console.log(quarto.toString);

const cartao = new Cartao (cliente, 123456789, 123, "Visa");
console.log(cartao.toString);

const reserva = new Reserva (cliente, quarto, cartao, "Confirmada");
console.log(reserva.toString);