"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_1 = __importDefault(require("./cliente"));
const reserva_1 = __importDefault(require("./reserva"));
const cartao_1 = __importDefault(require("./cartao"));
const quarto_1 = __importDefault(require("./quarto"));
const server = (0, express_1.default)();
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
const cliente = new cliente_1.default("12345678910", "João", "999999999", "Masculino", "Brasileiro", 2);
console.log(cliente.toString);
const quarto = new quarto_1.default(32, 1, "Luxo");
console.log(quarto.toString);
const cartao = new cartao_1.default(cliente, 123456789, 123, "Visa");
console.log(cartao.toString);
const reserva = new reserva_1.default(cliente, quarto, cartao, "Confirmada");
console.log(reserva.toString);
