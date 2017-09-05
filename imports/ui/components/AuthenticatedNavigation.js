import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import { Meteor } from 'meteor/meteor';

// user logout
const handleLogout = () => Meteor.logout();

// get user info
const userName = () => {
	const user = Meteor.user();
	
	const name = user && user.profile ? user.profile.name : '';

	console.log('name',name)

	return user ? `${name.first} ${name.last}` : '';
};

// layout
const AuthenticatedNavigation = () => (
	<div>
		<Nav>
			<li>
				<NavLink to="/documents">Documents</NavLink>
			</li>
		</Nav>
		<Nav pullRight>
			<NavDropdown eventKey={3} title={userName()} id="basic-nav-dropdown">
				<MenuItem eventKey={1} onClick={handleLogout}>
					Logout
				</MenuItem>
			</NavDropdown>
		</Nav>
	</div>
);

export default AuthenticatedNavigation;
