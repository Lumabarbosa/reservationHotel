"use strict";
/**
 * • Os quartos são cadastrados por número, andar e tipo.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Criando classe quartos
var Quarto = /** @class */ (function () {
    function Quarto(numeroQuarto, andar, tipo) {
        this.numeroQuarto = numeroQuarto;
        this.andar = andar;
        this.tipo = tipo;
    }
    Object.defineProperty(Quarto.prototype, "getnumeroQuarto", {
        get: function () {
            return this.numeroQuarto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quarto.prototype, "getAndar", {
        get: function () {
            return this.andar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quarto.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quarto.prototype, "setnumeroQuarto", {
        set: function (numeroQuarto) {
            this.numeroQuarto = numeroQuarto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quarto.prototype, "setAndar", {
        set: function (andar) {
            this.andar = andar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quarto.prototype, "setTipo", {
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quarto.prototype, "toString", {
        get: function () {
            return "\nINFORMA\u00C7\u00D5ES QUARTO\n                N\u00FAmero Quarto: ".concat(this.numeroQuarto, "\n                Andar: ").concat(this.andar, " \n                Tipo: ").concat(this.tipo);
        },
        enumerable: false,
        configurable: true
    });
    return Quarto;
}());
exports.default = Quarto;
