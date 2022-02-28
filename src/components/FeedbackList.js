import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext);
	return !feedback || feedback.length === 0 ? (
		<p>No feedback yet</p>
	) : (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => {
					return (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<FeedbackItem key={item.id} item={item} />
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>

		// <div className='feedback-list'>
		// 	{feedback.map((item) => {
		// 		return (
		// 			<FeedbackItem key={item.id} item={item} handledelete={handledelete} />
		// 		);
		// 	})}
		// </div>
	);
};

export default FeedbackList;
