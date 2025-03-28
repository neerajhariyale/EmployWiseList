import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const UserList = () => {
    const { users, setPage, handleDeleteUser, page, loading, error } = useContext(UserContext);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="w-11/12 flex flex-col justify-center items-center mt-4 mb-4">
            <h2 className="text-3xl font-semibold underline mb-8">User List</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-6/12">
                {users.map(user => (
                    <li key={user.id} className="border-2 border-gray-300 ml-4 mb-4 rounded-lg hover:shadow-2xl hover:scale-105 duration-200 ease-in flex flex-col justify-center items-center">
                        <img src={user.avatar} alt={user.first_name} className="rounded-full mt-4 h-24 w-24 md:h-34 md:w-34 lg:md-34 lg:w-34" />
                        <p className="text-xl text-bold tracking-wide text-gray-900">
                            {user.first_name} {user.last_name}
                        </p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                        <button onClick={() => navigate(`/edit/${user.id}`)} className="border-1 w-11/12 rounded-lg mt-2 text-white bg-gray-500 hover:bg-black cursor-pointer">Edit</button>
                        <button onClick={() => handleDeleteUser(user.id)} className="border-1 w-11/12 rounded-lg mt-2 text-white bg-red-600 hover:bg-black cursor-pointer mb-4">Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => setPage(page + 1)} className='hover:cursor-pointer hover:text-gray-700'>Next Page</button>
        </div>
    );
};

export default UserList;