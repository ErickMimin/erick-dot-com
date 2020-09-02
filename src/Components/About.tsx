import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const About: React.FC<{}> = () => {
	return(
		<>
			<section id="about">
				<Container maxWidth="md">
					<Box color="secondary.main" my={2} textAlign="center">
						<Typography variant="h2"> Acerca de </Typography>
					</Box>
					<Box textAlign="center" mb={2}>
						<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet felis faucibus felis placerat viverra. Vestibulum et ipsum nec nulla commodo maximus. Mauris mauris augue, gravida vel neque vel, molestie facilisis nisl.</Typography>
					</Box>
				</Container>
			</section>
		</>
	);
}

export default About;
