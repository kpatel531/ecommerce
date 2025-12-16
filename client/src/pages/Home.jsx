import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules'
import banner1 from '../assets/mainbanner.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import bannerMobile1 from '../assets/main-mobile-banner.png'
import bannerMobile2 from '../assets/main-mobile-banner.png'
import bannerMobile3 from '../assets/main-mobile-banner.png'

import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'
import { useNavigate } from 'react-router-dom'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

const Home = () => {
  const loadingCategory = useSelector(state => state.product.loadingCategory)
  const categoryData = useSelector(state => state.product.allCategory)
  const subCategoryData = useSelector(state => state.product.allSubCategory)
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [navigate])

  const handleRedirectProductListpage = (id, cat) => {
    const subcategory = subCategoryData.find(sub => {
      const filterData = sub.category.some(c => c._id === id)
      return filterData ? true : null
    })

    const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`
    navigate(url)
  }

  const banners = [
    { desktop: banner1, mobile: bannerMobile1 },
    { desktop: banner2, mobile: bannerMobile2 },
    { desktop: banner3, mobile: bannerMobile3 },
  ]

  return (
    <section className="bg-white pb-8">
      {/* Banner Slider */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          effect='fade'
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          speed={2700}
          loop={true}
          className="w-full rounded overflow-hidden mySwiper"
        >
          {banners.map((b, index) => (
            <SwiperSlide key={index}>
              {/* Desktop banner */}
              <img
                src={b.desktop}
                alt={`desktop banner ${index}`}
                className="hidden lg:block w-full object-cover max-h-[500px]"
              />
              {/* Mobile banner */}
              <img
                src={b.mobile}
                alt={`mobile banner ${index}`}
                className="block lg:hidden w-full object-cover max-h-[300px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Category Grid */}
      <div className="container mx-auto px-4 my-4 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {loadingCategory ? (
          new Array(12).fill(null).map((_, index) => (
            <div
              key={index + "loadingcategory"}
              className="bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse"
            >
              <div className="bg-blue-100 min-h-24 rounded"></div>
              <div className="bg-blue-100 h-8 rounded"></div>
            </div>
          ))
        ) : (
          categoryData.map(cat => (
            <div
              key={cat._id + "displayCategory"}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => handleRedirectProductListpage(cat._id, cat.name)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm mt-1 font-medium">{cat.name}</p>
            </div>
          ))
        )}
      </div>

      {/* Category-wise product display */}
      {categoryData?.map(c => (
        <CategoryWiseProductDisplay
          key={c?._id + "CategorywiseProduct"}
          id={c?._id}
          name={c?.name}
        />
      ))}
    </section>
  )
}

export default Home
