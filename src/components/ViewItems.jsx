import { useNavigate } from 'react-router-dom';




function ViewItems({ items, onItemSelect }) {
    const navigate = useNavigate();
    const handleGoBackToDashboard = () => {
  navigate("/");
};
  return (
<>
    
    <div className='max-w-6xl mx-auto px-4 py-4'>
         <button
    type="button"
    onClick={handleGoBackToDashboard}
    className="flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-[#ff8633] transition-colors group ml-auto"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
    <span>Back to Home</span>
  </button>
      <h2 className="text-2xl font-bold mb-6">All Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onItemSelect(item)}
          >
            <img
              src={item.coverImage}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ViewItems;