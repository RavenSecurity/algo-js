let arr = [1, 2, 3, 4, 5] 
let arr2 = [100, 101, 102]
let totalarr = 0;
let totalarr2 = 0

// Calcul et résultat pour la première array [1, 2, 3, 4, 5] 

for (let i in arr) {
  totalarr += arr[i];
}

console.log(totalarr)

// Calcul et résulat pour la seconde array [100, 101, 102]

for (let i in arr2) {
    totalarr2 += arr2[i];
  }
  
  console.log(totalarr2)