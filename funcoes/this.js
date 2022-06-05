const pessoa1 = {
	nome: 'Carlos',
	idade: 18,
};

const pessoa2 = {
	nome: 'Andre',
	idade: 15,
};

function calcIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

console.log(calcIdade.call(pessoa1, 5))

console.log(calcIdade.apply(pessoa2, [5]))