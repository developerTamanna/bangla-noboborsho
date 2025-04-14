import React from 'react';
import Banner from './components/Banner';
import Wishes from './components/Wishes';
import FloatingItems from './components/FloatingItems';
import Pictures from './components/Pictures/Pictures';
import NavBar from './components/navBar/navBar';

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
    </div>
    
  );
}

export default App;
