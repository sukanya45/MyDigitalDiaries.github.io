import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const HomePage = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
        <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
            <div className="flex flex-col justify-center h-full">
 
                <h2 className="text-3xl font-bold text-white sm:text-7xl">We build softwares</h2>
                <p className="max-w-md py-4 text-gray-500">At Digital Diaries, we specialize in delivering innovative software solutions tailored to your business needs. Our expert team combines cutting-edge technology with industry best practices to create efficient, scalable, and user-friendly applications. 
                Partner with us to drive your digital transformation and achieve your strategic goals.</p>
                    <div>
                        <Link to='About' smooth duration={500} className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500 ">
                            Know more 
                            <span className="duration-300 group-hover:rotate-90">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                            
                        </Link>
                    </div>
            </div>

            {/* <div>
                <img src={bg} alt="My Profile" className="w-full mx-auto rounded-2xl bg-transperant md:full"/>
            </div> */}
        </div> 
    </div>

  )
}

export default HomePage