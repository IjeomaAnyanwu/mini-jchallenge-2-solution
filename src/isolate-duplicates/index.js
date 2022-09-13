
function isolateDuplicates(text) {
  if(text.length < 1 || typeof(text) != "string"){
    throw "Please enter a valid string"
  }

  let arr = [];
  let dupCount = 0;
  let totalCount = 0;
  text = text.split('');

  for (let i = 0; i < text.length; i++) {
    arr.push(text[i])

    if (text[i + 1] != undefined && text[i].toLowerCase() == text[i + 1].toLowerCase()) {
      dupCount++;
      if(dupCount == 2){
        arr.push('[')
        totalCount++;
      }

    } else if (text[i + 1] != undefined && text[i].toLowerCase() !== text[i + 1].toLowerCase() || i == text.length - 1) {
      if (dupCount > 1){
        arr.push(']')
      }
      dupCount = 0;
    }
  }

  return [arr.join(''), totalCount]
}
console.log(isolateDuplicates("aaaabbcdefffffffg"))
module.exports = isolateDuplicates;

