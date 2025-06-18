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
const Index = () => {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <Header />
      <main>  
        <HeroSection />
        <Statistics  />
        {/* <QuickStudyRoadmapSection /> */}
        <PricingSection pricingData={pricingDataOne} sectionTitle={sectionTitleOne} />
        <PricingSection pricingData={pricingDataTwo} sectionTitle={sectionTitleTwo} />
        <TryWithUsSection sectionTitle={tryWithUsData.sectionTitle} description={tryWithUsData.description} videos={tryWithUsData.videos} />
        <TestimonialSection sectionTitle={testimonialData.sectionTitle} description={testimonialData.description} testimonials={testimonialData.testimonials} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
