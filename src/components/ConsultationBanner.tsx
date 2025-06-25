import { Input, Select } from 'antd';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  { src: 'https://i.postimg.cc/Nfxwx6qz/university.jpg', alt: 'university' },
  { src: 'https://i.postimg.cc/MH7JNRcX/master.jpg.jpg', alt: 'master' },
  { src: 'https://i.postimg.cc/nVDFq9hy/doctor.jpg/b2.jpg', alt: 'doctor' },
  { src: 'https://i.postimg.cc/15SQ6WTF/recruitment.jpg', alt: 'recruitment' },
  { src: 'https://i.postimg.cc/bwNfVZqN/student.jpg', alt: 'student' },
];

const ConsultationBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center
    pt-4 pb-16 px-2 md:px-0">
      <div className="w-full md:w-[520px] flex-shrink-0 flex justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full rounded-xl shadow-lg"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img.src} alt={img.alt} className="rounded-xl w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full md:w-[520px] bg-white rounded-xl shadow-lg p-6 md:ml-8 mt-6 md:mt-0 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-main text-center mt-6">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h2>
        <p className="text-main text-sm font-semibold text-center mt-1 mb-8 italic">Nhận ngay ƯU ĐÃI</p>
        <form className="w-full flex flex-col gap-5">
          <Input placeholder="Tên của bạn" size='large' className="border rounded px-3 py-2 focus:outline-none"/>
          <Input placeholder="Số điện thoại" size='large' className="border rounded px-3 py-2 focus:outline-none"/>
          <Input placeholder="Email" size='large' className="border rounded px-3 py-2 focus:outline-none"/>
          <Select
            placeholder="Em đang quan tâm đến khóa học nào?"
            style={{ height: 40, fontSize: 16 }}
            size='large'
          >
            <Select.Option value="Aptis A1">Aptis A1</Select.Option>
            <Select.Option value="Aptis B1">Aptis B1</Select.Option>
            <Select.Option value="Aptis C1">Aptis C1</Select.Option>
            <Select.Option value="Khóa khác">Khóa khác</Select.Option>
          </Select>
          <Input placeholder="Khung giờ bạn có thể tư vấn" size='large' className="border rounded px-3 py-2 focus:outline-none"/>
          <button type="submit" className="bg-main text-white font-semibold rounded py-2 mt-2 hover:bg-extra transition">ĐĂNG KÝ NGAY</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationBanner;