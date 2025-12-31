import redPhone from '../assets/images/redPhone.png';
import redMail from '../assets/images/redMail.png';

const ContactPage = () => {
  return (
    <div className='px-4 md:px-20 py-12 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16'>

      <div className='w-full md:w-1/3 border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <img src={redPhone} alt="phone" className='w-6 h-6 md:w-8 md:h-8'/>
            <h2 className='text-lg md:text-xl font-bold'>Call To Us</h2>
          </div>
          <p className='text-center md:text-left text-gray-700'>We are available 24/7, 7 days a week.</p>
          <p className='text-center md:text-left font-medium'>Phone: +8801611112222</p>
        </div>

        <div className='border-t border-gray-300 opacity-50'></div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <img src={redMail} alt="email" className='w-6 h-6 md:w-8 md:h-8'/>
            <h2 className='text-lg md:text-xl font-bold'>Write To Us</h2>
          </div>
          <p className='text-center md:text-left text-gray-700'>
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className='text-center md:text-left font-medium'>customer@exclusive.com</p>
          <p className='text-center md:text-left font-medium'>support@exclusive.com</p>
        </div>
      </div>

      <div className='w-full md:w-2/3 border border-gray-300 rounded-lg shadow-lg p-6 md:p-10 flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-5'>
          <input type="text" placeholder='Name' className='w-full md:w-1/3 h-14 border border-gray-300 rounded px-3'/>
          <input type="text" placeholder='Email' className='w-full md:w-1/3 h-14 border border-gray-300 rounded px-3'/>
          <input type="text" placeholder='Phone' className='w-full md:w-1/3 h-14 border border-gray-300 rounded px-3'/>
        </div>
        <textarea placeholder='Your Message' className='w-full h-44 md:h-48 border border-gray-300 rounded px-4 py-3'></textarea>
        <button className='w-full md:w-1/3 h-14 bg-red-500 text-white rounded font-semibold mx-auto md:mx-0'>Send Message</button>
      </div>

    </div>
  )
}

export default ContactPage;
