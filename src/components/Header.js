import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
	const headerStyle = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyle}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
};
Header.defaultProps = {
	text: 'feedbackUI',
	bgColor: 'green',
};
Header.propTypes = {
	text: PropTypes.string.isRequired,
};
export default Header;
