/* JavaScript supports the following forms of if...else statement −
1) if statement
2) if...else statement
3) if...else if... statement.
4) nested if...else statement.

/* 1. if statement:-
    Syntax:
    if (expression) {
    Statement(s) to be executed if expression is true
    }


/* 2. if...else statement:-
    Syntax:
    if (expression) {
    Statement(s) to be executed if expression is true
    } else {
    Statement(s) to be executed if expression is false
    }


/* 3. if...else if... statement
    Syntax:
    if (expression 1) {
    Statement(s) to be executed if expression 1 is true
    } else if (expression 2) {
    Statement(s) to be executed if expression 2 is true
    } else if (expression 3) {
    Statement(s) to be executed if expression 3 is true
    } else {
    Statement(s) to be executed if no expression is true
    }
*/

/* 4. nested if...else statement:-
    Syntax:
    if (expression 1) {
    Statement(s) to be executed if expression 1 is true
        if (expression 2) {
        Statement(s) to be executed if expression 2 is true
        } else {
        Statement(s) to be executed if expression 2 is false
        }
    } else {
    Statement(s) to be executed if expression 1 is false
    }
*/

//voting age
function voteeligibility(age) {
process.stdin.setEncoding("utf8");

console.log("Enter your age:");

process.stdin.on("data", function (input) {
    let age = Number(input.trim());

    if (age < 18) {
        console.log("Not eligible");
    } else {
        console.log("Eligible");
    }

    process.exit(); // stop program
});
}
voteeligibility();




