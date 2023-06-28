import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Animals = (props) => {
	const { animals } = props;
	const classes = useStyles();
	if (!animals || animals.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{animals.map((animal) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={animal.id} xs={14} md={4}>
								<Card className={classes.card}>
								
                                <CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.animalName}
										>
											{animal.name}
										</Typography>
										<div className={classes.animalDescription}>
											<Typography color="textSecondary">
												{animal.category} | {animal.age} years | {animal.city}
											</Typography>
										</div>
									</CardContent>
									<CardMedia
										className={classes.cardMedia}
										image={animal.image}
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.animalDescription}
										>
											{animal.description}
										</Typography>
										<Button
												href="#"
												color="primary"
												variant="outlined"
												className={classes.link}
												component={NavLink}
												to="/login"
											>
												Adopt 🧡
											</Button>
										<div className={classes.animalDescription}>
											<Typography color="textSecondary">
												{animal.added_by_user.username}
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Animals;
