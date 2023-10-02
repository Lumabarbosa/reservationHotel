"use strict";
/**

CLIENTE = Do cliente basta o número do cartão de crédito.
RESERVAS = As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.

 */
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Reserva
var Reserva = /** @class */ (function () {
    function Reserva(cliente, quarto, cartao, data, status) {
        this.cliente = cliente;
        this.quarto = quarto;
        this.cartao = cartao;
        this.data = data;
        this.status = status;
    }
    Object.defineProperty(Reserva.prototype, "getCliente", {
        get: function () {
            return this.cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "getQuarto", {
        get: function () {
            return this.quarto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "getCartao", {
        get: function () {
            return this.cartao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "getData", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "setCliente", {
        set: function (cliente) {
            this.cliente = cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "setQuarto", {
        set: function (quarto) {
            this.quarto = quarto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "setCartao", {
        set: function (cartao) {
            this.cartao = cartao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "setData", {
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "setStatus", {
        set: function (status) {
            this.status = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reserva.prototype, "toString", {
        //Analisar alguma forma de confirmar o limite do cartão
        get: function () {
            return "\nINFORMA\u00C7\u00D5ES RESERVA\n                Cliente: ".concat(this.cliente.getNome, "\n                Numero Quarto: ").concat(this.quarto.getnumeroQuarto, " \n                Cart\u00E3o: ").concat(this.cartao.getNumero, "\n                Data: ").concat(this.data.getData, "\n                Status: ").concat(this.status);
        },
        enumerable: false,
        configurable: true
    });
    return Reserva;
}());
exports.default = Reserva;
