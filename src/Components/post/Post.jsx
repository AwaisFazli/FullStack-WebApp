import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Post = (data) => {
  // console.log(data.data.title)

  const userImage = "../../../public/logo192.png"

  const { title, image, createdDate, userName, description, location } = data.data;


  return (
    <>
      <div className='main p-2 px-4 border border-black rounded-lg m-4 bg-white'>

        <div className='header flex my-2 mx-4 space-x-2 w-full'>
          <AccountCircleIcon />
          <h1>{userName}</h1>
        </div>

        <div className='PostImage bg-black h-80 w-full'></div>

        <div className=' mt-3 mx-2 flex justify-between items-center'>


            <div className=''>
              <p className='font-bold text-xl ml-2'>{title}</p>
              <p className='text-sm ml-2'>{"Now"}</p>
            </div>

            <div className=''>
              <button className='mx-2 border border-black bg-slate-400 w-20 rounded-md'>Edit</button>
              <button className='mx-2 mr-4 border border-black bg-slate-400 w-20 rounded-md'>Delete</button>
            </div>

        </div>

        <div>
          <p className='m-4 w-full'>{description}</p>
        </div>

        <div className='h-4'></div>

        <div className='flex items-center'>
          <h1 className='font-bold text-xl ml-4 mr-2'>Location:</h1>
          <h1 className='m-1'>{location}</h1>
          <h1 className='m-1'>{location}</h1>
        </div>
      </div>  
   </>
  
  )
}

export default Post