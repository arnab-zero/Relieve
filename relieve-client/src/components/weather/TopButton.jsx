import React from 'react'

const TopButton = () => {

    const cities = [
        {
            id: 1,
            name: 'Dhaka'
        },
        {
            id: 2,
            name: 'Chittagong'
        },
        {
            id: 3,
            name: 'Rajshahi'
        },
        {
            id: 4,
            name: 'Khulna'
        },
        {
            id: 5,
            name: 'Barishal'
        },
        {
            id: 6,
            name: 'Sylhet'
        }
    ]

  return (
    <div className='flex items-center justify-around my-6 font-manrope'>
        {
            cities.map(city => (
                <button key={city.id} className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">
                {city.name}
            </button>
            ))
        }    
    </div>
  )
}

export default TopButton