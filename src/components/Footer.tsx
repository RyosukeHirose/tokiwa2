import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">匠 -TAKUMI-</h3>
            <p className="text-gray-400 text-sm">
              伝統的な和食の技法と現代的なエッセンスを融合させた、
              新しい食の体験をお届けします。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">営業時間</h4>
            <p className="text-gray-400 text-sm">
              ランチ 11:30〜14:30 (L.O.14:00)<br />
              ディナー 17:30〜22:00 (L.O.21:00)<br />
              定休日：毎週水曜日
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 text-sm">
              〒100-0001<br />
              東京都千代田区丸の内1-1-1<br />
              TEL: 03-1234-5678
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 匠 -TAKUMI- All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};