import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ItemDetail({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enquirySent, setEnquirySent] = useState(false);

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div className="text-center py-8">Item not found</div>;
  }

  const allImages = [item.coverImage, ...item.additionalImages];
     const handleGoBackToDashboard = () => {
  navigate("/");
};

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const handleEnquire = () => {
    // Here you would typically make an API call to send an email
    console.log(`Enquiry sent for ${item.name}`);
    setEnquirySent(true);
    setTimeout(() => setEnquirySent(false), 3000);
  };

  return (
    <>
    
    <div className='flex flex-row gap-4 p-10'>
 <button
    type="button"
    onClick={handleGoBackToDashboard}
    className="flex p-3 cursor-pointer items-center space-x-2 text-gray-600 hover:text-[#ff8633] transition-colors group"
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

 <button
        onClick={() => navigate(-1)}
         className="flex p-3 mr-auto cursor-pointer items-center  text-gray-600 hover:text-[#ff8633] transition-colors group "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Items
      </button>

    </div>
 

    <div className="max-w-4xl mx-auto">
       

     

      <h2 className="text-2xl text-center font-semibold mb-6"><span>Item : </span>{item.name}</h2>

      

      <div className="py-5">
        <div>
          <h3 className="font-medium text-lg text-center text-gray-900">Type: {item.type}</h3>
          <p className="mt-1"></p>
        </div>
        <div>
          <h3 className="font-medium text-center text-lg text-gray-900">Description: {item.description}</h3>
          <p className="mt-1"></p>
        </div>
      </div>

      <div className="mb-8 relative">
        <img
          src={allImages[currentImageIndex]}
          alt={`${item.name} - ${currentImageIndex + 1}`}
          className="w-full h-96 object-contain rounded-lg shadow-md"
        />
        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}
        <div className="flex justify-center mt-4 space-x-2">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

<div className="flex justify-center py-8">
  <button
    onClick={handleEnquire}
    className="text-center cursor-pointer bg-[#ff8633] text-white py-2 px-6 rounded-3xl disabled:bg-orange-300"
    disabled={enquirySent}
  >
    {enquirySent ? 'Enquiry Sent!' : 'Enquire About This Item'}
  </button>
</div>
    </div>
    </>
  );
}

export default ItemDetail;