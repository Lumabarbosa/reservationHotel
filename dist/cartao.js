"use strict";
/**
 * • Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito.

 * CARTAO = Devem ser registrados os dados da operadora com código e nome da operadora.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Cartao = /** @class */ (function () {
    function Cartao(nomeCliente, numero, codigo, operadora) {
        this.nomeCliente = nomeCliente;
        this.numero = numero;
        this.codigo = codigo;
        this.operadora = operadora;
    }
    Object.defineProperty(Cartao.prototype, "getNomeCliente", {
        get: function () {
            return this.nomeCliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "getNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "getCodigo", {
        get: function () {
            return this.codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "getOperadora", {
        get: function () {
            return this.operadora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "setNomeCliente", {
        set: function (nomeCliente) {
            this.nomeCliente = nomeCliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "setNumero", {
        set: function (numero) {
            this.numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "setCodigo", {
        set: function (codigo) {
            this.codigo = codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "setOperadora", {
        set: function (operadora) {
            this.operadora = operadora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "toString", {
        get: function () {
            return "\nINFORMA\u00C7\u00D5ES CARTAO\n                Nome: ".concat(this.nomeCliente.getNome, "\n                N\u00FAmero: ").concat(this.numero, " \n                C\u00F3digo: ").concat(this.codigo, "\n                Operadora: ").concat(this.operadora);
        },
        enumerable: false,
        configurable: true
    });
    return Cartao;
}());
exports.default = Cartao;
