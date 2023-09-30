/**
 * • Os quartos são cadastrados por número, andar e tipo.
 */

// Criando classe quartos

class Quarto {

    private numeroQuarto: number;
    private andar: number;
    private tipo: string;
    getNumero: any;

    constructor(numeroQuarto: number, andar: number, tipo: string) {
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

    set setnumeroQuarto(numeroQuarto: number) {
        this.numeroQuarto = numeroQuarto;
    }

    set setAndar(andar: number) {
        this.andar = andar;
    }

    set setTipo(tipo: string) {
        this.tipo = tipo;
    }   

    get toString(): string {
        return `\nINFORMAÇÕES QUARTO
                Número Quarto: ${this.numeroQuarto}
                Andar: ${this.andar} 
                Tipo: ${this.tipo}`;
    }

}

export default Quarto;