import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import TopHeader from '@/components/TopHeader';
import Statistics from '@/components/Statistics';
import PricingSection from '@/components/PricingSection';
import { pricingDataOne, pricingDataTwo, sectionTitleOne, sectionTitleTwo, testimonialData, tryWithUsData } from '@/const/const';
import TestimonialSection from '@/components/TestimonialSection';
import TryWithUsSection from '@/components/TryWithUsSection';
import ConsultationBanner from '@/components/ConsultationBanner';
const Index = () => {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <Header />
      <main className="bg-[url('https://3022.mevivu.net/wp-content/uploads/2024/12/nensach.png')]">  
        <HeroSection />
        <Statistics  />
        <PricingSection pricingData={pricingDataOne} sectionTitle={sectionTitleOne} />
        <PricingSection pricingData={pricingDataTwo} sectionTitle={sectionTitleTwo} />
        <TryWithUsSection sectionTitle={tryWithUsData.sectionTitle} description={tryWithUsData.description} videos={tryWithUsData.videos} />
        <TestimonialSection sectionTitle={testimonialData.sectionTitle} description={testimonialData.description} testimonials={testimonialData.testimonials} />
        <ConsultationBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
