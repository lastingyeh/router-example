import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PublicNavigation from './PublicNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';

// 驗證
const renderNavigation = authenticated => (authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ authenticated }) => {
	console.log('authenticated',authenticated);
	return (
		<Navbar>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">Application Name</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>{renderNavigation(authenticated)}</Navbar.Collapse>
		</Navbar>
	);
};

AppNavigation.propTypes = {
	authenticated: PropTypes.bool
};

export default AppNavigation;
