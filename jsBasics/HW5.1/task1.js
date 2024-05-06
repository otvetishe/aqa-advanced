// Якщо середня оцінка менше 60, вивести "Незадовільно".
// Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
// Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
// Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
// Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".

let averageGrade = 91;

if (averageGrade < 60) {
    console.log("Незадовільно");
} else if ((averageGrade >= 60) && (averageGrade <= 70)) {
    console.log("Задовільно");
} else if ((averageGrade >= 71) && (averageGrade <= 80)) {
    console.log("Добре");
} else if ((averageGrade >= 81) && (averageGrade <= 90)) {
    console.log("Дуже добре");
} else if ((averageGrade >= 91) && (averageGrade <= 100)) {
    console.log("Відмінно");
} else {
    console.log("Incorrect value, please try again.");
}
