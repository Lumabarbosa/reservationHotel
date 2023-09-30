"use strict";
/**
 *
 * SISTEMA RESERVA DE HOTEL

Um hotel deseja registrar os dados de reservas feitas por telefone, então resolveu criar um sistema
para isso;

• Para cada clientes devem ser registrados CPF, nome, telefone e sexo. Deve ser registrado também
a quantidade de pessoas que participaram da reserva.
• É interessante registrar a nacionalidade do Cliente.

• Os clientes podem reservar um tipo de quarto do hotel para uma determinada data e por uma
certa quantidade de dias.

• Os quartos são cadastrados por número, andar e tipo.

• Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito. Devem ser registrados os dados da operadora com código e nome da
operadora. Do cliente basta o número do cartão de crédito.

• As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.
 *

    CLIENTE = Do cliente basta o número do cartão de crédito.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Cliente
class Cliente {
    constructor(cpf, nome, telefone, sexo, nacionalidade, qtdPessoas) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.qtdPessoas = qtdPessoas;
    }
    get getCpf() {
        return this.cpf;
    }
    get getNome() {
        return this.nome;
    }
    get getTelefone() {
        return this.telefone;
    }
    get getSexo() {
        return this.sexo;
    }
    get getNacionalidade() {
        return this.nacionalidade;
    }
    get getQtdPessoas() {
        return this.qtdPessoas;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
    set setSexo(sexo) {
        this.sexo = sexo;
    }
    set setNacionalidade(nacionalidade) {
        this.nacionalidade = nacionalidade;
    }
    set setQtdPessoas(qtdPessoas) {
        this.qtdPessoas = qtdPessoas;
    }
    get toString() {
        return `\nINFORMAÇÕES CLIENTE
                Cliente: ${this.nome}
                CPF: ${this.cpf}
                Telefone: ${this.telefone}
                Sexo: ${this.sexo}
                Nacionalidade: ${this.nacionalidade}
                Quantidade de pessoas: ${this.qtdPessoas}`;
    }
}
exports.default = Cliente;
