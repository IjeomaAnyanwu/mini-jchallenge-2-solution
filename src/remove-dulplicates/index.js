function removeDuplicates(obj) {

let keys = Object.keys(obj).sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < keys.length; i++) {
      let arr = [];

      for (let j = 0; j < obj[keys[i]].length; j++) {
        if (result.hasOwnProperty(obj[keys[i]][j])) {
          continue;
        }
        arr.push(obj[keys[i]][j]);
        result[obj[keys[i]][j]] = 0;
      }
      obj[keys[i]] = arr;
    }
    return obj;
}

module.exports = removeDuplicates
