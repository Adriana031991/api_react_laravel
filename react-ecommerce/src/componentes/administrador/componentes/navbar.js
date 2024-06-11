import React from 'react'

const Navbar = ({ user }) => {
    return (
        <nav className="navbar bg-teal-200">
            <div className="navbar-brand">Admin Dashboard</div>
            {user ?

                < div className="navbar-user">
                    <span>Logged in as: {user.name}</span>
                </div>
                :
                <div></div>
            }
        </nav >
    );
};

export default Navbar