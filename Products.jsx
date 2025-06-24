import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, List, SortAsc } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { mockProducts, mockCategories } from '../data/mockData';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const searchQuery = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || '';

  // Get unique brands
  const brands = useMemo(() => {
    const brandSet = new Set(mockProducts.map(product => product.brand));
    return Array.from(brandSet);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter from URL
    if (categoryFilter) {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Selected categories filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, categoryFilter, selectedCategories, selectedBrands, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {searchQuery ? `Search Results for "${searchQuery}"` : 
               categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Products` : 
               'All Products'}
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>

            {/* View Mode */}
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={false}
            animate={{
              width: showFilters ? '300px' : '0px',
              opacity: showFilters ? 1 : 0
            }}
            className={`bg-white rounded-lg shadow-md p-6 overflow-hidden ${
              showFilters ? 'block' : 'hidden lg:block'
            }`}
            style={{ minWidth: showFilters ? '300px' : '0px' }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
              <div className="space-y-2">
                {mockCategories.map(category => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => handleCategoryChange(category.name)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-gray-700">
                      {category.name} ({category.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedBrands([]);
                setPriceRange({ min: 0, max: 1000 });
                setSearchParams({});
              }}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No products found</p>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-6'
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;