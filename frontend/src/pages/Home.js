import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="hero"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="overlay" />
        <div className="hero-content container">
          <h2>Reconnect. Share. Inspire.</h2>
          <p>Join alumni worldwide for events, networking, and giving back.</p>
        </div>
      </section>

      {/* Features */}
      <section className="features container">
        <div className="feature-card">
          <img src="/images/feature-network.jpg" alt="Global Networking" />
          <h3>Global Networking</h3>
          <p>Build your professional circle across industries and regions.</p>
        </div>
        <div className="feature-card">
          <img src="/images/feature-events.jpg" alt="Upcoming Events" />
          <h3>Upcoming Events</h3>
          <p>RSVP to reunions, webinars, and meetups near you.</p>
        </div>
      </section>

      {/* Info */}
      <section className="info container">
        <h2>About Alumni Connect</h2>
        <p><strong>Email:</strong> alumni@connect.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-8900</p>
        <p><strong>Address:</strong> 123 Alumni Street, College City, Country</p>
      </section>
    </main>
  );
}
