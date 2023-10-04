import Cliente from "./cliente";
import Quarto from "./quarto";
import Reserva from "./reserva";

class Data {
    private dataEntrada: string;
    private dataSaida: string;

    constructor(dataEntrada: string, dataSaida: string) {
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }

    get getDataEntrada() {
        return this.dataEntrada;
    }
    get getDataSaida() {
        return this.dataSaida;
    }
    set setDataEntrada(data1: string) {
        this.dataEntrada = data1;
    }
    set setDataSaida(data2: string) {
        this.dataSaida = data2;
    }

    get toString(): string{
        return  `\nPeríodo da reserva: ${this.dataEntrada} à ${this.dataSaida} `
    }
}


export default Data;
