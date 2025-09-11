import React, { useEffect, useState } from 'react';

export default function VideoGallery() {
  const [visible, setVisible] = useState(false);

  const videos = [
    {
      url: "https://player.vimeo.com/video/639236696",
      title: "ROS2 Navigation Demo",
      description: "Advanced navigation techniques in ROS2"
    },
    {
      url: "https://www.youtube.com/embed/rtrGoGsMVlI",
      title: "SLAM Implementation",
      description: "Real-time mapping and localization"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 hover:scale-105 transition-transform duration-300 inline-block">
            Video Tutorials
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch our expert-led video tutorials to see ROS2 concepts in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 transform hover:-translate-y-2 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-slate-900 rounded-t-3xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                ></iframe>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:translate-x-2">
                    {video.title}
                  </h4>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {video.description}
                  </p>
                  
                  {/* Watch Now Button */}
                  <button className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center space-x-2">
                    <span>Watch Now</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="flex items-center space-x-2 relative z-10">
              <span>View All Videos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}