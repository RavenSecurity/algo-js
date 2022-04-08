/* Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program.
(It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative)
*/


let min = parseInt(prompt("Please enter a SMALL numbers (1/3)"));
let max = parseInt(prompt("Please enter BIG numbers (2/3)"));
let current = parseInt(prompt("Please enter a number inbetween (3/3)"));

if (min < current && current < max) {
    console.log(min + max + current);
} else if (min > max) {
    alert("You don't understand anything !")
}