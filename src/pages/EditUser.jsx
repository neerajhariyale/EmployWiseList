import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = storedUsers.find(u => u.id == id);
        if (foundUser) {
            setUser(foundUser);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.map(u => (u.id == id ? user : u));
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/users');
    };

    return (
        <div className=' w-11/12 flex flex-col mx-auto justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col rounded shadow-2xl border-gray-300 p-2'>
                <h1 className='text-center text-xl text-semibold tracking-wide underline mb-4'>Edit Information</h1>
                
                <div className='flex justify-center gap-2'>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder='firstname'
                        value={user.first_name} 
                        onChange={(e) => setUser({ ...user, first_name: e.target.value })} 
                        className='border-gray-400 mb-2  border rounded px-1'
                    />
                </div>

                <div className='flex justify-center gap-2'>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        placeholder='lastname'
                        value={user.last_name} 
                        onChange={(e) => setUser({ ...user, last_name: e.target.value })} 
                        className='border-gray-400 mb-2  border rounded px-1'                    />
                </div>

                <div className='flex gap-11'>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        placeholder='email'
                        value={user.email} 
                        onChange={(e) => setUser({ ...user, email: e.target.value })} 
                        className='border-gray-400 mb-2 border rounded px-1'                     />
                </div>

                <button type="submit" className="bg-blue-500 text-white  hover:cursor-pointer  rounded hover:bg-blue-700 mt-4 mb-2 ">Save</button>
            </form>
        </div>
    );
};

export default EditUser;

