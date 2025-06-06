import React, { useEffect, useState } from 'react';
import { FaHandsHelping, FaUsers, FaGlobe, FaDove } from 'react-icons/fa';

const stats = [
  { icon: <FaHandsHelping size={28} />, value: 4597, label: 'People Rised' },
  { icon: <FaUsers size={28} />, value: 8945, label: 'Volunteer' },
  { icon: <FaDove size={28} />, value: 10000000, label: 'Poor People Saved' },
  { icon: <FaGlobe size={28} />, value: 100, label: 'Country Member' },
];

const CircularStat = ({ icon, value, label, duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(value / (duration / 30));
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [value, duration]);

  const progress = (count / value) * 100;
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="font-family bg-[#F0FAF9] rounded-md w-56 py-8 flex flex-col items-center shadow-sm">
      <div className="relative mb-4 h-20 w-20">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#DFF0ED"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#06457A"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[#06457A]">
          {icon}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        {value >= 1000000
          ? `${(count / 1000000).toFixed(1)}M+`
          : `${count.toLocaleString()}+`}
      </h2>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
};

const OurFeature = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-12">
      {stats.map((stat, idx) => (
        <CircularStat
          key={idx}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default OurFeature;
