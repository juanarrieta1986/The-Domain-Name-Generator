let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let resultString, resultString2;

for (i=0; i<pronoun.length; i++){
    resultString = pronoun[i];
    for (q=0; q < adj.length; q++){
        resultString2 = resultString + adj[q];
        for (p=0; p < noun.length; p++){
            console.log(resultString2 + noun[p] + ".com");
        }
    }
}

/*pronoun.forEach(element => {
    
});*/