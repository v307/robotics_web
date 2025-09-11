import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  // Fetch blogs from Django API
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    
    axios
      .get("http://127.0.0.1:8000/api/blog/")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-slate-600">Loading amazing content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="text-2xl animate-pulse">✍️</span>
              <span className="text-slate-600 font-medium">Latest Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 hover:text-blue-600 transition-colors duration-500 cursor-default">
              Our Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto hover:text-slate-800 transition-colors duration-500">
              Discover the latest trends, tutorials, and insights in robotics development. 
              Stay ahead with expert knowledge and community stories.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden relative ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  {blog.image_url && (
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Floating tag */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                        {blog.category || "Robotics"}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
                      <span className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{blog.author || 'ROS2 Team'}</span>
                      </span>
                      <span className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-500 line-clamp-2 hover:translate-x-1 transform transition-transform">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-700 transition-colors duration-500">
                      {blog.content && blog.content.length > 0
                        ? blog.content.slice(0, 150) + "..."
                        : "Discover insights and practical knowledge in this comprehensive guide to robotics development."}
                    </p>

                    {/* Read More Button */}
                    <Link
                      to={`/blog/${blog.id}`}
                      className="group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
                    >
                      <span>Read Article</span>
                      <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 group-hover:opacity-50 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-ping"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </article>
              ))}
            </div>
          ) : (
            /* No Blogs State */
            <div className="text-center py-20">
              <div className="text-8xl mb-8 animate-bounce">📝</div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 hover:text-blue-600 transition-colors duration-500">
                Coming Soon!
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto hover:text-slate-800 transition-colors duration-500">
                We're working on amazing content for you. Check back soon for the latest 
                insights and tutorials in robotics development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tutorials"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
                >
                  Explore Tutorials
                </Link>
                <Link
                  to="/resources"
                  className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 hover:border-blue-200"
                >
                  Browse Resources
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}