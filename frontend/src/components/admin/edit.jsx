import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1; 
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();

	let dateToday = year + "-" + month + "-" + day;

	const navigate = useNavigate();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		name: '',
		category: '',
		description: '',
		city: '',
		added_by_user: '',
		age: '',
		slug: '',
		date: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	const [postimage, setPostImage] = useState(null);

	
	useEffect(() => {
		axiosInstance.get('adoption/edit/animaldetail/' + id).then((res) => {
			updateFormData({
				...formData,
				['name']: res.data.name,
				['category']: res.data.category,
				['description']: res.data.description,
				['city']: res.data.city,
				['age']: res.data.age,
				['image']: res.data.image,
				
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setPostImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		} else {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	}
	};

	let slug = formData.name.toLowerCase() +'-'+ formData.category.toLowerCase() + '-' + dateToday

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put(`adoption/edit/` + id + '/', {
			name: formData.name,
			category: formData.category,
			slug: slug,
			added_by_user: 1,
			description: formData.description,
			city: formData.city,
			age: formData.age,
			date: formData.dateToday,
			image: formData.image,
		});
		navigate({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Update Pet Info
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Pet Name"
								name="name"
								autoComplete="name"
								value={formData.name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="category"
								label="Pet category"
								name="category"
								autoComplete="category"
								value={formData.category}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="description"
								label="description"
								name="description"
								autoComplete="description"
								value={formData.description}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="city"
								label="city"
								name="city"
								autoComplete="city"
								value={formData.city}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="age"
								label="age"
								name="age"
								autoComplete="age"
								value={formData.age}
								onChange={handleChange}
								
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="image"
							onChange={handleChange}
							// value={formData.image}
							name="image"
							type="file"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Pet Info
					</Button>
				</form>
			</div>
		</Container>
	);
}