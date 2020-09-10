import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TimelineM from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Timeline: React.FC<{}> = () => {
	const useStyles = makeStyles((theme) => ({
		paper: {
			padding: '6px 16px',
		},
		icon: {
			height: "40px",
			width: "40px",
			justifyContent: "center",
			alignItems: "center",
				'& i':{
					fontSize: '20px',
				}
		},
		date: {
			paddingTop: "18px",
		},
	}));

	const items = [{
			date: "Ago 2013 - Jul 2016",
			icon: "graduation-cap",
			title: "Bachillerato Técnico en Mecatrónica",
			ubication: "CETis 12",
		},{
			date: "Ago 2018 - Feb 2019",
			icon: "layer-group",
			title: "Desarollador Front-end Junior",
			ubication: "E-Bitware",
		},{
			date: "Ago 2016 - Actualidad",
			icon: "university",
			title: "Ingeniero en Sistemas Computacionales",
			ubication: "Instituto Politécnico Nacional",
		},
	];

	const classes = useStyles();

	const listItems = items.map((item: any) =>(
		<TimelineItem>
			<TimelineOppositeContent className={classes.date}>
				<Typography variant="body2" color="textSecondary">
					{item.date} 
				</Typography>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot color="primary" className={classes.icon}>
					<i className={`fas fa-${item.icon}`}/>
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<Paper elevation={1} className={classes.paper}>
					<Typography variant="h4" component="h2">
						{item.title} 
					</Typography>
					<Typography>{item.ubication}</Typography>
				</Paper>
			</TimelineContent>
		</TimelineItem>
	));

	return(
		<>
			<Box id="timeline" bgcolor="info.light" component="section">
				<Container maxWidth="md">
					<Box color="secondary.main" pt={2} textAlign="center">
						<Typography variant="h2">Timeline</Typography>
					</Box>
					<Box pb={1}>
						<TimelineM align="alternate">
							{listItems}
						</TimelineM>
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default Timeline;
