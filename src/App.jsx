import { useState } from 'react';

function GoogleMark() {
  return <span className="google-mark" aria-label="Google"><i>G</i>oogle</span>;
}

function HoodieArt() {
  return (
    <svg className="hoodie-art" viewBox="0 0 600 650" role="img" aria-label="Illustration of a redesigned black pullover hoodie with short drawcords">
      <defs>
        <linearGradient id="fabric" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#333536"/><stop offset=".52" stopColor="#17191a"/><stop offset="1" stopColor="#090a0b"/></linearGradient>
        <linearGradient id="sleeve" x1="0" y1="0" x2="0.9" y2="1"><stop stopColor="#27292a"/><stop offset="1" stopColor="#101112"/></linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="17"/></filter>
      </defs>
      <ellipse cx="302" cy="590" rx="194" ry="23" fill="#000" opacity=".19" filter="url(#shadow)"/>
      <path d="M216 154 151 177 86 253l53 46 38-37-19 246q143 27 288 0l-19-246 38 37 53-46-65-76-64-23-41 27h-91z" fill="url(#fabric)" stroke="#454748" strokeWidth="2"/>
      <path d="m151 177-65 76 53 46 55-60-18-52zM449 177l65 76-53 46-55-60 18-52z" fill="url(#sleeve)" stroke="#414344" strokeWidth="2"/>
      <path d="m191 508-6 21q31 13 57 0l-2-18M360 511l-2 18q28 13 57 0l-5-21" fill="#111314" stroke="#343738" strokeWidth="2"/>
      <path d="M216 154c4-67 37-111 84-111 48 0 81 44 85 111l-47 27H261z" fill="url(#fabric)" stroke="#47494a" strokeWidth="2"/>
      <path d="M262 164q38 24 76 0" fill="none" stroke="#56595a" strokeWidth="2"/>
      <path d="M268 177v52m64-52v52" fill="none" stroke="#a7a29a" strokeWidth="4" strokeLinecap="round"/>
      <path d="M268 227v8m64-8v8" stroke="#a7a29a" strokeWidth="5" strokeLinecap="round"/>
      <path d="M230 404q70 10 140 0v53q-70 13-140 0z" fill="#101213" stroke="#303334" strokeWidth="2"/>
      <path d="M197 245 185 479M403 245l12 234" fill="none" stroke="#343637" strokeWidth="2" opacity=".7"/>
      <text x="337" y="276" fontFamily="Arial,sans-serif" fontSize="17" fontWeight="600" letterSpacing="-1"><tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan></text>
      <path d="M148 300q-14 6-22-7M452 300q14 6 22-7" fill="none" stroke="#66696a" strokeWidth="2" opacity=".5"/>
    </svg>
  );
}

const segments = [
  ['Geographic', 'College towns and urban tech hubs across the United States'],
  ['Demographic', 'Students and early-career adults, ages 18–28'],
  ['Psychographic', 'Design-aware, sustainability-minded, and drawn to understated tech culture'],
  ['Benefits', 'A comfortable recycled layer with a subtle connection to Google'],
  ['Behavioral', 'Wears a hoodie for campus, commuting, and co-working; shops online for versatile staples'],
];

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <div className="announcement">A familiar favorite, rethought for every day <span>↗</span></div>
      <header className="nav wrap">
        <a className="wordmark" href="#top" aria-label="Google Re:Wear home"><GoogleMark /><span className="divider">/</span><span>RE:WEAR</span></a>
        <nav><a href="#redesign">The redesign</a><a href="#fit">Why it fits</a><a href="#market">Our customer</a></nav>
        <a className="nav-cta" href="#product">Meet the hoodie <span>↗</span></a>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot"/> GOOGLE RECYCLED HOODIE · CONCEPT RELAUNCH</p>
          <h1>Less merch.<br/><em>More everyday.</em></h1>
          <p className="lede">A familiar layer, refined. Recycled comfort with a cleaner shape and a quieter kind of Google pride.</p>
          <div className="hero-actions"><a className="button button-dark" href="#product">Explore the redesign <span>↘</span></a><span className="micro-note">A concept for the next generation of everyday wear</span></div>
          <div className="hero-proof"><span><b>01</b> Recycled at heart</span><span><b>02</b> Made to wear on repeat</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
          <div className="product-tag"><span className="tag-dot"/> THE EVERYDAY PULLOVER <span>01 / 03</span></div>
          <HoodieArt />
          <div className="swatch-label"><span className="swatch"/> Recycled black <span className="swatch-line"/> Subtle by design</div>
          <span className="visual-index">GOOGLE · RE:WEAR</span>
        </div>
      </section>

      <section className="ticker" aria-label="Product principles"><div>RECYCLED MATERIALS <span>✳</span> QUIETLY ICONIC <span>✳</span> YOUR EVERYDAY UNIFORM <span>✳</span> RECYCLED MATERIALS <span>✳</span> QUIETLY ICONIC <span>✳</span></div></section>

      <section className="product-section wrap" id="product">
        <div className="section-label">01 / THE PRODUCT</div>
        <div className="product-grid">
          <div><p className="eyebrow">THE GOOGLE RECYCLED HOODIE · REIMAGINED</p><h2>Built around<br/>what you <em>actually wear.</em></h2></div>
          <div className="product-copy"><p>The original has the right idea: a black hoodie made with recycled material and a small Google mark. The relaunch keeps that foundation and makes the design easier to reach for, day after day.</p><a href="#redesign" className="text-link">See what changed <span>↓</span></a></div>
        </div>
        <div className="product-card" id="redesign">
          <div className="product-card-art"><HoodieArt /><span className="concept-stamp">PROPOSED<br/>DESIGN</span></div>
          <div className="product-card-info"><div className="product-name"><div><span className="eyebrow">GOOGLE RE:WEAR</span><h3>The Recycled Everyday Hoodie</h3></div><strong>$75</strong></div>
            <p>Same recycled-hoodie idea. A more considered silhouette, designed for the rhythm of a real week.</p>
            <div className="feature-list"><span><b>01</b> Pullover shape, no front zipper</span><span><b>02</b> Short, tidy drawcords</span><span><b>03</b> Small multicolor chest mark</span></div>
            <a className="button button-light" href="#fit">Why it belongs in your rotation <span>↗</span></a>
            <small>Concept redesign for a class marketing project. Recycled material and $75 price are based on the original product listing; fit and trim changes are proposed.</small>
          </div>
        </div>
      </section>

      <section className="benefits" id="fit"><div className="wrap benefits-inner">
        <div className="section-label">02 / THE REPOSITIONING</div><div className="benefit-heading"><p className="eyebrow">FOR CAMPUS, COMMUTES & EVERYTHING BETWEEN</p><h2>Your day changes.<br/><em>Your layer keeps up.</em></h2></div>
        <div className="benefit-cards"><article><span>01 / EASY TO REACH FOR</span><h3>One less decision.</h3><p>A simple black layer works with the pieces you already own—from an early lecture to the last coffee run.</p></article><article><span>02 / QUIETER BRANDING</span><h3>Show your side, subtly.</h3><p>A small Google mark keeps the connection personal, so the hoodie feels like your style—not a walking ad.</p></article><article><span>03 / A BETTER STORY</span><h3>Recycled, re-worn.</h3><p>Lead with the recycled-material story and everyday usefulness, without making sustainability claims the product can’t prove.</p></article></div>
      </div></section>

      <section className="market wrap" id="market"><div className="section-label">03 / WHO IT'S FOR</div><div className="market-layout"><div><p className="eyebrow">A CLEARER CUSTOMER, A CLEARER STORY</p><h2>Meet the<br/><em>everyday optimist.</em></h2><p className="market-intro">A sustainability-minded college student or early-career creative, 18–28, in a US university town or tech hub. They want a comfortable recycled layer with a subtle Google connection—not conspicuous tech merch.</p></div><div className="segment-list">{segments.map(([name, detail], i) => <div className="segment" key={name}><span>0{i + 1}</span><b>{name}</b><p>{detail}</p></div>)}</div></div></section>

      <section className="diagnosis"><div className="wrap diagnosis-inner"><div className="section-label">THE OPPORTUNITY</div><h2>Good product idea.<br/><em>Room to get the details right.</em></h2><div className="diagnosis-points"><p><b>01 — Design friction</b>The long, contrasting drawstrings can look untidy and pull attention away from the clean black base.</p><p><b>02 — Mixed signals</b>A front zipper gives the piece a standard zip-up look, while the recycled story and small logo don’t yet explain why it deserves a $75 premium.</p><p><b>03 — Repositioning</b>Present it as a thoughtfully redesigned everyday layer for students and young creatives—not just branded company merchandise.</p></div></div></section>

      <footer className="footer wrap"><div className="footer-top"><a className="wordmark" href="#top"><GoogleMark /><span className="divider">/</span><span>RE:WEAR</span></a><p>Made for the everyday, again and again.</p><a className="button button-dark" href="#product">Meet your new repeat <span>↑</span></a></div><div className="footer-bottom"><span>CONCEPT RELAUNCH · MARKETING ASSIGNMENT</span><span>RECYCLED IDEA. REFINED FOR REAL LIFE.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
      <button className="mobile-menu" aria-label="Open navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
      {open && <div className="mobile-panel"><a onClick={() => setOpen(false)} href="#redesign">The redesign</a><a onClick={() => setOpen(false)} href="#fit">Why it fits</a><a onClick={() => setOpen(false)} href="#market">Our customer</a></div>}
    </main>
  );
}
