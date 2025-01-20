# 🚮 The Garbage Wallah  

A comprehensive waste management system with **Role-Based Access Control (RBAC)** for residents, kabadiwalas (waste collectors), and administrators.  
Built with **Node.js**, **Express**, **MongoDB**, and secure JWT authentication.  

---

## 🌟 Features  

### 👤 **Resident Features**  
- **Secure Registration/Login**: Password hashing with `bcryptjs` and JWT tokens.  
- **Appointment Management**: Book, track, and manage garbage pickup requests.  
- **Notifications**: Real-time updates via in-app alerts.  
- **Feedback System**: Rate services and submit feedback.  

### 🧑🔧 **Kabadiwala Features**  
- **Service Area Registration**: Register with operational pincode.  
- **Availability Toggle**: Mark self as active/inactive for pickups.  
- **Request Management**: View, accept, or reject pickup requests in their area.  
- **Work History**: Track completed pickups.  

### 👑 **Admin Features**  
- **Audit Logs**: Monitor system activities and user actions.  
- **Appointment Oversight**: View all pickups (daily/weekly basis).  
- **Kabadiwala Management**: Filter by pincode/availability status.  
- **Feedback Analysis**: Access user ratings and comments.  

---

## 🛠 Tech Stack  
- **Backend**: Node.js, Express  
- **Database**: MongoDB + Mongoose ODM  
- **Authentication**: JWT (Access + Refresh Tokens)  
- **Security**: RBAC, HTTP-only cookies, bcryptjs  
- **Logging**: Activity tracking with timestamps  

---

## 🚀 Quick Start  

### Prerequisites  
- Node.js v18+  
- MongoDB (local/Atlas)  
- Postman/Insomnia  

### Setup  
1. Clone the repo:  
   ```bash  
   git clone https://github.com/Wizard0880/TheGarbageWallah.git  
   cd TheGarbageWallah  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Configure environment (create `.env`):  
   ```env  
   PORT=3000  
   MONGO_URI=mongodb://localhost:27017/garbage_wallah  
   JWT_SECRET=your_secure_key_here  
   JWT_ACCESS_EXPIRY=15m  
   JWT_REFRESH_EXPIRY=7d
   NODE_ENV=development
   ```  
4. Start the server:  
   ```bash  
   npm start  
   ```  

---

## 📂 Project Structure  

### Routes  
| Role         | Endpoints                               | Description                     |  
|--------------|-----------------------------------------|---------------------------------|  
| **Resident** | `/api/resident/*`                       | User registration, appointments |  
| **Kabadiwala**| `/api/kabadiwala/*`                    | Request management, status updates |  
| **Admin**    | `/api/admin/*`                          | System monitoring & management |  

---

## 🔐 Security Implementation  

### Role-Based Access Control (RBAC)  
```javascript 
// Middleware example
const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
  }
  next();
};
```

### Token Flow  
1. **Login**:  
   - User → Server: `email + password`  
   - Server → User: `accessToken` (15m expiry) + `refreshToken` (7d expiry)  
2. **API Requests**:  
   - Header: `Authorization: Bearer <accessToken>`  
3. **Token Refresh**:  
   - Use `refreshToken` to generate new `accessToken`  

---

## 📋 API Examples  

### 1. Resident: Book Pickup  
```http
POST /api/resident/request-pickup  
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  
Content-Type: application/json  

{  
  "scrapType": "Plastic",  
  "pickupDate": "2024-07-25T10:00:00Z",  
  "address": "22 Green Valley, Mumbai"  
}  
```

**Response**:  
```json  
{  
  "success": true,  
  "appointmentId": "667a1b2c3d4e5f6a7b8c9d0",  
  "message": "Pickup scheduled for 25 July"  
}  
```  

### 2. Kabadiwala: Accept Request  
```http
POST /api/kabadiwala/requests/action  
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  
Content-Type: application/json  

{  
  "requestId": "667a1b2c3d4e5f6a7b8c9d0",  
  "action": "accept"  
}  
```

**Response**:  
```json  
{  
  "success": true,  
  "message": "Request accepted. Assigned to Kabadiwala ID: 665a1b2c3d4e"  
}  
```  

### 3. Admin: View Logs  
```http
GET /api/admin/logs  
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  
```

**Response**:  
```json  
{  
  "success": true,  
  "logs": [  
    {  
      "action": "PICKUP_ACCEPTED",  
      "user": "665a1b2c3d4e",  
      "timestamp": "2024-07-20T09:30:00Z",  
      "details": "Request ID: 667a1b2c3d4e accepted"  
    }  
  ]  
}  
```  

---

## 🗄 Database Schema  

### Key Models  
| Model         | Fields                                  |  
|---------------|-----------------------------------------|  
| **User**      | `email`, `passwordHash`, `role`, `pincode` |  
| **Appointment**| `userId`, `scrapType`, `status`, `pickupDate` |  
| **Kabadiwala**| `userId`, `activeStatus`, `assignedRequests` |  
| **Log**       | `action`, `user`, `timestamp`, `details` |  

---

## 🚨 Error Handling  

### Common Scenarios  
1. **Invalid Token**:  
   ```json  
   {  
     "success": false,  
     "error": {  
       "code": "AUTH-401",  
       "message": "Invalid/expired token"  
     }  
   }  
   ```  

2. **Role Violation** (Kabadiwala accessing admin route):  
   ```json  
   {  
     "success": false,  
     "error": {  
       "code": "RBAC-403",  
       "message": "Admin access required"  
     }  
   }  
   ```  

---

## 📜 License  
MIT License © 2024 The Garbage Wallah Team  

--- 
