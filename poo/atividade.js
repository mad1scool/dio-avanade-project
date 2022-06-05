class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    set saldo(newSaldo) {
        this._saldo = newSaldo
    }

    sacar(valor) {
        if (valor > this._saldo) return "Saldo insuficiente";
        this._saldo = this._saldo - valor
        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaCredito) {
        super(agencia, numero)
        this.tipo = "corrente"
        this._cartaCredito = cartaCredito
    }

    get cartaCredito() {
        return this._cartaCredito
    }

    set cartaCredito(valor) {
        this._cartaCredito = valor
    }
}

class ContaPoup extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = "poupança"
    }
}

class ContaUni extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = "universitária"
    }

    sacar(valor) {
        if (valor > this._saldo) return "Saldo insuficiente";
        if(valor > 500) return "Operação negada";
        this._saldo = this._saldo - valor
        return this._saldo
    }
}