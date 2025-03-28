import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            localStorage.setItem('token', data.token);
            navigate('/users');
        } catch (err) {
            setError(err.error || 'Login failed');
        }
    };

    return (
        <div className="flex mx-auto justify-center items-center w-11/12 h-screen ">
            <form className="p-6 shadow-2xl  flex flex-col rounded-xl" onSubmit={handleLogin}>
                <h2 className="text-2xl mb-4 tracking-wide text-center underline ">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className=" mb-2 border-2  border-gray-500 rounded p-1 bg-white" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mb-2 border-2  border-gray-500 rounded p-1 bg-white " />
                <button type="submit" className="bg-blue-500 text-white p-2 hover:cursor-pointer  rounded hover:bg-blue-700 mt-2">Login</button>
            </form>
        </div>
    );
};

export default Login;