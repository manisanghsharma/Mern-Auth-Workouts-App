import { Trash2 } from "react-feather";
import DeleteWorkout from "./DeleteWorkout";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({workout}) => {
  return (
    <div className="bg-white px-10 mt-10 rounded-md py-3 relative">
      <h4 className="mb-2 text-2xl font-bold text-[#23A881]">{workout.title}</h4>
      <p className="text-xl">
        <strong>Load (kg): </strong>
        {workout.loads}
      </p>
      <p className="text-xl">
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-lg">{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <DeleteWorkout workout={workout} />
      
    </div>
  );
}
export default WorkoutDetails