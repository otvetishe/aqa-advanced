async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function fetchDataUsingPromiseAll() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Results from Promise.all:');
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}

async function fetchDataUsingPromiseRace() {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Result from Promise.race:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

fetchDataUsingPromiseAll();
fetchDataUsingPromiseRace();
