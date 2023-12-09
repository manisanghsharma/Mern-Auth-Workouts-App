import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const NewWorkout = () => {
	const [title, setTitle] = useState("");
	const [loads, setLoads] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);
	const { user } = useAuthContext();

	const addWorkout = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in");
			return;
		}

		const workout = { title, loads, reps };
		console.log(workout);
		try {
			await axios.post(import.meta.env.VITE_API, workout, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			setLoads("");
			setTitle("");
			setReps("");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div>
			<form
				onSubmit={addWorkout}
				className='flex flex-col items-start mt-10 mb-2'
			>
				<h3 className='text-xl font-bold '>Add a New Workout</h3>
				<p className='text-lg font-medium mt-5'>Excercise Title:</p>
				<input
					className='w-full h-10 rounded-md outline-none px-5'
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<p className='text-lg font-medium mt-5'>Load (in kg):</p>
				<input
					className='w-full h-10 rounded-md outline-none px-5'
					type='text'
					required
					value={loads}
					onChange={(e) => setLoads(e.target.value)}
				/>
				<p className='text-lg font-medium mt-5'>Reps:</p>
				<input
					className='w-full h-10 rounded-md outline-none px-5'
					type='text'
					required
					value={reps}
					onChange={(e) => setReps(e.target.value)}
				/>

				<button className='mt-5 bg-green-600 hover:bg-green-700 transition text-white px-10 py-3 rounded-md font-semibold'>
					Add Workout
				</button>
				{error && (
					<div className='w-full text-center py-2 border-2 border-red-500 rounded-lg mt-5 text-red-700 bg-red-100'>
						{error}
					</div>
				)}
			</form>
		</div>
	);
};
export default NewWorkout;
