import React from 'react';
import Error from './error';
import { CardTitle, Input } from 'reactstrap';

export default ({ questions, currentQuestion, handleChange }) => {
	return (
		<div style = {{marginTop:20}}>
			<CardTitle>{questions[currentQuestion]['prompt']}</CardTitle>
			<Input
				type="textarea"
				name="text"
				id="exampleText"
				value={questions[currentQuestion]['answer']}
                onChange={(e) => handleChange(e)}
                invalid = {!!questions[currentQuestion]['error']}
			/>
			{/* <textarea
				rows="4"
				cols="50"
				
				
			/> */}
			{questions[currentQuestion]['error'] && <Error error={questions[currentQuestion]['error']} />}
		</div>
	);
};
