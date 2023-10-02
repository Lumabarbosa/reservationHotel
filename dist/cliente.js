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
var Cliente = /** @class */ (function () {
    function Cliente(cpf, nome, telefone, sexo, nacionalidade, qtdPessoas) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.qtdPessoas = qtdPessoas;
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefone", {
        get: function () {
            return this.telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getSexo", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getNacionalidade", {
        get: function () {
            return this.nacionalidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getQtdPessoas", {
        get: function () {
            return this.qtdPessoas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setCpf", {
        set: function (cpf) {
            this.cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTelefone", {
        set: function (telefone) {
            this.telefone = telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setSexo", {
        set: function (sexo) {
            this.sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNacionalidade", {
        set: function (nacionalidade) {
            this.nacionalidade = nacionalidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setQtdPessoas", {
        set: function (qtdPessoas) {
            this.qtdPessoas = qtdPessoas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "toString", {
        get: function () {
            return "\nINFORMA\u00C7\u00D5ES CLIENTE\n                Cliente: ".concat(this.nome, "\n                CPF: ").concat(this.cpf, "\n                Telefone: ").concat(this.telefone, "\n                Sexo: ").concat(this.sexo, "\n                Nacionalidade: ").concat(this.nacionalidade, "\n                Quantidade de pessoas: ").concat(this.qtdPessoas);
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
