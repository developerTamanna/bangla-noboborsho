import React, { useState } from 'react';

const Wishes = () => {
  const wishList = [
    "নতুন বছরের অনেক শুভেচ্ছা!",
    "আনন্দে কাটুক প্রতিটি দিন!",
    "স্বপ্নপূরণ হোক এই নববর্ষে!",
    "শুভ নববর্ষ ১৪৩২!"
  ];
  const [wish, setWish] = useState("");

  return (
    <div className="text-center">
      <button
        onClick={() => setWish(wishList[Math.floor(Math.random() * wishList.length)])}
        className="bg-red-500 text-white px-4 py-2 rounded-full text-lg shadow-lg hover:bg-red-600 transition"
      >
        🎁 Click for Wish
      </button>
      {wish && <p className="mt-4 text-2xl text-green-600">{wish}</p>}
    </div>
  );
};

export default Wishes;
