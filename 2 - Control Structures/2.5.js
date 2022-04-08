    /* Make a program that asks the favorite number of the user. 
    If that number is anything other than 42 display "Are you sure?" and ask again.
    (This program should never end as long as the user didn't chose 42). */

    let number = prompt("What's your favorite number?");

    while (number != 42) {
      alert("Are you sure?");
      number = prompt("What's your favorite number?");
    }
    