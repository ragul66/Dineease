import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.avif';
import home1 from '../assets/home 1.avif';
import home2 from '../assets/home2.avif';
import home3 from '../assets/home3.avif';
//collections image
import collect1 from '../assets/collect1.avif'
import collect2 from '../assets/collect2.png'
import collect3 from '../assets/collect3.avif'
import collect4 from '../assets/collect4.avif'

const Home1 = () => {
    const navigate = useNavigate();

    const imageadata = [
        {
            img: home1,
            h3: "Order online",
            h2: "Stay home and Order to your doordtep"
        },
        {
            img: home2,
            h3: "Dining",
            h2: "View the cities Favourite Venues"
        },
        {
            img: home3,
            h3: "Nightlife and clubs",
            h2: "Explore the cities top nightlife outlets"
        }
    ];

    const collect = [
        {
            img: collect1
        },
        {
            img: collect2
        },
        {
            img: collect3
        },
        {
            img: collect4
        }
    ]

    const citydata = [
        {
            h3: "Madurai Special",
            text: "275 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Bun parotta",
            text: "320 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Tiffen corner",
            text: "540 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        },
        {
            h3: "Morning Special",
            text: "786 places",
            icons: <ion-icon name="chevron-forward-outline"></ion-icon>
        }
    ]

    return (
        <>
            <div className='font-primary'>
                <div className='relative'>
                    <img className='w-screen h-[420px]' src={background} alt="Background" />
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                        <p className="text-white text-7xl  font-extrabold">Dineease</p>
                        <div className=' text-white absolute flex  top-0 left-0 text-xl'>
                            <p className='ml-24 mt-4'>Get the App</p>
                            <div className='flex justify-center ml-[700px]  space-x-12  '>
                                <p className=' mt-4'>Dining Out</p>
                                <p className=' mt-4 cursor-pointer' onClick={() => navigate('/')}>Login</p>
                                <p className=' mt-4 cursor-pointer' onClick={() => navigate('/register')}>Sign UP</p>
                            </div>
                        </div>
                        <div className='absolute flex mt-32'>
                            <input className='rounded-lg p-1 w-96' placeholder='Search for Restaurants' />
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className='flex p-12 space-x-24 ml-28'>
                    {imageadata.map((data, index) => (
                        <div key={index} className='border-2 p-2 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img className='w-[300px] h-[200px] cursor-pointer' src={data.img} onClick={() => navigate('/dining')} alt="Images" />
                            <h3 className='font-bold'>{data.h3}</h3>
                            <h2>{data.h2}</h2>
                        </div>
                    ))}
                </div>

                <div className=''>
                    <div className='justify-center items-center'>
                        <h3 className='font-bold ml-12'>Collections</h3>
                        <h3 className='ml-12'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</h3>
                        <div className='flex flex-row ml-12 mr-12 space-x-4 mb-7 mt-7 '>
                            {collect.map((data, index) => (
                                <div key={index} className=''>
                                    <img className='rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300' src={data.img} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h3 className='font-bold ml-12'>Popular localities in and around Delhi NCR</h3>
                <div className='grid grid-cols-3 justify-center items-center  ml-24 mr-24'>
                    {citydata.map((data, index) => (
                        <div key={index} className='border-2 rounded-xl p-2 mx-2 mt-5 mb-2 hover:shadow-lg'>
                            <h3 className='font-bold'>{data.h3}</h3>
                            <p className='flex flex-row'>{data.text}</p>
                            <p>{data.icons}</p>
                        </div>
                    ))}
                </div>


            </div>
        </>
    );
}

export default Home1;
