import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X, Heart, Bell, Zap } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-3 rounded-2xl shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent font-playfair">
                Nexus Market
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wider">PREMIUM COLLECTION</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="w-full relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Discover amazing products..."
                className="w-full px-6 py-4 pl-14 pr-6 text-gray-700 bg-gradient-to-r from-gray-50 to-purple-50 border-2 border-transparent rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover:shadow-lg"
              />
              <Search className="absolute left-5 top-4 h-6 w-6 text-purple-400 group-hover:text-purple-600 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {user && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Heart className="h-6 w-6 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
              </motion.div>
            )}

            <Link to="/cart" className="relative group">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <div className="relative p-2 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 group-hover:from-purple-100 group-hover:to-blue-100 transition-all duration-300">
                  <ShoppingBag className="h-6 w-6 text-purple-600" />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      {getCartCount()}
                    </span>
                  )}
                </div>
              </motion.div>
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-purple-100">
                  <Link
                    to="/profile"
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    Profile Settings
                  </Link>
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Join Now
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-purple-100 py-6 bg-white/95 backdrop-blur-lg"
          >
            <div className="space-y-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-6 py-4 pl-14 pr-6 text-gray-700 bg-gradient-to-r from-gray-50 to-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500"
                />
                <Search className="absolute left-5 top-4 h-6 w-6 text-purple-400" />
              </form>
              
              <Link
                to="/products"
                className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              
              <Link
                to="/cart"
                className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Cart ({getCartCount()})
              </Link>

              {user ? (
                <div className="space-y-3 pt-4 border-t border-purple-100">
                  <Link
                    to="/profile"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-3 pt-4 border-t border-purple-100">
                  <Link
                    to="/login"
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium text-center shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;