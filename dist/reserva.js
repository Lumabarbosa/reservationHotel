"use strict";
/**

CLIENTE = Do cliente basta o número do cartão de crédito.
RESERVAS = As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.

 */
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Reserva
class Reserva {
    constructor(cliente, quarto, cartao, status) {
        this.cliente = cliente;
        this.quarto = quarto;
        this.cartao = cartao;
        this.status = status;
    }
    get getCliente() {
        return this.cliente;
    }
    get getQuarto() {
        return this.quarto;
    }
    get getCartao() {
        return this.cartao;
    }
    get getStatus() {
        return this.status;
    }
    set setCliente(cliente) {
        this.cliente = cliente;
    }
    set setQuarto(quarto) {
        this.quarto = quarto;
    }
    set setCartao(cartao) {
        this.cartao = cartao;
    }
    set setStatus(status) {
        this.status = status;
    }
    get toString() {
        return `\nINFORMAÇÕES RESERVA
                Cliente: ${this.cliente.getNome}
                Numero Quarto: ${this.quarto.getnumeroQuarto} 
                Cartão: ${this.cartao.getNumero}
                Status: ${this.status}`;
    }
}
exports.default = Reserva;
