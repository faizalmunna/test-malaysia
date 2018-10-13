import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default ({ questions }) => {
	return (
		<ListGroup>
			{questions.map((question) => (
				<ListGroupItem key={question.id}>
					<div>{question.prompt}</div>
					<div>{question.answer}</div>
				</ListGroupItem>
			))}
		</ListGroup>
	);
};
