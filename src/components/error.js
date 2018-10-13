import React from 'react';
import { FormFeedback } from 'reactstrap';

export default ({ error }) => {
	return <FormFeedback>{error}</FormFeedback>;
};
