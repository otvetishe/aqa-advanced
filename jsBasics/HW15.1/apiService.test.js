const axios = require('axios');
const fetchData = require('./apiService');

// Mock axios
jest.mock('axios');

describe('fetchData', () => {
	it('should return data when the request is successful', async () => {
		const mockData = { id: 1, title: 'Test Post' };
		axios.get.mockResolvedValue({ data: mockData });

		const url = 'https://jsonplaceholder.typicode.com/posts/1';
		const data = await fetchData(url);

		expect(data).toEqual(mockData);
		expect(axios.get).toHaveBeenCalledWith(url);
	});

	it('should throw an error when the request fails', async () => {
		axios.get.mockRejectedValue(new Error('Network Error'));

		const url = 'https://jsonplaceholder.typicode.com/posts/1';

		await expect(fetchData(url)).rejects.toThrow('Failed to fetch data');
		expect(axios.get).toHaveBeenCalledWith(url);
	});
});
