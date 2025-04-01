const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Printing Services</h2>
          <ul className="space-y-2">
            <li>• Invitations</li>
            <li>• ID Cards</li>
            <li>• Business Cards</li>
            <li>• Custom Designs</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Stationery</h2>
          <ul className="space-y-2">
            <li>• Office Supplies</li>
            <li>• School Supplies</li>
            <li>• Art Materials</li>
            <li>• Custom Orders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services; 