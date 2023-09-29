"use client"
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

type Props = {}

const page = (props: Props) => {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    return (
        <div className='container'>
            <div className='my-4 py-10 lg:my-14 lg:w-[40%] w-full border mx-auto bg-white p-2 rounded-md'>
                <div className='flex justify-center font-semibold items-center gap-10'>
                    <h5 onClick={() => setIsLogin(true)} className={`${isLogin ? "text-blue-1000" : "text-gray-400"} cursor-pointer`}>LOGIN</h5>
                    <h5 onClick={() => setIsLogin(false)} className={`${!isLogin ? "text-blue-1000" : "text-gray-400"} cursor-pointer`}>REGISTER</h5>
                </div>

                <div className="my-10">
                    {isLogin ? <Login /> : <Register />}
                </div>
            </div>
        </div>
    )
}

export default page