import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import MemberSpotlight from '@/components/MemberSpotlight';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for hash links if landed directly
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground font-sans">
      <div className="noise-bg" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Events />
        <MemberSpotlight />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}