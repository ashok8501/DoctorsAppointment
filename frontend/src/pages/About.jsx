import React from 'react'

const About = () => {
  return (
    <div className="px-4 md:px-20 lg:px-32">
      {/* Section Title */}
      <div className="text-center text-3xl font-semibold text-gray-600 pt-10">
        <p>
          ABOUT <span className="text-gray-800 font-bold">US</span>
        </p>
      </div>

      {/* About Content */}
      <div className="my-12 flex flex-col md:flex-row items-center gap-12">
        <img
          className="w-full md:max-w-sm rounded-xl shadow-md"
          src="https://res.cloudinary.com/ddkzadleu/image/upload/v1753034575/ChatGPT_Image_Jul_20__2025__11_27_43_PM-removebg-preview_y3rdkg.png"
          alt="About Prescripto"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-700 text-[15px] leading-relaxed">
          <p>
            Welcome to <strong className="text-blue-600">SwiftCare</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing health records.
          </p>
          <p>
            SwiftCare is committed to excellence in healthcare technology. We strive to integrate the latest advancements to improve user experience and provide seamless support whether you're booking your first appointment or managing ongoing care.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Vision</h3>
            <p>
              To create a seamless healthcare experience for every user — bridging the gap between patients and healthcare providers, ensuring timely and accessible care.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center text-2xl font-semibold text-gray-700 my-10">
        <p>
          WHY <span className="text-blue-600 font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: 'Efficiency',
            desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.',
          },
          {
            title: 'Convenience',
            desc: 'Access to a network of trusted healthcare professionals in your area.',
          },
          {
            title: 'Personalization',
            desc: 'Tailored recommendations and reminders to help you stay on top of your health.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl px-8 py-10 shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
