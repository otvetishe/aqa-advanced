function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const todoPromise = fetchTodo();
const userPromise = fetchUser();


Promise.all([todoPromise, userPromise])
    .then(results => {
        const [todo, user] = results;
        console.log('Results from Promise.all:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });


Promise.race([todoPromise, userPromise])
    .then(result => {
        console.log('Result from Promise.race:', result);
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });
