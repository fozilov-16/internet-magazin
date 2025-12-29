
export default function Aboutservice({ img, num, desc }) {
    return (
        <div>
            <div className='w-[250px] h-[230px] border-[solid border-[1px] border-[#0000004D] flex items-center flex-col justify-center gap-[24px]'>
                <img src={img} alt="fff" />
                <div className='flex flex-col items-center justify-center gap-[12px]'>
                    <h1 className='text-[32px] font-[700] leading-[30px]'>{num}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
