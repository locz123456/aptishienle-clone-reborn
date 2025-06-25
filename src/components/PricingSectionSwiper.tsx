import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface PricingPlan {
  image: string;
  title: string;
  features: string[];
  price: string;
  sale?: string;
}

interface PricingSectionSwiperProps {
  pricingData: PricingPlan[];
  sectionTitle: string;
}

const PricingSectionSwiper: React.FC<PricingSectionSwiperProps> = ({ pricingData, sectionTitle }) => {
  return (
    <section className="py-10 w-full">
      <div className="lg:px-[160px] mx-auto px-4 w-full">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[36px] font-bold text-center text-[#1B2A4E]">
            {sectionTitle}
          </h2>
          <div className="w-[100px] h-[5px] bg-[#1e3364] mt-4"></div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#1B2A4E]' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }}
          className="pricing-swiper !pb-14"
        >
          {pricingData.map((plan, index) => (
            <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full flex flex-col">
              <div className="bg-[#1B2A4E] relative">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full object-cover hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6 bg-extra text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-bold mb-2">{plan.title}</h3>
                  <ul className="text-[14px] mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[13px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500 my-3">
                    <span>{plan.sale ? `${plan.sale}` : ''}</span>
                    <span className={`${plan.sale ? 'line-through text-xl text-gray-400 ml-3' : ''}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button type="primary" className="w-full bg-white text-[#1B2A4E] !hover:text-white font-semibold">
                      <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg' className="w-[20px] h-[20px]" /> Messenge
                    </Button>
                    <Button type="primary" className="w-full bg-white text-[#1B2A4E] !hover:text-white font-semibold">
                      <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg' className="w-[20px] h-[20px]" /> Zalo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingSectionSwiper; 