// controllers/contentController.js
const Blog = require('../models/Blog');
const Team = require('../models/Team');
const Service = require('../models/Service');

// BLOGS
exports.fetchBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// TEAM
exports.fetchTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find().sort({ createdAt: -1 });
    res.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const newMember = new Team(req.body);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const updatedMember = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) return res.status(404).json({ message: "Team member not found" });
    res.json(updatedMember);
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ message: "Team member not found" });
    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// SERVICES
exports.fetchServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) return res.status(404).json({ message: "Service not found" });
    res.json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ message: "Service not found" });
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ message: "Server error" });
  }
};
