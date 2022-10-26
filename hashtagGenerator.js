function generateHashtag (str) {
    if(str == 0){
        return false
    }
    let newArr = str.split(" ") // ['Hello', 'there', 'thanks', 'for', 'trying', 'my', 'Kata']
    let newStr ="#"
      for(let i=0; i<newArr.length; i++){ // "there"
          // console.log(newArr[i])
        let newWord = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1)
        newStr += newWord
    }
    if(newStr.length > 140){
        return false
    } else{
        return newStr
    }
}
testy = "  Hello world";
besty = "hello world ";
westy = " hello world";
console.log(generateHashtag(testy));
console.log(generateHashtag(besty));
console.log(generateHashtag(westy));