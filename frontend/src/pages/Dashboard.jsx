import { motion } from 'framer-motion';
import { LayoutDashboard, Plus, LogOut } from 'lucide-react';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Logout failed');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <LayoutDashboard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">AdvKanban</h1>
                                <p className="text-sm text-gray-500">Project Management</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                                <p className="text-xs text-gray-500">{user?.email}</p>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome back, {user?.name}! 👋
                        </h2>
                        <p className="text-gray-600">
                            Here's what's happening with your projects today.
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Plus className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Create Workspace
                            </h3>
                            <p className="text-sm text-gray-600">
                                Start a new workspace for your team
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Plus className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Create Board
                            </h3>
                            <p className="text-sm text-gray-600">
                                Add a new board to organize tasks
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <LayoutDashboard className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                View Analytics
                            </h3>
                            <p className="text-sm text-gray-600">
                                Track your team's productivity
                            </p>
                        </motion.div>
                    </div>

                    {/* Placeholder for Workspaces/Boards */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <LayoutDashboard className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No workspaces yet
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Create your first workspace to get started with project management
                            </p>
                            <button className="btn-primary inline-flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                Create Workspace
                            </button>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboard;
