import React from 'react';
import { useNavigate } from 'react-router-dom';
import veg from '../assets/images/Vegetarian.png'
import nonveg from '../assets/images/non-vegeterian.jpg'
import chinese from '../assets/images/chinese.jpg'
import Korean from '../assets/images/korean.jpg'
import mexican from '../assets/images/mexican.webp'
import african from '../assets/images/african.png'
import astoria from '../assets/images/astoriahotel.jpg'
import moskva from '../assets/images/moskvahotel.jpg'
import add from '../assets/images/add.avif'
const App = () => {

    const navigate = useNavigate()

    const favorites = [
        { name: 'Vegeterian', image: veg },
        { name: 'Non-vegetarian', image: nonveg },
        { name: 'Chinese', image: chinese },
        { name: 'Korean', image: Korean },
        { name: 'Mexican', image: mexican },
        { name: 'African', image: african },
    ];

    const hotels = [
        { name: 'Astoria Hotels', image: astoria, rating: '4.8/5', reviews: '864 Reviews' },
        { name: 'Moskva Hotels', image: moskva, rating: '4.7/5', reviews: '864 Reviews' },
        { name: 'Moskva Hotels', image: moskva, rating: '4.9/5', reviews: '864 Reviews' },
        { name: 'Moskva Hotels', image: moskva, rating: '4.7/5', reviews: '864 Reviews' },
    ];

    const events = [
        { type: 'Workshops & More', count: '10 Events' },
        { type: 'Comedy Shows', count: '6 Events' },
        { type: 'Music Shows', count: '4 Events' },
    ];


    const handleFavoriteClick = (name) => {
        navigate(`/${name.toLowerCase().replace(/ /g, '-')}`)
    }

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
                        <a href="#" className="text-gray-700">Dining Out</a>
                    </div>
                </div>
            </header>

            {/* Banner */}
            {/* <div className="bg-yellow-200 text-center py-10">
                <h1 className="text-4xl font-bold mb-4">2024 Happy New Year!</h1>
                <p className="text-lg">Get Your FAVOURITES and Grab it ANYWHERE AT ANYTIME</p>
            </div> */}

            <div className='mt-4 p-2'>
                <img src={add} alt="offeradd" />
            </div>

            {/* Favorites */}
            <section className="container mx-auto px-4 py-8 ">
                <h2 className="text-2xl font-bold mb-4">Choose your Favorites</h2>
                <div className="grid grid-cols-6 gap-4 cursor-pointer">
                    {favorites.map((favorite) => (
                        <div key={favorite.name} className="bg-white p-4 shadow rounded-lg text-center hover:scale-105 duration-500"
                            onClick={() => handleFavoriteClick(favorite.name)}>
                            <img src={favorite.image} alt={favorite.name} className="mx-auto mb-2" />
                            <p>{favorite.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promotions */}
            <section className="bg-green-100 text-center py-8">
                <h2 className="text-3xl font-bold mb-4">This Summer, Step Out And Experience The Joy Of Travel - Feel Alive</h2>
            </section>

            {/* Recommended Hotels */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Recommended Hotels & Restaurants</h2>
                <div className="grid grid-cols-4 gap-4">
                    {hotels.map((hotel) => (
                        <div key={hotel.name} className="bg-white shadow rounded-lg hover:scale-105 duration-300">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                                <p className="text-gray-700">{hotel.rating} | {hotel.reviews}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">The Best Of Live Events</h2>
                <div className="grid grid-cols-3 gap-4">
                    {events.map((event) => (
                        <div key={event.type} className="bg-white shadow rounded-lg text-center p-8">
                            <h3 className="text-xl font-bold mb-2">{event.type}</h3>
                            <p className="text-gray-700">{event.count}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>Copyright ©2024 Hub Consultancy & Services</p>
            </footer>
        </div>
    );
};

export default App;
