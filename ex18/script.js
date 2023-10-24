const palavra = prompt('Digite uma palavra com pelo menos uma letra "a"')

const substituirAporE = (frase) =>{
    const novaFrase = frase.replace(/a/g, 'e');
    return novaFrase
}
const fraseNova = substituirAporE(palavra);

console.log(`Frase original: ${palavra}`)
console.log(`Frase nova: ${fraseNova}`)