import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-3 rounded-2xl shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white font-playfair">Nexus Market</span>
                <span className="text-xs text-purple-300 font-medium tracking-wider">PREMIUM COLLECTION</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Where innovation meets luxury. Discover curated collections of premium products 
              with cutting-edge technology and personalized shopping experiences.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group">
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                All Products
              </Link></li>
              <li><Link to="/products?category=electronics" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Electronics
              </Link></li>
              <li><Link to="/products?category=fashion" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Fashion
              </Link></li>
              <li><Link to="/products?category=home" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home & Garden
              </Link></li>
              <li><Link to="/products?category=sports" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sports
              </Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact Us
              </a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Shipping Info
              </a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Returns & Exchanges
              </a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Size Guide
              </a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                FAQ
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-sm">123 Innovation Drive, Tech District, SF 94105</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-sm">+1 (555) 123-NEXUS</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm">hello@nexusmarket.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Stay Connected</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-gray-400 backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-r-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nexus Market. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span className="text-sm text-gray-400">for amazing experiences</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;