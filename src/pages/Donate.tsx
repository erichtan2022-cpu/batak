import { useState } from 'react';
import { Heart, Check, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Donate() {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const amounts = [50000, 100000, 250000, 500000, 1000000];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const impactExamples = [
    {
      amount: 50000,
      impact: 'Provides school supplies for 1 student',
      icon: '📚',
    },
    {
      amount: 100000,
      impact: 'Supplies medicine for a family',
      icon: '💊',
    },
    {
      amount: 250000,
      impact: 'Funds a health checkup camp',
      icon: '🏥',
    },
    {
      amount: 500000,
      impact: 'Sponsors a student for 1 semester',
      icon: '🎓',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#0D1A2A] to-[#1a2b3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('donate.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('donate.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex space-x-4 mb-8">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                      donationType === 'one-time'
                        ? 'bg-[#FF6F51] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                      donationType === 'monthly'
                        ? 'bg-[#FF6F51] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#0D1A2A] mb-4">
                    Select Amount
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                          selectedAmount === amount
                            ? 'border-[#FF6F51] bg-[#FF6F51]/5 text-[#FF6F51]'
                            : 'border-gray-200 text-gray-700 hover:border-[#FF6F51]/50'
                        }`}
                      >
                        {formatCurrency(amount)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      IDR
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount"
                      className="w-full pl-16 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6F51] focus:border-transparent"
                    />
                  </div>
                </div>

                <button className="w-full py-4 bg-[#FF6F51] text-white rounded-lg font-semibold hover:bg-[#FF5A3D] transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Continue to Payment</span>
                </button>

                <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-[#FF6F51]" />
                    <span>Secure Payment</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Check className="w-4 h-4 text-[#FF6F51]" />
                    <span>Tax Deductible</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-[#0D1A2A] mb-6">
                  Your Impact
                </h3>

                <div className="space-y-4 mb-8">
                  {impactExamples.map((example, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{example.icon}</span>
                        <div>
                          <div className="font-semibold text-[#FF6F51] mb-1">
                            {formatCurrency(example.amount)}
                          </div>
                          <div className="text-sm text-gray-600">
                            {example.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-br from-[#FF6F51] to-[#FF5A3D] rounded-xl text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-8 h-8" />
                    <div>
                      <div className="text-2xl font-bold">5,000+</div>
                      <div className="text-sm opacity-90">Donors Trust Us</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Join thousands of donors who are making a difference in Batak communities every day.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Tax Information:</strong> Your donation is tax-deductible in Indonesia. A receipt will be sent to your email for tax purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1A2A] mb-4">
              Other Ways to Give
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D1A2A] mb-3">Bank Transfer</h3>
              <p className="text-gray-600 mb-4">
                Direct bank transfer to our account
              </p>
              <p className="text-sm text-gray-500">
                Bank: BNI<br />
                Account: 1234567890<br />
                Name: Tondi Ni Ianakhon
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D1A2A] mb-3">Mobile Payment</h3>
              <p className="text-gray-600 mb-4">
                Use GoPay, OVO, or DANA
              </p>
              <p className="text-sm text-gray-500">
                Scan QR code or send to:<br />
                +62 xxx xxxx xxxx
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D1A2A] mb-3">In-Kind Donations</h3>
              <p className="text-gray-600 mb-4">
                Donate goods and supplies
              </p>
              <p className="text-sm text-gray-500">
                Contact us to arrange<br />
                in-kind contributions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
