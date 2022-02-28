import React, { useContext, useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RateSelect from './RateSelect';
import FeedbackContext from '../context/FeedbackContext';
const FeedbackForm = () => {
	const { addFeedback, Feedbackedit, updateFeedback } =
		useContext(FeedbackContext);
	useEffect(() => {
		if (Feedbackedit.edit === true) {
			setBtnDisabled(false);

			setText(Feedbackedit.item.text);
			setRating(Feedbackedit.item.rating);
		}
	}, [Feedbackedit]);

	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('text must be at least 10 carac');
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	};
	const handlerSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newfeedback = {
				text,
				rating,
			};
			if (Feedbackedit.edit === true) {
				updateFeedback(Feedbackedit.item.id, newfeedback);
			} else {
				addFeedback(newfeedback);
			}

			setText('');
		}
	};

	return (
		<Card>
			<form onSubmit={handlerSubmit}>
				<h2>how do you want to rate your service </h2>
				{
					<RateSelect
						select={(rating) => {
							setRating(rating);
						}}
					/>
				}
				<div className='input-group'>
					<input
						type='text'
						placeholder='write a review'
						onChange={handleTextChange}
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
