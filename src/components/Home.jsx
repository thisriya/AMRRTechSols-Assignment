import { Link } from 'react-router-dom';


export default function Home() {
     
   

  return (
    <>
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Item Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-4">View Items</h2>
          <p className="text-gray-600 mb-4">View All Added Elements</p>
          <Link
            to="/view"
            className="inline-block px-4 py-2 bg-[#ff8633] text-white rounded-3xl"
          >
            Go to View Items
          </Link>
        </div>
        
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
          <p className="text-gray-600 mb-4">Add a new item to the system</p>
          <Link
            to="/add"
            className="inline-block px-4 py-2 bg-[#ff8633] text-white rounded-3xl"
          >
            Go to Add Item
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}