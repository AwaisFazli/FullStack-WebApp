import React, {useState}from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Sidedrawer from './Sidedrawer';

const Header = () => {

    const [isdrawer, setDrawer] = useState(true)

        const toggle = () => {
            // setDrawer(false)
            console.log("hello World")
            if (isdrawer === false){
                setDrawer(true)
            }
        }


  return (
    <div  >
    { isdrawer?    
    <div className='bg-red-300 w-full flex justify-between px-4 py-2 '>
        <div className='block md:hidden hover:cursor-pointer' onClick={()=>setDrawer(!isdrawer)}><MenuIcon/></div>
        <div className='font-bold text-xl'>My App</div>
        <div className='hidden md:block lg:block'>
            <div className='flex space-x-4'>
            <div className='font-medium text-lg cursor-pointer'><NavLink to={'/'} exact>Home</NavLink></div>
            <div className='font-medium text-lg cursor-pointer'><NavLink to={'/u1/posts'} exact>My Posts</NavLink></div>
            <div className='font-medium text-lg cursor-pointer'><NavLink to={'/posts/new'} exact>Add New</NavLink></div>
            <div className='font-medium text-lg cursor-pointer'><NavLink to={'/auth'} exact>Authenticate</NavLink></div>
            </div>
        </div>
    </div> :
    <div>
    <div className='w-[1/4] h-[100vh] bg-black opacity-30' onClick={() => toggle()}></div>    
    <Sidedrawer/>
    </div>    }
    </div>
  )
}

export default Header