import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Janatha - Your trusted partner for printing services, stationery, agarbathi, and authentic Kori Rotti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/get-in-touch" className="text-gray-400 hover:text-white">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Hanuman Printers</li>
              <li className="text-gray-400">Janatha Book Stall</li>
              <li className="text-gray-400">Janatha Agarbattis</li>
              <li className="text-gray-400">Janatha Foods</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hanuman Printers</li>
              <li>Opp Bus Stand, Vittal 574243</li>
              <li>Phone: +91 6362778792</li>
              <li>Phone: +91 6362703192</li>
              <li>Email: bhatkedar17@gmail.com</li>
              <li>Hours: Mon-Sat: 9:00 AM - 8:00 PM</li>
              <li>Sun: 9:00 AM - 3:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Janatha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 