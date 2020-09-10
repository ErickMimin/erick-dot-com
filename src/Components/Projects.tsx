import React from 'react';
import WebImage from './../Resources/Images/web.jpg';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const Projects: React.FC<{}> = () => {

	const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
			justifyContent: "space-between",
			minWidth: 400,
    },
		details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

	const classes = useStyles();

	return(
		<>
			<Box id="projects" component="section" mb={2}>
				<Container maxWidth="md">
					<Box color="secondary.main" py={2} textAlign="center">
						<Typography variant="h2" component="h2">Proyectos</Typography>
					</Box>
					<Box display="flex" justifyContent="center">
						<Card className={classes.root}>
							<Box className={classes.details}>
								<CardContent className={classes.content}>
									<Typography component="h5" variant="h5">
										<Link href="https://github.com/ErickMimin/erick-dot-com" color="inherit">
											Erick Dot Com
										</Link>
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Mi propio sitio web
									</Typography>
								</CardContent>
							</Box>
							<CardMedia
								className={classes.cover}
								image={WebImage}
								title="My Web Site"
							/>
						</Card>
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default Projects;
