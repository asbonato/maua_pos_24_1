// // // // // // // // // const nome = "Bonato"
// // // // // // // // // const idade = 54
// // // // // // // // // console.log(nome, idade)

// // // // // // // // // const sexo = 'M'
// // // // // // // // // const endereco = 'Rua K, 12'
// // // // // // // // // const endereco1 = "Rua Olho d'Água, 26"

// // // // // // // // // console.log(`Endereço: ${endereco1}`)
// // // // // // // // // console.log('Outro endereço: '+endereco)

// // // // // // // // // let a = 2
// // // // // // // // // let b = 'abc'

// // // // // // // // // var c = 2 + 3
// // // // // // // // // var d = "abcd"

// // // // // // // // //console.log(a, b, c, d)
// // // // // // // // let nome1 = ""
// // // // // // // // var idade1 = 18
// // // // // // // // //console.log(`Oi, ${nome1}`)
// // // // // // // // if (idade1 >= 18){
// // // // // // // //     nome1 = 'João'
// // // // // // // //     console.log(`Parabéns, ${nome1}. Você pode dirigir.`)
// // // // // // // // }
// // // // // // // // console.log(`Oi, ${nome1}`)

// // // // // // // const n1 = 2
// // // // // // // const n2 = '3'
// // // // // // // const n3 = n1 + n2
// // // // // // // console.log(n3)
// // // // // // // const n4 = n1 + Number(n2)
// // // // // // // console.log(n4)

// // // // // // console.log(1 == 1)
// // // // // // console.log(1 == "1")
// // // // // // console.log(1 === 1)
// // // // // // console.log(1 === "1")
// // // // // v1 = []
// // // // // v1[0] = 3.4
// // // // // v1[10] = "abc"
// // // // // v1[2] = 2
// // // // // console.log(v1.length)
// // // // // v2 = [3.4, "abc", 2]
// // // // // console.log(v2)

// // // // // let v3 = []
// // // // // v3[1]=1
// // // // // console.log(v3)


// // // // // const v4 = []
// // // // // v4[10]=1
// // // // // console.log(v4)

// // // // // v4 = ['a', 'b']

// // // // const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// // // // const apenasComA = nomes.filter((n) => n.startsWith("A"))
// // // // console.log(apenasComA)

// // // // firstChar = (n) => n.charAt(0)

// // // // const res = nomes.map(firstChar)
// // // // console.log(res)

// // // // const primeiras = res.reduce((ac, v) => ac + v)
// // // // console.log(primeiras)
// // // function demorada(){
// // //     const atualMais2Segundos = new Date().getTime() + 2000
// // //     //while( new Date().getTime() <= atualMais2Segundos);
// // //     const d = 8 + 4
// // //     return d
// // // }
// // // const a = 2 + 3
// // // const b = 5 + 9
// // // setTimeout(function(){
// // // const d = demorada()
// // // console.log(d)
// // // }, 2000)

// // // const e = 2 + a + b
// // // console.log(e)

// // function calculoDemorado(numero){
// //     return new Promise(function (resolve, reject) {
// //         let res = 0
// //         for (let i = 0; i <= numero; i++){
// //             res += i
// //         }
// //         resolve(res)
// //     })
// // }
// // calculoDemorado(10).then((resultado) => {
// //     console.log(resultado)
// // })

// // function calculoRapidinho(numero){
// //     return Promise.resolve((numero * (numero + 1))/2)
// // }

// // calculoRapidinho(10).then(resultado => {
// //     console.log(resultado)
// // })
// // console.log('Esperando...')
// function calculoRapidinho(numero) {
//     return numero >= 0
//      ? Promise.resolve((numero * (numero + 1) / 2))
//      : Promise.reject("Somente valores positivos, por favor")
// }

// calculoRapidinho(-10)
//     .then((resultado) => {
//         console.log(resultado)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

function fatorial(n){
    if (n < 0) return Promise.reject("Valor não pode ser negativo.")
    let res = 1
    for (let i = 1; i <= n; i++) res *= i
    return Promise.resolve(res)
}

function chamadaComThenCatch(){
    fatorial(5)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    
    fatorial(-5)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
chamadaComThenCatch()

async function chamadaComAwait(){
    try {
        const f1 = await(fatorial(-5))
        console.log(f1)
    } catch (err) {
        console.log(err)
    }
    try {
        const f2 = await(fatorial(5))
        console.log(f2)
    } catch(err) {
        console.log(err)
    }
}
chamadaComAwait()