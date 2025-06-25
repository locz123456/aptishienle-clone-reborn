import React from 'react';

const statisticsData = [
  {
    icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"></path></svg>
    ),
    number: "5000+",
    label: "Học viên"
  },
  {
    icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z" fill="currentColor"></path><path d="M17.5 10.5C18.38 10.5 19.23 10.59 20 10.76V9.24C19.21 9.09 18.36 9 17.5 9C15.8 9 14.26 9.29 13 9.83V11.49C14.13 10.85 15.7 10.5 17.5 10.5Z" fill="currentColor"></path><path d="M13 12.49V14.15C14.13 13.51 15.7 13.16 17.5 13.16C18.38 13.16 19.23 13.25 20 13.42V11.9C19.21 11.75 18.36 11.66 17.5 11.66C15.8 11.66 14.26 11.96 13 12.49Z" fill="currentColor"></path><path d="M17.5 14.33C15.8 14.33 14.26 14.63 13 15.16V16.82C14.13 16.18 15.7 15.83 17.5 15.83C18.38 15.83 19.23 15.92 20 16.09V14.57C19.21 14.41 18.36 14.33 17.5 14.33Z" fill="currentColor"></path></svg>
    ),
    number: "5+",
    label: "Khóa học"
  },
  {
    icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="currentColor"></path></svg>
    ),
    number: "3+",
    label: "Năm kinh nghiệm"
  },
  {
    icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" fill="currentColor"></path></svg>
    ),
    number: "90%",
    label: "Tỷ lệ thi đạt"
  }
];

const Statistics = () => {
  return (
    <div className="w-full bg-white py-8 bg-[url('https://3022.mevivu.net/wp-content/uploads/2024/12/nensach.png')] mt-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 px-4">
        {statisticsData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 min-w-[120px]">
            <div className="mb-2 text-black">{item.icon}</div>
            <div className="text-xl md:text-2xl font-bold text-[#1a2237] mb-1">{item.number}</div>
            <div className="text-gray-400 text-base md:text-lg font-semibold">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics; 