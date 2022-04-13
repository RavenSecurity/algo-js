const school = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];

function pickLearners(arr, n){
  if(n >= arr.length)
    return arr

  const arrCopy = [...arr]
  const returnArr = []

  for(let i=0;i<n;i++){
    const r = Math.random() * arrCopy.length | 0

    returnArr.push(arrCopy[r])
    arrCopy.splice(r, 1)
  }

  return returnArr
}

console.log(pickLearners(school, 3))