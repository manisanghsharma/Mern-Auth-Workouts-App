import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

const NewWorkout = () => {
	const [title, setTitle] = useState("");
	const [loads, setLoads] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);
	const { dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in");
			return;
		}

		const workout = { title, loads, reps };

		const response = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
		}
		if (response.ok) {
			setTitle("");
			setLoads("");
			setReps("");
			setError(null);
			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}

	};

	return (
		<div className='w-full flex justify-center'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col items-start mt-10 mb-2'
			>
				<h3 className='text-xl font-bold '>Add a New Workout</h3>
				<p className='text-lg font-medium mt-5'>Excercise Title:</p>
				<input
					className='w-[300px] h-12 rounded-md outline-none px-5'
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<p className='text-lg font-medium mt-5'>Load (in kg):</p>
				<input
					className='w-[300px] h-12 rounded-md outline-none px-5'
					type='number'
					required
					value={loads}
					onChange={(e) => setLoads(e.target.value)}
				/>
				<p className='text-lg font-medium mt-5'>Reps:</p>
				<input
					className='w-[300px] h-12 rounded-md outline-none px-5'
					type='number'
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
