import React from 'react';
import { Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface PricingPlan {
  image: string;
  title: string;
  features: string[];
  price: string;
  sale?: string;
}

interface PricingSectionProps {
  pricingData: PricingPlan[];
  sectionTitle: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ pricingData, sectionTitle }) => {
  return (
    <section className="py-10 w-full">
      <div className="lg:px-[160px] mx-auto px-4  w-full">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[36px] font-bold text-center text-[#1B2A4E]">
            {sectionTitle}
          </h2>
          <div className="w-[100px] h-[5px] bg-[#1e3364] mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-extra">
              <div className="bg-[#1B2A4E] relative">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full object-fill hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-6 bg-extra text-white">
                <h3 className="text-[20px] font-bold mb-2">{plan.title}</h3>
                <ul className="text-[14px]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.trim().startsWith('✔️') && (
                        <CheckOutlined className="text-green-500 mr-1 mt-1" />
                      )}
                      {feature.trim().startsWith('✖️') && (
                        <CloseOutlined className="text-red-500 mr-1 mt-1" />
                      )}
                      <span className="mr-2">{feature.slice(1)}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-orange-500 my-3">
                  <span className="">{plan.sale ? `${plan.sale}` : ''} </span>
                  <span className={`${plan.sale ? ' line-through text-xl text-gray-400 ml-3' : ''}`}>{plan.price}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 