import React from 'react'
import vegadd from '../assets/images/veg add.jpg'
import veg from '../assets/images/Vegetarian.png'
import { useNavigate } from 'react-router-dom';

const Vegeterian = () => {

    const navigate = useNavigate()

    const vegetarianFoods = [
        { name: 'Tomato-Onion Relish', description: 'Instant Pot Tomato Onion Thokku', restaurant: 'Hotel Sree Sabarees-Veg Restaurant', image: veg },
        { name: 'Tomato-Onion Relish', description: 'Instant Pot Tomato Onion Thokku', restaurant: 'Hotel Sree Sabarees-Veg Restaurant', image: veg },
        { name: 'Tomato-Onion Relish', description: 'Instant Pot Tomato Onion Thokku', restaurant: 'Hotel Sree Sabarees-Veg Restaurant', image: veg },
        { name: 'Tomato-Onion Relish', description: 'Instant Pot Tomato Onion Thokku', restaurant: 'Hotel Sree Sabarees-Veg Restaurant', image: veg },
    ];

    const onlineOrders = [
        { name: "Haldiram's", description: 'North Indian, Chinese, South Indian, Street Food, Continental Mithai', image: veg },
        { name: "Haldiram's", description: 'North Indian, Chinese, South Indian, Street Food, Continental Mithai', image: veg },
        { name: "Haldiram's", description: 'North Indian, Chinese, South Indian, Street Food, Continental Mithai', image: veg },
        { name: "Haldiram's", description: 'North Indian, Chinese, South Indian, Street Food, Continental Mithai', image: veg },
    ];

    return (
        <div className="min-h-screen bg-gray-100 font-primary">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold ">Dineease</div>

                    <input
                        type="text"
                        placeholder="Search for Hotels & Restaurants"
                        className="border rounded-lg px-4 py-2 w-1/3"

                    />
                    {/* <ion-icon name="search-outline"></ion-icon> */}

                    <div className="space-x-4">
                        <a href="#" className="text-gray-700" onClick={() => navigate('/home')}>Home</a>
                        <a href="#" className="text-gray-700">Restaurants</a>
                        <a href="#" className="text-gray-700" onClick={() => navigate('/dining')}>Dining Out</a>
                    </div>
                </div>
            </header>

            <div className="mt-4 p-2">
                <img className='' src={vegadd} alt="offeradd" />
            </div>



            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Vegetarian Food-Hotels</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {vegetarianFoods.map((food, index) => (
                        <div key={index} className="bg-white p-4 shadow rounded-lg text-center hover:scale-105 duration-300">
                            <img src={food.image} alt={food.name} className="w-full h-32 object-cover mb-2" />
                            <h3 className="text-lg font-bold">{food.name}</h3>
                            <p className="text-gray-600">{food.description}</p>
                            <p className="text-gray-800">{food.restaurant}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Order Food Online</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {onlineOrders.map((order, index) => (
                        <div key={index} className="bg-white p-4 shadow rounded-lg text-center">
                            <img src={order.image} alt={order.name} className="w-full h-32 object-cover mb-2" />
                            <h3 className="text-lg font-bold">{order.name}</h3>
                            <p className="text-gray-600">{order.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="bg-gray-800 text-white text-center py-4">
                <p>Copyright ©2024 Hub Consultancy & Services</p>
            </footer>

        </div>
    )
}

export default Vegeterian