function rand10() {
    console.log(Math.floor(Math.random() * 11));
}

function multiRand(n) {
    while (n!=0) {
    rand10();
    n -= 1;
    }
}

console.log(multiRand(4))
