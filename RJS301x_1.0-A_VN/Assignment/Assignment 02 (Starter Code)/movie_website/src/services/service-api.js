import axios from 'axios';

/**
 * fetch api from url
 * @param {*} url 
 * @returns object
 */
const fetchApi = async (url) => {
    try {
        const response = await axios.get(url);
        if (!response.data) {
            throw new Error();
        }
        return response
    } catch (error) {
        return {
            data: null,
            message: error
        }
    }
}

export {
    fetchApi,
}