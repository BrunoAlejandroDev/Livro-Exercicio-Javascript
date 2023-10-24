/* EXIBIR TODOS OS NÚMEROS PARES DE 1 A 50 E TODOS OS NÚMEROS ÍMPARES DE 51 A 100 */

/* UTILIZANDO DOIS LAÇOS FOR */
// for(let p = 2; p<=50; p+=2){
//     console.log(p)
// }
// for(let i = 51; i<=100; i+=2){
//     console.log(i)
// }

/* UTILIZANDO WHILE E IF */
let num = 1;
while(num <= 100){
    if(num <= 50 && num % 2 == 0 || num == 100){
        console.log(`Par: ${num}`)
    }
    else if(num > 50 && num % 2 !== 0){
        console.log(`ímpar: ${num}`)
    }
    num++
}