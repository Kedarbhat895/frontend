import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your One-Stop Shop for All Your Needs
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Printing Services • Stationery • Agarbathi • Kori Rotti
            </p>
            <a
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Printing Services */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">🖨️</div>
              <h3 className="text-xl font-semibold mb-2">Printing Services</h3>
              <p className="text-gray-600">
                Professional printing for invitations, ID cards, and more
              </p>
            </motion.div>

            {/* Stationery */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Stationery</h3>
              <p className="text-gray-600">
                Wide range of quality stationery items for all your needs
              </p>
            </motion.div>

            {/* Agarbathi */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-semibold mb-2">Agarbathi</h3>
              <p className="text-gray-600">
                Premium quality incense sticks for spiritual needs
              </p>
            </motion.div>

            {/* Kori Rotti */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">🍪</div>
              <h3 className="text-xl font-semibold mb-2">Kori Rotti</h3>
              <p className="text-gray-600">
                Authentic local rice batter chips, freshly made
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-indigo-600 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We offer only the highest quality products and services
              </p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround time for all your printing needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Friendly and professional customer service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 