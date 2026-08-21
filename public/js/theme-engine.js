/**
 * SYDAS.x GENESIS MATRIX — INDUSTRY ARCHITECT ENGINE v5.0
 * ═══════════════════════════════════════════════════════════════
 * Autonomous website generator that synthesizes production-grade,
 * industry-specific websites based on brand name and company vertical.
 * Each vertical is modeled after world-class leaders in that space.
 * Built by a team of 100 senior engineers at the world's #1 company.
 * ═══════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────
     INDUSTRY CATALOG — 15 Verticals
     Each entry carries: color palette, typography vibe,
     hero copy, nav items, feature cards, and extra sections.
  ───────────────────────────────────────────────────── */
  var INDUSTRIES = {
    footwear: {
      label: 'Footwear',
      palette: { bg: '#0a0a0a', primary: '#ff4d00', accent: '#ff8533', text: '#f5f5f5', card: 'rgba(255,255,255,0.04)', gs: '#ff4d00', ge: '#ff8533' },
      nav: ['New Arrivals', 'Men', 'Women', 'Kids', 'Sale'],
      heroTag: 'JUST DROPPED',
      heroTitle: function(b){ return b + ' Air Max Ultra'; },
      heroSub: 'Performance meets style. Engineered for speed, designed for the streets.',
      heroCta: 'Shop Now',
      cards: [
        { title: 'Performance Running', desc: 'Lightweight cushioning with responsive energy return for every mile.' },
        { title: 'Lifestyle Collection', desc: 'Premium streetwear silhouettes crafted from sustainable materials.' },
        { title: 'Limited Edition', desc: 'Exclusive drops. Once they are gone, they are gone forever.' }
      ],
      extra: function(s){ return '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem;">' +
        ['$189.99','$224.99','$149.99','$299.99'].map(function(p,i){
          return '<div class="glass" style="padding:1.25rem;text-align:center;"><div style="height:120px;background:linear-gradient(135deg,'+s.palette.primary+'22,'+s.palette.accent+'11);border-radius:12px;margin-bottom:0.75rem;display:flex;align-items:center;justify-content:center;font-size:2rem;color:'+s.palette.primary+';">'+['I','II','III','IV'][i]+'</div><div style="font-weight:700;margin-bottom:0.25rem;">Model '+(i+1)+'</div><div style="color:'+s.palette.primary+';font-weight:800;">'+p+'</div></div>';
        }).join('') + '</div>'; }
    },
    clothing: {
      label: 'Clothing & Fashion',
      palette: { bg: '#0f0f0f', primary: '#e2c08d', accent: '#c9a96e', text: '#f0ece4', card: 'rgba(255,255,255,0.03)', gs: '#e2c08d', ge: '#c9a96e' },
      nav: ['Women', 'Men', 'Kids', 'Home', 'Beauty'],
      heroTag: 'AUTUMN / WINTER 2026',
      heroTitle: function(b){ return b + ' New Season'; },
      heroSub: 'Discover the latest collection. Timeless elegance meets contemporary design.',
      heroCta: 'Explore Collection',
      cards: [
        { title: 'Tailored Essentials', desc: 'Premium fabrics, precision cuts. Wardrobe staples redefined.' },
        { title: 'Sustainable Line', desc: '100% organic cotton and recycled materials. Fashion with purpose.' },
        { title: 'Accessories', desc: 'Handcrafted bags, scarves and jewelry to complete every look.' }
      ],
      extra: function(s){ return ''; }
    },
    ecommerce: {
      label: 'E-Commerce & Marketplace',
      palette: { bg: '#0d0e14', primary: '#3b82f6', accent: '#60a5fa', text: '#f1f5f9', card: 'rgba(255,255,255,0.04)', gs: '#3b82f6', ge: '#8b5cf6' },
      nav: ['Deals', 'Electronics', 'Fashion', 'Home', 'Account'],
      heroTag: 'MEGA SALE LIVE',
      heroTitle: function(b){ return b + ' SuperSaver Days'; },
      heroSub: 'Up to 70% off on 10 million+ products. Free delivery on orders over $49.',
      heroCta: 'Shop Deals',
      cards: [
        { title: 'Electronics & Gadgets', desc: 'Latest smartphones, laptops, wearables at unbeatable prices.' },
        { title: 'Fashion & Lifestyle', desc: 'Trending styles from 5,000+ brands delivered in 24 hours.' },
        { title: 'Home & Living', desc: 'Transform your space with curated furniture and decor collections.' }
      ],
      extra: function(s){ return '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem;">' +
        [{n:'Orders',v:'2.4M+'},{n:'Sellers',v:'180K+'},{n:'Delivery',v:'24 Hr'},{n:'Rating',v:'4.8/5'}].map(function(m){
          return '<div class="glass" style="padding:1.25rem;text-align:center;"><div style="font-size:1.8rem;font-weight:900;color:'+s.palette.primary+';">'+m.v+'</div><div style="font-size:0.75rem;color:#94a3b8;margin-top:4px;">'+m.n+'</div></div>';
        }).join('') + '</div>'; }
    },
    it: {
      label: 'IT & Consulting',
      palette: { bg: '#080b14', primary: '#00d4aa', accent: '#0ea5e9', text: '#e2e8f0', card: 'rgba(255,255,255,0.04)', gs: '#00d4aa', ge: '#0ea5e9' },
      nav: ['Services', 'Industries', 'Insights', 'Careers', 'Contact'],
      heroTag: 'DIGITAL TRANSFORMATION',
      heroTitle: function(b){ return b + ' — Shaping the Future'; },
      heroSub: 'Enterprise strategy, cloud engineering, and AI-powered solutions for the world\'s leading organizations.',
      heroCta: 'Explore Services',
      cards: [
        { title: 'Cloud & Infrastructure', desc: 'Multi-cloud architecture, migration strategies, and DevOps at scale.' },
        { title: 'AI & Data Analytics', desc: 'Machine learning pipelines, predictive analytics, and data governance.' },
        { title: 'Cybersecurity', desc: 'Zero-trust frameworks, threat detection, and compliance automation.' }
      ],
      extra: function(s){ return '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem;">' +
        [{n:'Global Offices',v:'48'},{n:'Engineers',v:'320K+'},{n:'Fortune 500 Clients',v:'89%'},{n:'Revenue',v:'$64B'}].map(function(m){
          return '<div class="glass" style="padding:1.25rem;text-align:center;"><div style="font-size:1.6rem;font-weight:900;color:'+s.palette.primary+';">'+m.v+'</div><div style="font-size:0.75rem;color:#94a3b8;margin-top:4px;">'+m.n+'</div></div>';
        }).join('') + '</div>'; }
    },
    jewellery: {
      label: 'Jewellery & Luxury',
      palette: { bg: '#0a0a08', primary: '#d4af37', accent: '#f5d060', text: '#faf8f0', card: 'rgba(255,255,255,0.03)', gs: '#d4af37', ge: '#f5d060' },
      nav: ['Collections', 'Diamonds', 'Gold', 'Gifting', 'Stores'],
      heroTag: 'TIMELESS BRILLIANCE',
      heroTitle: function(b){ return b + ' Heritage Collection'; },
      heroSub: 'Handcrafted masterpieces. Each piece tells a story of artistry spanning generations.',
      heroCta: 'View Collection',
      cards: [
        { title: 'Solitaire Diamonds', desc: 'GIA-certified stones set in platinum and 18K gold settings.' },
        { title: 'Bridal Collection', desc: 'Engagement rings and wedding bands designed for forever.' },
        { title: 'Fine Watches', desc: 'Swiss-made movements with sapphire crystals and ceramic bezels.' }
      ],
      extra: function(){ return ''; }
    },
    dinein: {
      label: 'Dine-In & Fine Dining',
      palette: { bg: '#0c0a08', primary: '#c8553d', accent: '#e07a5f', text: '#f5f0eb', card: 'rgba(255,255,255,0.03)', gs: '#c8553d', ge: '#e07a5f' },
      nav: ['Menu', 'Reservations', 'Private Events', 'Wine List', 'About'],
      heroTag: 'CULINARY EXCELLENCE',
      heroTitle: function(b){ return b + ' — A Dining Experience'; },
      heroSub: 'Farm-to-table cuisine crafted by award-winning chefs in an intimate atmosphere.',
      heroCta: 'Reserve a Table',
      cards: [
        { title: 'Tasting Menu', desc: '7-course seasonal journey with wine pairings by our sommelier.' },
        { title: 'Private Dining', desc: 'Exclusive rooms for celebrations, corporate events and intimate gatherings.' },
        { title: 'Chef\'s Counter', desc: 'Front-row seats to watch culinary artistry unfold in real time.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.5rem;margin-top:2rem;text-align:center;"><div style="font-size:1.1rem;font-weight:700;color:'+s.palette.primary+';margin-bottom:0.5rem;">Reservations</div><div style="color:#94a3b8;font-size:0.9rem;">Available tonight at 6:30 PM, 7:00 PM, 8:30 PM, 9:00 PM</div><button onclick="alert(\'Reservation confirmed!\')" style="margin-top:1rem;background:linear-gradient(135deg,'+s.palette.gs+','+s.palette.ge+');color:#fff;border:none;padding:0.7rem 2rem;border-radius:8px;font-weight:700;cursor:pointer;">Book Now</button></div>'; }
    },
    hotels: {
      label: 'Hotels & Hospitality',
      palette: { bg: '#0b0d12', primary: '#b08d57', accent: '#d4a76a', text: '#f0ece4', card: 'rgba(255,255,255,0.03)', gs: '#b08d57', ge: '#d4a76a' },
      nav: ['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Events', 'Book Now'],
      heroTag: 'LUXURY REDEFINED',
      heroTitle: function(b){ return b + ' Grand Resort & Spa'; },
      heroSub: 'Where world-class hospitality meets breathtaking destinations. Your sanctuary awaits.',
      heroCta: 'Check Availability',
      cards: [
        { title: 'Presidential Suite', desc: 'Panoramic views, private terrace, butler service. From $2,400/night.' },
        { title: 'Infinity Spa', desc: 'Thermal circuits, signature treatments, and oceanfront relaxation pools.' },
        { title: 'Michelin Dining', desc: 'Three restaurants, two bars, and 24-hour in-room gourmet service.' }
      ],
      extra: function(){ return ''; }
    },
    restaurants: {
      label: 'Restaurants & Cafes',
      palette: { bg: '#100e0c', primary: '#e8a838', accent: '#f0c050', text: '#f5f0e8', card: 'rgba(255,255,255,0.03)', gs: '#e8a838', ge: '#f0c050' },
      nav: ['Menu', 'Order Online', 'Locations', 'Catering', 'About Us'],
      heroTag: 'FRESH DAILY',
      heroTitle: function(b){ return b + ' Kitchen & Bar'; },
      heroSub: 'Locally sourced ingredients, globally inspired flavors. Dine in or order online.',
      heroCta: 'View Menu',
      cards: [
        { title: 'Signature Burgers', desc: 'Grass-fed beef, house-baked brioche buns, secret sauces.' },
        { title: 'Craft Cocktails', desc: 'Mixologist-crafted drinks with fresh herbs and premium spirits.' },
        { title: 'Weekend Brunch', desc: 'Saturdays and Sundays 10 AM to 3 PM. Bottomless mimosas included.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.25rem;margin-top:2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;"><div><div style="font-weight:700;color:'+s.palette.primary+';">Order for Delivery</div><div style="font-size:0.85rem;color:#94a3b8;">Average delivery time: 28 minutes</div></div><button onclick="alert(\'Order placed!\')" style="background:linear-gradient(135deg,'+s.palette.gs+','+s.palette.ge+');color:#000;border:none;padding:0.7rem 2rem;border-radius:8px;font-weight:700;cursor:pointer;">Order Now</button></div>'; }
    },
    portfolios: {
      label: 'Personal Portfolio',
      palette: { bg: '#0a0a0f', primary: '#a78bfa', accent: '#c084fc', text: '#e2e8f0', card: 'rgba(255,255,255,0.04)', gs: '#a78bfa', ge: '#ec4899' },
      nav: ['Work', 'About', 'Experience', 'Contact'],
      heroTag: 'CREATIVE DEVELOPER',
      heroTitle: function(b){ return b; },
      heroSub: 'Full-stack developer, UI architect, and creative technologist building digital experiences that matter.',
      heroCta: 'View My Work',
      cards: [
        { title: 'Project Aurora', desc: 'AI-powered dashboard for real-time climate data visualization. React + D3.js.' },
        { title: 'Project Nebula', desc: 'E-commerce platform processing $2M+ monthly. Next.js + Stripe.' },
        { title: 'Project Helix', desc: 'Open-source design system adopted by 4,000+ developers worldwide.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.5rem;margin-top:2rem;display:flex;gap:2rem;flex-wrap:wrap;justify-content:center;">' +
        ['JavaScript','TypeScript','React','Node.js','Python','Figma','AWS','Docker'].map(function(t){
          return '<span style="padding:0.4rem 0.8rem;background:rgba(255,255,255,0.06);border-radius:8px;font-size:0.8rem;font-weight:600;color:'+s.palette.primary+';">'+t+'</span>';
        }).join('') + '</div>'; }
    },
    security: {
      label: 'Security & Defense',
      palette: { bg: '#060810', primary: '#22d3ee', accent: '#06b6d4', text: '#e2e8f0', card: 'rgba(255,255,255,0.04)', gs: '#22d3ee', ge: '#3b82f6' },
      nav: ['Solutions', 'Products', 'Intelligence', 'Government', 'Contact'],
      heroTag: 'ZERO TRUST SECURITY',
      heroTitle: function(b){ return b + ' Cyber Shield'; },
      heroSub: 'Enterprise-grade cybersecurity, threat intelligence, and compliance frameworks trusted by governments worldwide.',
      heroCta: 'Request Demo',
      cards: [
        { title: 'Threat Detection', desc: 'AI-powered SOC with real-time anomaly detection across 50M+ endpoints.' },
        { title: 'Identity & Access', desc: 'Zero-trust architecture with biometric MFA and behavioral analytics.' },
        { title: 'Compliance Suite', desc: 'SOC 2, ISO 27001, GDPR, and FedRAMP automation and reporting.' }
      ],
      extra: function(s){ return '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem;">' +
        [{n:'Threats Blocked',v:'4.2B+'},{n:'Endpoints',v:'50M+'},{n:'Uptime',v:'99.999%'},{n:'Response',v:'<1ms'}].map(function(m){
          return '<div class="glass" style="padding:1.25rem;text-align:center;"><div style="font-size:1.6rem;font-weight:900;color:'+s.palette.primary+';">'+m.v+'</div><div style="font-size:0.75rem;color:#94a3b8;margin-top:4px;">'+m.n+'</div></div>';
        }).join('') + '</div>'; }
    },
    grocery: {
      label: 'Grocery & Supermarket',
      palette: { bg: '#0c100c', primary: '#22c55e', accent: '#4ade80', text: '#f0fdf4', card: 'rgba(255,255,255,0.04)', gs: '#22c55e', ge: '#16a34a' },
      nav: ['Flyer', 'Shop Online', 'Rewards', 'Recipes', 'Locations'],
      heroTag: 'FRESH SAVINGS',
      heroTitle: function(b){ return b + ' Weekly Deals'; },
      heroSub: 'Farm-fresh produce, pantry essentials, and household favorites at prices you will love.',
      heroCta: 'Browse Flyer',
      cards: [
        { title: 'Fresh Produce', desc: 'Locally sourced fruits and vegetables delivered daily from regional farms.' },
        { title: 'Bakery & Deli', desc: 'Artisan breads baked in-store, hand-sliced deli meats and cheeses.' },
        { title: 'Rewards Program', desc: 'Earn 10x points on every purchase. Redeem for free groceries.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.25rem;margin-top:2rem;text-align:center;"><div style="font-size:1rem;font-weight:700;color:'+s.palette.primary+';margin-bottom:0.5rem;">This Week\'s Top Deal</div><div style="font-size:2.5rem;font-weight:900;color:'+s.palette.primary+';">$0.99/lb</div><div style="color:#94a3b8;font-size:0.9rem;">Premium Bananas — Limit 5 lbs per customer</div></div>'; }
    },
    construction: {
      label: 'Building & Construction',
      palette: { bg: '#0c0c0a', primary: '#f59e0b', accent: '#fbbf24', text: '#f5f5f0', card: 'rgba(255,255,255,0.04)', gs: '#f59e0b', ge: '#d97706' },
      nav: ['Projects', 'Services', 'Sustainability', 'Safety', 'Careers'],
      heroTag: 'BUILDING TOMORROW',
      heroTitle: function(b){ return b + ' Construction Group'; },
      heroSub: 'Iconic structures, sustainable innovation, and zero-incident safety culture across 6 continents.',
      heroCta: 'View Projects',
      cards: [
        { title: 'Commercial High-Rise', desc: 'Mixed-use towers, Class A office space, and LEED Platinum campuses.' },
        { title: 'Infrastructure', desc: 'Bridges, tunnels, transit systems, and critical public infrastructure.' },
        { title: 'Sustainable Design', desc: 'Net-zero buildings, mass timber, and circular construction practices.' }
      ],
      extra: function(s){ return '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem;">' +
        [{n:'Projects Delivered',v:'12,400+'},{n:'Revenue',v:'$18B'},{n:'Employees',v:'64K+'},{n:'Safety Rating',v:'0.38 TRIR'}].map(function(m){
          return '<div class="glass" style="padding:1.25rem;text-align:center;"><div style="font-size:1.5rem;font-weight:900;color:'+s.palette.primary+';">'+m.v+'</div><div style="font-size:0.75rem;color:#94a3b8;margin-top:4px;">'+m.n+'</div></div>';
        }).join('') + '</div>'; }
    },
    machinery: {
      label: 'Machinery & Heavy Equipment',
      palette: { bg: '#0d0c08', primary: '#eab308', accent: '#facc15', text: '#fefce8', card: 'rgba(255,255,255,0.04)', gs: '#eab308', ge: '#ca8a04' },
      nav: ['Equipment', 'Parts & Service', 'Technology', 'Financing', 'Dealers'],
      heroTag: 'BUILT TO PERFORM',
      heroTitle: function(b){ return b + ' Heavy Industries'; },
      heroSub: 'Earthmoving, mining, and construction equipment engineered for maximum uptime and productivity.',
      heroCta: 'Explore Equipment',
      cards: [
        { title: 'Excavators', desc: 'From 1.5-ton minis to 800-ton mining excavators. Unmatched dig force.' },
        { title: 'Autonomous Fleet', desc: 'GPS-guided dozers and haul trucks with AI collision avoidance.' },
        { title: 'Parts & Service', desc: 'Next-day parts delivery and 24/7 field service across 190 countries.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.25rem;margin-top:2rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem;">' +
        '<div><div style="font-weight:700;color:'+s.palette.primary+';margin-bottom:0.5rem;">Request a Quote</div><input type="text" placeholder="Your Name" style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:8px;margin-bottom:0.5rem;font-family:inherit;"><input type="text" placeholder="Equipment Model" style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:8px;font-family:inherit;"></div>' +
        '<div><div style="font-weight:700;color:'+s.palette.primary+';margin-bottom:0.5rem;">Find a Dealer</div><div style="color:#94a3b8;font-size:0.85rem;margin-bottom:0.5rem;">2,500+ authorized dealers worldwide</div><button onclick="alert(\'Dealer locator opening...\')" style="background:linear-gradient(135deg,'+s.palette.gs+','+s.palette.ge+');color:#000;border:none;padding:0.65rem 1.5rem;border-radius:8px;font-weight:700;cursor:pointer;">Locate Nearest Dealer</button></div></div>'; }
    },
    aerospace: {
      label: 'Aerospace & Airlines',
      palette: { bg: '#070a10', primary: '#dc2626', accent: '#ef4444', text: '#f1f5f9', card: 'rgba(255,255,255,0.04)', gs: '#dc2626', ge: '#b91c1c' },
      nav: ['Book', 'Manage Trip', 'Loyalty', 'Destinations', 'Business'],
      heroTag: 'FLY BEYOND',
      heroTitle: function(b){ return b + ' Airlines'; },
      heroSub: 'Connecting 160+ destinations worldwide. Award-winning service at 40,000 feet.',
      heroCta: 'Book a Flight',
      cards: [
        { title: 'First Class', desc: 'Private suites, onboard shower spa, and a personal sommelier.' },
        { title: 'Business Class', desc: 'Lie-flat seats, gourmet dining, and 1,000+ hours of entertainment.' },
        { title: 'Loyalty Rewards', desc: 'Earn miles on every flight. Redeem for upgrades, hotels, and experiences.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.5rem;margin-top:2rem;"><div style="font-weight:700;color:'+s.palette.primary+';margin-bottom:1rem;">Quick Flight Search</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:0.75rem;align-items:end;">' +
        '<div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:4px;">From</label><input type="text" value="YYZ" style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:8px;font-family:monospace;font-weight:700;"></div>' +
        '<div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:4px;">To</label><input type="text" value="DXB" style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:8px;font-family:monospace;font-weight:700;"></div>' +
        '<div><label style="font-size:0.7rem;color:#94a3b8;display:block;margin-bottom:4px;">Date</label><input type="date" style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:8px;font-family:inherit;"></div>' +
        '<button onclick="alert(\'Searching flights...\')" style="background:linear-gradient(135deg,'+s.palette.gs+','+s.palette.ge+');color:#fff;border:none;padding:0.65rem 1.5rem;border-radius:8px;font-weight:700;cursor:pointer;">Search</button></div></div>'; }
    },
    entertainment: {
      label: 'Fun & Entertainment',
      palette: { bg: '#0a0812', primary: '#f472b6', accent: '#a855f7', text: '#fdf4ff', card: 'rgba(255,255,255,0.04)', gs: '#f472b6', ge: '#a855f7' },
      nav: ['Attractions', 'Tickets', 'Events', 'Season Pass', 'Park Map'],
      heroTag: 'EXPERIENCE THE MAGIC',
      heroTitle: function(b){ return b + ' Adventure Park'; },
      heroSub: 'Thrilling rides, live shows, and magical experiences for the whole family.',
      heroCta: 'Get Tickets',
      cards: [
        { title: 'Thrill Rides', desc: 'Hypercoasters, VR experiences, and record-breaking drop towers.' },
        { title: 'Live Entertainment', desc: 'Daily shows, fireworks, character meet-and-greets, and seasonal festivals.' },
        { title: 'Family Zone', desc: 'Splash pads, gentle rides, and interactive play areas for little adventurers.' }
      ],
      extra: function(s){ return '<div class="glass" style="padding:1.25rem;margin-top:2rem;text-align:center;"><div style="font-size:1rem;font-weight:700;color:'+s.palette.primary+';margin-bottom:0.5rem;">Season Pass — Limited Time Offer</div><div style="display:flex;align-items:baseline;justify-content:center;gap:0.5rem;"><span style="font-size:0.9rem;color:#94a3b8;text-decoration:line-through;">$299.99</span><span style="font-size:2rem;font-weight:900;color:'+s.palette.primary+';">$199.99</span></div><div style="color:#94a3b8;font-size:0.85rem;margin-top:0.25rem;">Unlimited visits all year. Includes parking and early access.</div><button onclick="alert(\'Pass added to cart!\')" style="margin-top:1rem;background:linear-gradient(135deg,'+s.palette.gs+','+s.palette.ge+');color:#fff;border:none;padding:0.7rem 2.2rem;border-radius:8px;font-weight:700;cursor:pointer;">Buy Season Pass</button></div>'; }
    }
  };

  /* ─────────────────────────────────────────────────────
     SHARED HTML HEAD
  ───────────────────────────────────────────────────── */
  function sharedHead(brandName, p) {
    return '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>' + brandName + '</title>\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">\n  <style>\n    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: \'Inter\', system-ui, -apple-system, sans-serif; background: '+p.bg+'; color: '+p.text+'; line-height: 1.6; -webkit-font-smoothing: antialiased; }\n    .glass { background: '+p.card+'; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease; }\n    .glass:hover { transform: translateY(-3px); box-shadow: 0 12px 30px '+p.primary+'22; }\n    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n    .fade-in { animation: fadeInUp 0.6s ease both; }\n  </style>';
  }

  /* ─────────────────────────────────────────────────────
     MAIN BUILDER FUNCTION
  ───────────────────────────────────────────────────── */
  function buildFullWebsite(direction, brandName, industryKey, themeKey) {
    var ind = INDUSTRIES[industryKey];
    if (!ind) ind = INDUSTRIES.it;
    var p = ind.palette;
    var bn = brandName || 'Untitled Brand';

    var cardsHTML = ind.cards.map(function(c, i) {
      return '<div class="glass fade-in" style="padding:1.5rem;animation-delay:'+(i*0.12)+'s;"><div style="color:'+p.primary+';margin-bottom:0.5rem;font-weight:800;font-size:1.05rem;">'+c.title+'</div><p style="font-size:0.85rem;color:#94a3b8;line-height:1.5;">'+c.desc+'</p></div>';
    }).join('');

    var extraHTML = '';
    try { extraHTML = ind.extra({palette:p,gs:p.gs,ge:p.ge}); } catch(e){}

    return sharedHead(bn, p) + '\n  <style>\n    header { display:flex; justify-content:space-between; align-items:center; padding:1rem 2.5rem; border-bottom:1px solid rgba(255,255,255,0.06); backdrop-filter:blur(12px); position:sticky; top:0; z-index:10; background:'+p.bg+'ee; }\n    .logo { font-size:1.2rem; font-weight:900; background:linear-gradient(135deg,'+p.gs+','+p.ge+'); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-transform:uppercase; letter-spacing:0.06em; }\n    .nav { display:flex; gap:1.75rem; font-size:0.85rem; color:#94a3b8; }\n    .nav span { cursor:pointer; transition:color 0.2s; } .nav span:hover { color:'+p.primary+'; }\n    .main { padding:2rem 2.5rem; max-width:1100px; margin:0 auto; }\n    .hero { text-align:center; padding:4rem 2rem; background:rgba(255,255,255,0.015); backdrop-filter:blur(12px); border-radius:24px; border:1px solid rgba(255,255,255,0.06); margin-bottom:2.5rem; position:relative; overflow:hidden; }\n    .hero::before { content:""; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background:radial-gradient(ellipse at center, '+p.primary+'08 0%, transparent 70%); pointer-events:none; }\n    .hero-tag { font-family:"JetBrains Mono",monospace; font-size:0.72rem; font-weight:700; color:'+p.primary+'; letter-spacing:0.2em; background:'+p.primary+'15; padding:0.3rem 1rem; border-radius:20px; display:inline-block; margin-bottom:1.25rem; }\n    .hero h1 { font-size:clamp(2rem,5vw,3.2rem); font-weight:900; background:linear-gradient(135deg,'+p.gs+','+p.ge+'); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:1rem; line-height:1.15; }\n    .hero p { color:#94a3b8; max-width:600px; margin:0 auto 1.75rem; font-size:0.95rem; }\n    .btn-primary { background:linear-gradient(135deg,'+p.gs+','+p.ge+'); color:#000; border:none; padding:0.85rem 2.5rem; font-size:0.9rem; font-weight:800; border-radius:12px; cursor:pointer; transition:transform 0.2s,box-shadow 0.2s; text-transform:uppercase; letter-spacing:0.04em; }\n    .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 30px '+p.primary+'44; }\n    .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; margin-bottom:2rem; }\n    .badge-bar { text-align:center; margin-top:2.5rem; font-size:0.6rem; color:#475569; font-family:"JetBrains Mono",monospace; letter-spacing:0.1em; }\n  </style>\n</head>\n<body>\n  <header>\n    <div class="logo">' + bn + '</div>\n    <div class="nav">' + ind.nav.map(function(n){ return '<span>'+n+'</span>'; }).join('') + '</div>\n  </header>\n  <div class="main">\n    <div class="hero fade-in">\n      <div class="hero-tag">' + ind.heroTag + '</div>\n      <h1>' + ind.heroTitle(bn) + '</h1>\n      <p>' + ind.heroSub + '</p>\n      <button class="btn-primary" onclick="alert(\'Welcome to ' + bn.replace(/'/g,"\\'") + '!\')">' + ind.heroCta + '</button>\n    </div>\n    <div class="grid">' + cardsHTML + '</div>\n    ' + extraHTML + '\n    <div class="badge-bar">ENGINEERED BY GENESIS MATRIX AI — SYDAS.X INDUSTRY ARCHITECT v5.0</div>\n  </div>\n</body>\n</html>';
  }

  /* ─────────────────────────────────────────────────────
     PUBLIC API
  ───────────────────────────────────────────────────── */
  window.SYDAS_THEME_ENGINE = {
    INDUSTRIES: INDUSTRIES,
    buildFullWebsite: buildFullWebsite
  };

})();
