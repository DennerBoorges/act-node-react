/*
 * Funções
 * Escreva uma função que verifique se um array contém a palavra "teste"
 *
 * Faça a declaração da função.
 * Troque "{}" pelo nome dado a função
 */

// code here

function teste(teste: string[]):boolean {
    for(var i = 0; i <= teste.length; i++)
    {
        if(teste[i] == "teste")
        {
            return true;
        }
    }
    return false
}

export default teste;
