import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Grid } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { composeWithTracker } from 'react-komposer';

// components
import AppNavigation from '../components/AppNavigation';

// pages
// -Routes
import Index from '../pages/Index';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import NotFound from '../pages/NotFound';

// -Authenticated
import Authenticated from '../pages/Authenticated';
import Documents from '../pages/Documents';
import NewDocument from '../pages/NewDocument';
import ViewDocument from '../containers/ViewDocument';
import EditDocument from '../containers/EditDocument';

// -Public
import Public from '../pages/Public';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

// Layout
const App = appProps => {
	console.log('appProps', appProps);

	return (
		<Router>
			<div className="App">
				<AppNavigation {...appProps} />
				<Grid>
					<Switch>
						<Route exact name="index" path="/" component={Index} />
						<Authenticated exact path="/documents" component={Documents} {...appProps} />
						<Authenticated exact path="/documents/new" component={NewDocument} {...appProps} />
						<Authenticated exact path="/documents/:_id" component={ViewDocument} {...appProps} />
						<Authenticated exact path="/documents/:_id/edit" component={EditDocument} {...appProps} />
						<Public path="/signup" component={Signup} {...appProps} />
						<Public path="/login" component={Login} {...appProps} />
						<Route namae="recover-password" path="/recover-password" component={RecoverPassword} />
						<Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
						/* NotFound need put last location as Router */
						<Route component={NotFound} />
					</Switch>
				</Grid>
			</div>
		</Router>
	);
};

App.propTypes = {
	loggingIn: PropTypes.bool,
	authenticated: PropTypes.bool
};

const composer = (props, onData) => {
	const loggingIn = Meteor.loggingIn();

	onData(null, {
		loggingIn,
		authenticated: !loggingIn && !!Meteor.userId()
	});
};

export default composeWithTracker(composer)(App);
