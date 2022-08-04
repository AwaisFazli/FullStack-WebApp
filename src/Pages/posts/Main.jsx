import React from 'react'
import Post from '../../Components/post/Post'

const Main = () => {


    const post = [
        {
            title: 'Hunza',
            createdDate: new Date(),
            userName: 'Danish',
            description: 'Lorem Ipsum',
            location: 'longitude & Latitude',
            image: undefined
        },
        {
            title: 'Maldives',
            createdDate: new Date(),
            userName: 'Umaid',
            description: 'Lorem Ipsum',
            location: 'longitude & Latitude',
            image: undefined
        },
        {
            title: 'Lahore',
            createdDate: new Date(),
            userName: 'Rahim',
            description: 'Lorem Ipsum',
            location: 'longitude & Latitude',
            image: undefined
        }
    ]


    return <>
    <div className="mainBody sm:w-96 md:w-[600px] w-[900px]  flex-row justify-center items-cente m-3">
    {
        post.map((value, index) => {
                  return <Post
                        data = { value }
        
                     key={index}
        />
        })
    }
    </div>
    
    </>


}

export default Main

