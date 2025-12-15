import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ba' | 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, Record<Language, string>> = {
  'site.title': {
    ba: 'Tondi Ni Ianakhon',
    id: 'Tondi Ni Ianakhon',
    en: 'Tondi Ni Ianakhon',
  },
  'nav.home': {
    ba: 'Tangkaman',
    id: 'Beranda',
    en: 'Home',
  },
  'nav.about': {
    ba: 'Sian Kami',
    id: 'Tentang Kami',
    en: 'About Us',
  },
  'nav.programs': {
    ba: 'Program',
    id: 'Program',
    en: 'Programs',
  },
  'nav.impact': {
    ba: 'Dampak',
    id: 'Dampak',
    en: 'Impact',
  },
  'nav.getinvolved': {
    ba: 'Marsidokkon',
    id: 'Terlibat',
    en: 'Get Involved',
  },
  'nav.news': {
    ba: 'Berita',
    id: 'Berita',
    en: 'News',
  },
  'nav.contact': {
    ba: 'Hubungi',
    id: 'Kontak',
    en: 'Contact',
  },
  'nav.donate': {
    ba: 'Marsitua',
    id: 'Donasi',
    en: 'Donate',
  },
  'hero.headline': {
    ba: 'Marsitua tu Marsipature, Marsihut tu Marsitanghon',
    id: 'Kemanusiaan untuk Semua, Amanah untuk Batak',
    en: 'Humanity for All, Dedicated to the Batak People',
  },
  'hero.subheadline': {
    ba: 'Martonggor marsirayapan humbani na marharajaon do patunduhon ni Tondi Ni Ianakhon: marsipature humbani parsahalan, marsitanghon tu halak Batak',
    id: 'Bersama membangun masa depan yang lebih baik melalui pendidikan, kesehatan, dan pemberdayaan masyarakat Batak',
    en: 'Building a brighter future through education, healthcare, and empowerment for Batak communities',
  },
  'cta.donate': {
    ba: 'Marsitua Songon',
    id: 'Donasi Sekarang',
    en: 'Donate Now',
  },
  'cta.join': {
    ba: 'Bergabung',
    id: 'Bergabung',
    en: 'Join Us',
  },
  'home.mission.title': {
    ba: 'Misi Jita',
    id: 'Misi Kami',
    en: 'Our Mission',
  },
  'home.mission.text': {
    ba: 'Tondi Ni Ianakhon mardongan hasangapon ni halak Batak hurang mambahen parsahalan, marsipature, adat, dohot pangulu-ulu masyarakat na martonggor.',
    id: 'Tondi Ni Ianakhon berdedikasi untuk mendukung komunitas Batak melalui bantuan kemanusiaan, pendidikan, pelestarian budaya, dan pembangunan masyarakat yang berkelanjutan.',
    en: 'Tondi Ni Ianakhon is dedicated to supporting Batak communities through humanitarian aid, education, cultural preservation, and sustainable community development.',
  },
  'home.programs.title': {
    ba: 'Program Jita',
    id: 'Program Kami',
    en: 'Our Programs',
  },
  'program.education.title': {
    ba: 'Parsahalan',
    id: 'Pendidikan',
    en: 'Education',
  },
  'program.education.desc': {
    ba: 'Mambahen beasiswa dohot sahalaan belajar tu na maranak-anak Batak',
    id: 'Memberikan beasiswa dan dukungan pendidikan untuk anak-anak Batak',
    en: 'Providing scholarships and educational support for Batak children',
  },
  'program.health.title': {
    ba: 'Marsipature',
    id: 'Kesehatan',
    en: 'Health Aid',
  },
  'program.health.desc': {
    ba: 'Pelayanan martonggor-tonggor humbani obat dohot sahalaan pangkarehahon',
    id: 'Layanan kesehatan dasar dan bantuan medis untuk komunitas',
    en: 'Basic healthcare services and medical assistance for communities',
  },
  'program.community.title': {
    ba: 'Pangulu-ulu',
    id: 'Pembangunan Komunitas',
    en: 'Community Development',
  },
  'program.community.desc': {
    ba: 'Mambangun infrastruktur dohot mambahen sahalaan ekonomi',
    id: 'Membangun infrastruktur dan memberikan dukungan ekonomi',
    en: 'Building infrastructure and providing economic support',
  },
  'about.title': {
    ba: 'Sian Tondi Ni Ianakhon',
    id: 'Tentang Tondi Ni Ianakhon',
    en: 'About Tondi Ni Ianakhon',
  },
  'about.story.title': {
    ba: 'Tarombo Jita',
    id: 'Kisah Kami',
    en: 'Our Story',
  },
  'about.story.text': {
    ba: 'Tondi Ni Ianakhon dibuat sian hasangapon mardongan marsipature tu halak Batak. Sian taon ni hubani, jolma-jolma na marsirayapan humbani marsipangihuthon tolu ni harajaon barita dohot adat Batak.',
    id: 'Tondi Ni Ianakhon didirikan dengan semangat untuk membantu komunitas Batak. Sejak awal, kami percaya pada kekuatan pendidikan, kesehatan, dan pelestarian budaya Batak.',
    en: 'Tondi Ni Ianakhon was founded with a spirit of service to Batak communities. From the beginning, we believed in the power of education, healthcare, and cultural preservation.',
  },
  'about.vision.title': {
    ba: 'Visi',
    id: 'Visi',
    en: 'Vision',
  },
  'about.vision.text': {
    ba: 'Marharajaon na mandok humbani halak Batak na martonggor dohot marsipangihuthon',
    id: 'Masa depan yang cerah bagi komunitas Batak yang berdaya dan bermartabat',
    en: 'A brighter future for empowered and dignified Batak communities',
  },
  'about.mission.title': {
    ba: 'Misi',
    id: 'Misi',
    en: 'Mission',
  },
  'about.mission.text': {
    ba: 'Mambahen sahalaan martonggor tu parsahalan, marsipature, adat, dohot pangulu-ulu masyarakat',
    id: 'Memberikan dukungan berkelanjutan dalam pendidikan, kesehatan, budaya, dan pembangunan masyarakat',
    en: 'Providing sustainable support in education, healthcare, culture, and community development',
  },
  'about.values.title': {
    ba: 'Nilai Jita',
    id: 'Nilai Kami',
    en: 'Our Values',
  },
  'impact.title': {
    ba: 'Dampak Jita',
    id: 'Dampak Kami',
    en: 'Our Impact',
  },
  'impact.subtitle': {
    ba: 'Tading-tading na hudok humbani halak na sada jita tu dongan',
    id: 'Cerita nyata dari mereka yang kami bantu',
    en: 'Real stories from those we serve',
  },
  'getinvolved.title': {
    ba: 'Marsidokkon Dong Hamu',
    id: 'Mari Terlibat',
    en: 'Get Involved',
  },
  'getinvolved.volunteer.title': {
    ba: 'Marsidokkon',
    id: 'Relawan',
    en: 'Volunteer',
  },
  'getinvolved.volunteer.desc': {
    ba: 'Bergabung marhitei halak na marharajaon',
    id: 'Bergabung sebagai relawan untuk membantu komunitas',
    en: 'Join as a volunteer to help communities',
  },
  'getinvolved.fundraise.title': {
    ba: 'Mardalan Donasi',
    id: 'Penggalangan Dana',
    en: 'Fundraise',
  },
  'getinvolved.fundraise.desc': {
    ba: 'Mamulahkon penggalangan dana tu program jita',
    id: 'Mulai penggalangan dana untuk program kami',
    en: 'Start a fundraiser for our programs',
  },
  'getinvolved.partner.title': {
    ba: 'Marsingkol',
    id: 'Mitra',
    en: 'Partnership',
  },
  'getinvolved.partner.desc': {
    ba: 'Marsingkol dong hamu humbani martonggor',
    id: 'Bermitra dengan kami untuk dampak berkelanjutan',
    en: 'Partner with us for sustainable impact',
  },
  'news.title': {
    ba: 'Berita dohot Acara',
    id: 'Berita dan Acara',
    en: 'News and Events',
  },
  'contact.title': {
    ba: 'Hubungi Jita',
    id: 'Hubungi Kami',
    en: 'Contact Us',
  },
  'contact.form.name': {
    ba: 'Goar',
    id: 'Nama',
    en: 'Name',
  },
  'contact.form.email': {
    ba: 'Email',
    id: 'Email',
    en: 'Email',
  },
  'contact.form.message': {
    ba: 'Marsahap',
    id: 'Pesan',
    en: 'Message',
  },
  'contact.form.submit': {
    ba: 'Sangap',
    id: 'Kirim',
    en: 'Submit',
  },
  'donate.title': {
    ba: 'Marsitua',
    id: 'Donasi',
    en: 'Donate',
  },
  'donate.subtitle': {
    ba: 'Rohammu mambahen parobahon na marharajaon',
    id: 'Bantuan Anda membuat perbedaan nyata',
    en: 'Your support makes a real difference',
  },
  'footer.quicklinks': {
    ba: 'Link Cepat',
    id: 'Tautan Cepat',
    en: 'Quick Links',
  },
  'footer.followus': {
    ba: 'Ikuti Jita',
    id: 'Ikuti Kami',
    en: 'Follow Us',
  },
  'footer.copyright': {
    ba: '© 2024 Tondi Ni Ianakhon. Sude hak dilindungi.',
    id: '© 2024 Tondi Ni Ianakhon. Semua hak dilindungi.',
    en: '© 2024 Tondi Ni Ianakhon. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ba');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
