# Doctor Appointment Booking System — Backend

The Doctor Appointment Booking System is a secure and scalable backend built using **Node.js**, **Express.js**, and **MongoDB**.  
It enables patients to book appointments online, doctors to manage their schedules, and admins to oversee system operations through protected RESTful APIs.

---

## Features

### User Module
- Secure signup and login using JWT authentication.  
- View available doctors and their profiles.  
- Book and manage appointments easily.  

### Doctor Module
- Doctor registration and profile management.  
- Update personal details, specialization, and availability.  
- Access and manage booked appointments.  

### Admin Module
- Approve or reject doctor registrations.  
- Monitor users, doctors, and appointments.  
- Maintain platform data integrity and control access.  

### Security & Middleware
- Role-based access control (User / Doctor / Admin).  
- JWT token verification on every protected route.  
- Passwords hashed with **bcrypt** for secure storage.  

---

## Backend Workflow Pipeline

Server Initialization → Environment Configuration → Database Connection → Authentication Middleware → Route Handling (User / Doctor / Admin) → Controller Logic → Response Handling

---

## System Architecture

Client → Express Server → Controller Logic → MongoDB (Mongoose ORM)  

Each request follows this structured flow:  
**Request** → **Authentication Middleware** → **Controller Logic** → **Database Operation** → **Response**

---

## Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT  
- Multer  
- Cloudinary  
- dotenv  

### Tools
- Postman (API Testing)  
- Git & GitHub (Version Control)  

---

## Folder Structure


---

## API Endpoints

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/users/register` | POST | Register new user |
| `/api/users/login` | POST | Login existing user |
| `/api/doctors/register` | POST | Register new doctor |
| `/api/doctors/appointments` | GET | Get doctor’s appointments |
| `/api/admin/doctors` | GET | Get all doctors (admin only) |
| `/api/appointments/book` | POST | Book an appointment |

---

## Environment Variables

Create a `.env` file in the project root and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


---

##  How to Run

**1. Clone this repository:**
```bash
git clone https://github.com/<your-username>/doctor-appointment-backend.git
cd doctor-appointment-backend

**2. Install dependencies:**
```bash
npm install

**3. Configure your .env file**

**4. Run the server:**
```bash
npm start


The server will run on:
http://localhost:5000

**5. Test APIs using Postman**
