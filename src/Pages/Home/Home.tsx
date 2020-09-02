import React from 'react';
import Header from '../../Components/Header';
import About from '../../Components/About';
import Timeline from '../../Components/Timeline';

const Home: React.FC<{}> = () => {
	return(
		<>
			<Header/>
			<About/>
			<Timeline/>
		</>
		);
}

export default Home;

