import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.jpeg'
import icon3 from '../assets/icon3.jpg'


const Experience = () => {

    const exp=[
        {
            id:1,
            src:icon1,
            title:"Customized Approach",
            desc:"we provide ourselves on our customized approach to web development. Understanding that every business is unique, we tailor our solutions to meet your specific needs and objectives. Our team works closely with you to design and develop a website that not only reflects your brand but also engages your audience and drives success."
           

        },
        {
            id:2,
            src:icon2,
            title:"Result Driven Solutions",
            desc:"we deliver result-driven software solutions that propel your business forward. Our team combines expertise with cutting-edge technology to create tailored applications that meet your specific goals and drive measurable success. Trust us to transform your vision into impactful, high-performance solutions."
           

        },
        {
            id:3,
            src:icon3,
            title:"Responsive Design",
            desc:"we specialize in responsive design to ensure your website looks and functions perfectly on any device. Our approach guarantees a seamless and engaging user experience across desktops, tablets, and smartphones, enhancing accessibility and user satisfaction."
           

        }
        
    ]
  return (
    
            <div name="service" className="w-full text-white bg-gradient-to-b from-gray-800 to-black md:h-screen">
           <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
               <div>
                <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">Services</p>
                <p className="py-6">Why DigitalDiaries?</p>
                <p className='py-5'>Our Expertise and Commitment to Your Success Sets Us Apart.</p>
               </div>

               <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0 ">
                 {
                    exp.map(({id,src,title,desc})=>(
                        <div key={id} className="p-10 py-2 pt-5 m-3 duration-500 border-2 rounded-lg hover:scale-105 border-sky-500">
                        <img src={src} alt="icons"  className="w-20 mx-auto"/>
                        <p className="mt-4 font-semibold underline-offset-1">{title}</p>
                        <p className="mt-4 leading-5 text-center ">{desc}</p>
                    </div>
                    ))
                 }

               
               </div>
           </div>
    </div>
  )
}

export default Experience