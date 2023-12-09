import { Workout } from "../models/Workout.js";
import mongoose from "mongoose";


//* Get all workouts
const getWorkouts = async (req, res) => {
    const {user_id} = req.user._id
    try {
        //? Sort by createdAt in descending order

        const workouts = await Workout.find({user_id}).sort({ createdAt: -1});
        res.status(200).json(workouts);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


//* Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout"});
    }

    const workout = await Workout.findById(id);

    if(!workout) {
        return res.status(404).json({ error: `No workout with id: ${id}`});
    }
    
    res.status(200).json(workout);
}


//* Create a new workout
const createWorkout = async (req, res) => {
    const { title, reps, loads } = req.body;
    try {
        const {user_id} = req.user._id;

        const workout = await Workout.create({ title, reps, loads, user_id });
    
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


//* Delete a workout
const deleteWorkout = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout"});
    }

    const workout = await Workout.findByIdAndDelete({_id: id});

    if(!workout) {
        return res.status(404).json({ error: `No workout with id: ${id}`});
    }

    return res.status(200).json({ message: "Workout deleted successfully" });
}


//* Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout"});
    }   

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body});


    if(!workout) {
        return res.status(404).json({ error: `No workout with id: ${id}`});
    }

    return res.status(200).json({ message: "Workout updated successfully" });
}
export {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout}