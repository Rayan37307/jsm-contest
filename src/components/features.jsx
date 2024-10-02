import React from 'react';

const FoodOptions = () => {
  const options = [
    {
      title: "Order Online",
      description: "Stay home and order to your doorstep",
      image: "/hero.jpeg"
    },
    {
      title: "Dining",
      description: "View the city's favourite dining venues",
      image: "/option1.jpg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {options.map((option, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={option.image} 
              alt={option.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodOptions;
