import React, { useState, useEffect } from "react";
import Animals from "./Animals";
import PostLoadingComponent from './postLoading';
import axiosInstance from '../axios';

function RenderAnimals() {
	const AnimalsLoading = PostLoadingComponent(Animals);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get('adoption').then((res) => {
			const allAnimals = res.data;
			setAppState({ loading: false, animals: allAnimals });
			console.log(res.data);
		});
	}, [setAppState]);
return (
    <div className="App">
			{/* <h1>Latest Posts</h1> */}
			<AnimalsLoading isLoading={appState.loading} animals={appState.animals} />
		</div>
)
}

export default RenderAnimals