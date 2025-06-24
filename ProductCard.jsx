import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100"
    >
      <Link to={`/products/${product.id}`}>
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
            -{discountPercentage}%
          </div>
        )}

        {/* Premium Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium z-10 flex items-center space-x-1">
          <Zap className="h-3 w-3" />
          <span>PREMIUM</span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-16 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 z-10 group-hover:scale-110"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50 h-72 rounded-t-3xl">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-purple-200 animate-pulse"></div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <button
                onClick={handleAddToCart}
                className="bg-white/90 backdrop-blur-sm text-gray-900 p-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl transform hover:scale-110"
              >
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="bg-white/90 backdrop-blur-sm text-gray-900 p-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl transform hover:scale-110">
                <Eye className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg bg-red-500 px-4 py-2 rounded-full">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 font-medium">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors leading-tight">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">In Stock</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;