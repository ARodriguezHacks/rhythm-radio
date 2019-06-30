import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>

    <section className="landing-features">
      <div className="feature" id="float-left-top">
        <div className="icon-headphone">
          <FontAwesomeIcon icon="headphones" />
        </div>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music;<br /> why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="feature" id="float-right">
        <div className="icon-radio">
          <FontAwesomeIcon icon="compact-disc" />
        </div>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="feature" id="float-left-bottom">
        <div className="icon-phone">
          <FontAwesomeIcon icon="mobile-alt" />
        </div>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
