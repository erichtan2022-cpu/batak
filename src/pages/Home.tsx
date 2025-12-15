import { Link } from 'react-router-dom';
import { Heart, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: BookOpen,
      title: t('program.education.title'),
      description: t('program.education.desc'),
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Heart,
      title: t('program.health.title'),
      description: t('program.health.desc'),
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Users,
      title: t('program.community.title'),
      description: t('program.community.desc'),
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0D1A2A] via-[#1a2b3f] to-[#0D1A2A] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6F51] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t('hero.headline')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                {t('hero.subheadline')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate"
                  className="px-8 py-4 bg-[#FF6F51] text-white rounded-lg font-semibold hover:bg-[#FF5A3D] transition-all shadow-lg hover:shadow-xl text-center"
                >
                  {t('cta.donate')}
                </Link>
                <Link
                  to="/get-involved"
                  className="px-8 py-4 bg-white text-[#0D1A2A] rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  {t('cta.join')}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Batak community support - Tondi Ni Ianakhon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF6F51] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0D1A2A]">10,000+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1A2A] mb-4">
              {t('home.mission.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('home.mission.text')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1A2A] mb-4">
              {t('home.programs.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#0D1A2A] mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center text-[#FF6F51] font-semibold hover:gap-2 transition-all group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FF6F51]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('donate.subtitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in making a difference in Batak communities
          </p>
          <Link
            to="/donate"
            className="inline-block px-8 py-4 bg-white text-[#FF6F51] rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            {t('cta.donate')}
          </Link>
        </div>
      </section>
    </div>
  );
}
