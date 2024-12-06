import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/dashboard/profile">Profile</Link></li>
                    <li><Link to="/dashboard/settings">Settings</Link></li>
                </ul>
            </nav>

            <hr />
            <Outlet /> {/* Renders nested routes */}
        </div>
    );
};

export default Dashboard;
