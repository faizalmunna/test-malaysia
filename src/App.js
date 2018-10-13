import React, { Component } from 'react';
import Title from './components/title';
import QuestionsAndAnswer from './components/questionsAndAnswer';
import {Card,Progress,Button} from 'reactstrap'
import Questions from './components/questions'
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'This is a title for the form Header',
			questions: [
				{
					id: 2447,
					question_type: 'TextQuestion',
					prompt: 'What is your first answer?',
					is_required: false,
					min_char_length: 15,
					answer: '',
					error:""
				},
				{
					id: 2448,
					question_type: 'TextQuestion',
					prompt: 'What is your second answer?',
					is_required: true,
					min_char_length: 100,
					answer: '',
					error:""
				},
				{
					id: 2500,
					question_type: 'TextQuestion',
					prompt: 'What is your third answer?',
					is_required: true,
					min_char_length: 1,
					answer: '',
					error:""
				}
			],
			currentQuestion: 0
		};
	}
	nextQuestion = () => {
		let { currentQuestion, questions } = this.state;
		let { answer, min_char_length, is_required } = questions[currentQuestion];

		if (is_required && answer.trim().length === 0) {
			let newArr = this.state.questions.slice();
			newArr[currentQuestion]['error'] = `It is required to fill up the form before proceeding`;
			this.setState({ questions: newArr });
			return;
		}

		if (answer.trim().length < min_char_length) {
			let newArr = this.state.questions.slice();
			newArr[currentQuestion]['error'] = `The minimum character length should be ${min_char_length}`;
			this.setState({ questions: newArr });
			return;
		}
		if (currentQuestion < questions.length) {
			this.setState({ currentQuestion: this.state.currentQuestion + 1 });
		}
	};

	previousQuestion = () => {
		let { currentQuestion } = this.state;
		if (currentQuestion > 0) {
			this.setState({ currentQuestion: this.state.currentQuestion - 1 });
		}
	};

	handleChange = (e) => {
		let { currentQuestion } = this.state;
		let answer = e.target.value;
		let newArr = this.state.questions.slice();
		newArr[currentQuestion]['answer'] = answer;
		this.setState({ questions: newArr });
	};

	render() {
		let { currentQuestion, questions, title } = this.state;
		let showQuestionAndAnswer = currentQuestion === questions.length;
		return (
			<div className="App">
      <Card style={{padding:"30px"}}>
      
				<Title title={title} />


        progress:
        <Progress animated value={(currentQuestion/(questions.length))*100} />

        
				{showQuestionAndAnswer ? (
					<QuestionsAndAnswer questions = {questions}/>
				) : (
					<Questions questions = {questions} currentQuestion = {currentQuestion} handleChange = {this.handleChange}/>
        )}
        
        
        <div className = "buttons">
				<Button color = "danger"onClick={this.previousQuestion} disabled = {currentQuestion === 0}>previousQuestion</Button>
        {!showQuestionAndAnswer && <Button color = "danger" onClick={this.nextQuestion}>NextQuestion</Button>}
        </div>
			</Card>
      </div>
		);
	}
}

export default App;
