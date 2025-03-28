// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers, updateUser, deleteUser } from './api/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchUsers(page);
                setUsers(data.data);
            } catch (err) {
                setError(err.message || 'Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

    const handleUpdateUser = async (id, updatedUser) => {
        try {
            await updateUser(id, updatedUser);
            const updatedUsers = users.map(user =>
                user.id === id ? { ...user, ...updatedUser } : user
            );
            setUsers(updatedUsers);
        } catch (err) {
            setError(err.message || 'Failed to update user');
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
             setError(err.message || 'Failed to delete user');
        }
    };

    return (
        <UserContext.Provider value={{ users, setUsers, page, setPage, handleUpdateUser, handleDeleteUser, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};