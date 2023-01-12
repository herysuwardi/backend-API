import express from 'express';
import UsersController from '../controllers/UserController.js';

const router = express.Router();

//Create - POST
router.post('/users', UsersController.createUser);
router.get('/users', UsersController.getAllUsers);
router.get('/users/:idUser', UsersController.getUserById);
router.put('/users/:idUser', UsersController.updateUser);
router.delete('/users/:idUser', UsersController.deleteUser);

export default router;
