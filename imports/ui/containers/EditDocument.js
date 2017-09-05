import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import Documents from '../../api/documents/documents';
import EditDocument from '../pages/EditDocument';
import Loading from '../components/Loading';

const composer = ({ match }, onData) => {
  console.log('match', match);
  
	const documentId = match.params._id;
	const subscription = Meteor.subscribe('documents.view', documentId);

	if (subscription.ready()) {
		const doc = Documents.findOne(documentId);
		onData(null, { doc });
	}
};

export default composeWithTracker(composer, Loading)(EditDocument);
