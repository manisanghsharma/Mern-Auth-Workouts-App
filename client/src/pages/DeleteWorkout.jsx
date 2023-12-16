import { Trash2 } from "react-feather";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

const DeleteWorkout = ({workout}) => {
    const { dispatch } = useWorkoutsContext();
    const {user} = useAuthContext();
    const deleteWorkout = async () => {
			if (!user) {
				return;
			}   

			const response = await fetch(
				"https://workout-buddy-mern.onrender.com/api/workouts/" + workout._id,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);

			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "DELETE_WORKOUT", payload: json });
			}
		};

  return (
		<div
			onClick={deleteWorkout}
			className='flex items-center justify-center absolute top-2 right-2 cursor-pointer p-[10px] rounded-full hover:bg-[#ededed] transition-all sm:top-3 sm:right-7'
		>
			<Trash2 size={25} />
		</div>
	);
}
export default DeleteWorkout