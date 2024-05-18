import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-screen p-4 text-white pt-[170px] md:h-full overflow-hidden bg-gradient-to-b from-black to-gray-800" name="contact">
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Kindly submit the form to get in touch with me</p>
        </div>
         
         <div className="flex items-center justify-center">
          <form action="https://getform.io/f/97549afd-3d92-4c9a-a493-9e3be9622386"  method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" id="" placeholder='Enter you name'
             className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"/>
            
            <input type="text" name="email" id="" placeholder='Enter you email'
             className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"/>
            
            <textarea name="message" rows="10" className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none" placeholder="Enter Your Message">

            </textarea>
            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md md:py-2 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">Let's talk</button>
          </form>

         </div>
      </div>
    </div>
  )
}

export default Contact