const apiClient = require('../config/apiConfig');

const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {        
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

module.exports = { fetchData };