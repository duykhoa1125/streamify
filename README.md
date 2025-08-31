# 🌊 Streamify - Video Chat & Messaging Platform

A modern, real-time video chat and messaging platform built with React, Node.js, and Stream SDK.

## ✨ Features

- 🎥 **HD Video Calling** - High-quality video calls with Stream SDK
- 💬 **Real-time Chat** - Instant messaging with Stream Chat
- 👥 **Friend System** - Add friends and manage connections
- 🔔 **Notifications** - Real-time friend request notifications
- 🎨 **Modern UI** - Beautiful interface with TailwindCSS & DaisyUI
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔒 **Secure Authentication** - JWT-based auth with MongoDB

## 🚀 Live Demo

- **Frontend**: [streamify-frontend.onrender.com](https://streamify-frontend.onrender.com)
- **Backend API**: [streamify-backend.onrender.com](https://streamify-backend.onrender.com)

## 🛠 Tech Stack

### Frontend
- ⚛️ React 18.2.0
- 🚦 React Router DOM 6.20.1
- 🎨 TailwindCSS 3.3.6 + DaisyUI 4.4.2
- 🎥 Stream Video React SDK 1.3.9
- 💬 Stream Chat React 11.9.0
- 🔄 TanStack Query 4.36.1
- 🌟 Zustand 4.4.7
- ⚡ Vite 5.0.8

### Backend
- 🟢 Node.js 18.x
- 🚀 Express.js 4.18.2
- 🍃 MongoDB with Mongoose 8.0.3
- 🔐 JWT Authentication
- 💬 Stream Chat Server SDK 8.17.0
- 🔒 bcryptjs for password hashing

## 📋 Prerequisites

- Node.js 18.x
- npm 9.x
- MongoDB database
- Stream.io account and API keys

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/duykhoa1125/streamify.git
cd streamify
```

### 2. Install dependencies
```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 3. Environment Variables

#### Backend (.env in /backend)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret_key
NODE_ENV=development
PORT=5001
```

#### Frontend (.env in /frontend)
```env
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_URL=http://localhost:5001/api
```

### 4. Run the application
```bash
# Run backend (from /backend directory)
npm run dev

# Run frontend (from /frontend directory)
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 🌐 Deployment on Render

### Automatic Deployment (Recommended)

1. **Fork this repository** to your GitHub account
2. **Connect to Render**:
   - Go to [Render Dashboard](https://render.com)
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically read `render.yaml` and create both services

### Manual Deployment

#### Frontend (Static Site)
- **Build Command**: `cd frontend && npm ci --legacy-peer-deps && npm run build`
- **Publish Directory**: `frontend/dist`

#### Backend (Web Service)
- **Build Command**: `cd backend && npm ci --legacy-peer-deps`
- **Start Command**: `cd backend && npm start`

### Environment Variables for Production

#### Backend Service
```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret_key
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://your-frontend-url.onrender.com
```

#### Frontend Service
```env
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## 📦 Build Commands

```bash
# Build frontend only
cd frontend && npm run build

# Build entire project
npm run build

# Start production server
npm start
```

## 🔍 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/friends` - Get user friends
- `POST /api/users/friend-request` - Send friend request
- `PUT /api/users/friend-request/:id` - Accept/reject friend request

### Chat
- `POST /api/chat/token` - Get Stream chat token

### Health Check
- `GET /` - API status
- `GET /api/health` - Detailed health check

## 🎯 Key Features Implementation

### Video Calling
- Built with Stream Video React SDK
- HD quality with adaptive bitrate
- Screen sharing capabilities
- Audio/video controls

### Real-time Chat
- Stream Chat integration
- Message history
- Online status indicators
- Typing indicators

### Friend System
- Send/receive friend requests
- Real-time notifications
- Friends list management
- Online status tracking

## 🛡️ Security Features

- JWT token authentication
- Password hashing with bcryptjs
- CORS protection
- Input validation
- Secure cookie handling

## 📱 Mobile Responsive

- Fully responsive design
- Touch-friendly interface
- Mobile-optimized video controls
- Adaptive layouts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Stream.io](https://getstream.io/) for video and chat SDKs
- [TailwindCSS](https://tailwindcss.com/) for styling framework
- [DaisyUI](https://daisyui.com/) for UI components
- [Render](https://render.com/) for deployment platform

## 📞 Support

If you have any questions or need help with deployment, please:
1. Check the [Issues](https://github.com/duykhoa1125/streamify/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer

---

**⭐ If you find this project helpful, please give it a star!**
