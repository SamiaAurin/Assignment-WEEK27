# Ostad-Assignment-WEEK27: Portfolio Website

A dynamic portfolio website built using Node.js, Express, MongoDB, and Bootstrap. This website allows for dynamic content management through an admin dashboard. The website is hosted on Netlify, and the backend is hosted on Vercel.

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [API Endpoints](#api-endpoints)
6. [Deployment](#deployment)
7. [Contributing](#contributing)

## Description

This project is a personal portfolio website that allows users to manage their content through a secure admin dashboard. The dashboard includes the ability to perform CRUD operations on blogs, team members, and services. The front end is built with HTML, CSS, JavaScript, and Bootstrap, and the backend uses Node.js, Express, and MongoDB.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Atlas cluster for cloud database)
- Git (for version control)

### Steps to set up the backend:
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/SamiaAurin/Assignment-WEEK27.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd Assignment-WEEK27
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up your MongoDB Atlas cluster and replace the MongoDB URI in the `.env` file.
5. Start the backend server:
    ```bash
    cd portofolio-project
    cd backend
    node server.js
    ```

### Steps to set up the frontend:
1. Navigate to the frontend directory to this link:
    ```bash
    http://localhost:5000/index.html
    ```

## Features

- CRUD functionality for managing Blogs, Team Members, and Services.
- Admin dashboard with JWT-based authentication.
- Dynamic content management using MongoDB.
- Mobile-responsive design using Bootstrap.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Token)
- **Hosting**: Netlify (Frontend), Vercel (Backend)

## API Endpoints

### Auth
- **POST** `/api/auth/login`: Logs in a user (returns a JWT token).

### Blog Endpoints
- **GET** `/api/content/blogs`: Fetch all blogs.
- **POST** `/api/content/blogs`: Create a new blog (requires admin authentication).
- **PUT** `/api/content/blogs/:id`: Update a blog (requires admin authentication).
- **DELETE** `/api/content/blogs/:id`: Delete a blog (requires admin authentication).

### Team Member Endpoints
- **GET** `/api/content/team`: Fetch all team members.
- **POST** `/api/content/team`: Create a new team member (requires admin authentication).
- **PUT** `/api/content/team/:id`: Update a team member (requires admin authentication).
- **DELETE** `/api/content/team/:id`: Delete a team member (requires admin authentication).

### Service Endpoints
- **GET** `/api/content/services`: Fetch all services.
- **POST** `/api/content/services`: Create a new service (requires admin authentication).
- **PUT** `/api/content/services/:id`: Update a service (requires admin authentication).
- **DELETE** `/api/content/services/:id`: Delete a service (requires admin authentication).

## Deployment

### Frontend:
- Deployed on **Netlify**: [Live Site Link](https://mern-finalassignment.netlify.app/)

### Backend:
- Deployed on **Vercel**: [API Server Link](https://assignment-week-27-9wn8vyes6-samia-aurins-projects.vercel.app/)


## Contributing

We welcome contributions to this project! If you'd like to contribute, please fork the repository, create a branch for your feature or fix, and submit a pull request. Please make sure your changes don't break the existing functionality and pass all tests before submitting.



 
