// pages/Home.jsx - UPDATED
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to SportsWala! 🏆</h1>
        <p>India's No. 1 Sports Equipment Store</p>
        <button className="shop-now-btn">Shop Now →</button>
      </section>
      
      {/* Dark Mode Info Section */}
      <section className="theme-info">
        <h2>🌙 Dark Mode Available!</h2>
        <p>Click the moon/sun icon in navbar to toggle between light and dark themes.</p>
      </section>
      
      {/* Featured Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {['Cricket', 'Football', 'Badminton', 'Fitness', 'Running', 'Clothing'].map((cat) => (
            <div key={cat} className="category-card">
              <h3>{cat}</h3>
              <p>Shop {cat} equipment</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;