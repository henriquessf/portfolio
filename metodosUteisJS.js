function highestLetter(str) {
  const lowerCaseString = str.toLowerCase() //transformando toda string em lower case

  const lettersArray = lowerCaseString.split('') //usando o split na string pra transformar a string em um array de chars
  const sortedLetters = lettersArray.sort() //atribui a uma variavel, o valor ordernado do array (a até z), foi ordenado pelo sort

  return sortedLetters[sortedLetters.length - 1] //pegando o ultimo valor do array
}

console.log(highestLetter('Hello'))

function invertWords(str) {
  const wordsArray = str.split(' ') //usando split com parametro ' ', ao invés de quebrar a string inteira em array, ele quebra cada palavra entre os espaços e adiciona
  //em um array, isso pq o parametro procura na string, tudo q estiver entre em um espaço em branco
  const invertedWords = wordsArray.map(word => {
    //aqui usamos o método map, que fará uma função para cada elemento da array e no final retornará uma nova array
    const lowerCaseWord = word.toLowerCase()
    return lowerCaseWord.split('').reverse().join('') //retornando a variável invertedWords, que será dividida por caracteres, será invertido pelo reverse, e depois será unificado pelo join, que recebe de parametro, uma string vazia, ou seja unificará todas as letras novamente, desfazendo oq split fez inicialmente
  })
  return invertedWords.join(' ') //join irá pegar elemento por elemento do array e unificará com um separador de espaço em branco
}

console.log(invertWords('Lorem ipsum unjud'))
