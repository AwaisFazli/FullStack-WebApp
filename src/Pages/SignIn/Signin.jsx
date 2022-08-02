import React from 'react'

const Signin = () => {
  return (
    <div className='bg-blue-400 flex justify-center items-center py-20'>

        <div className=" h-[500px] w-2/6 border border-black rounded-lg drop-shadow-2xl bg-white flex-row justify-center p-12">
            <div className='font-bold text-3xl my-2'>LogIn</div>
            <div className='my-4 space-y-1'>
                <h1 className='font-medium text-lg'>Username</h1>
                <input className='px-4 h-10 border opacity-70 border-black rounded-md w-full drop-shadow-xl ' type="text" />
            </div>
            <div className='my-4 space-y-1'>
                <h1 className='font-medium text-lg'>Password</h1>
                <input className='px-4 h-10 border opacity-70 border-black rounded-md w-full drop-shadow-xl' type="password" />
            </div>

            
            <button className='my-4 w-full text-white font-bold text-lg h-11 border opacity-70 bg-pink-600 rounded-md drop-shadow-xl'>Sign In</button>
            <button className='my-4 w-full  text-white font-bold text-lg h-11 border opacity-70 bg-pink-600 rounded-md drop-shadow-xl'>Sign Up</button>
            

        </div>

    </div>
  )
}

export default Signin