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
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-2">
              METZGEREI TOKIWA
            </h1>
            <h2 className="text-2xl md:text-3xl tracking-widest mt-4">
              メツゲライ・トキワ
            </h2>
          </div>
          <p className="text-lg md:text-xl tracking-widest font-light">
            伝統のドイツ式ハム・ソーセージ製法を守り続けて
          </p>
          <div className="mt-12">
            <a
              href="#menu"
              className="inline-block bg-red-800 text-white px-10 py-4 text-lg tracking-wider rounded hover:bg-red-700 transition duration-300 uppercase font-medium"
            >
              商品一覧を見る
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