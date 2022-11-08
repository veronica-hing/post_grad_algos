function processData(input) {
    //Enter your code here
    let chunks = input.split(/[\s]/g);
    let peepsAdd = chunks[0];
    let peepOffset = peepsAdd*2;//since the person + info take up 2 indices
    let phoneBook = new Map();
    let i;
    for(i = 1; i <= peepOffset; i+=2){
        phoneBook.set(chunks[i], chunks[i+1]);
    }//made our phonebook
    while(i < chunks.length){
        if(phoneBook.has(chunks[i])){
            console.log(chunks[i]+'='+phoneBook.get(chunks[i]));
        }else{
            console.log("Not found")
        }
        i++;
    }
    return;//didn't specify what to return, hackerrank just checked the console.log
}