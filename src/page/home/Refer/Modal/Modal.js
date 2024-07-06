import { useState } from 'react';
import axios from 'axios';
const ReferralModal = ({isOpen, setIsOpen}) => {
  const [formData, setFormData] = useState({
    refererName: '',
    refererEmail: '',
    refreeName: '',
    refreeEmail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    axios.post('http://localhost:3001/referrals',{
        'RefererName': formData.refererName,
    'RefererEmail': formData.refererEmail,
    'RefreeName': formData.refreeName,
    'RefreeEmail': formData.refreeEmail
    }).then(res=> console.log('response',res)).catch(e => console.log(e));
    // Close the modal after submission
    setIsOpen(false);
  };

  return (
    <>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Referral Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Referer Name</label>
                <input 
                  type="text" 
                  name="refererName" 
                  value={formData.refererName} 
                  onChange={handleInputChange} 
                  className="mt-1 p-2 w-full border rounded"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Referer Email</label>
                <input 
                  type="email" 
                  name="refererEmail" 
                  value={formData.refererEmail} 
                  onChange={handleInputChange} 
                  className="mt-1 p-2 w-full border rounded"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Refree Name</label>
                <input 
                  type="text" 
                  name="refreeName" 
                  value={formData.refreeName} 
                  onChange={handleInputChange} 
                  className="mt-1 p-2 w-full border rounded"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Refree Email</label>
                <input 
                  type="email" 
                  name="refreeEmail" 
                  value={formData.refreeEmail} 
                  onChange={handleInputChange} 
                  className="mt-1 p-2 w-full border rounded"
                  required 
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2" 
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferralModal;
