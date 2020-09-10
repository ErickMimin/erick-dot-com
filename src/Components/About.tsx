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
						<Typography>
							Actualmente soy estudiante del Instituto Politécnico Nacional dentro de la ingeniería en sistemas computacionales, interesado en desarrollo web, inteligencia artificial, diseño, entre otras áreas.
						 <br/><br/>
							Este sitio web es una manera de dar a conocer mi vida profesional al mundo, tengan por seguro que esta no es la versión final, me concentraré en la constante mejora.
						</Typography>
					</Box>
				</Container>
			</section>
		</>
	);
}

export default About;
