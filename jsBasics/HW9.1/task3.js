const car1 = {
    brand: "Porshe",
    model: "Taycan",
    year: 2023
}

const car2 = {
    brand: "BMW",
    model: "X6",
    year: 2022
}

const car3 = {...car1, ...car2};

console.log(car3);