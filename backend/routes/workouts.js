import express from 'express'
import { Workout } from '../models/Workout.js'
import {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} from '../controllers/workoutControllers.js'
import requireAuth from '../middleware/requireAuth.js'


const router = express.Router()

router.use(requireAuth)

// Get all workouts
router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

export default router