import React, { createContext } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'this  is feedback num 1  from Context',
			rating: 10,
		},
		{
			id: 2,
			text: 'this is feedback num 2 from Context',
			rating: 2,
		},
		{
			id: 3,
			text: 'this is feedback num 3 from Context',
			rating: 5,
		},
	]);
	const [Feedbackedit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const deleteFeedback = (id) => {
		if (window.confirm('are you sure you want to delete')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};
	const addFeedback = (newfeedback) => {
		newfeedback.id = uuidv4();
		setFeedback([newfeedback, ...feedback]);
	};
	const editFeedBack = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		);
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedBack,
				Feedbackedit,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};
export default FeedbackContext;
