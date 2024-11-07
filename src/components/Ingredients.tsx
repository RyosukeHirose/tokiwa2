import React, { useState, useEffect } from 'react';

const fadeStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export const Ingredients = () => {
  const [isPC, setIsPC] = useState(window.innerWidth >= 1024);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPC) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
      }, 6000);

      return () => clearInterval(timer);
    }
  }, [isPC]);

  const images = [
    {
      src: "https://for-bolt.s3.ap-northeast-1.amazonaws.com/tokiwa/sausage1.jpg",
      alt: "厳選された食材",
      label: "厳選された素材"
    },
    {
      src: "https://for-bolt.s3.ap-northeast-1.amazonaws.com/tokiwa/sausage2.jpg",
      alt: "職人の仕込み",
      label: "職人の仕込み"
    }
  ];

  const SPImageDisplay = () => (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <style>{fadeStyles}</style>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: currentImageIndex === index ? 1 : 0,
            animation: currentImageIndex === index 
              ? 'fadeIn 2s ease-in-out forwards'
              : 'fadeOut 2s ease-in-out forwards',
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 writing-vertical-rl h-[24rem]">
            <span className="text-white px-2 pt-24 pb-24 bg-gradient-to-b from-transparent from-6% via-amber-600 via-[63%] to-transparent to-[106%] text-lg font-label">
              {image.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-28 px-4 bg-stone-50 relative overflow-hidden h-[580px] md:h-[680px] lg:h-[580px]">
      <div className="absolute inset-0 opacity-30 bg-[url('https://for-bolt.s3.ap-northeast-1.amazonaws.com/background/background1.jpg')] bg-cover"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-6 md:space-y-8 text-center font-content order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">素材のこだわり</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                素材本来の美味しさが活きる製法で、
                質の良さにこだわり試行錯誤した結果、
                厳選された生産者からの最高級の食材のみを使用しています。
              </p>
              <p>
                毎日の仕入れは、店主自らの目利きで
                最高の状態の食材を選び抜いています。
              </p>
              <p>
                「本物のソーセージ」の美味しさを引き出すために、
                スパイスの選定にも妥協はありません。
              </p>
            </div>
          </div>

          {/* 画像レイアウト */}
          <div className="relative w-full order-2">
            {isPC ? (
              // PC表示用レイアウト
              <>
                <div className="absolute top-[60px] right-0 lg:right-40 w-[280px] md:w-[350px] xl:w-[400px] h-[220px] md:h-[220px] xl:h-[250px]">
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute left-4 md:left-8 top-[54%] -translate-y-1/2 writing-vertical-rl h-[20rem]">
                    <span className="text-white px-2 pt-16 pb-16 bg-gradient-to-b from-transparent from-[0%] via-amber-600 via-[50%] to-transparent to-[100%] text-lg md:text-[22px] xl:text-[25px] font-label">{images[0].label}</span>
                  </div>
                </div>
                <div className="absolute left-0 lg:left-40 -bottom-8 sm:-bottom-16 md:-bottom-20 w-[240px] md:w-[350px] xl:w-[400px] h-[220px] md:h-[220px] xl:h-[250px] z-10 translate-y-[-30%] sm:translate-y-0">
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute left-4 md:right-8 top-[54%] -translate-y-1/2 writing-vertical-rl h-[20rem]">
                    <span className="text-white px-2 pt-16 pb-24 bg-gradient-to-b from-transparent from-[0%] via-amber-600 via-[50%] to-transparent to-[100%] text-lg md:text-[22px] xl:text-[25px] font-label">{images[1].label}</span>
                  </div>
                </div>
              </>
            ) : (
              // SP表示用フェード切り替え
              <SPImageDisplay />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};