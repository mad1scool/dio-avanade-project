function atividade(num1, num2) {
    let sum = num1 + num2
    let areEqual = ""
    let gt10 = ""

    if (num1 == num2) {
        areEqual = "são iguais."
    } else {
        areEqual = "não são iguais."
    }

    if (sum > 10 && sum > 20) {
        gt10 = "maior que 10 e maior que 20"
    } else if (sum > 10 && sum < 20) {
        gt10 = "maior que 10 e menor que 20"
    } else {
        gt10 = "menor que 10 e menor que 20"
    }

    return `Os números ${num1} e ${num2} ${areEqual} Sua soma é ${sum}, que é ${gt10}`
}

console.log(atividade(4, 4))