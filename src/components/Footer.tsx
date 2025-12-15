import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.impact'), path: '/impact' },
    { name: t('nav.getinvolved'), path: '/get-involved' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-[#0D1A2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#FF6F51] rounded-lg flex items-center justify-center text-white font-bold">
                TNI
              </div>
              <span className="text-lg font-semibold">{t('site.title')}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('home.mission.text')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#FF6F51] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FF6F51]" />
                <span>North Sumatra, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#FF6F51]" />
                <a href="mailto:info@tondiniianakhon.org" className="hover:text-[#FF6F51] transition-colors">
                  info@tondiniianakhon.org
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#FF6F51]" />
                <span>+62 xxx xxxx xxxx</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followus')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6F51] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6F51] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6">
              <Link
                to="/donate"
                className="inline-block px-6 py-2.5 bg-[#FF6F51] text-white rounded-lg font-medium hover:bg-[#FF5A3D] transition-all"
              >
                {t('nav.donate')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
