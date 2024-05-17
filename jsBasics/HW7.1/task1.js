function handleNum( number, evenNumber, oddNumber) {
    if (number % 2 === 0) {
        evenNumber(number);
    } else {
        oddNumber(number);
    }
}

function handleEven(num) {
    console.log(num + " number is even");
}

function handleOdd(num) {
    console.log(num + " number is odd");
}

handleNum(4, handleEven, handleOdd);


handleNum(7, handleEven, handleOdd); 
