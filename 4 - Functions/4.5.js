/**
 * a function named `calcDistance` which takes the coordinates of two different points `A` and `B` in a 2D space. That function must return the distance between those two points.
 * @param {integer} A an array with 2D coordinates x and y
 * @param {integer} B an array with 2D coordinates x and y
 * @returns return the distance between those two points
 */


 function calcDistance(A, B)
 {
     return Math.sqrt(Math.pow((B[1] - A[1]), 2) + Math.pow((A[0] - B[0]), 2));
 }
 
 let A = [-2, 2];
 let B = [2, -2];
 console.log(calcDistance(A, B));