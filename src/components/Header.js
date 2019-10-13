import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="isActive">Add expense</NavLink>
        <NavLink to="/edit" activeClassName="isActive">Edit expense</NavLink>
        <NavLink to="/help" activeClassName="isActive">Help page</NavLink>
    </header>
);

export default Header;