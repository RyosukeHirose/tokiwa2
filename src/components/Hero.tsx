import React from 'react';

export const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80"
          alt="和食料理"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif tracking-wider">
            匠 -TAKUMI-
          </h1>
          <p className="text-lg md:text-xl tracking-widest">
            伝統と革新が織りなす至高の一皿
          </p>
          <div className="mt-8">
            <a
              href="#menu"
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition duration-300"
            >
              お品書きを見る
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
};