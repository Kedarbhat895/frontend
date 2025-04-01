import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Business Cards',
    description: 'Professional business cards with high-quality printing and various paper options.',
    image: '/images/products/buisness-cards.jpg',
    category: 'Printing'
  },
  {
    id: 2,
    name: 'Invitation Cards',
    description: 'Custom Invitation Cards for your auspicious occasions.',
    image: '/images/products/invitation.jpg',
    category: 'Printing'
  },
  {
    id: 3,
    name: 'Notebooks',
    description: 'High-quality notebooks and exercise books for students and professionals.',
    image: '/images/products/notebook.jpg',
    category: 'Stationery'
  },
  {
    id: 4,
    name: 'Pens and Pencils',
    description: 'Wide range of writing instruments for all your needs.',
    image: '/images/products/stationary.jpg',
    category: 'Stationery'
  },
  {
    id: 5,
    name: 'Traditional Agarbatti',
    description: 'Authentic Indian incense sticks in various fragrances.',
    image: '/images/products/batti.png',
    category: 'Agarbatti'
  },
  {
    id: 6,
    name: 'Kori Rotti',
    description: 'Authentic Kori Rotti made with traditional recipe.',
    image: '/images/products/rotti.png',
    category: 'Foods'
  }
];

const Products = () => {
  const categories = ['All', 'Printing', 'Stationery', 'Agarbatti', 'Foods'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/products/placeholder.jpg';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 