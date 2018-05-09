var word = 'hola';
var wordLength = word.length;

function repeatStringNumTimes(str, num) {
  return str.repeat(num);
}

function paddingLeft(word, totalLength, paddingElement){
  var paddingLength = totalLength - wordLength;
  if(paddingLength <= 0){
  return word;
  } else {
  var paddingContent = repeatStringNumTimes(paddingElement, paddingLength);
  var result = paddingContent.concat(word);
  //return console.log(result);
  return result;
  }
}


module.exports = paddingLeft;
