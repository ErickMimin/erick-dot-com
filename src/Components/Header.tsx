import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import bg from '../Resources/Images/bg.jpg';
import profile from '../Resources/Images/profile.jpg';

const Header: React.FC<{}> = () => {
	const useStyles = makeStyles({
		cover: {
			backgroundImage: "url(" + bg + ")",
			backgroundSize: "cover",
			backgroundPosition: "center",
			width: '100%',
		},
		coverColor: {
			background: "rgba(62, 131, 209, 0.8)",
			width: '100%',
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		profilePic: {
			width: "100px",
			height: "100px",
			boxShadow: '0px 0px 0px 5px rgba(214,214,214,0.5)',
		},
	});

	const classes = useStyles();

	return(
		<>	
			<header>
				<Box className={classes.cover}>
					<Box className={classes.coverColor}>
						<Box color="white" textAlign="center" p={2} my={10} border={2} borderColor="white" borderRadius={5}>
							<Typography variant="h1" component="h1">Erick Miranda</Typography>
							<Typography variant="h3">Desarollador Web</Typography>
							</Box>
						</Box>
				</Box>
				<Box mt={-5} display="flex" justifyContent="center">
					<Avatar alt="Erick Miranda Mojica" src={profile} className={classes.profilePic}/>
				</Box>
			</header>	
		</>
	);
}

export default Header;
