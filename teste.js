console.log("ola mundo")

let teste = 10;
var nome = "joao" //nao usamos
const ehPar = true

teste = 12;

teste = "OLA MUNDO"

nome = 42

console.log(teste)
console.log(nome)
console.log(ehPar)

console.log(2+2)
console.log(3*2)
console.log(10/2)
console.log(8-3)
console.log(3%2)
console.log(parseInt(5/2))

console.log(3 ** 2)

console.log("\n\ntabela verdade&&")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


console.log("\n\ntabela verdade||")
console.log(true || true)
console.log(true ||false)
console.log(false || true)
console.log(false || false)

console.log("\n\ncomparacoes")
console.log (1==1)
console.log (1== '1')
console.log (1==='1')
console.log (1===1)
console.log (1!=2)
console.log (1!==2)
console.log (1!==1)
console.log (1<2)
console.log (1<=1)
console.log (2>=1)

let idade =19
if(idade>=18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

const code = 1
switch(code){
    case 1:
        console.log("ligar tv")
        break

    case 2:
        console.log("Desligar tv")
        break
        default:
            console.log("Sei la")
}

for (let i = 0 ;i < 10; i++){
    console.log(i)
}

let i = 10
while(i < 30 ){
    console.log(i)
    i = i * 2
}


function soma (a,b){
    return a + b
}

const result  = soma (2)
console.log (result)