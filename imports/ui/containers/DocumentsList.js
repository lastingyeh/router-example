import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import Documents from '../../api/documents/documents';
import DocumentsList from '../components/DocumentsList';
import Loading from '../components/Loading';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('documents.list');

	if (subscription.ready()) {
		const documents = Documents.find().fetch();
		onData(null, { documents });
	}
};

export default composeWithTracker(composer, Loading)(DocumentsList);
