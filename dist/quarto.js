"use strict";
/**
 * • Os quartos são cadastrados por número, andar e tipo.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Criando classe quartos
class Quarto {
    constructor(numeroQuarto, andar, tipo) {
        this.numeroQuarto = numeroQuarto;
        this.andar = andar;
        this.tipo = tipo;
    }
    get getnumeroQuarto() {
        return this.numeroQuarto;
    }
    get getAndar() {
        return this.andar;
    }
    get getTipo() {
        return this.tipo;
    }
    set setnumeroQuarto(numeroQuarto) {
        this.numeroQuarto = numeroQuarto;
    }
    set setAndar(andar) {
        this.andar = andar;
    }
    set setTipo(tipo) {
        this.tipo = tipo;
    }
    get toString() {
        return `\nINFORMAÇÕES QUARTO
                Número Quarto: ${this.numeroQuarto}
                Andar: ${this.andar} 
                Tipo: ${this.tipo}`;
    }
}
exports.default = Quarto;
