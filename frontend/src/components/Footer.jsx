import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src="https://res.cloudinary.com/ddkzadleu/image/upload/v1753032299/Gemini_Generated_Image_z648bwz648bwz648_bhewcz.png" alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>SwiftCare – Your Health, Our Priority. Trusted by thousands. Loved by all. Stay healthy, stay happy.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>kuchipudiashokreddy15@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Ashok.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
