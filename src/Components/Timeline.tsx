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

  const classes = useStyles();

	return(
		<>
			<Box id="timeline" bgcolor="info.light" component="section">
				<Container maxWidth="md">
					<Box color="secondary.main" py={2} textAlign="center">
						<Typography variant="h2">Timeline</Typography>
					</Box>
					<TimelineM align="alternate">
						<TimelineItem>
							<TimelineOppositeContent className={classes.date}>
								<Typography variant="body2" color="textSecondary">
									Ago 2013 - Jul 2016 
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color="primary" className={classes.icon}>
									<i className="fas fa-graduation-cap" />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={1} className={classes.paper}>
									<Typography variant="h4" component="h2">
										Bachillerato T&eacute;cnico en Mecatr&oacute;nica 
									</Typography>
									<Typography>CETis 12</Typography>
								</Paper>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent className={classes.date}>
								<Typography variant="body2" color="textSecondary">
									Ago 2018 - Feb 2019
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color="primary" className={classes.icon}>
									<i className="fas fa-layer-group" />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={1} className={classes.paper}>
									<Typography variant="h4" component="h2">
										Desarollador Front-end Junior
									</Typography>
									<Typography>E-Bitware</Typography>
								</Paper>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineOppositeContent className={classes.date}>
								<Typography variant="body2" color="textSecondary">
									Ago 2016 - Actualidad
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color="primary" className={classes.icon}>
									<i className="fas fa-layer-group" />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Paper elevation={1} className={classes.paper}>
									<Typography variant="h4" component="h2">
										Ingeniero en Sistemas Computacionales 
									</Typography>
									<Typography>Instituto Polit&eacute;cnico Nacional</Typography>
								</Paper>
							</TimelineContent>
						</TimelineItem>
					</TimelineM>
				</Container>
			</Box>
		</>
	);
}

export default Timeline;
