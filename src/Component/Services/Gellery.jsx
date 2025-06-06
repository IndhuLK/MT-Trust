import React from 'react'

const services = [
    {
      category: 'Medical',
      title: 'Donate for Rural Health Camps',
      description: 'Support rural medical camps to provide basic checkups and treatment to villagers.'
    },
    {
      category: 'Education',
      title: 'Sponsor a Child’s Education',
      description: 'Help underprivileged children access school supplies and tuition.'
    },
    {
      category: 'Nutrition',
      title: 'Feed the Malnourished',
      description: 'Contribute to meal programs for children in slums and remote areas.'
    },
    {
      category: 'Elderly Care',
      title: 'Care for Senior Citizens',
      description: 'Provide medicines and support for abandoned elders.'
    },
    {
      category: 'Women Empowerment',
      title: 'Skill Training for Women',
      description: 'Enable women to become financially independent through tailoring and crafts.'
    },
    {
      category: 'Disaster Relief',
      title: 'Flood Relief Kits',
      description: 'Distribute emergency kits to families affected by natural calamities.'
    },
    {
      category: 'Child Welfare',
      title: 'Rescue Street Children',
      description: 'Support shelter and rehab for children living on streets.'
    },
    {
      category: 'Environmental',
      title: 'Plant Trees Initiative',
      description: 'Join hands in greening our cities and reducing pollution.'
    },
    {
      category: 'Orphan Support',
      title: 'Monthly Aid for Orphans',
      description: 'Ensure food, shelter, and education for orphaned children.'
    },
    {
      category: 'Disability Aid',
      title: 'Wheelchairs for Disabled',
      description: 'Help differently-abled individuals gain mobility.'
    },
    {
      category: 'Water Access',
      title: 'Build Clean Water Wells',
      description: 'Bring fresh water to villages with no access to clean sources.'
    },
    {
      category: 'Youth Empowerment',
      title: 'Support for College Students',
      description: 'Help bright but poor students continue their education.'
    },
  ];

const Gellery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-family">
      <p className="text-md text-gray-500 mb-1">Latest Services________</p>
      <h2 className="text-4xl font-semibold mb-8 leading-relaxed">
        Find The Popular Services<br />
        And Donate Them
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded shadow  flex flex-col group hover:scale-105 cursor-pointer">
            {/* Image Placeholder with hover button */}
            <div className="relative h-42 bg-gray-200 rounded overflow-hidden flex items-center justify-center hover:bg-gray-300">
              <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-500 text-white text-sm px-4 py-2 rounded cursor-pointer">
                Donate Now
              </button>
            </div>

            <div className='p-4'>
            <p className="text-blue-800 text-md mt-4 font-bold">{service.category}</p>
            <h3 className="font-semibold mt-1 text-xl">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gellery