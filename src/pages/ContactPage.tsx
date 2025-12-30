import redPhone from '../assets/images/redPhone.png'
import redMail from '../assets/images/redMail.png'
 
const ContactPage = () => {
  return (
      <div className='flex items-center justify-center gap-[40px] mb-[100px] mt-[50px]'>

        <div className='w-[350px] h-[434px] border-[1px] border-[solid] border-[#00000029]
        flex flex-col gap-[32px] items-center justify-center shadow-lg'>

          <div className='flex flex-col gap-[24px]'>
            <div className='flex gap-[16px] items-center'>
              <img src={redPhone} alt="ddd" />
              <h1 className='text-[20px] leading-[24px] font-bold'>Call To Us</h1>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <h1>We are available 24/7, 7 days a week.</h1>
              <h1>Phone: +8801611112222</h1>
            </div>
          </div>
          <div className='w-[270px] opacity-[50%] border-[1px] border-[#0000004D]'></div>
          <div className='flex flex-col gap-[24px]'>
            <div  className='flex gap-[16px] items-center'>
              <img src={redMail} alt="sss" />
              <h1 className='text-[20px] leading-[24px] font-bold'>Write To US</h1>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <h1>Fill out our form and we will contact <br/>
              you within 24 hours.</h1>
              <h1>Emails: customer@exclusive.com</h1>
              <h1>Emails: support@exclusive.com</h1>
            </div>
          </div>

        </div>

        <div className='w-[780px] h-[432px] border-[1px] border-[solid] border-[#00000029] 
        flex flex-col gap-[32px] rounded-[4px] shadow-lg p-[40px]'>

          <div className='flex gap-[20px]'>
            <input type="text" placeholder='Name' className='w-[220px] h-[56px] border-[1px] border-[#0000003B] rounded-[4px] pr-[12px] pl-[12px]'/>
            <input type="text" placeholder='Email' className='w-[220px] h-[56px] border-[1px] border-[#0000003B] rounded-[4px] pr-[12px] pl-[12px]'/>
            <input type="text" placeholder='Phone' className='w-[220px] h-[56px] border-[1px] border-[#0000003B] rounded-[4px] pr-[12px] pl-[12px]'/>
          </div>

          <textarea placeholder='Your Massage' className='w-[700px] h-[176px] border-[1px] border-[#0000003B] rounded-[4px] p-[16px]'></textarea>
          <div className='flex items-center justify-end'>
            <button className='w-[215px] h-[56px] border-[#DB4444] border-[1px] border-[#DB4444] bg-[#DB4444] text-white rounded-[4px]'>Send Massage</button>
          </div>

        </div>

      </div>
  )
}

export default ContactPage