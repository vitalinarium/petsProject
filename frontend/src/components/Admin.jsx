import React, { useEffect, useState } from 'react';

import Animals from './admin/animals';
import PostLoadingComponent from './animalViews/postLoading';
import axiosInstance from '../axios';

function Admin() {
	const AnimalLoading = PostLoadingComponent(Animals);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get("/adoption").then((res) => {
			const allAnimals = res.data;
			setAppState({ loading: false, animals: allAnimals });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<AnimalLoading isLoading={appState.loading} animals={appState.animals} />
		</div>
	);
}
export default Admin;