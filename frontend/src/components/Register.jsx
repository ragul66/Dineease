import React, { useState } from 'react'
import background from "../assets/background dining.png"
import apple from "../assets/apple.png"
import google from "../assets/google.png"
import GoogleLogin from './Google'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    const [name, setName] = useState([])
    const [pass, setPass] = useState([])
    const [crtpass, setcrtPass] = useState([])
    const [gmail, setGmail] = useState([])


    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, password: pass, crt_pass: crtpass, gmail };
            const response = await fetch(`${import.meta.env.VITE_API}/register`, {
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(body),
            })


            if (response.status === 201) {
                window.location = "/";
            } else if (response.status === 409) {
                alert('User with this email already exists');
            } else {
                const errorData = await response.json();
                alert(errorData.error || 'Registration failed');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('An error occured.Please try again')
        }
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className='flex justify-center items-center h-screen font-primary bg-gradient-to-br from-secondary to-primary'>
                    <div className="flex justify-center items-center bg-primary shadow-2xl">
                        <div className="p-4 grid grid-cols-3 gap-4">
                            <img className='grid col-span-2' src={background} alt='background' />
                            <div className='border-2 border-tertiary items-center flex justify-center'>
                                <div className='grid col-span-1 space-y-4'>
                                    <h2 className="text-2xl font-bold">Register</h2>
                                    <input
                                        type="text"
                                        className="p-2 rounded-full"
                                        placeholder="Enter your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        className="p-2 rounded-full"
                                        placeholder="Enter your password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        className="p-2 rounded-full"
                                        placeholder="Re-enter the password"
                                        value={crtpass}
                                        onChange={(e) => setcrtPass(e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        className="p-2 rounded-full"
                                        placeholder="Enter your Mail"
                                        value={gmail}
                                        onChange={(e) => setGmail(e.target.value)}
                                    />
                                    <a className='text-blue-800 underline text-xs' href='#'>Forget Password???</a>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 border p-2 hover:border-blue-600"
                                    >
                                        Register
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 border p-2 hover:border-blue-600"
                                        onClick={() => navigate("/")}
                                    >
                                        Login
                                    </button>
                                    <hr className='h-0.5 bg-tertiary' />
                                    <button className='flex items-center rounded-full border border-1 p-2 border-tertiary'>
                                        Continue with <img className='size-6 flex justify-end' src={google} alt="Google" />
                                    </button>
                                    <button className='flex items-center rounded-full border border-1 p-2 border-tertiary'>
                                        Continue with  <img className='size-6 flex justify-center' src={apple} alt="Apple" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;
