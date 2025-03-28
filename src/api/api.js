import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://reqres.in/api';
// const API_BASE_URL = process.env.BASE_URL ;


console.log("API_BASE_URL: ", API_BASE_URL);


export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        console.log("POST the data")
        return response.data;
        console.log(response.data)
        
    } catch (error) {
        throw error.response ? error.response.data : { error: 'Something went wrong' };
    }
};

export const fetchUsers = async (page) => {
    console.log("Fetching users from:", `${API_BASE_URL}/users?page=${page}`);
    const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
    console.log("gET THE DATA" , response.data);
    return response.data;
    
};

export const updateUser = async (id, userData) => {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
    console.log("Put call")
    console.log(response.data )
    return response.data;
};

export const deleteUser = async (id) => {
    await axios.delete(`${API_BASE_URL}/users/${id}`);
};
