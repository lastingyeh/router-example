import React from 'react';
import PropTypes from 'prop-types';
import DocumentEditor from '../components/DocumentEditor';
import NotFound from './NotFound';

const EditDocument = props => {
	return props.doc ? (
		<div className="EditDocument">
			<h4 className="page-header">Editing "{props.doc.title}"</h4>
			<DocumentEditor {...props} />
		</div>
	) : (
		<NotFound />
	);
};

EditDocument.propTypes = {
	doc: PropTypes.object
};

export default EditDocument;
