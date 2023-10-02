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
const data_1 = __importDefault(require("./data"));
var server = (0, express_1.default)();
// Rota para exibir informações do cliente
server.get('/cliente', function (req, res) {
    var clienteInfo = cliente.toString; // Supondo que 'cliente' seja uma instância válida
    return res.send(clienteInfo);
});
// Rota para exibir informações do quarto
server.get('/quarto', function (req, res) {
    var quartoInfo = quarto.toString; // Supondo que 'quarto' seja uma instância válida
    return res.send(quartoInfo);
});
// Rota para exibir informações do cartão
server.get('/cartao', function (req, res) {
    var cartaoInfo = cartao.toString; // Supondo que 'cartao' seja uma instância válida
    return res.send(cartaoInfo);
});
// Rota para exibir informações da reserva
server.get('/reserva', function (req, res) {
    var reservaInfo = reserva.toString; // Supondo que 'reserva' seja uma instância válida
    return res.send(reservaInfo);
});
server.get('/data', function (req, res) {
    var dataInfo = data.toString;
    return res.send(dataInfo);
});
server.listen(8000);
var cliente = new cliente_1.default("12345678910", "João", "999999999", "Masculino", "Brasileiro", 2);
console.log(cliente.toString);
var quarto = new quarto_1.default(32, 1, "Luxo");
console.log(quarto.toString);
var cartao = new cartao_1.default(cliente, 123456789, 123, "Visa");
console.log(cartao.toString);
var data = new data_1.default("22-10-2023");
var reserva = new reserva_1.default(cliente, quarto, cartao, data, "Confirmada");
console.log(reserva.toString);
