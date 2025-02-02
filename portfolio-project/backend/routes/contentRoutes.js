const express = require("express");
const router = express.Router();
const contentController = require("../controllers/contentController");
const authMiddleware = require("../middleware/authMiddleware");

// BLOG Routes
router.get("/blogs", contentController.getBlogs);
router.post("/blogs", authMiddleware, contentController.createBlog);
router.put("/blogs/:id", authMiddleware, contentController.updateBlog);
router.delete("/blogs/:id", authMiddleware, contentController.deleteBlog);

// TEAM Routes
router.get("/team", contentController.getTeamMembers);
router.post("/team", authMiddleware, contentController.createTeamMember);
router.put("/team/:id", authMiddleware, contentController.updateTeamMember);
router.delete("/team/:id", authMiddleware, contentController.deleteTeamMember);

// SERVICE Routes
router.get("/services", contentController.getServices);
router.post("/services", authMiddleware, contentController.createService);
router.put("/services/:id", authMiddleware, contentController.updateService);
router.delete("/services/:id", authMiddleware, contentController.deleteService);

module.exports = router;
