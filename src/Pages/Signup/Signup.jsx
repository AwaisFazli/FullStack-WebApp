import React from 'react'

const Signup = () => {
  return (
    <div className='bg-blue-400 flex justify-center items-center py-20'>

        <div className="  w-2/6 border border-black rounded-lg drop-shadow-2xl bg-white flex-row justify-center p-12">
            <div className='font-bold text-3xl my-2'>Sign Up</div>
            <div className='my-4 space-y-1'>
                <h1 className='font-medium text-lg'>Username</h1>
                <input className='px-4 h-11 border opacity-70 border-black rounded-md w-full drop-shadow-xl ' type="text" />
            </div>

            <div className='my-4 space-y-1'>
                <h1 className='font-medium text-lg'>Email</h1>
                <input className='px-4 h-11 border opacity-70 border-black rounded-md w-full drop-shadow-xl ' type="text" />
            </div>

            <div className='my-4 space-y-1'>
                <h1 className='font-medium text-lg'>Password</h1>
                <input className='px-4 h-11 border opacity-70 border-black rounded-md w-full drop-shadow-xl' type="password" />
            </div>

            <hr />
            <hr />
            <button className='my-8  text-white font-bold text-lg h-12 border opacity-70 bg-pink-600 rounded-md w-full drop-shadow-xl'>Sign Up</button>
        

        </div>

    </div>
  )
}

export default Signup