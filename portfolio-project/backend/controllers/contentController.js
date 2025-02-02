const Blog = require('../models/Blog');
const Team = require('../models/Team');
const Service = require('../models/Service');

// --- BLOGS ---
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const blog = await newBlog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// --- TEAM ---
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find().sort({ createdAt: -1 });
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    const team = await newTeam.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!team) return res.status(404).json({ message: 'Team member not found' });
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team member not found' });
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// --- SERVICES ---
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    const service = await newService.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
