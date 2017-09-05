import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents';

import ViewDocument from '../pages/ViewDocument';
import Loading from '../components/Loading';

const composer = ({ match }, onData) => {
	const documentId = match.params._id;
	const subscription = Meteor.subscribe('documents.view', documentId);

	if (subscription.ready()) {
		const doc = Documents.findOne(documentId);
		onData(null, { doc });
	}
};

export default composeWithTracker(composer, Loading)(ViewDocument);
