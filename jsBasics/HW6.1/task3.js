
function checkOrder(available,ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty.";
    } else if ((ordered <= available) && (ordered > 0)) {
        return "Your order is accepted.";
    } else {
        return "Incorrect ordered value, please try again later.";
    }
}

console.log(checkOrder(10,11));
console.log(checkOrder(10,0));
console.log(checkOrder(10,3));
console.log(checkOrder(10,-1));