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
| `/api/user/register` | POST | Register a new user | 
| `/api/user/login` | POST | User login and JWT generation | 
| `/api/user/get-profile` | GET | Get logged-in user’s profile  |
| `/api/user/update-profile` | PUT | Update user profile details | 
| `/api/user/book-appointment` | POST | Book an appointment with a doctor |
| `/api/user/list-appointments` | GET | Get all user’s booked appointments | 
| `/api/user/cancel-appointment/:id` | DELETE | Cancel a booked appointment by ID | 
| `/api/doctor/changeAvailability` | POST |Change the availability | 
| `/api/user/doctorList` | GET | Get list of all available doctors | 
| `/api/user/get-doctor/:id` | GET | Get doctor details by ID |
| `/api/doctors/appointments` | GET | Get doctor’s appointments |
| `/api/admin/allDoctors` | GET | Get all doctors (admin only) |
| `/api/admin/add-doctor/:id` | PUT | Add a doctor| 

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

```


---

##  How to Run 

**1. Clone this repository:**
```bash
git clone https://github.com/<your-username>/doctor-appointment-backend.git
cd doctor-appointment-backend

```

**2. Install dependencies:**
```bash
npm install

```

**3. Configure your .env file**

**4. Run the server:**
```bash
npm start
```


The server will run on:
http://localhost:5000

**5. Test APIs using Postman**
