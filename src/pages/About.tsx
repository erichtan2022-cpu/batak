import { Target, Eye, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Users,
      title: 'Community First',
      batak: 'Martonggor marhitei',
      indo: 'Komunitas Pertama',
    },
    {
      icon: Award,
      title: 'Integrity',
      batak: 'Hasangapon',
      indo: 'Integritas',
    },
    {
      icon: Target,
      title: 'Impact',
      batak: 'Dampak',
      indo: 'Dampak',
    },
    {
      icon: Eye,
      title: 'Transparency',
      batak: 'Transparansi',
      indo: 'Transparansi',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('home.mission.text')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Batak community gathering - Tondi Ni Ianakhon foundation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF6F51] rounded-2xl opacity-20"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0D1A2A] mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.story.text')}</p>
                <p>
                  We work tirelessly to bridge gaps in education, healthcare, and economic opportunities while preserving the rich cultural heritage of the Batak people.
                </p>
                <p>
                  Through partnerships with local communities, government agencies, and international organizations, we create sustainable programs that empower individuals and strengthen communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0D1A2A] mb-4">
                {t('about.vision.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.vision.text')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#FF6F51]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#FF6F51]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0D1A2A] mb-4">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.mission.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1A2A] mb-4">
              {t('about.founders.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('about.founders.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Gustien Siagian', image: 'https://i.imgur.com/JprwCFw.png' },
              { name: 'Riama Silitonga', image: 'https://i.imgur.com/tUDch9X.png' },
              { name: 'Natalina Harianja', image: 'https://i.imgur.com/gATf5kO.png' },
              { name: 'Risma Tambunan', image: 'https://i.imgur.com/SJdJKvs.png' },
            ].map((founder, index) => (
              <div
                key={index}
                className="group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-square">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A2A]/90 via-[#0D1A2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {founder.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1A2A] mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6F51] to-[#FF5A3D] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1A2A] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.batak}</p>
                <p className="text-sm text-gray-600">{value.indo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#FF6F51] mb-2">10K+</div>
              <div className="text-lg text-gray-300">Lives Impacted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FF6F51] mb-2">50+</div>
              <div className="text-lg text-gray-300">Communities Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#FF6F51] mb-2">15+</div>
              <div className="text-lg text-gray-300">Years of Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
