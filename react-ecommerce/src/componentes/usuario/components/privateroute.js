import React from 'react'
import { auth } from '../../../lib/config/firebase.config';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute