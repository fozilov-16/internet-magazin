import delivery from '../../assets/images/Services.png'
import delivery1 from '../../assets/images/Services (7).png'
import delivery2 from '../../assets/images/Services (8).png'

export default function Tarif() {
    return (
        <div>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[88px]">
                <div className='flex items-center flex-col gap-[24px]'>
                    <img src={delivery} alt="sss" />
                    <div className='flex items-center flex-col gap-[8px]'>
                        <h1 className='text-[20px] font-[600]'>FREE AND FAST DELIVERY</h1>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className='flex items-center flex-col gap-[24px]'>
                    <img src={delivery1} alt="sss" />
                    <div className='flex items-center flex-col gap-[8px]'>
                        <h1 className='text-[20px] font-[600]'>24/7 CUSTOMER SERVICE</h1>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className='flex items-center flex-col gap-[24px]'>
                    <img src={delivery2} alt="sss" />
                    <div className='flex items-center flex-col gap-[8px]'>
                        <h1 className='text-[20px] font-[600]'>MONEY BACK GUARANTEE</h1>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
