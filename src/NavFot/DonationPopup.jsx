import React, { useState } from 'react'

const DonationPopup = ({ onClose }) => {

    const [amount, setAmount] = useState(10.0);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Online');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    agreed: false,
  });

  const donationOptions = [10.00, 25.00, 50.00, 100.00, 250.00];

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setAmount(parseFloat(val) || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('Please agree to the terms.');
      return;
    }
    console.log('Form submitted', { ...formData, amount, paymentMethod });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-x bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#E6F0FA]  p-4 rounded-lg shadow-lg w-[600px] max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-3 right-4 text-2xl font-bold text-gray-600">&times;</button>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-gray-300 pb-2">Your Donation</h2>

          {/* Custom Amount Input */}
          <div className="flex items-center space-x-1">
            <span className="text-lg font-semibold text-white border px-2 py-0.5 rounded bg-blue-900 border-blue-300">₹</span>
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="border border-blue-300 px-2 py-1 rounded w-32 bg-white"
              placeholder="Rs."
            />
            <button
              type="button"
              className="bg-blue-900 text-white px-4 py-1 rounded"
              onClick={() => setAmount(parseFloat(customAmount) || 0)}
            >
              Donation Amount
            </button>
          </div>

          {/* Predefined Options */}
          <div className="flex flex-wrap gap-2 mt-2">
            {donationOptions.map((val) => (
              <button
                type="button"
                key={val}
                onClick={() => handleAmountClick(val)}
                className={`border border-blue-300 rounded px-4 py-1 ${amount === val ? 'bg-blue-900 text-white' : 'bg-white text-black'}`}
              >
                ₹ {val.toFixed(2)}
              </button>
            ))}
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold">Select Payment Method</h3>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Online"
                  checked={paymentMethod === 'Online'}
                  onChange={() => setPaymentMethod('Online')}
                  className="mr-1"
                />
                Online
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Offline"
                  checked={paymentMethod === 'Offline'}
                  onChange={() => setPaymentMethod('Offline')}
                  className="mr-1"
                />
                Offline Donation
              </label>
            </div>
          </div>

          {/* Personal Info */}
          <h3 className="font-bold border-b pb-1 border-gray-300 text-2xl">Personal Info</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2  p-2 rounded bg-white"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 bg-white p-2 rounded"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white p-2 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Leave A Comment..."
            className="w-full bg-white p-2 rounded"
            rows="3"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />

          {/* Terms & Total */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.agreed}
              onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
            />
            <label>Agree To Terms?</label>
          </div>

          <div className=" font-semibold">
            <span className=' bg-white py-1 px-1 pr-10'>Donation Total:</span>
            <span className="px-4 py-1 border border-blue-300 bg-blue-900 rounded text-white">₹ {amount.toFixed(2)}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 mt-2 rounded hover:bg-blue-900 transition"
          >
            Donate now
          </button>
        </form>
      </div>
    </div>
  )
}

export default DonationPopup