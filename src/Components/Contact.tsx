import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Contact: React.FC<{}> = () => {
	const useStyles = makeStyles((theme) => ({
		icon: {
			fontSize: '20px',
		},
		bg: {
			backgroundColor: '#1e2b38',
		},
		flex: {
			justifyContent: "space-between",
		},
	}));

	const items = [{
			link: "https://github.com/ErickMimin",	
			icon: "fab fa-github",
			title: "Github",
		},
	];

	const classes = useStyles();

	const listItems = items.map((item: any) => (
		<Button variant="contained" size="medium" color="primary" href={item.link}>
			<i className={`${item.icon} ${classes.icon}`}/> 
			<Box ml={0.5} component="span">
				{item.title}
			</Box>
		</Button>
	));

	return(
		<>
		<Box id="contact" className={classes.bg} component="footer">
			<Container maxWidth="md">
				<Box py={2} display="flex" className={classes.flex} alignItems="center" flexWrap="wrap">
					<Box color="white">
						<Box display="flex">
							<Typography> 
								<i className="fas fa-envelope"/> 
							</Typography>
							<Box display="flex" alignItems="center" ml={0.5}>
								<Typography variant="body2">
									eri_mimo@hotmail.com
								</Typography>
							</Box>
						</Box>
						<Box display="flex">
							<Typography> 
								<i className="fas fa-phone"/> 
							</Typography>
							<Box display="flex" alignItems="center" ml={0.5}>
								<Typography variant="body2">
									777-365-39-10
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box>
						{listItems}
					</Box>
					{/*<Box></Box>*/}
				</Box>
			</Container>
		</Box>
		</>
	);
}

export default Contact;
