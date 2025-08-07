
---


# EdTech Full‑Stack Platform

It is a comprehensive EdTech platform built on the **MERN stack** — ReactJS frontend, Node.js/Express backend, and MongoDB database — designed to offer seamless, scalable, and engaging learning experiences.

## Table of Contents

- [Overview](#overview)  
- [Tech Stack & Integrations](#tech-stack--integrations)  
- [Features](#features)  
- [System Architecture](#system-architecture)  
- [Setup & Local Development](#setup--local-development)  
- [Deployment](#deployment)  
- [Environment Variables](#environment-variables)  
- [Future Enhancements](#future-enhancements)  
- [Contributing](#contributing)  
- [License & Contact](#license--contact)  

---

## Overview

StudyNotion empowers both **students** and **instructors** with clean interfaces and powerful features — from course browsing, ratings, and secure payments, to instructor dashboards and analytics. It’s built to scale and deliver immersive educational experiences.

---

## Tech Stack & Integrations

- **Frontend**: React.js, Tailwind CSS, Redux (state management), built in VSCode.  
- **Backend**: Node.js, Express.js, MongoDB (via Mongoose).  
- **Authentication**: JWT with secure password hashing by Bcrypt; includes OTP and reset password flows.  
- **Media Storage**: Cloudinary — for images, videos, and documents.  
- **Payment**: Razorpay integration — handles cart, checkout, and enrollment flows.  


---

## Features

### For Students
- Register, log in with OTP and reset password  
- Browse courses, view ratings, manage wishlist  
- Secure checkout and course purchase via Razorpay  
- Access course content (videos, Track Progress )  
- View and update profile  
  

### For Instructors
- Dashboard with course overviews, ratings, and feedback  
- Course management (create, edit, delete, pricing, media)  
- Insights on studentsEnrolled in each course via graph, income, and most selling course  
- Edit profile details  
 

### Backend
- RESTful API design with routes for auth and course management  
- Secure JWT-based auth flows  
- Razorpay checkout integration  
- Media management via Cloudinary  
- Data models include Student, Instructor, Course schemas  


---

## System Architecture

The platform follows a classic **client–server architecture** with:

- **Frontend**: React app interacts with backend APIs over REST.  
- **Backend**: Express server handles business logic, authentication, database actions.  
- **Database**: MongoDB used for storing user and course data.  
- **Media & Payments**: Cloudinary for media storage, Razorpay for payments.  
:contentReference[oaicite:4]{index=4}  

---

## Setup & Local Development

### Prerequisites
- Node.js (v14+), npm/Yarn  
- MongoDB (Atlas or local)  
- API keys: Cloudinary, Razorpay

### Backend
```bash
cd backend
npm install
# Set .env (see below)
npm run dev
```

### Frontend

```bash
cd frontend
npm install
# Set .env (see below)
npm start
```

App should run locally on `http://localhost:3000` connected to backend at `http://localhost:5000`.

---

## Deployment

### Backend — **Render.com**

1. Create a new Web Service on Render and connect your GitHub repo.
2. Set root directory (e.g., `backend`) and environment variables.
3. Deploy—you will get a backend URL to use in frontend.
   ([Medium][1], [DEV Community][2])

### Frontend — **Vercel**

1. Import your repo into Vercel.
2. Configure as a React/Create‑React‑App project.
3. Add `REACT_APP_API_URL` environment variable pointing to your deployed backend URL.
4. Deploy and enjoy CI/CD and instant URLs.
   ([Medium][1], [GeeksforGeeks][3])

---

## Environment Variables

**Backend (.env):**

```
PORT=5000
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

**Frontend (.env):**

```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```


---

## Contributing

1. Fork this repository
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit changes and push to your branch
4. Open a Pull Request — feedback and collaboration welcome!

---

