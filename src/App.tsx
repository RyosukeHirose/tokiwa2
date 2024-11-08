import React from 'react';
import { Menu, MapPin, Phone, Clock } from 'lucide-react';
import { Hero } from './components/Hero';
import { Ingredients } from './components/Ingredients';
import { Menu as MenuSection } from './components/Menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl tracking-wider">METZGEREI TOKIWA</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium uppercase tracking-wider">こだわり</a>
                <a href="#menu" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium uppercase tracking-wider">商品一覧</a>
                <a href="#access" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium uppercase tracking-wider">アクセス</a>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Ingredients Section */}
      <Ingredients />

      {/* Menu Section */}
      <MenuSection />

      {/* Access Section */}
      <section id="access" className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">住所</h3>
                  <p className="text-gray-600">〒501-3247 岐阜県関市池田町１２７</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">電話番号</h3>
                  <p className="text-gray-600">0575-23-0029</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">営業時間</h3>
                  <p className="text-gray-600">
                    営業時間は
                    <a 
                      href="https://www.instagram.com/metzgerei_tokiwa/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 mx-1"
                    >
                      Instagram
                    </a>
                    でご確認ください
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4880141903557!2d139.76454375!3d35.68124049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1635000000000!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;