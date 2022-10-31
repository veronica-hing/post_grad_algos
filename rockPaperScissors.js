const rps = (p1, p2) => {
    //outputs = "Player 1 won!" || "Player 2 won!" || "Draw!"
    //inputs = "paper", "rock", 
    //constraints
    //example "paper", "paper" --> "Draw!"
    if(p1 == p2)
        return "Draw!"
    switch(p1){
        case "rock":
            if(p2==="scissors")
                return "Player 1 won!"
            break;
        case "paper":
            if(p2==="rock")
                return "Player 1 won!"
            break;
        case "scissors":
            if(p2==="paper")
                return "Player 1 won!"
            break;
    }
    return "Player 2 won!"
};

console.log(rps("rock","paper"))
console.log(rps("rock","rock"))
console.log(rps("rock","scissors"))

console.log(rps("paper","paper"))
console.log(rps("paper","rock"))
console.log(rps("paper","scissors"))

console.log(rps("scissors","paper"))
console.log(rps("scissors","rock"))
console.log(rps("scissors","scissors"))