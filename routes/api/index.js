const router = require('express').Router();
// Imports sets of routes:
const thoughtRoutes = require('./thoughtsRoutes');
const userRoutes = require('./usersRoutes');

// Uses the router to define the routes.
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
