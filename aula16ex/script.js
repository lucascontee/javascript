var n = []

function adicionar(){
    var txtn1 = document.getElementById('txtn1')
    var sel = document.getElementById('sel')
    var res = document.getElementById('res')
    var n1 = Number(txtn1.value)

    res.innerHTML = ''


    if(n1 > 100 || n1 < 1 ){
        window.alert('Numero inválido cabeça de bagre')
    }else{

        n.push(n1)

        var item = document.createElement('option')
        item.text = `Valor ${n1} adicionado`
        sel.appendChild(item)

        
    }

    txtn1.value = ''
    txtn1.focus()
}


function enviar(){

    if(n.length == 0){
        window.alert('Adicione um número')
    }else{
        var soma = 0
        for(var pos in n){
            soma+=n[pos]
        }

    
    var media = soma / n.length

    

    n.sort()
    res.innerHTML += `<p>Ao todo temos ${n.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${n[n.length - 1]}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${n[0]}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}