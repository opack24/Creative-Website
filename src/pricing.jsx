import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FoldMateArt } from './App.jsx';
import './index.css';

function PricingPage() {
  const [open, setOpen] = useState(false);
  const home = import.meta.env.BASE_URL;

  return <main className="pricing-page">
    <div className="announcement">Meet FoldMate — your laundry’s new last step <span>↗</span></div>
    <header className="nav wrap">
      <a className="wordmark foldmate-wordmark" href={`${home}#top`}><span className="foldmate-icon">F</span><span>FOLDMATE</span></a>
      <nav aria-label="Main navigation">
        <a href={`${home}#product`}>The product</a>
        <a href={`${home}#research`}>The insight</a>
        <a href={`${home}pricing/`} aria-current="page">Pricing</a>
      </nav>
      <a className="nav-cta" href={`${home}#product`}>Explore the concept <span>↗</span></a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open navigation" aria-expanded={open}>{open ? 'Close −' : 'Menu +'}</button>
    </header>
    {open && <div className="mobile-panel">
      <a onClick={() => setOpen(false)} href={`${home}#product`}>The product</a>
      <a onClick={() => setOpen(false)} href={`${home}#research`}>The insight</a>
      <a onClick={() => setOpen(false)} href={`${home}pricing/`} aria-current="page">Pricing</a>
    </div>}

    <section className="pricing-hero wrap" id="top">
      <div className="pricing-copy">
        <p className="eyebrow"><span className="dot"/> FOLDMATE · HOME APPLIANCE</p>
        <h1>Less folding.<br/><em>More living.</em></h1>
        <p className="lede">A proposed home appliance that identifies and folds clean clothes.</p>
        <a className="button button-dark" href={`${home}#product`}>Explore the product concept <span>↗</span></a>
      </div>
      <div className="pricing-visual" aria-label="FoldMate home appliance concept illustration">
        <div className="pricing-visual-tag"><span className="tag-dot"/> FOLDMATE HOME <span>CONCEPT 01</span></div>
        <FoldMateArt />
        <span className="pricing-visual-caption">PROPOSED HOME APPLIANCE</span>
      </div>
    </section>

    <section className="pricing-offer wrap" aria-labelledby="offer-title">
      <div className="section-label">01 / PRODUCT PRICE</div>
      <div className="pricing-offer-card">
        <div className="pricing-offer-copy">
          <p className="eyebrow">FOLDMATE · HOME</p>
          <h2 id="offer-title">FoldMate home appliance</h2>
          <p>A home concept for identifying and folding clean clothes.</p>
          <a className="text-link" href={`${home}#product`}>See the product concept <span>↗</span></a>
        </div>
        <div className="pricing-amount">
          <span className="pricing-label">ONE-TIME APPLIANCE PRICE</span>
          <strong>$999</strong>
          <span className="pricing-currency">USD per appliance</span>
        </div>
      </div>
      <p className="pricing-note">FoldMate is a proposed home appliance concept.</p>
    </section>

    <footer className="footer wrap">
      <div className="footer-top">
        <a className="wordmark foldmate-wordmark" href={`${home}#top`}><span className="foldmate-icon">F</span><span>FOLDMATE</span></a>
        <p>Fold less. Get a little more of your day back.</p>
        <a className="button button-dark" href={`${home}#product`}>Explore the concept <span>↑</span></a>
      </div>
      <div className="footer-bottom"><span>HOME CLOTHES-FOLDING MACHINE · VENTURE PROJECT</span><span>FOLDMATE · HOME</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<PricingPage />);
