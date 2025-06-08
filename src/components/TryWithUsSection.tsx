import React from 'react';

interface VideoItem {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoId: string;
}

interface TryWithUsSectionProps {
  sectionTitle: string;
  description: string;
  videos: VideoItem[];
}

const TryWithUsSection: React.FC<TryWithUsSectionProps> = ({
  sectionTitle,
  description,
  videos
}) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="lg:px-[160px] mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[36px] font-bold text-center text-[#1B2A4E]">
            {sectionTitle}
          </h2>
          <div className="w-[100px] h-[5px] bg-[#1B2A4E] mt-4"></div>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transform">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B2A4E] mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryWithUsSection; 