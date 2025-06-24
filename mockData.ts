export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  inventory: number;
  sizes?: string[];
  colors?: string[];
  brand: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 342,
    category: 'Electronics',
    description: 'Experience audiophile-grade sound quality with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium materials.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather padding',
      'High-resolution audio support',
      'Quick charge (5 min = 2 hours playback)'
    ],
    inStock: true,
    inventory: 24,
    colors: ['Black', 'Silver', 'Rose Gold'],
    brand: 'AudioTech'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 449.99,
    originalPrice: 549.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviews: 218,
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, sleep analysis, and 50+ workout modes. Water-resistant design perfect for all activities.',
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      'Sleep tracking',
      '50+ workout modes',
      'Water resistant (50m)',
      '7-day battery life'
    ],
    inStock: true,
    inventory: 18,
    colors: ['Black', 'Silver', 'Gold'],
    brand: 'FitTech'
  },
  {
    id: '3',
    name: 'Designer Leather Backpack',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545558/pexels-photo-1545558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviews: 156,
    category: 'Fashion',
    description: 'Handcrafted Italian leather backpack with multiple compartments, laptop sleeve, and ergonomic design. Perfect for work, travel, or everyday use.',
    features: [
      'Genuine Italian leather',
      'Laptop compartment (up to 15")',
      'Multiple organizing pockets',
      'Ergonomic padded straps',
      'Water-resistant lining'
    ],
    inStock: true,
    inventory: 12,
    colors: ['Brown', 'Black', 'Tan'],
    brand: 'LuxeCarry'
  },
  {
    id: '4',
    name: 'Wireless Charging Stand',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/4526106/pexels-photo-4526106.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4526106/pexels-photo-4526106.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.4,
    reviews: 89,
    category: 'Electronics',
    description: 'Fast wireless charging stand with adjustable viewing angles, LED indicator, and universal compatibility. Keep your device charged and accessible.',
    features: [
      'Fast wireless charging (15W)',
      'Adjustable viewing angle',
      'Universal compatibility',
      'LED charging indicator',
      'Non-slip base'
    ],
    inStock: true,
    inventory: 45,
    colors: ['White', 'Black'],
    brand: 'ChargeTech'
  },
  {
    id: '5',
    name: 'Minimalist Office Chair',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviews: 267,
    category: 'Home',
    description: 'Ergonomic office chair with lumbar support, adjustable height, and premium materials. Designed for all-day comfort and modern aesthetics.',
    features: [
      'Ergonomic lumbar support',
      'Height adjustable',
      'Premium mesh material',
      '360° swivel',
      'Smooth rolling casters',
      '5-year warranty'
    ],
    inStock: true,
    inventory: 8,
    colors: ['Black', 'White', 'Gray'],
    brand: 'ErgoComfort'
  },
  {
    id: '6',
    name: 'Stainless Steel Water Bottle',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    reviews: 423,
    category: 'Sports',
    description: 'Double-wall insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.',
    features: [
      'Double-wall insulation',
      'Keeps cold 24hrs, hot 12hrs',
      'BPA-free materials',
      'Leak-proof cap',
      'Wide mouth for easy filling',
      'Dishwasher safe'
    ],
    inStock: true,
    inventory: 67,
    colors: ['Silver', 'Black', 'Blue', 'Pink', 'Green'],
    brand: 'HydroMax'
  },
  {
    id: '7',
    name: 'Premium Coffee Beans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 189,
    category: 'Food',
    description: 'Single-origin Colombian coffee beans, medium roast with notes of chocolate and caramel. Freshly roasted and shipped within 48 hours.',
    features: [
      'Single-origin Colombian',
      'Medium roast profile',
      'Chocolate & caramel notes',
      'Freshly roasted',
      'Whole bean or ground options',
      'Fair trade certified'
    ],
    inStock: true,
    inventory: 34,
    brand: 'RoastCraft'
  },
  {
    id: '8',
    name: 'Smart Home Security Camera',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.3,
    reviews: 312,
    category: 'Electronics',
    description: '1080p HD security camera with night vision, motion detection, two-way audio, and smartphone integration. Easy installation and cloud storage.',
    features: [
      '1080p HD video quality',
      'Night vision capability',
      'Motion detection alerts',
      'Two-way audio',
      'Smartphone app control',
      'Free cloud storage (7 days)'
    ],
    inStock: true,
    inventory: 29,
    colors: ['White', 'Black'],
    brand: 'SecureHome'
  },
  {
    id: '13',
    name: 'AI-Powered Language Earbuds',
    price: 349.99,
    originalPrice: 429.99,
    image: 'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 211,
    category: 'Electronics',
    description: 'Real-time translation earbuds supporting 40+ languages, noise cancellation, and voice assistant integration for seamless global communication.',
    features: [
      'Real-time translation (40+ languages)',
      'Active noise cancellation',
      'Voice assistant integration',
      'Touch controls',
      '24-hour battery life'
    ],
    inStock: true,
    inventory: 32,
    colors: ['White', 'Black', 'Red'],
    brand: 'PolyLingo'
  },
  {
    id: '14',
    name: 'Self-Cleaning Water Bottle',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviews: 134,
    category: 'Sports',
    description: 'UV-C LED technology keeps your water pure and bottle odor-free. Double-wall insulation and smart reminders for hydration.',
    features: [
      'UV-C LED self-cleaning',
      'Smart hydration reminders',
      'Double-wall insulation',
      'Leak-proof design',
      'USB rechargeable'
    ],
    inStock: true,
    inventory: 40,
    colors: ['Blue', 'White', 'Green'],
    brand: 'PureSip'
  },
  {
    id: '15',
    name: 'Smart Bookshelf Speaker',
    price: 229.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviews: 87,
    category: 'Home',
    description: 'WiFi-enabled bookshelf speaker with adaptive sound, voice control, and multi-room audio for a smart home experience.',
    features: [
      'Adaptive sound technology',
      'Voice control (Alexa/Google)',
      'Multi-room audio sync',
      'Customizable EQ',
      'Minimalist design'
    ],
    inStock: true,
    inventory: 22,
    colors: ['Black', 'Walnut'],
    brand: 'SoundNest'
  },
  {
    id: '16',
    name: 'Ergonomic Standing Desk Converter',
    price: 179.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/245156/pexels-photo-245156.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/245156/pexels-photo-245156.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 65,
    category: 'Home',
    description: 'Transform any desk into a standing workstation with smooth height adjustment, cable management, and anti-fatigue mat included.',
    features: [
      'Smooth pneumatic height adjustment',
      'Integrated cable management',
      'Anti-fatigue mat included',
      'Large workspace area',
      'Easy assembly'
    ],
    inStock: true,
    inventory: 18,
    colors: ['Black', 'White'],
    brand: 'FlexiWork'
  },
];

export const mockCategories = [
  { id: 'electronics', name: 'Electronics', count: 156 },
  { id: 'fashion', name: 'Fashion', count: 243 },
  { id: 'home', name: 'Home & Garden', count: 89 },
  { id: 'sports', name: 'Sports & Outdoors', count: 167 },
  { id: 'food', name: 'Food & Beverages', count: 78 },
  { id: 'books', name: 'Books', count: 134 }
];