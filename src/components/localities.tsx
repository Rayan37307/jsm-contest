import React from 'react';

const Localities = () => {
    const localities = [
        { name: 'Krishna Nagar', places: 119 },
        { name: 'Dhaleswar', places: 85 },
        { name: 'Indranagar', places: 28 },
        { name: 'Udaipur Locality', places: 27 },
        { name: 'Ram Nagar', places: 23 },
        { name: '79 Tilla', places: 23 },
        { name: 'Jay Nagar', places: 37 },
        { name: 'Hapania', places: 25 },
    ];

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Popular localities in and around Agartala</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {localities.map((locality, index) => (
                    <div className="border rounded-lg p-4 shadow-md" key={index}>
                        <h3 className="text-lg font-medium">{locality.name}</h3>
                        <p className="text-gray-600">{locality.places} places</p>
                        <button className="mt-2 text-blue-500">›</button>
                    </div>
                ))}
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                see more
            </button>
        </div>
    );
};

export default Localities;
