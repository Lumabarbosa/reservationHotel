/**

CLIENTE = Do cliente basta o número do cartão de crédito.
RESERVAS = As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.

 */

import Cliente from "./cliente";
import Quarto from "./quarto";
import Cartao from "./cartao";

// Classe Reserva
class Reserva{

   private cliente: Cliente;
   private quarto: Quarto;
   private cartao: Cartao;
   private status: string; 
        
   constructor(cliente: Cliente, quarto: Quarto, cartao: Cartao, status: string){
         this.cliente = cliente;
         this.quarto = quarto;
         this.cartao = cartao;
         this.status = status;
   }

    get getCliente(){
        return this.cliente;
    }

    get getQuarto(){
        return this.quarto;
    }

    get getCartao(){
        return this.cartao;
    }

    get getStatus(){
        return this.status;
    }

    set setCliente(cliente: Cliente){
        this.cliente = cliente;
    }

    set setQuarto(quarto: Quarto){
        this.quarto = quarto;
    }

    set setCartao(cartao: Cartao){
        this.cartao = cartao;
    }

    set setStatus(status: string){
        this.status = status;
    }

    get toString(): string {
        return `\nINFORMAÇÕES RESERVA
                Cliente: ${this.cliente.getNome}
                Numero Quarto: ${this.quarto.getnumeroQuarto} 
                Cartão: ${this.cartao.getNumero}
                Status: ${this.status}`;
    }
}

export default Reserva; 
