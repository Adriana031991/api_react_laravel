import React from 'react'

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Admin Dashboard</div>
            <div className="navbar-user">
                <span>Logged in as: {user.name}</span>
            </div>
        </nav>
    );
};

export default Navbar