import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import FeedbackList from './components/FeedbackList';
import FeedbackState from './components/FeedbackState';
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './pages/AboutPages';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header text={'feadback'} textColor='blue' />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm />
								<FeedbackState />
								<FeedbackList />
							</>
						}
					/>

					<Route path='/about' element={<AboutPages />} />
				</Routes>
				<AboutIconLink />
			</Router>
		</FeedbackProvider>
	);
};

export default App;
