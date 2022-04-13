function rand10() {
    return Math.floor(Math.random() * 10 + 1);
}

// let arr = []

function multiRand(n) {
    let arr = []
    while (n!=0) {
    arr.push(rand10());
    n --;
    }
    return (arr)
}

console.log(multiRand(rand10()))