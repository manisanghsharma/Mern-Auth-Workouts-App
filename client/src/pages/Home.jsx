import WorkoutDetails from "./WorkoutDetails";
import NewWorkout from "./NewWorkout";
import { useState, useEffect } from "react";
import {useAuthContext} from '../../hooks/useAuthContext'
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

const Home = () => {
    const {user} = useAuthContext();
    const {workouts, dispatch} = useWorkoutsContext();

    useEffect(() => {
         const fetchWorkouts = async () => {
						const response = await fetch(
							"https://workout-buddy-mern.onrender.com/api/workouts",
							{
								headers: { Authorization: `Bearer ${user.token}` },
							}
						);
						const json = await response.json();

						if (response.ok) {
							dispatch({ type: "SET_WORKOUTS", payload: json });
						}
					};

        if(user){
          fetchWorkouts();
        }
    }, [dispatch, user]);
  return (
    <div className="w-full px-6 grid grid-cols-[3fr,1fr] gap-12 lg:px-24 lg:gap-24 md:px-10">

        <div className="max-md:col-span-2">
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>

      <div className="max-md:hidden">
        <NewWorkout />
      </div>
    </div>
  );
}
export default Home