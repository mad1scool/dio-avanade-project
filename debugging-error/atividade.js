/* new Error(message, fileName, lineNumber)

const MeuErro = new Error('Mensagem invalida');

MeuErro.name = "InvalidMessage"

throw MeuErro

console.log(MeuErro) */


const arr = [1,2,3,4]

function validating(arr, num) {
    try {
        if (arr.length === num) return arr;
    
        if (!arr && !num) throw new ReferenceError("Envie os parametros");
    
        if (typeof arr !== 'object') throw new TypeError("Array não é object");
    
        if (typeof num !== 'number') throw new TypeError("Numero não é number");;
    
        if (arr.length !== num) throw new RangeError('Tamanho do array diferente do numero')
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Erro de referência")
            throw e
        } else if (e instanceof TypeError) {
            console.log("Erro de tipo")
            throw e
        } else if (e instanceof RangeError) {
            console.log("Erro de range")
            throw e
        } else {
            console.log("tipo de erro nao esperado")
            throw e
        }
    }
    
}

console.log(validating())

