const axios = require('axios');
const makeCustomRequest = require('./customRequest');

// Mock axios
jest.mock('axios');

test('should include custom headers and params in the request', async () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const params = { userId: 1 };
	const headers = { Authorization: 'Bearer someToken' };

	const mockResponse = { data: [{ id: 1, title: 'Post 1' }] };
	axios.get.mockResolvedValue(mockResponse);

	const data = await makeCustomRequest(url, params, headers);

	expect(data).toEqual(mockResponse.data);
	expect(axios.get).toHaveBeenCalledWith(url, {
		params: params,
		headers: headers,
	});
});
