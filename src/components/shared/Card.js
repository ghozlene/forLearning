import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
	// return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
	return (
		<div
			className='card'
			style={{
				backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
				color: reverse ? '#fff' : '#000',
			}}>
			{children}
		</div>
	);
};
Card.defaultProps = {
	reverse: true,
};
Card.prototype = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};
export default Card;
