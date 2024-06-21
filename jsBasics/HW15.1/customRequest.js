const axios = require('axios');

async function makeCustomRequest(url, params, headers) {
	try {
		const response = await axios.get(url, {
			params: params,
			headers: headers,
		});
		return response.data;
	} catch (error) {
		return error.message;
	}
}

module.exports = makeCustomRequest;
