import WorkoutDetails from "./WorkoutDetails";
import NewWorkout from "./NewWorkout";
import { useState, useEffect } from "react";
import {useAuthContext} from '../../hooks/useAuthContext'
import axios from 'axios'
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

const Home = () => {
    // const [workouts, setWorkouts] = useState([]);
    const {user} = useAuthContext();
    const {workouts, dispatch} = useWorkoutsContext();

    useEffect(() => {
        const fetchItems = async () => {
            try{
                const response = await axios.get(import.meta.env.VITE_API, {
                  headers: {
                    'Authorization': `Bearer ${user.token}`
                  }
                })
                console.log(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        if(user){
          fetchItems();
        }
    }, [dispatch, user]);
  return (
    <div className="w-full px-24 p-2 grid grid-cols-[3fr,1fr] gap-24">
      {workouts && (
        <div>
          {workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
      )}

      <NewWorkout />
    </div>
  );
}
export default Home