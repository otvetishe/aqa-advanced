function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Введіть будь ласка тільки числа");
    }
    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
    }
    return numerator / denominator;
}

function checkDivide(numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log(`Результат ділення ${numerator} на ${denominator} це ${result}`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
}

checkDivide(10, 2);
checkDivide(10, 0);
checkDivide(10, 'a');
checkDivide('b', 2);
checkDivide(20, 5);