import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  page: 'home' | 'about' | 'programs' | 'impact' | 'getinvolved' | 'news' | 'contact' | 'donate';
}

const seoData = {
  home: {
    ba: {
      title: 'Tondi Ni Ianakhon - Marsiaria Kemanusiaan tu Batak',
      description: 'Tondi Ni Ianakhon mardongan hasangapon ni halak Batak hurang mambahen parsahalan, marsipature, adat, dohot pangulu-ulu masyarakat.',
      keywords: 'Tondi Ni Ianakhon, bantuan Batak, dana kemanusiaan Batak, pendidikan Batak',
    },
    id: {
      title: 'Tondi Ni Ianakhon - Yayasan Bantuan Kemanusiaan untuk Batak',
      description: 'Tondi Ni Ianakhon berdedikasi untuk mendukung komunitas Batak melalui bantuan kemanusiaan, pendidikan, pelestarian budaya, dan pembangunan masyarakat.',
      keywords: 'yayasan Batak, bantuan kemanusiaan Batak, yayasan pendidikan Batak, Tondi Ni Ianakhon',
    },
    en: {
      title: 'Tondi Ni Ianakhon - Batak Humanitarian Foundation',
      description: 'Tondi Ni Ianakhon is dedicated to supporting Batak communities through humanitarian aid, education, cultural preservation, and sustainable community development.',
      keywords: 'Batak humanitarian foundation, Batak charity, Batak community support, Tondi Ni Ianakhon foundation',
    },
  },
  about: {
    ba: {
      title: 'Sian Tondi Ni Ianakhon - Tarombo dohot Misi Jita',
      description: 'Hamahami tarombo, visi, dohot misi ni Tondi Ni Ianakhon dohot hasangapon jita mambahen halak Batak.',
      keywords: 'tentang Tondi Ni Ianakhon, visi misi yayasan Batak, sejarah yayasan Batak',
    },
    id: {
      title: 'Tentang Tondi Ni Ianakhon - Kisah dan Misi Kami',
      description: 'Pelajari tentang sejarah, visi, dan misi Tondi Ni Ianakhon dan dedikasi kami untuk melayani komunitas Batak.',
      keywords: 'tentang Tondi Ni Ianakhon, visi misi yayasan Batak, sejarah yayasan Batak',
    },
    en: {
      title: 'About Tondi Ni Ianakhon - Our Story and Mission',
      description: 'Learn about the history, vision, and mission of Tondi Ni Ianakhon and our dedication to serving Batak communities.',
      keywords: 'about Tondi Ni Ianakhon, Batak foundation mission, Batak charity history',
    },
  },
  programs: {
    ba: {
      title: 'Program - Parsahalan, Marsipature, Pangulu-ulu',
      description: 'Hamahami program jita tu marsahalan, marsipature, dohot pangulu-ulu masyarakat Batak.',
      keywords: 'program pendidikan Batak, bantuan kesehatan Batak, pembangunan komunitas Batak',
    },
    id: {
      title: 'Program - Pendidikan, Kesehatan, Pembangunan Komunitas',
      description: 'Temukan program kami dalam pendidikan, kesehatan, dan pembangunan komunitas untuk masyarakat Batak.',
      keywords: 'program pendidikan Batak, bantuan kesehatan Batak, pembangunan komunitas Batak',
    },
    en: {
      title: 'Programs - Education, Health, Community Development',
      description: 'Discover our programs in education, healthcare, and community development for Batak communities.',
      keywords: 'Batak education programs, Batak health aid, Batak community development',
    },
  },
  impact: {
    ba: {
      title: 'Dampak Jita - Tading-tading Kemanusiaan',
      description: 'Tading-tading nyata ni dampak Tondi Ni Ianakhon humbani halak Batak.',
      keywords: 'dampak yayasan Batak, testimoni bantuan Batak, cerita sukses Batak',
    },
    id: {
      title: 'Dampak Kami - Cerita Nyata Kemanusiaan',
      description: 'Cerita nyata tentang dampak Tondi Ni Ianakhon dalam kehidupan masyarakat Batak.',
      keywords: 'dampak yayasan Batak, testimoni bantuan Batak, cerita sukses Batak',
    },
    en: {
      title: 'Our Impact - Real Stories of Change',
      description: 'Real stories about the impact of Tondi Ni Ianakhon in the lives of Batak communities.',
      keywords: 'Batak foundation impact, Batak charity testimonials, Batak success stories',
    },
  },
  getinvolved: {
    ba: {
      title: 'Marsidokkon - Volunteer, Donasi, Marsingkol',
      description: 'Marsidokkon dong hamu dohot Tondi Ni Ianakhon mambahen parobahon tu halak Batak.',
      keywords: 'relawan Batak, donasi Batak, mitra yayasan Batak',
    },
    id: {
      title: 'Terlibat - Relawan, Donasi, Mitra',
      description: 'Bergabunglah dengan Tondi Ni Ianakhon untuk membuat perbedaan dalam komunitas Batak.',
      keywords: 'relawan Batak, donasi Batak, mitra yayasan Batak',
    },
    en: {
      title: 'Get Involved - Volunteer, Fundraise, Partner',
      description: 'Join Tondi Ni Ianakhon in making a difference in Batak communities.',
      keywords: 'Batak volunteer, Batak fundraising, Batak foundation partnership',
    },
  },
  news: {
    ba: {
      title: 'Berita dohot Acara - Tondi Ni Ianakhon',
      description: 'Berita terahir, acara, dohot update ni Tondi Ni Ianakhon.',
      keywords: 'berita Tondi Ni Ianakhon, acara yayasan Batak, update kemanusiaan Batak',
    },
    id: {
      title: 'Berita dan Acara - Tondi Ni Ianakhon',
      description: 'Berita terbaru, acara, dan pembaruan dari Tondi Ni Ianakhon.',
      keywords: 'berita Tondi Ni Ianakhon, acara yayasan Batak, update kemanusiaan Batak',
    },
    en: {
      title: 'News and Events - Tondi Ni Ianakhon',
      description: 'Latest news, events, and updates from Tondi Ni Ianakhon.',
      keywords: 'Tondi Ni Ianakhon news, Batak foundation events, Batak charity updates',
    },
  },
  contact: {
    ba: {
      title: 'Hubungi Jita - Tondi Ni Ianakhon',
      description: 'Hubungi Tondi Ni Ianakhon tu marsahap sian program jita atawa marsidokkon.',
      keywords: 'kontak Tondi Ni Ianakhon, hubungi yayasan Batak, alamat Tondi Ni Ianakhon',
    },
    id: {
      title: 'Hubungi Kami - Tondi Ni Ianakhon',
      description: 'Hubungi Tondi Ni Ianakhon untuk informasi tentang program kami atau untuk terlibat.',
      keywords: 'kontak Tondi Ni Ianakhon, hubungi yayasan Batak, alamat Tondi Ni Ianakhon',
    },
    en: {
      title: 'Contact Us - Tondi Ni Ianakhon',
      description: 'Contact Tondi Ni Ianakhon to learn more about our programs or to get involved.',
      keywords: 'contact Tondi Ni Ianakhon, Batak foundation contact, Tondi Ni Ianakhon address',
    },
  },
  donate: {
    ba: {
      title: 'Marsitua - Mambahen Dampak tu Halak Batak',
      description: 'Rohammu mambahen parobahon na marharajaon tu halak Batak. Marsitua songon tu Tondi Ni Ianakhon.',
      keywords: 'donasi Batak, bantuan kemanusiaan Batak, sumbangan yayasan Batak',
    },
    id: {
      title: 'Donasi - Buat Dampak untuk Komunitas Batak',
      description: 'Bantuan Anda membuat perbedaan nyata bagi masyarakat Batak. Donasi sekarang ke Tondi Ni Ianakhon.',
      keywords: 'donasi Batak, bantuan kemanusiaan Batak, sumbangan yayasan Batak',
    },
    en: {
      title: 'Donate - Make an Impact for Batak Communities',
      description: 'Your support makes a real difference in Batak communities. Donate now to Tondi Ni Ianakhon.',
      keywords: 'donate to Batak, Batak humanitarian donation, Batak charity donation',
    },
  },
};

export default function SEO({ page }: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const data = seoData[page][language];
    document.title = data.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = data.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', data.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = data.keywords;
      document.head.appendChild(meta);
    }

    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle) {
      metaOgTitle.setAttribute('content', data.title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = data.title;
      document.head.appendChild(meta);
    }

    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (metaOgDescription) {
      metaOgDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = data.description;
      document.head.appendChild(meta);
    }
  }, [language, page]);

  return null;
}
