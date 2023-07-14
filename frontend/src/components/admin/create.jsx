import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate} from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
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
	
	const navigate = useNavigate();
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

	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1; 
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();

	let dateToday = year + "-" + month + "-" + day;

	const [postData, updateFormData] = useState(initialFormData);
	const [postimage, setPostImage] = useState(null);

	const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setPostImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		}
		if ([e.target.name] == 'name') {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
				
			});
		} else {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	let slug = postData.name.toLowerCase() +'-'+ postData.category.toLowerCase() + '-' + dateToday

	const handleSubmit = (e) => {
		e.preventDefault();
		const config = { headers: { 'Content-Type': 'multipart/form-data' } }
		let formData = new FormData();
		formData.append('name', postData.name);
		formData.append('category', postData.category);
		formData.append('added_by_user', 1);
		formData.append('description', postData.description);
		formData.append('city', postData.city);
		formData.append('age', postData.age);
		formData.append('date', dateToday);
		formData.append('slug', slug);
		formData.append('image', postimage.image[0]);
		axiosInstance.post(`adoption/addanimal/`, formData, config)
		.then((res) => {
					console.log(res.data);
				})
		.catch((err) => console.log(err));
		navigate({
			pathname: '/myanimals',
		});
		window.location.reload();
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Add Pet for adoption
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
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="description"
								label="Tell more about pet"
								name="description"
								autoComplete="description"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="category"
								label="category"
								name="category"
								autoComplete="category"
								// value={postData.slug}
								onChange={handleChange}
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
								onChange={handleChange}
								multiline
								rows={4}
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
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="postimage"
							onChange={handleChange}
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
						Add Animal
					</Button>
				</form>
			</div>
		</Container>
	);
}