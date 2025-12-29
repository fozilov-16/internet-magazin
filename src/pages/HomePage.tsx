import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import photo1 from '../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png'
import appleLogo from '../assets/images/1200px-Apple_gray_logo 1.png'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { api, GetCategory, GetTodo } from '../../api/api'
import { useEffect, useState } from 'react'
import { Skeleton, Button, Rating } from '@mui/material'
import photo2 from '../assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import logo1 from '../assets/images/Services.png'
import logo2 from '../assets/images/Services (1).png'
import logo3 from '../assets/images/Services (2).png'
import photo3 from '../assets/images/macbook.jpg'
import photo4 from '../assets/images/airpods.jpg'
import photo5 from '../assets/images/ipad.jpg'

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [value, setValue] = useState(2);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([GetTodo(), GetCategory()])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch(() => {
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, []);


  return (
    <div className="mx-auto max-w-7xl py-9">
      <div className="md:flex items-center justify-around">
        <div className="space-y-[16px] text-sm flex gap-10 flex-wrap p-5 md:block">
          <p className='font-semibold text-[16px]'>Woman’s Fashion</p>
          <p className='font-semibold text-[16px]'>Men’s Fashion</p>
          <p className='font-semibold text-[16px]'>Electronics</p>
          <p className='font-semibold text-[16px]'>Home & Lifestyle</p>
          <p className='font-semibold text-[16px]'>Medicine</p>
          <p className='font-semibold text-[16px]'>Sports & Outdoor</p>
          <p className='font-semibold text-[16px]'>Baby’s & Toys</p>
          <p className='font-semibold text-[16px]'>Groceries & Pets</p>
          <p className='font-semibold text-[16px]'>Health & Beauty</p>
        </div>
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="md:w-[890px] rounded-lg">
            <SwiperSlide>
              <div className='bg-black text-white md:flex justify-between px-10 items-center gap-[38px] py-5'>
                <div>
                  <div className='flex items-center gap-[15px] mb-[35px]'>
                    <img src={appleLogo} alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <p className='text-[50px] font-semibold mb-[22px]'>Up to 10% off Voucher</p>
                  <p>Shop Now <ArrowRightAltOutlinedIcon /></p>
                </div>
                <img src={photo1} alt="" className='w-[496px] h-[350px]' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-black text-white md:flex justify-between px-10 items-center gap-[38px] py-5'>
                <div>
                  <div className='flex items-center gap-[15px] mb-[35px]'>
                    <img src={appleLogo} alt="" />
                    <p>MacBook Pro</p>
                  </div>
                  <p className='text-[50px] font-semibold mb-[22px]'>Save up  12% this season</p>
                  <p>Shop Now <ArrowRightAltOutlinedIcon /></p>
                </div>
                <img src={photo3} alt="" className='w-[496px] h-[350px]' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-black text-white md:flex justify-between px-10 items-center gap-[38px] py-5'>
                <div>
                  <div className='flex items-center gap-[15px] mb-[35px]'>
                    <img src={appleLogo} alt="" />
                    <p>AirPods Pro</p>
                  </div>
                  <p className='text-[50px] font-semibold mb-[22px]'>Special Offer Up to 15%</p>
                  <p>Shop Now <ArrowRightAltOutlinedIcon /></p>
                </div>
                <img src={photo4} alt="" className='w-[496px] h-[350px]' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-black text-white md:flex justify-between px-10 items-center gap-[38px] py-5'>
                <div>
                  <div className='flex items-center gap-[15px] mb-[35px]'>
                    <img src={appleLogo} alt="" />
                    <p>iPad Air</p>
                  </div>
                  <p className='text-[50px] font-semibold mb-[22px]'>Special  up to 8% off</p>
                  <p>Shop Now <ArrowRightAltOutlinedIcon /></p>
                </div>
                <img src={photo5} alt="" className='w-[496px] h-[350px]' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='p-5 mt-[60px]'>
        <div className='flex gap-[16px] items-center'>
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <p className='text-[#DB4444] font-bold'>Today’s</p>
        </div>
        <div className='mt-[30px] flex justify-between items-center'>
          <div className='md:flex gap-[87px]'>
            <p className='text-[36px] font-semibold'>Flash Sales</p>
            <div className='flex gap-[20px] items-center'>
              <div>
                <p className='mb-[5]'>Days</p>
                <p className='text-[32px] font-bold'>03</p>
              </div>
              <p className='text-[#E07575] text-[32px] font-semibold'>:</p>
              <div>
                <p className='mb-[5]'>Hours</p>
                <p className='text-[32px] font-bold'>23</p>
              </div>
              <p className='text-[#E07575] text-[32px] font-semibold'>:</p>
              <div>
                <p className='mb-[5]'>Minutes</p>
                <p className='text-[32px] font-bold'>19</p>
              </div>
              <p className='text-[#E07575] text-[32px] font-semibold'>:</p>
              <div>
                <p className='mb-[5]'>Seconds</p>
                <p className='text-[32px] font-bold'>56</p>
              </div>
            </div>
          </div>
          <div className='md:flex gap-[20px] hidden'>
            <ArrowBackOutlinedIcon />
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
        <div className="mt-[40px] p-6">
          {loading && (
            <div className="grid grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="p-4 border rounded-lg shadow-md relative">
                    <Skeleton variant="rectangular" width="100%" height={150} />
                    <Skeleton height={30} style={{ marginTop: 8 }} />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="40%" />
                  </div>
                ))}
            </div>
          )}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {!loading && !error && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              className="py-4"
            >
              {products.map((prod) => (
                <SwiperSlide key={prod.id}>
                  <div className="relative p-4 border rounded-lg shadow-md group">
                    <img
                      src={`${api}/images/${prod.image}`}
                      alt={prod.productName}
                      className="w-full h-40 mb-[50px]"
                    />
                    <p className="mt-2 font-semibold text-lg">{prod.productName}</p>
                    <div className="flex gap-[12px] mt-1">
                      <p className="text-red-600 font-bold">
                        ${prod.discountPrice || prod.price}
                      </p>
                      {prod.discountPrice && (
                        <p className="line-through text-gray-400">${prod.price}</p>
                      )}
                    </div>
                    <div className="mt-1 text-gray-500 flex items-center mt-[20px]">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      ({prod.quantity})
                    </div>
                    <Button
                      variant="contained"
                      color='inherit'
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity top-[-140px] w-full"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className='mt-[32px] flex justify-center'>
            <button className=' bg-[#DB4444] cursor-pointer rounded-[4px] px-[48px] py-[16px] text-white'>View All Products</button>
          </div>
        </div>
      </div>
      <div className='p-5 mt-[100px]'>
        <div className='flex gap-[16px] items-center'>
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <p className='text-[#DB4444] font-bold'>Categories</p>
        </div>
        <div className='mt-[30px] flex justify-between items-center'>
          <p className='text-[36px] font-semibold'>Browse By Category</p>
          <div className='md:flex gap-[20px] hidden'>
            <ArrowBackOutlinedIcon />
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
        <div className="mt-[40px]">
          {loading && (
            <div className="grid grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="p-4 border rounded-lg shadow-md relative">
                    <Skeleton variant="rectangular" width="100%" height={150} />
                    <Skeleton height={30} style={{ marginTop: 8 }} />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="40%" />
                  </div>
                ))}
            </div>
          )}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {!loading && !error && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={6}
              className="py-4"
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div className="flex flex-col items-center justify-center border rounded-md p-6 cursor-pointer hover:bg-[#DB4444] hover:text-white transition group h-[145px]">
                    <img
                      src={`${api}/images/${cat.categoryImage}`}
                      alt={cat.categoryName}
                      className="w-[56px] h-[56px] mb-4"
                    />
                    <p className="text-[16px] font-medium text-center">
                      {cat.categoryName}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className='mt-[32px] flex justify-center'>
            <button className=' bg-[#DB4444] cursor-pointer rounded-[4px] px-[48px] py-[16px] text-white'>View All Products</button>
          </div>
        </div>
      </div>
      <div className='p-5 mt-[100px]'>
        <div className='flex gap-[16px] items-center'>
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <p className='text-[#DB4444] font-bold'>This Month</p>
        </div>
        <div className='mt-[30px] flex justify-between items-center'>
          <p className='text-[36px] font-semibold'>Best Selling Products</p>
          <div className='md:flex gap-[20px] hidden'>
            <ArrowBackOutlinedIcon />
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
        <div className="mt-[40px] p-6">
          {loading && (
            <div className="grid grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="p-4 border rounded-lg shadow-md relative">
                    <Skeleton variant="rectangular" width="100%" height={150} />
                    <Skeleton height={30} style={{ marginTop: 8 }} />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="40%" />
                  </div>
                ))}
            </div>
          )}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {!loading && !error && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              className="py-4"
            >
              {products.map((prod) => (
                <SwiperSlide key={prod.id}>
                  <div className="relative p-4 border rounded-lg shadow-md group">
                    <img
                      src={`${api}/images/${prod.image}`}
                      alt={prod.productName}
                      className="w-full h-40 mb-[50px]"
                    />
                    <p className="mt-2 font-semibold text-lg">{prod.productName}</p>
                    <div className="flex gap-[12px] mt-1">
                      <p className="text-red-600 font-bold">
                        ${prod.discountPrice || prod.price}
                      </p>
                      {prod.discountPrice && (
                        <p className="line-through text-gray-400">${prod.price}</p>
                      )}
                    </div>
                    <div className="mt-1 text-gray-500 flex items-center mt-[20px]">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      ({prod.quantity})
                    </div>
                    <Button
                      variant="contained"
                      color='inherit'
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity top-[-140px] w-full"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className='mt-[32px] flex justify-center'>
            <button className=' bg-[#DB4444] cursor-pointer rounded-[4px] px-[48px] py-[16px] text-white'>View All Products</button>
          </div>
        </div>
      </div>
      <div className='p-12 m-5 mt-[100px] bg-black text-white md:flex justify-between items-center'>
        <div>
          <p className='text-[#00FF66] font-semibold mb-[32px]'>Categories</p>
          <p className='md:text-[48px] text-[28px] font-bold md:w-[440px] mb-[32px]'>Enhance Your Music Experience</p>
          <div className='flex md:gap-[24px] mb-[40px]'>
            <div className='bg-white text-black w-[62px] h-[62px] rounded-[50%] p-2 text-center'>
              <p className='font-bold'>23</p>
              <p className='text-[12px]'>Hours</p>
            </div>
            <div className='bg-white text-black w-[62px] h-[62px] rounded-[50%] p-2 text-center'>
              <p className='font-bold'>05</p>
              <p className='text-[12px]'>Days</p>
            </div>
            <div className='bg-white text-black w-[62px] h-[62px] rounded-[50%] p-2 text-center'>
              <p className='font-bold'>59</p>
              <p className='text-[12px]'>Minutes</p>
            </div>
            <div className='bg-white text-black w-[62px] h-[62px] rounded-[50%] p-2 text-center'>
              <p className='font-bold'>35</p>
              <p className='text-[12px]'>Seconds</p>
            </div>
          </div>
          <button className='bg-[#00FF66] text-black px-[48px] py-[16px] rounded-1 font-semibold mb-[40px] md:mb-0'>Buy Now!</button>
        </div>
        <img src={photo2} alt="" />
      </div>
      <div className='p-5 mt-[100px]'>
        <div className='flex gap-[16px] items-center'>
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <p className='text-[#DB4444] font-bold'>Our Products</p>
        </div>
        <div className='mt-[30px] flex justify-between items-center'>
          <p className='text-[36px] font-semibold'>Explore Our Products</p>
        </div>
        <div className="mt-[40px] p-6">
          {loading && (
            <div className="grid grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="p-4 border rounded-lg shadow-md relative">
                    <Skeleton variant="rectangular" width="100%" height={150} />
                    <Skeleton height={30} style={{ marginTop: 8 }} />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="40%" />
                  </div>
                ))}
            </div>
          )}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {!loading && !error && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              className="py-4"
            >
              {products.map((prod) => (
                <SwiperSlide key={prod.id}>
                  <div className="relative p-4 border rounded-lg shadow-md group">
                    <img
                      src={`${api}/images/${prod.image}`}
                      alt={prod.productName}
                      className="w-full h-40 mb-[50px]"
                    />
                    <p className="mt-2 font-semibold text-lg">{prod.productName}</p>
                    <div className="flex gap-[12px] mt-1">
                      <p className="text-red-600 font-bold">
                        ${prod.discountPrice || prod.price}
                      </p>
                      {prod.discountPrice && (
                        <p className="line-through text-gray-400">${prod.price}</p>
                      )}
                    </div>
                    <div className="mt-1 text-gray-500 flex items-center mt-[20px]">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      ({prod.quantity})
                    </div>
                    <Button
                      variant="contained"
                      color='inherit'
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity top-[-140px] w-full"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className='mt-[32px] flex justify-center'>
            <button className=' bg-[#DB4444] cursor-pointer rounded-[4px] px-[48px] py-[16px] text-white'>View All Products</button>
          </div>
        </div>
      </div>
      <div className='p-5 mt-[100px]'>
        <div className='flex gap-[16px] items-center'>
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <p className='text-[#DB4444] font-bold'>Featured</p>
        </div>
        <div className='mt-[30px] flex justify-between items-center'>
          <p className='text-[36px] font-semibold'>New Arrival</p>
        </div>
        <div className='mt-8 md:flex justify-around'>
          <div className='b1'>
            <p className='text-[24px] font-semibold mb-[16px]'>PlayStation 5</p>
            <p className='w-[250px] mb-[16px]'>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
          <div>
            <div className='b2 mb-[32px]'>
              <p className='text-[24px] font-semibold mb-[16px]'>Women’s Collections</p>
              <p className='w-[250px] mb-[16px]'>Featured woman collections that give you another vibe.</p>
              <button>Shop Now</button>
            </div>
            <div className='md:flex justify-between'>
              <div className='b3'>
                <p className='text-[24px] font-semibold mb-[16px]'>Speakers</p>
                <p className='w-[250px] mb-[16px]'>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
              <div className='b4'>
                <p className='text-[24px] font-semibold mb-[16px]'>Perfume</p>
                <p className='w-[250px] mb-[16px]'>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 mt-[100px] mb-[130px]'>
        <div className='md:flex justify-around items-center'>
          <div className='md:mb-0 mb-5 text-center flex flex-col items-center'>
            <img src={logo1} alt="" className='mb-[24px]' />
            <p className='text-[20px] font-bold mb-[10px]'>FREE AND FAST DELIVERY</p>
            <p className='text-[14px]'>Free delivery for all orders over $140</p>
          </div>
          <div className='md:mb-0 mb-5 text-center flex flex-col items-center'>
            <img src={logo2} alt="" className='mb-[24px]' />
            <p className='text-[20px] font-bold mb-[10px]'>24/7 CUSTOMER SERVICE</p>
            <p className='text-[14px]'>Friendly 24/7 customer support</p>
          </div>
          <div className='md:mb-0 mb-5 text-center flex flex-col items-center'>
            <img src={logo3} alt="" className='mb-[24px]' />
            <p className='text-[20px] font-bold mb-[10px]'>MONEY BACK GUARANTEE</p>
            <p className='text-[14px]'>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}