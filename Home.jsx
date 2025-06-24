import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck, HeadphonesIcon, Sparkles, Zap, Globe, Award } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { mockProducts } from '../data/mockData';

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 8);

  const features = [
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Military-grade encryption with biometric authentication for ultimate protection',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Truck,
      title: 'Hyperfast Delivery',
      description: 'AI-optimized logistics with drone delivery and real-time tracking',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Neural Support',
      description: 'AI-powered 24/7 assistance with predictive problem solving',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      icon: Sparkles,
      title: 'Smart Curation',
      description: 'Machine learning algorithms that understand your unique preferences',
      color: 'from-pink-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Happy Customers', icon: Star },
    { number: '50K+', label: 'Premium Products', icon: Award },
    { number: '180+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium">Next-Gen Shopping Experience</span>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-playfair">
                    Nexus
                  </span>
                  <br />
                  <span className="text-white">Market</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Step into the future of commerce. Where AI meets luxury, 
                  and every purchase is a journey into tomorrow's possibilities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/products"
                  className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Universe
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                
                <button className="group border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 group-hover:text-yellow-400 transition-colors" />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {featuredProducts.slice(0, 4).map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 group cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform"
                        />
                        <h4 className="text-sm font-medium text-white truncate">{product.name}</h4>
                        <p className="text-purple-300 font-bold">${product.price}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Revolutionary Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
              Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Nexus?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convergence of cutting-edge technology and luxury commerce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Curated Collection</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked selection of premium products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/products"
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Exclusive Access</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              Join the <span className="text-yellow-300">Revolution</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Get exclusive access to limited editions, early releases, and personalized recommendations 
              powered by our AI algorithms
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/30 placeholder-gray-500"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Join Nexus
              </button>
            </div>
            
            <p className="text-sm opacity-75 mt-6">
              Join 2M+ innovators and never miss a breakthrough
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;