let num = [5, 8, 2, 9, 3]


console.log(`Vetores: ${num}`)
console.log(`São ${num.length} vetores no total`)
console.log(`O valor do primeiro vetor é ${num[3]}`)

var pos = num.indexOf(1)
if(pos == -1){
    console.log('O valor não foi encontrado :(')
}else{
    console.log(`A posição do número 2 é ${pos}`)
}



