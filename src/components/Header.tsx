import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.impact'), path: '/impact' },
    { name: t('nav.getinvolved'), path: '/get-involved' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'ba' as Language, label: 'BA' },
    { code: 'id' as Language, label: 'ID' },
    { code: 'en' as Language, label: 'EN' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#FF6F51] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              TNI
            </div>
            <span className="text-xl font-semibold text-[#0D1A2A]">
              {t('site.title')}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#FF6F51]'
                    : 'text-[#0D1A2A] hover:text-[#FF6F51]'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-[#0D1A2A] hover:text-[#FF6F51] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-[#FF6F51] text-white'
                          : 'text-[#0D1A2A] hover:bg-gray-50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/donate"
              className="px-6 py-2.5 bg-[#FF6F51] text-white rounded-lg font-medium hover:bg-[#FF5A3D] transition-all shadow-sm hover:shadow-md"
            >
              {t('nav.donate')}
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#0D1A2A]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(item.path)
                      ? 'text-[#FF6F51]'
                      : 'text-[#0D1A2A] hover:text-[#FF6F51]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-4 h-4 text-[#0D1A2A]" />
                  <span className="text-sm font-medium text-[#0D1A2A]">Language:</span>
                </div>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        language === lang.code
                          ? 'bg-[#FF6F51] text-white'
                          : 'bg-gray-100 text-[#0D1A2A] hover:bg-gray-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2.5 bg-[#FF6F51] text-white rounded-lg font-medium hover:bg-[#FF5A3D] transition-all text-center mt-2"
              >
                {t('nav.donate')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
