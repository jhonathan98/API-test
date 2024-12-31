const { fetchData } = require('../services/apiService');

const getData = async (req, res) => {
    try {
        const data = await fetchData('/Country/Colombia');
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getData };