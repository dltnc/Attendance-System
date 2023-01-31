const router = require('express').Router();
const userController = require('../controller/users');

/**
 * Get user by id or email
 */
router.get('/:userId', userController.getUserById);

/**
 * Update user by id
 * @method PUT
 */
router.put('/:userId', userController.putUserById);

/**
 * Update user by id
 * @method patch
 */
router.patch('/:userId', userController.patchUserById);

/**
 * Delete user by id
 * @method DELETE
 */
router.delete('/:userId', userController.deleteUserById);

/**
 * Get all users, include
 *  - filter
 *  - sort
 *  - pagination
 *  - select properties
 * @route /api/users?sort=["by", "name"]
 * @method GET 
 * @visibility Private
 */
router.get('/', userController.getUsers);

/**
 * Create user
 */
router.post('/', userController.postUser);


module.exports = router;