const log = console.log

const transpose = function(matrix) {
    let transposed = [];
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[row].length; col++) {
        if(transposed[col] === undefined) {
          transposed[col] = [];
        }
        transposed[col][row] = matrix[row][col];
      }
    }
    //console.log('this is transposed: ', transposed);
    return transposed;
  };



//console.log('outputting');
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const transposedMatrix = transpose(letters)
    const verticalJoin = transposedMatrix.map(js => js.join(''))
    let doesWordExist = false;
    for (char of horizontalJoin) {   
        if (char.includes(word)) {
            doesWordExist = true;
        }
    }
    for (char2 of verticalJoin) {
        if (char2.includes(word)) {
            doesWordExist = true;
        }
    }
return doesWordExist;
};


module.exports = wordSearch;
