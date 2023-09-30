/**
 * • Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito. 

 * CARTAO = Devem ser registrados os dados da operadora com código e nome da operadora.
 * 
 */

import Cliente from "./cliente";

class Cartao{

    private nomeCliente: Cliente;
    private numero: number;
    private codigo: number;
    private operadora: string;

    constructor(nomeCliente: Cliente, numero: number, codigo: number, operadora: string){
        this.nomeCliente = nomeCliente;
        this.numero = numero;
        this.codigo = codigo;
        this.operadora = operadora;
    }

    get getNomeCliente(){
        return this.nomeCliente;
    }

    get getNumero(){
        return this.numero;
    }

    get getCodigo(){
        return this.codigo;
    }

    get getOperadora(){
        return this.operadora;
    }

    set setNomeCliente(nomeCliente: Cliente){
        this.nomeCliente = nomeCliente;
    }

    set setNumero(numero: number){
        this.numero = numero;
    }

    set setCodigo(codigo: number){
        this.codigo = codigo;
    }

    set setOperadora(operadora: string){
        this.operadora = operadora;
    }

    get toString(): string {
        return `\nINFORMAÇÕES CARTAO
                Nome: ${this.nomeCliente.getNome}
                Número: ${this.numero} 
                Código: ${this.codigo}
                Operadora: ${this.operadora}`;
    }

}

export default Cartao;