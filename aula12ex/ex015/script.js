function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

  if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente')
    }else{
       var fsex = document.getElementsByName('sexo')
       var idade = ano -Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 15){
                // criança
                img.setAttribute('src', 'menino.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
       } else {
            genero = 'Mulher'
            if(idade >=0 && idade < 15){
                // criança
                img.setAttribute('src', 'menina.png')
            } else if(idade < 60){
                //adulta
                img.setAttribute('src', 'mulher.png')
            } else{
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
       }


       res.innerHTML = `Você é ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}