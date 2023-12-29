import React, { useState, useEffect } from 'react';
import '@/pages/navbar.css';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Your existing JavaScript code
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector('.mobile-menu');

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle('is-open');
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
      } else {
        navbar.classList.remove('nav-active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listeners
    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <nav id="navbar">
    <div class="nav-container">
      <button class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="menu">
        <div class="nav-item">
          <a aria-label="Link to Home Page" href="./index.html">Home</a>
        </div>
        <div class="nav-item">
          <a
            aria-label="Link to Contact Us Page"
            href="./pages/Contact/index.html"
            >Contact</a
          >
        </div>
        <div class="nav-item">
          <a
            href="http://linktr.ee/malharfest"
            aria-label="Link to Announcements Page on Linktree"
            >Announcements</a
          >
        </div>
        <div class="nav-item">
          <a href="./pages/Events/index.html" aria-label="Link to Events Page"
            >Events</a
          >
        </div>
        <div class="nav-item">
          <a
            href="https://blog.malharfest.in"
            aria-label="Link to Official Malhar Blog"
            >Blog</a
          >
        </div>
        <div class="nav-item">
          <a
            aria-label="Link to Conclave Page"
            href="./pages/Conclave/index.html"
            >Conclave</a
          >
        </div>
        <div class="nav-item">
          <a
            aria-label="Link to Merchandise Gallery"
            href="./pages/Merch/index.html"
            >Merchandise</a
          >
        </div>
        <div class="nav-item">
          <a
            aria-label="Link to Workforce Page"
            href="./pages/Workforce/index.html"
            >Workforce</a
          >
        </div>

        <div class="nav-item">
          <a
            aria-label="Link to Sponsors Page"
            href="./pages/Sponsor/index.html"
            >Sponsors</a
          >
        </div>

        <div class="nav-item">
          <a
            aria-label="Link to Taal Page"
            href="./pages/Taal/index.html"
            >Taal</a
          >

          
        </div>
        <div class="nav-item">
          <a aria-label="Link to Results Page" href="./pages/Result/index.html"> Results</a>
        </div>
      </div>

      <div class="mobile-menu">
        <a aria-label="Link to Home Page" href="./index.html">Home</a>
        <a
          aria-label="Link to Contact Us Page"
          href="./pages/Contact/index.html"
          >Contact</a
        >
        <a
          href="http://linktr.ee/malharfest"
          aria-label="Link to Announcements Page on Linktree"
          >Announcements</a
        >
        <a href="./pages/Events/index.html" aria-label="Link to Events Page"
          >Events</a
        >
        <a
          href="https://blog.malharfest.in"
          aria-label="Link to Official Malhar Blog"
          >Blog</a
        >
        <a
          aria-label="Link to Conclave Page"
          href="./pages/Conclave/index.html"
          >Conclave</a
        >
        <a
          aria-label="Link to Merchandise Gallery"
          href="./pages/Merch/index.html"
          >Merchandise</a
        >
        <a
          aria-label="Link to Workforce Page"
          href="./pages/Workforce/index.html"
          >Workforce</a
        >
        <a
          aria-label="Link to Workforce Page"
          href="./pages/Sponsor/index.html"
          >Sponsors</a
        >
        <a
          aria-label="Link to Taal Page"
          href="./pages/Taal/index.html"
          >Taal</a
        >
        <a
          aria-label="Link to Results page"
          href="./pages/Result/index.html"
          >Results</a
        >
        
      
      </div>
    </div>
  </nav>

  );
};

export default Navbar;
