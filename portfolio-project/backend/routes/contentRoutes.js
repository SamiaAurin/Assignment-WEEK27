// routes/contentRoutes.js
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Blog routes
router.get('/blogs', contentController.fetchBlogs);
router.post('/blogs', contentController.createBlog);
router.put('/blogs/:id', contentController.updateBlog);
router.delete('/blogs/:id', contentController.deleteBlog);

// Team routes
router.get('/team', contentController.fetchTeamMembers);
router.post('/team', contentController.createTeamMember);
router.put('/team/:id', contentController.updateTeamMember);
router.delete('/team/:id', contentController.deleteTeamMember);

// Service routes
router.get('/services', contentController.fetchServices);
router.post('/services', contentController.createService);
router.put('/services/:id', contentController.updateService);
router.delete('/services/:id', contentController.deleteService);

module.exports = router;
