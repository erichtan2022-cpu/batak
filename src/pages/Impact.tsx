import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Impact() {
  const { t } = useLanguage();

  const stories = [
    {
      name: 'Maria Sitompul',
      role: 'Scholarship Recipient',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        ba: 'Tondi Ni Ianakhon mambere ahu hasangapon tu mambahen marsahalan. Dung in ahu boi marsekolah di universitas.',
        id: 'Tondi Ni Ianakhon memberikan saya kesempatan untuk melanjutkan pendidikan. Sekarang saya bisa kuliah di universitas.',
        en: 'Tondi Ni Ianakhon gave me the opportunity to continue my education. Now I can study at university.',
      },
    },
    {
      name: 'Johannes Simbolon',
      role: 'Community Leader',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        ba: 'Program pangulu-ulu ni Tondi Ni Ianakhon mambahen kampong jita martonggor. Jadi na marharajaon infrastruktur dohot ekonomi.',
        id: 'Program pembangunan komunitas dari Tondi Ni Ianakhon membuat kampung kami berkembang. Infrastruktur dan ekonomi menjadi lebih baik.',
        en: 'The community development program from Tondi Ni Ianakhon helped our village thrive. Infrastructure and economy improved significantly.',
      },
    },
    {
      name: 'Ruth Sinaga',
      role: 'Health Program Beneficiary',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: {
        ba: 'Pelayanan marsipature ni Tondi Ni Ianakhon marloju mambahen keluarga jita. Gratis obat dohot pemeriksaan.',
        id: 'Layanan kesehatan dari Tondi Ni Ianakhon sangat membantu keluarga saya. Gratis obat dan pemeriksaan.',
        en: 'Healthcare services from Tondi Ni Ianakhon greatly helped my family. Free medicine and health checkups.',
      },
    },
  ];

  const impactNumbers = [
    { number: '10,000+', label: { ba: 'Jolma na Ditolong', id: 'Orang Dibantu', en: 'Lives Impacted' } },
    { number: '500+', label: { ba: 'Beasiswa Dibere', id: 'Beasiswa Diberikan', en: 'Scholarships Awarded' } },
    { number: '50+', label: { ba: 'Kampong Dilayani', id: 'Desa Dilayani', en: 'Villages Served' } },
    { number: '100+', label: { ba: 'Acara Kesehatan', id: 'Acara Kesehatan', en: 'Health Events' } },
  ];

  const successStories = [
    {
      title: 'Building a School in Humbang',
      image: 'https://images.pexels.com/photos/8422178/pexels-photo-8422178.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'With community support, we built a new school serving 300 students in rural Humbang area.',
      date: '2023',
    },
    {
      title: 'Health Clinic Established',
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Our mobile health clinic now reaches 20 remote villages providing essential medical care.',
      date: '2023',
    },
    {
      title: 'Cultural Preservation Initiative',
      image: 'https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Launched programs to preserve Batak traditional arts and cultural practices for future generations.',
      date: '2024',
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('impact.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('impact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {impactNumbers.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#FF6F51] mb-2">
                  {item.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {item.label[language]}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-[#FF6F51] opacity-20" />
                <div className="grid lg:grid-cols-[200px,1fr] gap-8 items-center relative z-10">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4 shadow-lg">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-[#0D1A2A] text-lg mb-1">
                      {story.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                  </div>
                  <div>
                    <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                      "{story.quote[language]}"
                    </blockquote>
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
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Recent achievements in our mission to serve Batak communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#FF6F51] font-semibold mb-2">
                    {story.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1A2A] mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
