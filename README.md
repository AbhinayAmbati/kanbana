# 🚀 Advanced Kanban Management System

A full-stack, real-time, collaborative project management system built on the MERN stack with AI integration using Google Gemini.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)

## ✨ Features

### 🎯 Core Features
- **Real-time Collaboration** - Multiple users can work simultaneously with live updates
- **AI-Powered Task Management** - Generate tasks, summaries, and suggestions using Google Gemini
- **Workflow Automation** - Create IF→THEN rules to automate repetitive tasks
- **Multiple Views** - Kanban, Table, Calendar, and Timeline/Gantt views
- **Advanced Analytics** - Track productivity, velocity, and team performance
- **Offline Mode** - Continue working offline with automatic sync
- **Sub-Boards** - Create mini-boards within complex tasks

### 🔐 Authentication & Security
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes
- Role-based access control (Admin, Member, Viewer)

### 📊 Project Management
- **Workspaces** - Organize teams and projects
- **Boards** - Visual project boards with customizable backgrounds
- **Columns** - Workflow stages with WIP limits
- **Cards** - Rich task cards with:
  - Descriptions and formatting
  - Attachments
  - Comments with mentions
  - Checklists
  - Labels and priorities
  - Due dates
  - Custom fields
  - Dependencies
  - Watchers

### 🤖 AI Features
- Generate tasks from descriptions
- Break down complex tasks into subtasks
- Suggest priorities and due dates
- Summarize discussions
- Improve task clarity

### ⚡ Real-Time Features
- Live card movement
- Typing indicators
- User presence tracking
- Instant comment updates
- Real-time notifications

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **@dnd-kit** - Drag and drop
- **Framer Motion** - Animations
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons
- **Recharts** - Charts and analytics

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.io** - Real-time engine
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Google Generative AI** - AI integration
- **Cloudinary** - File storage
- **Nodemailer** - Email service

## 📦 Installation

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (local or Atlas)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/advkanban.git
cd advkanban
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/advkanban
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
GEMINI_API_KEY=your_gemini_api_key
FRONTEND_URL=http://localhost:5173
```

4. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎨 Design System

The application features a modern, premium design with:
- **Glassmorphism effects**
- **Gradient backgrounds**
- **Smooth animations**
- **Custom scrollbars**
- **Dark mode support**
- **Responsive layouts**

## 📱 Usage

### Getting Started

1. **Register** - Create a new account
2. **Create Workspace** - Set up a team workspace
3. **Create Board** - Add a project board
4. **Add Columns** - Define your workflow stages
5. **Create Cards** - Add tasks and start managing

### Keyboard Shortcuts
- `Ctrl/Cmd + K` - Quick search
- `C` - Create new card
- `B` - Create new board
- `Esc` - Close modals

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password

### Workspaces
- `GET /api/workspaces` - Get all workspaces
- `POST /api/workspaces` - Create workspace
- `GET /api/workspaces/:id` - Get workspace
- `PUT /api/workspaces/:id` - Update workspace
- `DELETE /api/workspaces/:id` - Delete workspace

### Boards
- `GET /api/boards` - Get all boards
- `POST /api/boards` - Create board
- `GET /api/boards/:id` - Get board
- `PUT /api/boards/:id` - Update board
- `DELETE /api/boards/:id` - Delete board

### Cards
- `GET /api/cards` - Get all cards
- `POST /api/cards` - Create card
- `GET /api/cards/:id` - Get card
- `PUT /api/cards/:id` - Update card
- `DELETE /api/cards/:id` - Delete card

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 🚀 Deployment

### Backend (Railway/Render/Heroku)
1. Set environment variables
2. Deploy from GitHub
3. Configure MongoDB Atlas

### Frontend (Vercel/Netlify)
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set environment variables
4. Deploy

## 📈 Roadmap

- [ ] Mobile apps (React Native)
- [ ] Slack/GitHub integrations
- [ ] Advanced reporting
- [ ] Team billing
- [ ] Email-to-board
- [ ] Board templates
- [ ] Import/Export (Trello, Jira)
- [ ] Advanced permissions
- [ ] Time tracking
- [ ] Sprint planning

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Inspired by Trello and Jira
- Built with modern web technologies
- Powered by Google Gemini AI

## 📞 Support

For support, email support@advkanban.com or join our Slack channel.

---

**Made with ❤️ and ☕**
