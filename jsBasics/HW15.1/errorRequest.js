const axios = require('axios');

async function makeErrorRequest() {
	try {
		await axios.get('https://jsonplaceholder.typicode.com/nonexistentendpoint');
	} catch (error) {
		return error.message;
	}
}

module.exports = makeErrorRequest;
