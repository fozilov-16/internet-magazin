import Aboutservice from "./section/Aboutservice";
import Tarif from "./section/Tarif";
import clients from '../assets/images/Side Image.png';
import logo1 from '../assets/images/Services (3).png';
import logo2 from '../assets/images/Services (4).png';
import logo3 from '../assets/images/Services (5).png';
import logo4 from '../assets/images/Services (6).png';
import tom from '../assets/images/Frame 874.png';
import emma from '../assets/images/Frame 875.png';
import will from '../assets/images/Frame 876.png';
import twitter from '../assets/images/Icon-Twitter.png';
import instagram from '../assets/images/icon-instagram.png';
import inicon from '../assets/images/Icon-Linkedin.png';

export default function AboutPage() {
  return (
    <div className='px-4 md:px-20 py-12 md:py-24 flex flex-col gap-16'>

      <section className='flex flex-col md:flex-row items-center gap-8 md:gap-20'>
        <div className='flex flex-col gap-6 md:gap-10 text-center md:text-left'>
          <h1 className='text-3xl md:text-[54px] font-semibold leading-snug md:leading-[64px]'>Our Story</h1>
          <p className='text-sm md:text-base'>
            Launced in 2015, Exclusive is South Asia’s premier online shopping <br className="hidden md:block"/>
            marketplace with an active presense in Bangladesh. Supported <br className="hidden md:block"/>
            by wide range of tailored marketing, data and service solutions, <br className="hidden md:block"/>
            Exclusive has 10,500 sellers and 300 brands and serves 3 <br className="hidden md:block"/>
            million customers across the region.
          </p>
          <p className='text-sm md:text-base'>
            Exclusive has more than 1 Million products to offer, growing at a <br className="hidden md:block"/>
            very fast. Exclusive offers a diverse assortment in categories <br className="hidden md:block"/>
            ranging from consumer.
          </p>
        </div>
        <img src={clients} alt="clients" className='w-full max-w-xs md:max-w-none'/>
      </section>

      <section className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12'>
        <Aboutservice img={logo1} num="10.5k" desc="Sellers active on our site" />
        <Aboutservice img={logo2} num="33k" desc="Monthly Product Sale" />
        <Aboutservice img={logo3} num="45.5k" desc="Customers active on our site" />
        <Aboutservice img={logo4} num="25k" desc="Annual gross sale on our site" />
      </section>

      <section className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
        {[{img: tom, name: "Tom Cruise", role: "Founder & Chairman"},
          {img: emma, name: "Emma Watson", role: "Managing Director"},
          {img: will, name: "Will Smith", role: "Product Designer"}].map((person, idx) => (
          <div key={idx} className='flex flex-col gap-4 md:gap-8 items-center md:items-start'>
            <img src={person.img} alt={person.name} className='w-[250px] md:w-[370px] h-[290px] md:h-[430px]' />
            <div className='flex flex-col gap-2 md:gap-4 items-center md:items-start'>
              <h1 className='text-xl md:text-[32px] font-medium leading-snug md:leading-[36px]'>{person.name}</h1>
              <p>{person.role}</p>
              <div className='flex gap-4 md:gap-6'>
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={inicon} alt="linkedin" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='mt-12 md:mt-24'>
        <Tarif />
      </section>

    </div>
  )
}
