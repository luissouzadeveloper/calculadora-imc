function imc(){
    let campoMetros = document.querySelector('#campoMetros').value
    let campoQuilos = document.querySelector('#campoQuilos').value
    let altura = Number(campoMetros)
    let quilos = Number(campoQuilos)
    let imc = quilos / (altura * altura)
    let saidaImc = document.querySelector('.resultadoImc')
    let saida = document.querySelector('.resultado')

    saidaImc.innerHTML = `Seu IMC é de ${imc.toFixed(1)}.`

    if (imc < 16) {
        saida.innerHTML = `Magreza grave`
        saida.style.color = 'red'
    } else if (imc > 16 && imc < 17) {
        saida.innerHTML = `Magreza moderada`
        saida.style.color = 'red'
    } else if (imc > 17 && imc < 18.5) {
        saida.innerHTML = `Magreza leve`
        saida.style.color = 'red'
    } else if (imc > 18.5 && imc < 25) {
        saida.innerHTML = `Peso ideal`
        saida.style.color = 'green'
    } else if (imc > 25 && imc < 30) {
        saida.innerHTML = `Sobrepeso`
        saida.style.color = 'red'
    } else if (imc > 30 && imc < 35) {
        saida.innerHTML = `Obesidade grau I`
        saida.style.color = 'red'
    } else if (imc > 35 && imc < 40) {
        saida.innerHTML = `Obesidade grau II`
        saida.style.color = 'red'
    } else if (imc > 40) {
        saida.innerHTML = `Obesidade grau III`
        saida.style.color = 'red'
    }
}

function limpar() {
    let campoMetros = document.querySelector('#campoMetros').value=''
    let campoQuilos = document.querySelector('#campoQuilos').value=''  
}

