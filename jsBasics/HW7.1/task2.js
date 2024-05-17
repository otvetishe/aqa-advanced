function decreaseNumber(num) {
    console.log(num);
    if (num > 0) {
        decreaseNumber(num - 1);
    }
}


decreaseNumber(5);