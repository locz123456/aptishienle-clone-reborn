import { Input, Select } from 'antd';
import React from 'react';

const ConsultationBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center
    pt-4 pb-16 px-2 md:px-0">
      <div className="w-full md:w-[520px] flex-shrink-0 flex justify-center">
        <img
          src="/1.jpg"
          alt="Aptis Banner"
          className="rounded-xl shadow-lg w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-[520px] bg-white rounded-xl shadow-lg p-6 md:ml-8 mt-6 md:mt-0 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-main text-center">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h2>
        <p className="text-main text-sm font-semibold text-center mt-1 mb-4 italic">Nhận ngay ƯU ĐÃI</p>
        <div className="flex w-full justify-between mb-4">
          <div className="flex-1 text-center">
            <div className="bg-main text-white rounded-t-md py-2 text-3xl font-bold">0</div>
            <div className="bg-gray-100 rounded-b-md py-1 text-xs font-semibold">HOURS</div>
          </div>
          <div className="flex-1 text-center mx-1">
            <div className="bg-main text-white rounded-t-md py-2 text-3xl font-bold">0</div>
            <div className="bg-gray-100 rounded-b-md py-1 text-xs font-semibold">MIN</div>
          </div>
          <div className="flex-1 text-center">
            <div className="bg-main text-white rounded-t-md py-2 text-3xl font-bold">0</div>
            <div className="bg-gray-100 rounded-b-md py-1 text-xs font-semibold">SEC</div>
          </div>
        </div>
        <form className="w-full flex flex-col gap-3">
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