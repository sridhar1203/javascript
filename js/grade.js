//student grade using switch case
function studentGrade() {
process.stdin.setEncoding("utf8");

console.log("Enter your grade (A, B, C, D, or F):");

process.stdin.on("data", function (input) {
    let grade = input.trim().toUpperCase();

    switch (grade) {
        case "A":
            console.log("Excellent!");
            break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("Average.");
            break;
        case "D":
            console.log("Below average.");
            break;
        case "F":
            console.log("Failed.");
            break;
        default:
            console.log("Invalid grade. Please enter A, B, C, D, or F.");
    }

    process.exit();
});
}
studentGrade();
