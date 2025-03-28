// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import UserList from './pages/UserList';
// import EditUser from './pages/EditUser';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/users" element={<UserList />} />
//                 <Route path="/edit/:id" element={<EditUser />} />
//                 <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';
import { UserProvider } from './UserContext'; // Import the provider

const App = () => {
  console.log("User Provider")
    return (
        <UserProvider> {/* Ensure UserProvider wraps your routes */}
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;