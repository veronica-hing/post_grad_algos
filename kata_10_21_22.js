function digitize(n) {
    //goals of code:
    //take the digits and put them in an array in reverse order
    let numberize = (n) =>Number(n);//dedicated function for typecasting
    //turn our number n into a string to create the array, then the Array method uses numberize to do the typecasting
    let newArr = Array.from(String(n),numberize);
    //we use the array method .reverse()
    console.log(newArr.reverse());
}

// const number = 35231;
// digitize(number);

//given n as an INT type, kata expect array of INTS

//had string, returned string, how to overcome typecasting?

function solution (roman) {
    let sum = 0
    let k = 0;
    for(let i = 0; i<roman.length; i++){ 
        switch(roman[i]){
            case  "I" :  {
                if(roman[i+1] == "V" || roman[i+1] == "X"){
                    sum -=1;
                }else
                    sum += 1; 
                break;
            }
            case  "V" : {
                if(roman[i+1] == "X" || roman[i+1] =="L"){
                    sum -=5;
                }else
                    sum += 5; 
                break;
            }
            case  "X" : 
                if(roman[i+1] =="L" || roman[i+1] =="C"){
                    sum -=10;
                }else
                    sum += 10; 
                    break;
            case  "L" : 
            if(roman[i+1] =="C" || roman[i+1] =="D"){
                sum -=50;
            }else
                sum += 50; 
            break;
            case  "C"  : 
            if(roman[i+1] =="D" || roman[i+1] =="M"){
                sum -=100;
            }else
                sum += 100; 
            break;
            case  "D"  : 
                if(roman[i+1] =="M"){
                sum -=500;
            }else
                sum += 500; 
            break;
            case  "M"  : sum += 1000;
        }
    }
    
    return sum;
}
