class sistema {
    constructor(nome) {
        this.nome = nome;
    }

    logOut() {
        console.log(`${this.nome} saiu da conta.`);
    }
}

class cliente extends sistema {
    logIn() {
        console.log(`${this.nome}, bem vindo a Home!`);
    }
}

class administradores extends sistema {
    logIn() {
        console.log(`${this.nome}, bem vindo a área de adminstradores!`);
    }
}

const cliente1 = new cliente("Jonas");
const administradores1 = new administradores("Jogribar");
const cliente2 = new cliente("Jordan");


cliente1.logIn();
administradores1.logIn();     
cliente2.logOut();
administradores1.logOut();     
