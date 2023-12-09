import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'

const router = express.Router()

//*Login a User
router.post('/login', loginUser)

//* Signup a User
router.post('/signup', registerUser)

export default router