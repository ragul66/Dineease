// import React, { useEffect, useState } from 'react'
// import background from "../assets/background dining.png"
// import apple from "../assets/apple.png"
// import google from "../assets/google.png"
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//     const navigate = useNavigate()


//     return (
//         <div className='flex justify-center items-center h-screen font-primary bg-gradient-to-br from-secondary to-primary'>
//             <div className="flex justify-center items-center bg-primary shadow-2xl">
//                 <div className=" p-4 grid  grid-cols-3 gap-4">
//                     <img className='grid col-span-2' src={background} alt='image/background' />
//                     <div className='border-2 border-tertiary items-center flex justify-center'>
//                         <form className='grid col-span-1  space-y-4'>

//                             <h2 className="text-2xl font-bold ">Login</h2>
//                             {/* <label htmlFor="email" className="">Email</label> */}
//                             <input
//                                 type="email"
//                                 id="email"
//                                 className="p-2 rounded-full"
//                                 placeholder="Enter your email"
//                             />


//                             {/* <label htmlFor="password" className="">Password</label> */}
//                             <input
//                                 type="password"
//                                 id="password"
//                                 className="p-2 rounded-full"
//                                 placeholder="Enter your password"
//                             />
//                             <a className='text-blue-800 underline text-xs' href='https://www.google.com'>Forget Password???</a>
//                             <button
//                                 type="submit"
//                                 className="bg-blue-600 rounded-full text-white hover:bg-white     hover:text-blue-600 border p-2 hover:border-blue-600"
//                                 onClick={() => navigate("/register")}
//                             >
//                                 Login
//                             </button>
//                             <hr className='h-0.5 bg-tertiary' />
//                             <button className='flex items-center  rounded-full border border-1 p-2 border-tertiary'>
//                                 Continue with <img className='size-6 flex justify-end' src={google} />
//                             </button>
//                             <button className='flex items-center rounded-full border border-1 p-2 border-tertiary'>
//                                 Continue with  <img className='size-6 flex justify-center' src={apple} />
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login


import React, { useState } from 'react';
import background from "../assets/background dining.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const req = await fetch(`${import.meta.env.VITE_API}/`)
            const jsondata = await req.json();
            // console.log(jsondata);

            if (jsondata[0]) {
                const tname = jsondata[0].name;
                const tpassword = jsondata[0].password;
                if (tname == name && tpassword == password) {
                    console.log("Login successful...");
                    navigate('/home');
                }
                else {
                    toast.error("login Failed🥲🥲!!", {
                        // position: toast.POSITION.TOP_RIGHT,
                    });
                }

            }
            else {
                alert("Login Failed to fetch")
            }
        } catch (err) {
            console.error(err.message);
            toast.error("Login Failed🥲🥲!!", {
                // position: toast.POSITION.TOP_RIGHT,
            });
        }
    };
    return (
        <div className='flex justify-center items-center h-screen font-primary bg-gradient-to-br from-secondary to-primary'>
            <div className="flex justify-center items-center bg-primary shadow-2xl">
                <div className="p-4 grid grid-cols-3 gap-4">
                    <img className='grid col-span-2' src={background} alt='background' />
                    <div className='border-2 border-tertiary items-center flex justify-center'>
                        <ToastContainer />
                        <form className='grid col-span-1 space-y-4' onSubmit={handleLogin}>
                            <h2 className="text-2xl font-bold">Login</h2>
                            <input
                                type="email"
                                id="email"
                                className="p-2 rounded-full"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                className="p-2 rounded-full"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <a className='text-blue-800 underline text-xs' href='#'>Forget Password???</a>
                            <button
                                type="submit"
                                className="bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 border p-2 hover:border-blue-600"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 border p-2 hover:border-blue-600"
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </button>
                            <hr className='h-0.5 bg-tertiary' />
                            <button className='flex items-center rounded-full border border-1 p-2 border-tertiary'>
                                Continue with <img className='size-6 flex justify-end' src={google} alt="Google" />
                            </button>
                            <button className='flex items-center rounded-full border border-1 p-2 border-tertiary'>
                                Continue with  <img className='size-6 flex justify-center' src={apple} alt="Apple" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
