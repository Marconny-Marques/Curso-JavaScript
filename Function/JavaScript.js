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

testeArrow();


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


// mais sobre arrow functions

const raizQuadrada = (x) => {
    return x * x;
};
console.log(raizQuadrada(8));


// outro exemplo de sintaxe sobre essa função

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(10));


const multiplication = (m, n) => {
    if(n === undefined) {
        return m;
    } else {
        return m * n;
    }
};

console.log(multiplication(5));

console.log(multiplication(5, 2));

const cumprimentos = (name) => {
    if(!name) {
        console.log('Olá');
        return;
    } else {
        console.log(`Olá, ${name}`);
    }
}

cumprimentos();

cumprimentos("Marconny");

// closure , uma função dentro de uma outra

function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();

// Mais sobre closure 

const multiplicationClosure = (n) => {
    return(m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// Recursão, uma espécie de loop com funções
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar");
    } else {
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
} 

untilTen(100, 2);

function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);