"use strict";
/**
 * • Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito.

 * CARTAO = Devem ser registrados os dados da operadora com código e nome da operadora.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Cartao {
    constructor(nomeCliente, numero, codigo, operadora) {
        this.nomeCliente = nomeCliente;
        this.numero = numero;
        this.codigo = codigo;
        this.operadora = operadora;
    }
    get getNomeCliente() {
        return this.nomeCliente;
    }
    get getNumero() {
        return this.numero;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getOperadora() {
        return this.operadora;
    }
    set setNomeCliente(nomeCliente) {
        this.nomeCliente = nomeCliente;
    }
    set setNumero(numero) {
        this.numero = numero;
    }
    set setCodigo(codigo) {
        this.codigo = codigo;
    }
    set setOperadora(operadora) {
        this.operadora = operadora;
    }
    get toString() {
        return `\nINFORMAÇÕES CARTAO
                Nome: ${this.nomeCliente.getNome}
                Número: ${this.numero} 
                Código: ${this.codigo}
                Operadora: ${this.operadora}`;
    }
}
exports.default = Cartao;
