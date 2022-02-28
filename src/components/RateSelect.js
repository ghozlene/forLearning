import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const RateSelect = ({ select }) => {
	const { Feedbackedit } = useContext(FeedbackContext);

	useEffect(() => {
		setSelected(Feedbackedit.item.rating);
	}, [Feedbackedit]);
	const [selected, setSelected] = useState(2);
	const handlerChange = (e) => {
		setSelected(+e.currentTarget.value);
		select(+e.currentTarget.value);
	};
	return (
		<ul className='rating'>
			<li>
				<input
					type='radio'
					id='num1'
					name='rating'
					value='1'
					onChange={handlerChange}
					checked={selected === 1}
				/>
				<label htmlFor='num1'>1</label>
			</li>
			<li>
				<input
					type='radio'
					id='num2'
					name='rating'
					value='2'
					onChange={handlerChange}
					checked={selected === 2}
				/>
				<label htmlFor='num2'>2</label>
			</li>
			<li>
				<input
					type='radio'
					id='num3'
					name='rating'
					value='3'
					onChange={handlerChange}
					checked={selected === 3}
				/>
				<label htmlFor='num3'>3</label>
			</li>
			<li>
				<input
					type='radio'
					id='num4'
					name='rating'
					value='4'
					onChange={handlerChange}
					checked={selected === 4}
				/>
				<label htmlFor='num4'>4</label>
			</li>
			<li>
				<input
					type='radio'
					id='num5'
					name='rating'
					value='5'
					onChange={handlerChange}
					checked={selected === 5}
				/>
				<label htmlFor='num5'>5</label>
			</li>
		</ul>
	);
};

export default RateSelect;
