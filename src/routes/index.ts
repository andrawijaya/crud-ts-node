import {Router} from 'express'
import { getUsers, getUserbyId, createUser, deleteUser, updateUser } from '../controllers/index.controller'
const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserbyId)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router