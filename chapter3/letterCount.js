function countBs(string) {
    let total = 0;
    for(let count = 0; count <= string.length - 1; count++) {
        if (string[count] === "B") {
            total++;
        }
    }
    return total;
}

console.log(countBs("BBC"));

function countChar(string, char) {
    let total = 0;
    for(let count = 0; count <= string.length - 1; count++) {
        if (string[count] === char) {
            total ++;
        }
    }
    return total;
}

console.log(countChar("kakkerlak", "k"));