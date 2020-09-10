import React from 'react';
import Header from '../../Components/Header';
import About from '../../Components/About';
import Timeline from '../../Components/Timeline';
import Projects from '../../Components/Projects';
import Contact from '../../Components/Contact';

const Home: React.FC<{}> = () => {
	return(
		<>
			<Header/>
			<About/>
			<Timeline/>
			<Projects/>
			<Contact/>
		</>
		);
}

export default Home;

