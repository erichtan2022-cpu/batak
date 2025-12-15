import { Users, DollarSign, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function GetInvolved() {
  const { t } = useLanguage();

  const ways = [
    {
      icon: Users,
      title: t('getinvolved.volunteer.title'),
      description: t('getinvolved.volunteer.desc'),
      image: 'https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'blue',
      benefits: [
        'Make a direct impact in communities',
        'Develop new skills and experience',
        'Connect with like-minded individuals',
        'Preserve Batak culture and heritage',
      ],
    },
    {
      icon: DollarSign,
      title: t('getinvolved.fundraise.title'),
      description: t('getinvolved.fundraise.desc'),
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'orange',
      benefits: [
        'Start your own fundraising campaign',
        'Rally your community for a cause',
        'Track your impact in real-time',
        'Receive fundraising support and materials',
      ],
    },
    {
      icon: Handshake,
      title: t('getinvolved.partner.title'),
      description: t('getinvolved.partner.desc'),
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'green',
      benefits: [
        'Corporate social responsibility programs',
        'Employee engagement opportunities',
        'Collaborative project development',
        'Long-term sustainable partnerships',
      ],
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('getinvolved.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join us in making a lasting difference in Batak communities. There are many ways you can contribute to our mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {ways.map((way, index) => (
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
                        src={way.image}
                        alt={way.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`w-16 h-16 ${colorClasses[way.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}>
                    <way.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0D1A2A] mb-4">
                    {way.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {way.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {way.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#FF6F51] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-[#FF6F51] text-white rounded-lg font-semibold hover:bg-[#FF5A3D] transition-all shadow-sm hover:shadow-md"
                  >
                    Learn More
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
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your support can transform lives and strengthen communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0D1A2A] text-white rounded-lg font-semibold hover:bg-[#1a2b3f] transition-all shadow-lg hover:shadow-xl"
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 bg-[#FF6F51] text-white rounded-lg font-semibold hover:bg-[#FF5A3D] transition-all shadow-lg hover:shadow-xl"
            >
              {t('nav.donate')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
