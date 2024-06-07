function printText(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}


printText("Hello, world!", 2000);