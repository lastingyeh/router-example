import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Public = ({ loggingIn, authenticated, component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (loggingIn) return <div />;
			console.log(loggingIn,authenticated)
			return !authenticated ? (
				React.createElement(component, { ...props, loggingIn, authenticated })
			) : (
				<Redirect to="/documents" />
			);
		}}
	/>
);

Public.propTypes = {
	loggingIn: PropTypes.bool,
	authenticated: PropTypes.bool,
	component: PropTypes.func
};

export default Public;
