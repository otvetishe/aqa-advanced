const users = [
    { name: "John", age: 30, email: "johndoe@gmail.com" },
    { name: "Jane", age: 25, email: "janedoe@gmail.com" }
  ];

  for (const {name, age, email} of users) {
    console.log(`Credentials for account with name: ${name} and age: ${age} have sent to email: ${email} `)
  }