import React from 'react';
import Banner from './components/Banner';
import Wishes from './components/Wishes';
import FloatingItems from './components/FloatingItems';
import Pictures from './components/Pictures/Pictures';
import NavBar from './components/navBar/navBar';
import Diff from './components/Diff/Diff';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
     <NavBar></NavBar>
    <div
    className="bg-gradient-to-b from-red-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Banner />
      <Wishes />
      <FloatingItems />

    
     
     </div>
     <Pictures></Pictures>
     <h3 className='text-center text-3xl text-red-700 font-bold bg-gradient-to-b from-red-100 to-yellow-100 p-20'>
     বাংলার বধূ (প্রেমময়ী  চিরদিনি)💝💝

     </h3>
     <div className=''>
     <Diff></Diff>
     </div>
     <Footer></Footer>
    </div>
    
  );
}

export default App;
