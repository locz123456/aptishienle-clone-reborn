import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialItem {
  id: number;
  image: string;
}

interface TestimonialSectionProps {
  sectionTitle: string;
  description: string;
  testimonials: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  sectionTitle,
  description,
  testimonials
}) => {
  return (
    <section className="py-20">
      <div className="lg:px-[160px] mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[36px] font-bold text-center text-[#1B2A4E]">
            {sectionTitle}
          </h2>
          <div className="w-[100px] h-[5px] bg-[#1B2A4E] mt-4"></div>
        </div>

        <p className="text-center text-[18px] font-semibold text-gray-600 max-w-3xl mx-auto mb-12">
          {description}
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#1B2A4E]',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          className="testimonial-swiper !pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-10">
                <div className="relative w-full aspect-[4/3] mb-4 rounded-[20px] shadow-lg border-2">
                  <img
                    src={item.image}
                    alt={`Testimonial ${item.id}`}
                    className="object-cover rounded-[20px] w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection; 