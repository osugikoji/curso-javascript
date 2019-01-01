class celular {

    constructor() {
        this.cor = 'prata';
    }

    ligar() {
        console.log('ligando');
    }

}

let objeto = new celular();

console.log(objeto.ligar());