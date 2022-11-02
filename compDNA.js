function DNAStrand(dna){
    //your code here
    //Output, complement to ATCG
    //Input, TAGC
    //Constraints, none mentioned, always given valid string for DNA
    //Example ATCG -> TAGC
    //create a dictionary of letters and what their partner is
    const pairer = {"A":"T", "T":"A", "C":"G", "G":"C"};
    // use /./ regex to match all characters other than newline, \n
    return dna.replace(/./, m => pairer[m]);
}

