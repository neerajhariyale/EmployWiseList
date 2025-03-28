import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const EditUser = () => {
    const { handleUpdateUser, users } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const foundUser = users.find((u) => u.id === parseInt(id, 10));
        if (foundUser) {
            setUser(foundUser);
        } else {
            setError("User not found.");
        }
        setLoading(false);
    }, [id, users]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        handleUpdateUser(parseInt(id, 10), user,true);
        try {
            await handleUpdateUser(parseInt(id, 10), user, false); 
            navigate('/users');
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='w-11/12 flex flex-col mx-auto justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col rounded shadow-2xl border-gray-300 p-4'>
                <h1 className='text-center text-xl font-semibold tracking-wide underline mb-4'>Edit Information</h1>
                <div className='flex justify-center gap-2 mb-2'>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={user.first_name}
                        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                        className='border-gray-400 border rounded px-2'
                    />
                </div>
                <div className='flex justify-center gap-2 mb-2'>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={user.last_name}
                        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                        className='border-gray-400 border rounded px-2'
                    />
                </div>
                <div className='flex justify-center gap-2 mb-2'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className='border-gray-400 border rounded px-2'
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">Save</button>
            </form>
        </div>
    );
};

export default EditUser;