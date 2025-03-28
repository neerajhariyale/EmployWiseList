import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []); 

    const handleDelete = async (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers)); 
    };

    return (
        <div className='w-11/12 flex flex-col justify-center items-center mt-4 mb-4'>
            <h2 className='text-3xl font-semibold underline mb-8'>User List</h2>
            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-6/12'>
                {users.map(user => (
                    <li key={user.id} className='border-2 border-gray-300 ml-4 mb-4 rounded-lg hover:shadow-2xl hover:scale-105 duration-200 ease-in flex flex-col justify-center items-center'>
                        <img src={user.avatar} alt={user.first_name} className='rounded-full mt-4' />
                        <p className='text-xl text-bold tracking-wide text-gray-900'>{user.first_name} {user.last_name}</p>
                        <p className='text-xs text-gray-400'>{user.email}</p>
                        <button onClick={() => navigate(`/edit/${user.id}`)} className='border-1 w-11/12 rounded-lg mt-2 text-white bg-gray-500 hover:bg-black cursor-pointer'>Edit</button>
                        <button onClick={() => handleDelete(user.id)} className='border-1 w-11/12 rounded-lg mt-2 text-white bg-red-600 hover:bg-black cursor-pointer mb-4'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
