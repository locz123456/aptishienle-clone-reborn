import React from 'react';

const Statistics = () => {
  return (
    <div id="statistics-section" className="bg-[url('https://3022.mevivu.net/wp-content/uploads/2024/12/nensach.png')] ">
      <div className="container mx-auto py-5 md:py-28 px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">VỀ APTIS PRO</h2>
          <p className="text-base md:text-[25px] leading-9 text-gray-700 mb-8">
            Tự hào là đơn vị luyện thi hàng đầu, Aptis Pro đã đồng hành cùng hơn 1.000+ học viên. Với phương pháp giảng
            dạy hiệu quả, sự tận tâm trong từng bài giảng, và cam kết đầu ra rõ ràng, Aptis Pro từng bước khẳng định vị thế và
            nhận được sự tin tưởng từ hàng ngàn học viên.
          </p>
          <button className="bg-main text-xl text-white font-bold py-3 px-14 rounded-full hover:bg-main transition duration-300">
            NHẬN LỘ TRÌNH
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://aptisone.vn/wp-content/uploads/2025/01/laptop.png"
            alt="Laptop with Aptis Pro Facebook page"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics; 