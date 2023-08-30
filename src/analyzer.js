const analyzer = {  
  getWordCount: (text) => {
    const words = text.split(' ');
    return words.length
  },
  
  getCharacterCount: (text) => {
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace( /[,.\s]/g, '' ).length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
