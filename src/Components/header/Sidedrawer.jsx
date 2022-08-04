import React from 'react'
import { ReactDOM } from 'react-dom';
import { NavLink } from "react-router-dom"



const Sidedrawer = (props) => {

    let a = null;
    return(
        

    <aside className='fixed inset-0 h-full w-3/4 bg-white flex justify-center items-center'>
        
        <div className='flex-row space-y-4'>
        <div className='w-full font-medium text-2xl cursor-pointer'><NavLink to={'/'} exact>Home</NavLink></div>
        <div className='w-full font-medium text-2xl cursor-pointer'><NavLink to={'/u1/posts'} exact>My Posts</NavLink></div>
        <div className='w-full font-medium text-2xl cursor-pointer'><NavLink to={'/posts/new'} exact>Add New</NavLink></div>
        <div className='w-full font-medium text-2xl cursor-pointer'><NavLink to={'/auth'} exact>Authenticate</NavLink></div>
        </div>
        
    </aside>

)
  
}

export default Sidedrawer