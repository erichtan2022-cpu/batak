import { BookOpen, Heart, Users, GraduationCap, Stethoscope, Home, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: BookOpen,
      title: t('program.education.title'),
      description: t('program.education.desc'),
      image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: [
        { icon: GraduationCap, text: 'Scholarship programs for students' },
        { icon: BookOpen, text: 'School supply distribution' },
        { icon: Users, text: 'Teacher training programs' },
      ],
      color: 'blue',
    },
    {
      icon: Heart,
      title: t('program.health.title'),
      description: t('program.health.desc'),
      image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: [
        { icon: Stethoscope, text: 'Free health checkups' },
        { icon: Heart, text: 'Medicine distribution' },
        { icon: Users, text: 'Health education workshops' },
      ],
      color: 'red',
    },
    {
      icon: Users,
      title: t('program.community.title'),
      description: t('program.community.desc'),
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: [
        { icon: Home, text: 'Infrastructure development' },
        { icon: Users, text: 'Skills training programs' },
        { icon: CheckCircle, text: 'Microfinance support' },
      ],
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      border: 'border-red-200',
      gradient: 'from-red-500 to-red-600',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      gradient: 'from-green-500 to-green-600',
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('home.programs.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive programs designed to empower Batak communities through education, healthcare, and sustainable development
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={program.image}
                        alt={`${program.title} - Tondi Ni Ianakhon`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-32 h-32 bg-gradient-to-br ${colorClasses[program.color as keyof typeof colorClasses].gradient} rounded-2xl opacity-20`}></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`w-16 h-16 ${colorClasses[program.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center mb-6`}>
                    <program.icon className={`w-8 h-8 ${colorClasses[program.color as keyof typeof colorClasses].text}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0D1A2A] mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${colorClasses[program.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className={`w-5 h-5 ${colorClasses[program.color as keyof typeof colorClasses].text}`} />
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/donate"
                    className="inline-block px-6 py-3 bg-[#FF6F51] text-white rounded-lg font-semibold hover:bg-[#FF5A3D] transition-all shadow-sm hover:shadow-md"
                  >
                    {t('cta.donate')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0D1A2A] mb-6">
            Want to learn more about our programs?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discover how you can support our mission
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#0D1A2A] text-white rounded-lg font-semibold hover:bg-[#1a2b3f] transition-all shadow-lg hover:shadow-xl"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
}
