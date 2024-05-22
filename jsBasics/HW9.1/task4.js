const person = {
    firstName: "John",
    lastName: "Doe",
    age: 82
};

const {firstName, lastName, age, email = "johndoe@gmail.com"} = person;
person.email = "johndoe@gmail.com";
delete person.age;
console.log(person);