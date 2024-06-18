import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

function checkStatus(response) {
	if (response.status === 200 || response.status === 201) {
		console.log('Status check passed');
	} else {
		throw new Error(`Expected status 200 or 201, but received ${response.status}`);
	}
}

function checkData(response, expectedData) {
	if (JSON.stringify(response.data) === JSON.stringify(expectedData)) {
		console.log('Data check passed');
	} else {
		throw new Error('Data does not match expected data');
	}
}

axios
	.get(`${API_URL}/posts`)
	.then((response) => {
		checkStatus(response);
		console.log(response.data);
	})
	.catch((error) => {
		console.error('GET /posts failed:', error);
	});

axios
	.get(`${API_URL}/posts/1`)
	.then((response) => {
		checkStatus(response);
		const expectedData = {
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'quia et suscipit\nsuscipit...culpa nostrum rerum est autem sunt rem eveniet architecto',
		};
		checkData(response, expectedData);
	})
	.catch((error) => {
		console.error('GET /posts/1 failed:', error);
	});

const newPost = {
	title: 'foo',
	body: 'bar',
	userId: 1,
};

axios
	.post(`${API_URL}/posts`, newPost)
	.then((response) => {
		checkStatus(response);
		const expectedData = { ...newPost, id: response.data.id };
		checkData(response, expectedData);
	})
	.catch((error) => {
		console.error('POST /posts failed:', error);
	});

axios
	.get(`${API_URL}/comments`)
	.then((response) => {
		checkStatus(response);
		console.log(response.data);
	})
	.catch((error) => {
		console.error('GET /comments failed:', error);
	});

const newComment = {
	name: 'foo',
	email: 'bar@example.com',
	body: 'baz',
	postId: 1,
};

axios
	.post(`${API_URL}/comments`, newComment)
	.then((response) => {
		checkStatus(response);
		const expectedData = { ...newComment, id: response.data.id };
		checkData(response, expectedData);
	})
	.catch((error) => {
		console.error('POST /comments failed:', error);
	});
