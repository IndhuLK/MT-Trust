import React from 'react'
import { CalendarDays, Clock, User } from 'lucide-react';
import Image2 from "../../assets/HomeIMG/Image2.jpg";

const DonatePP = () => {

    const now = new Date();

  // Format date as "DD MMMM YYYY" (e.g., 12 May 2025)
  const formattedDate = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Format time as "HH:MM AM/PM"
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold mb-6">Donating Poor People.</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2">
          <img
            src={Image2}
            alt="Donating Poor People"
            className="rounded-lg w-full"
          />

          {/* Real-time Info */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Surya Prakash</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formattedTime}</span>
            </div>
          </div>
        </div>

        {/* Right Category Section */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Category</h2>
          <ul className="space-y-2 text-gray-900">
            <li className="flex justify-between border-b pb-1 border-b-white ">
              <span className='mt-2 text-xl'>Education</span><span className='mt-2 text-xl'>(3)</span>
            </li>
            <li className="flex justify-between border-b pb-1 border-b-white">
              <span className='mt-2 text-xl'>Food</span><span className='mt-2 text-xl'>(2)</span>
            </li>
            <li className="flex justify-between border-b pb-1 border-b-white">
              <span className='mt-2 text-xl'>Medical</span><span className='mt-2 text-xl'>(4)</span>
            </li>
            <li className="flex justify-between border-b pb-1 border-b-white">
              <span className='mt-2 text-xl'>Home</span><span className='mt-2 text-xl'>(5)</span>
            </li>
            <li className="flex justify-between border-b border-b-white">
              <span className='mt-2 text-xl'>Water</span><span className='mt-2 text-xl'>(4)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DonatePP