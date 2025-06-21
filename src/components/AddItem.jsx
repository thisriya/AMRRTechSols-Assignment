import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddItem({ onAddItem }) {

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: []
  });
  const [success, setSuccess] = useState(false);
  const [additionalImage, setAdditionalImage] = useState('');
  const navigate = useNavigate();
     const handleGoBackToDashboard = () => {
  navigate("/");
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(formData);
    setSuccess(true);
    setFormData({
      name: '',
      type: '',
      description: '',
      coverImage: '',
      additionalImages: []
    });
    setTimeout(() => {
      setSuccess(false);
      navigate('/'); // Navigate back to View Items after success
    }, 2000);
  };

  const addAdditionalImage = () => {
    if (additionalImage) {
      setFormData({
        ...formData,
        additionalImages: [...formData.additionalImages, additionalImage]
      });
      setAdditionalImage('');
    }
  };

  const removeAdditionalImage = (indexToRemove) => {
    setFormData({
      ...formData,
      additionalImages: formData.additionalImages.filter((_, index) => index !== indexToRemove)
    });
  };

  return (
    <>

    <button
    type="button"
    onClick={handleGoBackToDashboard}
    className=" p-5 flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-[#ff8633] transition-colors group ml-auto"
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
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Item successfully added
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg max-w-6xl mx-auto shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Item Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Item Type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
          >
            <option value="">Select item type</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Shoes">Shoes</option>
            <option value="Sports Gear">Sports Gear</option>
            <option value="Accessories">Accessories</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
            placeholder="Describe the item..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Image URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
            placeholder="https://example.com/image.jpg (Please give image in jpg)"
          />
          {formData.coverImage && (
            <div className="mt-2">
              <img 
                src={formData.coverImage} 
                alt="Cover preview" 
                className="h-40 object-contain border rounded"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Images
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              value={additionalImage}
              onChange={(e) => setAdditionalImage(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              placeholder="https://example.com/image2.jpg"
            />
            <button
              type="button"
              onClick={addAdditionalImage}
              className="px-4 py-2 cursor-pointer bg-[#ff8633] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
            >
              Add
            </button>
          </div>
          
          <div className="mt-3 space-y-2">
            {formData.additionalImages.map((img, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-3">
                  <img 
                    src={img} 
                    alt={`Preview ${index}`} 
                    className="h-10 w-10 object-cover rounded"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <span className="text-sm truncate max-w-xs">{img}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeAdditionalImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#ff8633] cursor-pointer text-white font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-offset-2"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddItem;