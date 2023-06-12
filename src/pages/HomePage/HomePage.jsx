import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Sidebar from './Sidebar';


function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <HeroSection />
      <Footer />
    </>
  );
}

export default HomePage;
