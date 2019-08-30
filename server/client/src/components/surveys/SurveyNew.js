//shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = { new: true };
	// }
	// shorter version
	state = { showFormReview: false };

	render() {
		return (
			<div>
				<SurveyForm />
			</div>
		)
	}
}

export default SurveyNew;