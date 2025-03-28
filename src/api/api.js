import axios from 'axios';

const API_BASE_URL =process.env.REACT_APP_API_BASE_URL;

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        return response.data;
        console.log(response.data)
        console.log("POST the data")
    } catch (error) {
        throw error.response ? error.response.data : { error: 'Something went wrong' };
    }
};

export const fetchUsers = async (page) => {
    const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
    return response.data;
    console.log("gET THE DATA");
};

export const updateUser = async (id, userData) => {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
    return response.data;
    console.log(response.data )
    console.log("Put call")
};

export const deleteUser = async (id) => {
    await axios.delete(`${API_BASE_URL}/users/${id}`);
};
