const meuCarro = function (String) {
    console.log(`Meu carro é ${String}`);    
}

meuCarro("Imprimindo alguma coisa");

// knowledges about return;

const a = 1;
const b = 2;

const minhaSoma = function (n1, n2) {
    return n1 + n2;
}

const resultado = minhaSoma(a, b);

console.log(resultado);

// Arrow Function 

const testeArrow = () => {
    console.log("Esta é uma Arrow function");
};


const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    } else {
        console.log("Impar");
    }
};

parOuImpar(5);
parOuImpar(4);
