"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data = /** @class */ (function () {
    function Data(data) {
        this.data = data;
    }
    Object.defineProperty(Data.prototype, "getData", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "setData", {
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "toString", {
        get: function () {
            return "\nData da reserva: ".concat(this.data);
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
exports.default = Data;
