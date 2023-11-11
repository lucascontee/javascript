function clicar(){
    var num = document.getElementById('numero')
    var tab = document.getElementById('tab')
    

    if(num.value.length == 0){
        window.alert('DIGITE UM NÚMERO')
    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        

        for(var c; c <=10; c++){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}