import React from 'react';

const NavBar = () => {
    return (
        <div>
          <nav className="bg-gradient-to-b from-yellow-100 to-red-100 shadow-md border-b border-dotted border-gray-500">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    <div className="text-3xl font-bold text-amber-900 tracking-wide drop-shadow-sm">
      শুভ নববর্ষ 🎉
    </div>
    <ul className="hidden md:flex space-x-10 text-amber-900 font-semibold text-lg drop-shadow-sm">
  <li className="hover:text-red-600 cursor-pointer transition duration-300">প্রথম পাতা</li>
  <li className="hover:text-red-600 cursor-pointer transition duration-300">ঐতিহ্য</li>
  <li className="hover:text-red-600 cursor-pointer transition duration-300">বৈশাখী খাবার</li>
  <li className="hover:text-red-600 cursor-pointer transition duration-300">যোগাযোগ</li>
</ul>

    <div className="md:hidden text-amber-900 text-3xl cursor-pointer drop-shadow-md">
      ☰
    </div>
  </div>
</nav>

        </div>
    );
};

export default NavBar;