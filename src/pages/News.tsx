import { Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function News() {
  const { t } = useLanguage();

  const articles = [
    {
      title: 'New Education Center Opens in Samosir',
      date: 'December 10, 2024',
      category: 'Education',
      image: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=1200',
      excerpt: 'We are proud to announce the opening of our new education center in Samosir, providing learning opportunities for 200+ students.',
      featured: true,
    },
    {
      title: 'Annual Health Camp Serves 500 Families',
      date: 'November 28, 2024',
      category: 'Health',
      image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1200',
      excerpt: 'Our annual health camp provided free medical checkups, medicines, and health education to over 500 families across 15 villages.',
      featured: false,
    },
    {
      title: 'Cultural Heritage Festival 2024',
      date: 'November 15, 2024',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=1200',
      excerpt: 'The annual Batak Cultural Heritage Festival showcased traditional arts, music, and dance, attracting over 2,000 visitors.',
      featured: false,
    },
    {
      title: 'Scholarship Program Expands to 100 Students',
      date: 'October 20, 2024',
      category: 'Education',
      image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1200',
      excerpt: 'Thanks to generous donors, we have expanded our scholarship program to support 100 students this academic year.',
      featured: false,
    },
    {
      title: 'Clean Water Project Completed',
      date: 'October 5, 2024',
      category: 'Community Development',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
      excerpt: 'After 6 months of work, our clean water project now provides safe drinking water to 10 remote villages.',
      featured: false,
    },
    {
      title: 'Partnership with Local Universities',
      date: 'September 18, 2024',
      category: 'Partnership',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      excerpt: 'We have established partnerships with three local universities to provide internship and research opportunities.',
      featured: false,
    },
  ];

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  const categoryColors: Record<string, string> = {
    Education: 'bg-blue-100 text-blue-700',
    Health: 'bg-red-100 text-red-700',
    Culture: 'bg-purple-100 text-purple-700',
    'Community Development': 'bg-green-100 text-green-700',
    Partnership: 'bg-orange-100 text-orange-700',
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('news.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with our latest initiatives, events, and impact stories
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredArticle && (
            <div className="mb-16">
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-[4/3] lg:aspect-auto">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[featuredArticle.category]}`}>
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredArticle.date}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-[#0D1A2A] mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <button className="inline-flex items-center text-[#FF6F51] font-semibold hover:gap-2 transition-all">
                      Read More
                      <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1A2A] mb-3 group-hover:text-[#FF6F51] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-[#FF6F51] font-semibold text-sm hover:gap-1 inline-flex items-center transition-all">
                    Read More <span className="ml-1">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0D1A2A] mb-4">
            Want to stay updated?
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest news and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6F51] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#FF6F51] text-white rounded-lg font-semibold hover:bg-[#FF5A3D] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
