import Aboutservice from "./section/Aboutservice";
import Tarif from "./section/Tarif";
import clients from '../assets/images/Side Image.png'
import logo1 from '../assets/images/Services (3).png'
import logo2 from '../assets/images/Services (4).png'
import logo3 from '../assets/images/Services (5).png'
import logo4 from '../assets/images/Services (6).png'
import tom from '../assets/images/Frame 874.png'
import emma from '../assets/images/Frame 875.png'
import will from '../assets/images/Frame 876.png'
import twitter from '../assets/images/Icon-Twitter.png'
import instagram from '../assets/images/icon-instagram.png'
import inicon from '../assets/images/Icon-Linkedin.png'

export default function AboutPage() {
  return (
    <div>
      <div>
        <section className='flex items-center justify-center gap-[75px]' style={{ marginTop: 50 }}>
          <div className='flex flex-col gap-[40px]'>
            <h1 className='text-[54px] fonr-[600] leading-[64px]'>Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
              makterplace with an active presense in Bangladesh. Supported <br />
              by wide range of tailored marketing, data and service solutions, <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
              millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a <br />
              very fast. Exclusive offers a diverse assotment in categories <br />
              ranging  from consumer.</p>
          </div>
          <img src={clients} alt="ddfd" />
        </section>
        <section className='flex items-center justify-center gap-[30px]' style={{ marginTop: 50 }}>
          <Aboutservice img={logo1} num={"10.5k"} desc={"Sallers active our site"} />
          <Aboutservice img={logo2} num={"33k"} desc={"Mopnthly Produduct Sale"} />
          <Aboutservice img={logo3} num={"45.5k"} desc={"Customer active in our site"} />
          <Aboutservice img={logo4} num={"25k"} desc={"Anual gross sale in our site"} />
        </section>
        <section className='flex items-center justify-center gap-[30px]' style={{ marginTop: 60 }}>
          <div className='flex flex-col gap-[32px]'>
            <img className='w-[370px] h-[430px]' src={tom} alt="" />
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-[32px] font-[500] leading-[30px]'>Tom Cruise</h1>
              <p>Founder & Chairman</p>
              <div className='flex items-center gap-[16px]'>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={inicon} alt="" />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[32px]'>
            <img className='w-[370px] h-[430px]' src={emma} alt="" />
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-[32px] font-[500] leading-[30px]'>Emma Watson</h1>
              <p>Managing Director</p>
              <div className='flex items-center gap-[16px]'>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={inicon} alt="" />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[32px]'>
            <img className='w-[370px] h-[430px]' src={will} alt="" />
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-[32px] font-[500] leading-[30px]'>Will Smith</h1>
              <p>Product Designer</p>
              <div className='flex items-center gap-[16px]'>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={inicon} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="mb-[70px] mt-[100px]">
          <Tarif />
        </section>
      </div>
    </div>
  )
}
