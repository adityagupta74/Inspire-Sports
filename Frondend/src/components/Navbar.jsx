// Navbar.jsx - UPDATED WITH THEME TOGGLE
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>🎉 Grand Opening! Use code <strong>SPORTS50</strong> for 50% OFF on first order! 🚚 Free Delivery above ₹999</p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          
          {/* Left: Logo and Brand */}
          <div className="nav-left">
            <Link to="/" className="logo">
              <span className="logo-icon">🏆</span>
              <span className="logo-text">SportsWala</span>
            </Link>
          </div>

          {/* Center: Main Menu */}
          <div className="nav-center">
            <div className="nav-menu">
              <Link to="/" className="nav-link">Home</Link>
              
              <div className="dropdown">
                <button className="nav-link dropdown-btn">
                  Categories ▽
                </button>
                <div className="dropdown-content">
                  <Link to="/category/cricket">🏏 Cricket</Link>
                  <Link to="/category/football">⚽ Football</Link>
                  <Link to="/category/badminton">🏸 Badminton</Link>
                  <Link to="/category/fitness">💪 Fitness & Gym</Link>
                  <Link to="/category/running">👟 Running</Link>
                  <Link to="/category/clothing">👕 Sportswear</Link>
                </div>
              </div>

              <Link to="/brands" className="nav-link">Brands</Link>
              <Link to="/sale" className="nav-link sale-link">SALE</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
            </div>
          </div>

          {/* Right: Icons, Search, Theme Toggle and Auth */}
          <div className="nav-right">
            {/* Search Bar */}
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search cricket bats, shoes..." 
                className="search-input"
              />
              <button className="search-btn">
                <span className="search-icon">🔍</span>
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              {theme === 'light' ? (
                <span className="theme-icon">🌙</span>
              ) : (
                <span className="theme-icon">☀️</span>
              )}
            </button>

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <div className="auth-buttons">
                <Link to="/login" className="login-btn">
                  Login
                </Link>
                <Link to="/signup" className="signup-btn">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="user-dropdown">
                <button className="user-profile-btn">
                  <span className="user-icon">👤</span>
                  <span className="user-name">John</span> ▽
                </button>
                <div className="user-dropdown-content">
                  <Link to="/profile">My Profile</Link>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Icons */}
            <div className="nav-icons">
              <Link to="/wishlist" className="icon-link">
                <span className="icon">❤️</span>
              </Link>
              
              <Link to="/cart" className="icon-link cart-icon">
                <span className="icon">🛒</span>
                {cartItems > 0 && (
                  <span className="cart-count">{cartItems}</span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-search">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="mobile-search-input"
            />
            <button>🔍</button>
          </div>
          
          <div className="mobile-theme-toggle">
            <button onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
          
          <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          
          <div className="mobile-dropdown">
            <button className="mobile-dropdown-btn">Categories ▽</button>
            <div className="mobile-dropdown-content">
              <Link to="/category/cricket" onClick={() => setIsMenuOpen(false)}>🏏 Cricket</Link>
              <Link to="/category/football" onClick={() => setIsMenuOpen(false)}>⚽ Football</Link>
              <Link to="/category/badminton" onClick={() => setIsMenuOpen(false)}>🏸 Badminton</Link>
              <Link to="/category/fitness" onClick={() => setIsMenuOpen(false)}>💪 Fitness</Link>
              <Link to="/category/running" onClick={() => setIsMenuOpen(false)}>👟 Running</Link>
              <Link to="/category/clothing" onClick={() => setIsMenuOpen(false)}>👕 Sportswear</Link>
            </div>
          </div>
          
          <Link to="/brands" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Brands</Link>
          <Link to="/sale" className="mobile-link sale" onClick={() => setIsMenuOpen(false)}>🔥 SALE</Link>
          <Link to="/blog" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          
          {/* Mobile Auth Section */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="mobile-link auth-mobile" onClick={() => setIsMenuOpen(false)}>
                🔑 Login
              </Link>
              <Link to="/signup" className="mobile-link signup-mobile" onClick={() => setIsMenuOpen(false)}>
                📝 Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="mobile-link" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
              <Link to="/orders" className="mobile-link" onClick={() => setIsMenuOpen(false)}>My Orders</Link>
              <button 
                className="mobile-link logout-mobile" 
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsMenuOpen(false);
                }}
              >
                🚪 Logout
              </button>
            </>
          )}
          
          <Link to="/wishlist" className="mobile-link" onClick={() => setIsMenuOpen(false)}>❤️ Wishlist</Link>
          <Link to="/cart" className="mobile-link cart-link" onClick={() => setIsMenuOpen(false)}>
            🛒 Shopping Cart ({cartItems})
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;