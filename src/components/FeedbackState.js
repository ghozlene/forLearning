import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
const FeedbackState = () => {
	const { feedback } = useContext(FeedbackContext);
	//calculate rating
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;
	average = average.toFixed(1).replace(/[.,]0$/, '');
	return (
		<div className='feedback-stats'>
			<h4>({feedback.length}) Reviews</h4>
			<h4>Averge Rating = {isNaN(average) ? 0 : average}</h4>
		</div>
	);
};

FeedbackState.propTypes = {
	average: PropTypes.number,
	feedback: PropTypes.array,
};

export default FeedbackState;