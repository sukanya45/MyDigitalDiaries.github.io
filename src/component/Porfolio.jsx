import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'

const Porfolio = () => {

   const portfolios=[
        {
            id:1,
            src:project1
        },
        {
            id:2,
            src:project2
        },
        {
            id:3,
            src:project3
        },
        {
            id:4,
            src:project4
        },
        {
            id:5,
            src:project5
        },
        {
            id:6,
            src:project6
        }
   ]

  return (

    <div name="Projects" className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen">
       
       <div className="flex flex-col justify-center w-full h-full max-w-screen-lg px-4 mx-auto">
            <div className="pb-8">
                <p className="inline text-4xl font-bold border-b-4 border-gray-500">Designs available</p>
                <p className="py-6">Check Out Some of the designs we can make you available.</p>
            </div>
                 
               <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 px-18 sm:px-0 ">
                 {
                    portfolios.map(({id,src})=>(

                        <div key={id}className="rounded-lg shadow-md shadow-gray-1000 sm:shadow-sm">
                        <img src={src} 
                        alt="projects" 
                        className="duration-200 rounded-md hover:scale-125 "/>
                        {/* <div className="flex items-center justify-center">
                          <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div> */}
                     </div>
                    

                    ))
                 }
                 </div>
                   
       </div>
    </div>
  )
}

export default Porfolio