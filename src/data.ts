import Cliente from "./cliente";
import Quarto from "./quarto";
import Reserva from "./reserva";

class Data {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    get getData() {
        return this.data;
    }
    set setData(data: string) {
        this.data = data;
    }
    get toString(): string{
        return  `\nData da reserva: ${this.data}`
    }
}


export default Data;