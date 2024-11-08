import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold tracking-wider mb-1">METZGEREI TOKIWA</h3>
            <h4 className="text-lg tracking-wider mb-4">メツゲライ・トキワ</h4>
            <p className="text-gray-400 text-sm">
              伝統のドイツ式ハム・ソーセージ製法を守り続け、<br />
              確かな品質をお届けします。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">営業時間</h4>
            <p className="text-gray-400 text-sm">
              営業時間は
              <a 
                href="https://www.instagram.com/metzgerei_tokiwa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Instagram
              </a>
              でご確認ください
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 text-sm">
              〒501-3247<br />
              岐阜県関市池田町１２７<br />
              TEL: 0575-23-0029
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm tracking-wider">
            © 2024 METZGEREI TOKIWA All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};