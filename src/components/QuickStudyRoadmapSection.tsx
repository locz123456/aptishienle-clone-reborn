import React from 'react';

const QuickStudyRoadmapSection = () => {
  const roadmapCards = [
    {
      id: 1,
      title: 'LỘ TRÌNH B1 APTIS',
      duration: 'CHỈ 18H HỌC',
      image: 'https://aptisone.vn/wp-content/uploads/2024/12/z6224052145763_c305d3bd998a51513c305e1753f5c031.jpg',
      buttonText: 'CHINH PHỤC B1',
      features: [
        '9 buổi, mỗi buổi 120 phút',
        'Cam kết đầu ra đạt chuẩn B1 Aptis',
        'Bổ sung kiến thức & Nâng band điểm Nói - Viết trong thời gian ngắn',
        'Tặng miễn phí bộ giáo trình sát đề thi thật nhất',
      ],
    },
    {
      id: 2,
      title: 'LỘ TRÌNH B2 APTIS',
      duration: 'CHỈ 20H HỌC',
      image: 'https://aptisone.vn/wp-content/uploads/2024/12/z6224052145762_ecc677a3c4b034f38662ae7a1a53d755.jpg',
      buttonText: 'BỨT PHÁ B2',
      features: [
        '10 buổi, mỗi buổi 120 phút',
        'Cam kết đầu ra đạt chuẩn B2 Aptis',
        'Luyện 4 kỹ năng Nghe - Nói - Đọc - Viết cùng thầy cô band C Aptis',
        'Tặng miễn phí bộ giáo trình sát đề thi thật nhất',
      ],
    },
    {
      id: 3,
      title: 'LỘ TRÌNH C1 APTIS',
      duration: 'HỌC TOÀN DIỆN 1:1',
      image: 'https://aptisone.vn/wp-content/uploads/2024/12/z6224052129297_9bdf26ae7132a8de8a2033c8aa95952b.jpg',
      buttonText: 'MASTER C',
      features: [
        'Học 1:1 với giảng viên band C Aptis',
        'Lộ trình cá nhân hóa theo năng lực',
        'Thành thạo 4 kỹ năng với mẹo và chiến lược nâng band hiệu quả',
        'Tặng miễn phí bộ giáo trình sát đề thi thật nhất',
      ],
    },
  ];

  return (
    <div className="bg-[url('https://3022.mevivu.net/wp-content/uploads/2024/12/nensach.png')] flex flex-col items-center justify-center py-16">
      <img 
        src="https://aptisone.vn/wp-content/uploads/2024/12/aptisone_logo_small.png" 
        alt="Aptis Pro Logo" 
        className="w-24 h-24 mb-4"
      />
      <button className="bg-[#285325] text-white font-bold py-4 px-16 rounded-full text-2xl mb-4">
        LỘ TRÌNH HỌC APTIS CẤP TỐC
      </button>
      <p className="text-[#285325] text-lg font-bold">+ DÀNH CHO MỌI ĐỐI TƯỢNG +</p>
      <div className="flex flex-wrap justify-center gap-14 mt-12 mb-8">
        {roadmapCards.map((card) => (
          <div key={card.id} className=" rounded-lg w-96 overflow-hidden">
            <div className='mb-6'>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover rounded-lg border-[3px] border-[#285325]"
              />
            </div>
            <div className=" bg-white">
              <button className="bg-[#285325] text-white font-bold py-2 px-8 rounded-sm text-lg w-full mb-4">
                {card.buttonText}
              </button>
              <ul className='px-2 pb-2'>
                {card.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-4 text-xl">
                    <span className="mr-2">✅</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStudyRoadmapSection; 