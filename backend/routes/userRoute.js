import { Router } from 'express'
import { createUser, loginUser } from '../controllers/userController.js'

const router = Router()

router.post("/userRegister", createUser)
router.post("/userLogin", loginUser)

export default router
