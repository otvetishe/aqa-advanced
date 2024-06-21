const makeErrorRequest = require('./errorRequest');

test('should return an error message when the request fails', async () => {
	const errorMessage = await makeErrorRequest();
	expect(errorMessage).toMatch(/Request failed with status code 404/);
});
