const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController')
const validateMiddleWare = require('../../utils/middlewares/schema-validator');
const validateUser = require('../../db/models/user-schema').validateUser;




userRoutes.post('/add_new_user',[validateMiddleWare(validateUser)],userController.Register)
userRoutes.post('/login_user',userController.Login)
userRoutes.put('/update_user',userController.Update)
userRoutes.delete('/delete_user',userController.Delete)


// userRoutes.patch('/update_user',userController.Update)
// userRoutes.delete('/delete_user',userController.Delete)

module.exports=userRoutes;