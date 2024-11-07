import React from 'react';

export const Menu = () => {
  const menuItems = [
    {
      name: "季節の八寸",
      subText: "匠の技が光る前菜の盛り合わせ",
      price: "3,800",
      image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "お造り五種盛り",
      subText: "築地直送の新鮮な海の幸",
      price: "4,200",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "黒毛和牛の炭火焼",
      subText: "A5ランク 特製わさび醤油添え",
      price: "6,800",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "季節の土鍋御飯",
      subText: "季節の食材と共に炊き上げる",
      price: "2,800",
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "天ぷら盛り合わせ",
      subText: "旬の素材を香り高く",
      price: "4,500",
      image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      name: "デザート",
      subText: "和の素材を活かした一品",
      price: "1,800",
      image: "https://images.unsplash.com/photo-1617026061250-62b474264442?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-stone-50 relative">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">お品書き</h2>
          <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">四季折々の味わいをご堪能ください</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="group space-y-2"
            >
              {/* 画像コンテナ */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* PC表示時のオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:block hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{item.subText}</p>
                    <p className="text-amber-400 font-semibold">
                      ¥{item.price}
                      <span className="text-xs text-gray-300 ml-1">(税込)</span>
                    </p>
                  </div>
                </div>
                {/* 装飾的な要素 */}
                <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* モバイル・タブレット表示時のテキスト */}
              <div className="lg:hidden space-y-0.5 px-0.5">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-600">{item.subText}</p>
                <p className="text-amber-600 font-semibold text-sm">
                  ¥{item.price}
                  <span className="text-xs text-gray-500 ml-1">(税込)</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block px-8 py-3 border-2 border-amber-600 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 cursor-pointer">
            コース料理のご案内
          </div>
          <p className="mt-8 text-xs text-gray-500">
            ※季節や仕入れ状況により、内容が変更になる場合がございます。
          </p>
        </div>
      </div>
    </section>
  );
};