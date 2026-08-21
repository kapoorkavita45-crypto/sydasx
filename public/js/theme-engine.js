/**
 * SYDAS.x GENESIS MATRIX — MULTI-SCROLL INDUSTRY ARCHITECT ENGINE v6.0
 * ═════════════════════════════════════════════════════════════════════
 * Generates rich, multi-scroll (3+ viewport) production-grade websites
 * with customized background color, tab/accent colors, font typography,
 * interactive product showcase, seamless Cash-on-Delivery checkout flow,
 * and automated printable digital receipt generator.
 * ═════════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────
     FONT PRESETS DEFINITIONS
  ───────────────────────────────────────────────────── */
  var FONT_PRESETS = {
    inter: {
      name: 'Inter Modern',
      cssFamily: "'Inter', system-ui, -apple-system, sans-serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    },
    outfit: {
      name: 'Outfit Sleek',
      cssFamily: "'Outfit', system-ui, -apple-system, sans-serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap'
    },
    space: {
      name: 'Space Grotesk Cyber',
      cssFamily: "'Space Grotesk', system-ui, sans-serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'
    },
    playfair: {
      name: 'Playfair Luxury Serif',
      cssFamily: "'Playfair Display', Georgia, serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap'
    },
    mono: {
      name: 'JetBrains High-Tech Mono',
      cssFamily: "'JetBrains Mono', monospace",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap'
    },
    jakarta: {
      name: 'Plus Jakarta Neo-Sans',
      cssFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
    },
    syne: {
      name: 'Syne Avant-Garde',
      cssFamily: "'Syne', system-ui, sans-serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&display=swap'
    },
    montserrat: {
      name: 'Montserrat Clean',
      cssFamily: "'Montserrat', system-ui, sans-serif",
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap'
    }
  };

  /* ─────────────────────────────────────────────────────
     INDUSTRY CATALOG — 15 Detailed Verticals with Products
  ───────────────────────────────────────────────────── */
  var INDUSTRIES = {
    footwear: {
      label: 'Footwear & Athletic',
      defaultPalette: { bg: '#08090d', primary: '#ff4d00', accent: '#ff8533', text: '#f5f5f5' },
      nav: ['All Shoes', 'Running', 'Streetwear', 'Limited Drops', 'Order Status'],
      heroTag: 'NEW SEASON RELEASE',
      heroTitle: function(b){ return b + ' Velocity Pro Edition'; },
      heroSub: 'Aerospace-grade cushioning, kinetic energy rebound, and precision fit engineered for champions.',
      heroCta: 'Explore Collection',
      badge: 'Official Flagship Store',
      products: [
        { id: 'fw-1', name: 'Velocity Phantom Nitro', price: 189.99, rating: '4.9 (1,240 reviews)', tag: 'Bestseller', desc: 'Ultra-lightweight foam core with carbon stability plate and breathable mesh upper.', badgeColor: '#ff4d00' },
        { id: 'fw-2', name: 'Air Stride HyperCraft', price: 219.50, rating: '4.8 (890 reviews)', tag: 'New Arrival', desc: 'Adaptive street-to-trail runner with all-weather grip outsole and 360 degree support.', badgeColor: '#00f0ff' },
        { id: 'fw-3', name: 'Apex Matrix Leather High', price: 249.00, rating: '5.0 (420 reviews)', tag: 'Limited Drop', desc: 'Full-grain Italian leather sneaker with hand-stitched detailing and memory comfort insole.', badgeColor: '#a855f7' },
        { id: 'fw-4', name: 'Quantum Glide Cloud 2.0', price: 159.00, rating: '4.7 (2,100 reviews)', tag: 'Popular', desc: 'Everyday high-mileage trainer engineered for maximum knee impact reduction.', badgeColor: '#10b981' }
      ]
    },
    clothing: {
      label: 'Clothing & Fashion',
      defaultPalette: { bg: '#0b0b0f', primary: '#e2c08d', accent: '#c9a96e', text: '#f4f1ea' },
      nav: ['New In', 'Apparel', 'Collections', 'Lookbook', 'Pay on Delivery'],
      heroTag: 'AUTUMN / WINTER COUTURE',
      heroTitle: function(b){ return b + ' Studio Haute Collection'; },
      heroSub: 'Architectural silhouettes, sustainably sourced cashmere, and bespoke tailoring designed for modern distinction.',
      heroCta: 'Shop Lookbook',
      badge: 'Direct from Atelier',
      products: [
        { id: 'cl-1', name: 'Oversized Cashmere Trench Coat', price: 340.00, rating: '4.9 (530 reviews)', tag: 'Exclusive', desc: 'Double-breasted pure wool-cashmere blend with satin lining and horn buttons.', badgeColor: '#e2c08d' },
        { id: 'cl-2', name: 'Minimalist Structured Blazer', price: 220.00, rating: '4.8 (910 reviews)', tag: 'Bestseller', desc: 'Japanese crepe fabric with sharp shoulders and relaxed tailored silhouette.', badgeColor: '#00f0ff' },
        { id: 'cl-3', name: 'Heavyweight Supima Cotton Hoodie', price: 125.00, rating: '4.9 (1,840 reviews)', tag: 'Trending', desc: '500 GSM loopback cotton fleece with custom silver-plated drawcord tips.', badgeColor: '#ff5722' },
        { id: 'cl-4', name: 'Wide-Leg Pleated Tailored Pant', price: 165.00, rating: '4.7 (720 reviews)', tag: 'Staff Pick', desc: 'Fluid drape with front double pleats, concealed side pockets and adjustable waist tabs.', badgeColor: '#10b981' }
      ]
    },
    ecommerce: {
      label: 'E-Commerce & Marketplace',
      defaultPalette: { bg: '#080c14', primary: '#3b82f6', accent: '#60a5fa', text: '#f1f5f9' },
      nav: ['Today Deals', 'Electronics', 'Lifestyle', 'Fast COD Delivery', 'Support'],
      heroTag: 'SUPER SALE LIVE',
      heroTitle: function(b){ return b + ' MegaStore SuperDeals'; },
      heroSub: 'Over 25,000 verified products. Free express courier delivery with 100% Cash on Delivery guarantee.',
      heroCta: 'Browse Mega Deals',
      badge: 'Verified Merchant Network',
      products: [
        { id: 'ec-1', name: 'Quantum Ultra ANC Earbuds Pro', price: 149.99, rating: '4.9 (4,820 reviews)', tag: 'Hot Deal', desc: '48dB Hybrid Noise Cancellation, 36hr battery, wireless fast charging case.', badgeColor: '#3b82f6' },
        { id: 'ec-2', name: 'Smart Titanium 4K Drone GPS', price: 399.00, rating: '4.8 (1,340 reviews)', tag: 'Best Value', desc: '3-axis gimbal 4K HDR camera, 8km transmission, intelligent auto-follow.', badgeColor: '#ff5722' },
        { id: 'ec-3', name: 'MagSafe Wireless Charging Hub 3-in-1', price: 79.99, rating: '4.9 (3,100 reviews)', tag: 'Trending', desc: 'Simultaneous fast charging for Phone, Watch, and AirPods with brushed alloy base.', badgeColor: '#10b981' },
        { id: 'ec-4', name: 'Ultralight Mechanical RGB Keyboard', price: 119.00, rating: '4.8 (2,450 reviews)', tag: 'Top Rated', desc: 'Hot-swappable tactile switches, gasket mount, PBT double-shot keycaps.', badgeColor: '#a855f7' }
      ]
    },
    it: {
      label: 'IT & Consulting Services',
      defaultPalette: { bg: '#060a12', primary: '#00d4aa', accent: '#0ea5e9', text: '#e2e8f0' },
      nav: ['Solutions', 'Cloud Architecture', 'AI Engineering', 'Case Studies', 'Consulting'],
      heroTag: 'ENTERPRISE DIGITAL ARCHITECTURE',
      heroTitle: function(b){ return b + ' Enterprise Cloud & AI'; },
      heroSub: 'Scalable cloud infrastructure, bespoke AI agent development, and zero-trust cybersecurity for modern enterprises.',
      heroCta: 'View Service Packages',
      badge: 'Enterprise Grade SLA',
      products: [
        { id: 'it-1', name: 'Cloud Modernization Sprint Package', price: 1499.00, rating: '5.0 (320 clients)', tag: 'Popular', desc: 'Full cloud readiness audit, containerization blueprint, and automated CI/CD pipeline setup.', badgeColor: '#00d4aa' },
        { id: 'it-2', name: 'Autonomous AI Agent System Setup', price: 2450.00, rating: '4.9 (180 clients)', tag: 'Enterprise', desc: 'Custom LLM workflow with vector memory, CRM integration, and 24/7 automated operations.', badgeColor: '#00f0ff' },
        { id: 'it-3', name: 'Zero-Trust Cybersecurity Hardening', price: 1850.00, rating: '5.0 (410 clients)', tag: 'Essential', desc: 'Penetration testing, identity governance, automated threat detection, and compliance report.', badgeColor: '#a855f7' },
        { id: 'it-4', name: 'High-Performance API Microservices Suite', price: 1200.00, rating: '4.8 (290 clients)', tag: 'Fast Deploy', desc: 'Sub-10ms latency REST & GraphQL gateways with Redis caching and real-time telemetry.', badgeColor: '#eab308' }
      ]
    },
    jewellery: {
      label: 'Jewellery & Luxury Goods',
      defaultPalette: { bg: '#090806', primary: '#d4af37', accent: '#f5d060', text: '#faf8f0' },
      nav: ['Diamonds', 'High Jewellery', 'Watches', 'Bespoke Gifts', 'Certificate of Origin'],
      heroTag: 'MASTER ARTISAN CREATIONS',
      heroTitle: function(b){ return b + ' Royal Solitaire Haute Jewels'; },
      heroSub: 'Ethically sourced GIA-certified diamonds and hand-forged 18K solid gold crafted to be treasured for generations.',
      heroCta: 'Explore Jewels',
      badge: '100% Certified Authentic',
      products: [
        { id: 'jw-1', name: 'Celestial Radiant Solitaire Ring 18K', price: 890.00, rating: '5.0 (210 reviews)', tag: 'Signature', desc: '1.5 Carat VVS1 laboratory solitaire set in solid 18K recycled white gold with pavé band.', badgeColor: '#d4af37' },
        { id: 'jw-2', name: 'Aura Diamond Tennis Necklace Platinum', price: 1450.00, rating: '4.9 (140 reviews)', tag: 'Prestige', desc: '5.0 Total Carat Weight brilliant cut diamonds set in 950 pure platinum gallery.', badgeColor: '#f5d060' },
        { id: 'jw-3', name: 'Eternity Emerald Cut Bangle Gold', price: 620.00, rating: '4.9 (390 reviews)', tag: 'Bestseller', desc: 'Hand-polished solid 18K yellow gold hinge bangle accented with bezel set stones.', badgeColor: '#00f0ff' },
        { id: 'jw-4', name: 'Chronos Sapphire Heritage Watch', price: 1150.00, rating: '5.0 (180 reviews)', tag: 'Limited Edition', desc: 'Swiss automatic mechanical movement, scratchproof sapphire crystal, ceramic bezel.', badgeColor: '#a855f7' }
      ]
    },
    dinein: {
      label: 'Dine-In & Fine Gastronomy',
      defaultPalette: { bg: '#0a0806', primary: '#c8553d', accent: '#e07a5f', text: '#fbf7f4' },
      nav: ['Tasting Menus', 'Wine Cellar', 'Chef Specials', 'Private Dining', 'Reserve Table'],
      heroTag: 'MICHELIN-INSPIRED CULINARY',
      heroTitle: function(b){ return b + ' Steakhouse & Wine Bar'; },
      heroSub: 'Dry-aged prime steaks, coastal seafood flown in daily, and curated vintage wine cellar selections.',
      heroCta: 'Order Gourmet Box',
      badge: 'Chef Award Winner 2026',
      products: [
        { id: 'di-1', name: 'Prime Dry-Aged Tomahawk Experience Kit', price: 165.00, rating: '4.9 (680 reviews)', tag: 'Chef Choice', desc: '45-day dry-aged 36oz bone-in ribeye, truffle butter, herb finishing salt, and sauce glaze.', badgeColor: '#c8553d' },
        { id: 'di-2', name: 'Artisan Black Truffle & Wagyu Tasting Set', price: 135.00, rating: '5.0 (490 reviews)', tag: 'Exclusive', desc: 'A5 Miyazaki Wagyu medallions with fresh shaved black truffles and potato gratin.', badgeColor: '#e07a5f' },
        { id: 'di-3', name: 'Wild Atlantic Lobster Tail & Caviar Duo', price: 145.00, rating: '4.8 (340 reviews)', tag: 'Seasonal', desc: 'Two jumbo cold-water lobster tails with Oscietra caviar and clarified lemon butter.', badgeColor: '#00f0ff' },
        { id: 'di-4', name: 'Sommelier Grand Reserve Wine Pairing Duo', price: 95.00, rating: '4.9 (820 reviews)', tag: 'Top Rated', desc: 'Two hand-selected vintage bottles from Bordeaux and Napa Valley with pairing tasting notes.', badgeColor: '#a855f7' }
      ]
    },
    hotels: {
      label: 'Hotels & Luxury Resorts',
      defaultPalette: { bg: '#080a10', primary: '#b08d57', accent: '#d4a76a', text: '#f0ece4' },
      nav: ['Suites & Villas', 'Thermal Spa', 'Experiences', 'Exclusive Dining', 'Book Stay'],
      heroTag: '5-STAR SANCTUARY',
      heroTitle: function(b){ return b + ' Grand Palace & Spa'; },
      heroSub: 'Panoramic oceanfront vistas, personalized butler concierge, private thermal plunge pools, and tranquility.',
      heroCta: 'Explore Suites',
      badge: 'Forbes 5-Star Certified',
      products: [
        { id: 'ht-1', name: 'Weekend Presidential Suite Getaway Pass', price: 599.00, rating: '5.0 (310 guests)', tag: 'VIP Pass', desc: 'All-inclusive 2-night luxury suite voucher, champagne reception, and daily spa circuit.', badgeColor: '#b08d57' },
        { id: 'ht-2', name: 'Thermal Spa & Wellness Day Retreat', price: 180.00, rating: '4.9 (890 guests)', tag: 'Popular', desc: 'Full-day thermal hydrotherapy access, 90-minute aromatherapy massage, and chef lunch.', badgeColor: '#d4a76a' },
        { id: 'ht-3', name: 'Romantic Oceanfront Sunset Dinner Box', price: 140.00, rating: '4.9 (620 guests)', tag: 'Romance', desc: '5-course private seaside table setup with vintage champagne and personalized menu.', badgeColor: '#00f0ff' },
        { id: 'ht-4', name: 'Executive Heli-Tour & Airport Transfer', price: 350.00, rating: '5.0 (190 guests)', tag: 'Luxury', desc: 'VIP helicopter shuttle from terminal directly to resort rooftop helipad.', badgeColor: '#a855f7' }
      ]
    },
    restaurants: {
      label: 'Restaurants & Gourmet Kitchens',
      defaultPalette: { bg: '#0d0b07', primary: '#e8a838', accent: '#f0c050', text: '#f7f2ea' },
      nav: ['Daily Specials', 'Gourmet Mains', 'Family Feasts', 'Desserts', 'Order COD'],
      heroTag: 'FRESHLY PREPARED DAILY',
      heroTitle: function(b){ return b + ' Artisan Kitchen & Grill'; },
      heroSub: 'Handcrafted brioche burgers, slow-smoked Texas BBQ brisket, and stone-fired artisan pizzas.',
      heroCta: 'Order Delicious Food',
      badge: '30-Min Fast Delivery',
      products: [
        { id: 'rs-1', name: 'The Ultimate Double Truffle Smashburger Box', price: 28.50, rating: '4.9 (3,400 reviews)', tag: 'Bestseller', desc: 'Double Wagyu smash patties, aged Gruyere, shaved black truffle mayo, brioche bun + seasoned waffle fries.', badgeColor: '#e8a838' },
        { id: 'rs-2', name: '16-Hour Hickory Smoked Brisket Platter', price: 38.00, rating: '5.0 (2,100 reviews)', tag: 'Signature', desc: 'Half-pound tender prime beef brisket, tangy Texas BBQ sauce, jalapeño cornbread, and creamy slaw.', badgeColor: '#ff5722' },
        { id: 'rs-3', name: 'San Marzano Stone-Fired Truffle Burrata Pizza', price: 24.00, rating: '4.8 (1,890 reviews)', tag: 'Popular', desc: '72-hr fermented dough, D.O.P. San Marzano tomatoes, fresh whole burrata, wild mushrooms, basil oil.', badgeColor: '#00f0ff' },
        { id: 'rs-4', name: 'Artisan Churros & Salted Caramel Dip Platter', price: 16.00, rating: '4.9 (4,200 reviews)', tag: 'Must Try', desc: 'Crispy cinnamon sugar Spanish churros with Belgian dark chocolate and Madagascar vanilla cream.', badgeColor: '#10b981' }
      ]
    },
    portfolios: {
      label: 'Personal Portfolio & Creative Studio',
      defaultPalette: { bg: '#07070b', primary: '#a78bfa', accent: '#c084fc', text: '#f1f5f9' },
      nav: ['Selected Works', 'Client Case Studies', 'Design Systems', 'Consultation', 'Hire Me'],
      heroTag: 'CREATIVE DIRECTOR & LEAD ARCHITECT',
      heroTitle: function(b){ return b + ' — Digital Experiences & Engineering'; },
      heroSub: 'Crafting award-winning interactive websites, SaaS applications, and cutting-edge brand systems with surgical precision.',
      heroCta: 'Order Studio Package',
      badge: 'Available for Select Projects',
      products: [
        { id: 'pf-1', name: 'Custom Brand & Website Design System Sprint', price: 950.00, rating: '5.0 (48 clients)', tag: 'Complete', desc: 'Full Figma design system, bespoke brand guidelines, interactive prototype, and handoff files.', badgeColor: '#a78bfa' },
        { id: 'pf-2', name: 'Full-Stack High-Conversion Web App Build', price: 1750.00, rating: '5.0 (34 clients)', tag: 'Flagship', desc: 'Production Next.js or Astro web application with seamless animations and payment terminal.', badgeColor: '#00f0ff' },
        { id: 'pf-3', name: 'UI/UX Performance & Conversion Optimization Audit', price: 450.00, rating: '4.9 (72 clients)', tag: 'High Impact', desc: 'Comprehensive heuristic evaluation, CWV speed fixes, and A/B conversion layout roadmap.', badgeColor: '#10b981' },
        { id: 'pf-4', name: '1-on-1 Senior Architectural Advisory (4 Hours)', price: 350.00, rating: '5.0 (90 clients)', tag: 'Advisory', desc: 'Direct technical coaching, architecture validation, and tech stack scaling strategies.', badgeColor: '#f59e0b' }
      ]
    },
    security: {
      label: 'Security & Enterprise Defense',
      defaultPalette: { bg: '#04070d', primary: '#22d3ee', accent: '#06b6d4', text: '#e2e8f0' },
      nav: ['Shield Suite', 'Hardware Keys', 'Endpoint Protection', 'Compliance', 'Get Hardware'],
      heroTag: 'MILITARY-GRADE CYBER DEFENSE',
      heroTitle: function(b){ return b + ' Zero-Trust Threat Matrix'; },
      heroSub: 'Hardware security modules, encrypted field devices, and real-time AI security operations safeguarding millions.',
      heroCta: 'Order Security Hardware',
      badge: 'SOC2 Type II & FedRAMP Certified',
      products: [
        { id: 'sc-1', name: 'CyberShield Pro Hardware Cryptographic Token', price: 129.00, rating: '4.9 (3,100 units)', tag: 'Hardware', desc: 'FIPS 140-3 Level 3 certified NFC & USB-C security key with biometric fingerprint scanner.', badgeColor: '#22d3ee' },
        { id: 'sc-2', name: 'Encrypted Router Firewall Gateway Appliance', price: 299.00, rating: '5.0 (1,450 units)', tag: 'Enterprise', desc: 'Hardware-level DPI packet inspection, automatic WireGuard VPN mesh, and AI intrusion shield.', badgeColor: '#00f0ff' },
        { id: 'sc-3', name: 'Tamper-Proof Cold Storage Vault Case', price: 89.00, rating: '4.9 (5,200 units)', tag: 'Essential', desc: 'Aviation titanium alloy seed phrase storage block, fireproof to 1600C and waterproof.', badgeColor: '#10b981' },
        { id: 'sc-4', name: 'Enterprise Endpoint 25-Seat Protection Pack', price: 450.00, rating: '4.8 (890 companies)', tag: 'Team Suite', desc: 'Real-time AI malware prevention, ransomware rollback, and centralized cloud dashboard.', badgeColor: '#a855f7' }
      ]
    },
    grocery: {
      label: 'Grocery & Organic Market',
      defaultPalette: { bg: '#080d08', primary: '#22c55e', accent: '#4ade80', text: '#f0fdf4' },
      nav: ['Farm Fresh Produce', 'Organic Pantry', 'Artisan Bakery', 'Weekly Boxes', 'Free COD Delivery'],
      heroTag: 'FARM-TO-DOORSTEP IN 2 HOURS',
      heroTitle: function(b){ return b + ' Organic Fresh Market'; },
      heroSub: '100% Certified organic produce harvested at sunrise. No credit card needed — inspect freshness and pay at your doorstep!',
      heroCta: 'Order Fresh Box',
      badge: '100% Organic & Non-GMO',
      products: [
        { id: 'gr-1', name: 'Seasonal Organic Harvest Mega Box (15kg)', price: 49.99, rating: '4.9 (6,800 families)', tag: 'Bestseller', desc: 'Farm-fresh organic apples, avocados, leafy greens, berries, heirloom carrots, and farm eggs.', badgeColor: '#22c55e' },
        { id: 'gr-2', name: 'Artisan Sourdough & Specialty Cheese Basket', price: 34.50, rating: '5.0 (2,400 orders)', tag: 'Fresh Baked', desc: 'Warm sourdough loaves, aged farmhouse cheddar, French brie, and organic raw wildflower honey.', badgeColor: '#eab308' },
        { id: 'gr-3', name: 'Grass-Fed Angus & Pasture Poultry Bundle', price: 65.00, rating: '4.9 (1,920 orders)', tag: 'Premium', desc: 'Vacuum-sealed antibiotic-free chicken breasts, grass-fed ribeyes, and pasture ground beef.', badgeColor: '#ff5722' },
        { id: 'gr-4', name: 'Cold-Pressed Immunity Juice Pack (6 Bottles)', price: 29.00, rating: '4.8 (4,100 orders)', tag: 'Healthy', desc: '100% raw unpasteurized ginger, turmeric, celery, green apple, and beetroot cold-pressed elixirs.', badgeColor: '#00f0ff' }
      ]
    },
    construction: {
      label: 'Building & Construction Group',
      defaultPalette: { bg: '#0a0907', primary: '#f59e0b', accent: '#fbbf24', text: '#f7f6f0' },
      nav: ['Mega Projects', 'Engineering Materials', 'Architecture Services', 'Equipment Hire', 'Quote & Delivery'],
      heroTag: 'PRECISION INFRASTRUCTURE & MATERIALS',
      heroTitle: function(b){ return b + ' Industrial Infrastructure Group'; },
      heroSub: 'Engineering commercial towers, certified structural materials, and high-performance building solutions.',
      heroCta: 'Order Materials',
      badge: 'ISO 9001 Quality Certified',
      products: [
        { id: 'cn-1', name: 'High-Strength Fiber-Reinforced Concrete Mix (1 Ton)', price: 185.00, rating: '4.9 (820 contractors)', tag: 'Structural', desc: 'High-early-strength certified structural cement with crack-resistant polymer microfibers.', badgeColor: '#f59e0b' },
        { id: 'cn-2', name: 'Commercial Laser Distance Meter & 3D Level Kit', price: 240.00, rating: '5.0 (1,340 pros)', tag: 'Precision', desc: '150m range Bluetooth CAD measurement device with green cross-line self-leveling laser.', badgeColor: '#00f0ff' },
        { id: 'cn-3', name: 'Heavy-Duty Waterproofing Membrane Roll (50m)', price: 145.00, rating: '4.8 (950 orders)', tag: 'Essential', desc: 'Dual-layer elastomeric foundation and rooftop seal with 25-year manufacturer warranty.', badgeColor: '#10b981' },
        { id: 'cn-4', name: 'Professional Site Safety Equipment Pack (10 Sets)', price: 299.00, rating: '4.9 (2,100 sites)', tag: 'OSHA Compliant', desc: 'ANSI Type 1 hard hats, high-vis vests, anti-fog eye shields, and cut-resistant work gloves.', badgeColor: '#ff5722' }
      ]
    },
    machinery: {
      label: 'Machinery & Heavy Equipment',
      defaultPalette: { bg: '#0a0906', primary: '#eab308', accent: '#facc15', text: '#fefce8' },
      nav: ['Earthmoving', 'Generators & Power', 'Attachments', 'Spare Parts', 'Direct Order'],
      heroTag: 'BUILT TO WITHSTAND ANY TERRAIN',
      heroTitle: function(b){ return b + ' Heavy Industries & Equipment'; },
      heroSub: 'Industrial generators, hydraulic earthmoving attachments, and precision heavy equipment parts with on-site COD dispatch.',
      heroCta: 'Explore Equipment',
      badge: 'Global Dealer Network',
      products: [
        { id: 'mc-1', name: 'Industrial Silent Diesel Generator 15kVA', price: 850.00, rating: '4.9 (420 units)', tag: 'Heavy Duty', desc: 'Water-cooled 4-stroke diesel engine with soundproof canopy, electric key start, and ATS port.', badgeColor: '#eab308' },
        { id: 'mc-2', name: 'Universal Excavator Hydraulic Auger Attachment', price: 420.00, rating: '4.8 (690 units)', tag: 'High Torque', desc: 'Forged alloy planetary gearbox with tungsten carbide teeth for solid rock drilling.', badgeColor: '#ff5722' },
        { id: 'mc-3', name: 'Heavy-Duty 20-Ton Hydraulic Shop Press', price: 290.00, rating: '5.0 (1,150 workshops)', tag: 'Workshop', desc: 'Reinforced H-frame steel body, dual speed pump, and precision pressure gauge meter.', badgeColor: '#00f0ff' },
        { id: 'mc-4', name: 'Commercial All-Terrain Plate Compactor 6.5HP', price: 380.00, rating: '4.9 (980 orders)', tag: 'Best Value', desc: 'Gasoline powered 4000 lbs centrifugal force vibratory compactor for soil, gravel, and asphalt.', badgeColor: '#10b981' }
      ]
    },
    aerospace: {
      label: 'Aerospace & Aviation Services',
      defaultPalette: { bg: '#050810', primary: '#dc2626', accent: '#ef4444', text: '#f1f5f9' },
      nav: ['Private Flights', 'Aviation Gear', 'Pilot Supplies', 'Aircraft Care', 'Book Charter'],
      heroTag: 'ENGINEERED FOR 45,000 FEET',
      heroTitle: function(b){ return b + ' Aviation & Skyway Services'; },
      heroSub: 'Private air charter vouchers, avionics navigation gear, and luxury pilot flight bags dispatched worldwide.',
      heroCta: 'View Flight Gear',
      badge: 'FAA & EASA Compliant',
      products: [
        { id: 'ae-1', name: 'AeroPro Carbon ANC Aviation Pilot Headset', price: 480.00, rating: '5.0 (1,820 pilots)', tag: 'Top Rated', desc: 'Dual GA plugs, Bluetooth stereo audio, ultra-light magnesium ear cups, active noise reduction.', badgeColor: '#dc2626' },
        { id: 'ae-2', name: 'Private Jet Empty-Leg Charter Weekend Voucher', price: 1200.00, rating: '4.9 (340 bookings)', tag: 'VIP Charter', desc: 'Up to 6 passengers on a midsize luxury jet between regional hubs. Fully catered cabin.', badgeColor: '#00f0ff' },
        { id: 'ae-3', name: 'Titanium Flight Chronograph Tachymeter Watch', price: 390.00, rating: '4.9 (910 reviews)', tag: 'Aviation', desc: 'Rotating E6B slide rule bezel, Swiss quartz chronograph movement, night vision lume.', badgeColor: '#eab308' },
        { id: 'ae-4', name: 'Pilot Leather Flight Bag with Headset Pocket', price: 160.00, rating: '4.8 (2,400 pilots)', tag: 'Classic', desc: 'Heavy grain buffalo leather, padded iPad/EFB compartment, reinforced brass hardware.', badgeColor: '#10b981' }
      ]
    },
    entertainment: {
      label: 'Fun & Entertainment Parks',
      defaultPalette: { bg: '#090612', primary: '#f472b6', accent: '#a855f7', text: '#fdf4ff' },
      nav: ['Season Passes', 'VIP FastPass', 'Attraction Tickets', 'Arcade Credits', 'Get Tickets'],
      heroTag: 'THRILLS & UNFORGETTABLE MEMORIES',
      heroTitle: function(b){ return b + ' Mega Adventure Parks'; },
      heroSub: 'World-record rollercoasters, immersive virtual reality pavilions, live spectacles, and family waterparks.',
      heroCta: 'Order Season Pass',
      badge: 'World Theme Park Award',
      products: [
        { id: 'en-1', name: 'Annual All-Park Ultimate Season VIP Pass', price: 199.99, rating: '5.0 (8,400 guests)', tag: 'Best Value', desc: 'Unlimited 365-day admission, free preferred parking, 20% merchandise discount, and early access.', badgeColor: '#f472b6' },
        { id: 'en-2', name: 'Family Weekend All-Access Pass (4 Persons)', price: 149.00, rating: '4.9 (12,100 families)', tag: 'Family Pack', desc: 'Two full days of rides, waterpark admission, and $50 complimentary food voucher included.', badgeColor: '#a855f7' },
        { id: 'en-3', name: 'FastTrack Unlimited Ride Skip-the-Line Wristband', price: 79.00, rating: '4.8 (15,200 passes)', tag: 'Skip Lines', desc: 'Direct priority lane entrance on all 24 major thrill rollercoasters with zero wait time.', badgeColor: '#00f0ff' },
        { id: 'en-4', name: 'Mega Arcade 1000-Token Power Play Card', price: 45.00, rating: '4.9 (9,600 gamers)', tag: 'Arcade', desc: '1,000 game credits usable at all VR stations, racing simulators, and redemption prize halls.', badgeColor: '#10b981' }
      ]
    }
  };

  /* ─────────────────────────────────────────────────────
     BUILDER FUNCTION
     Accepts custom styling overrides:
     - brandName: string
     - industryKey: string
     - bgColor: custom hex or preset
     - primaryColor: tab/accent hex
     - accentColor: secondary accent hex
     - fontKey: font preset key
  ───────────────────────────────────────────────────── */
  function buildFullWebsite(direction, brandName, industryKey, options) {
    var opts = options || {};
    var ind = INDUSTRIES[industryKey] || INDUSTRIES.ecommerce;
    var bn = brandName || 'Genesis Store';

    // Palette with custom user overrides
    var p = {
      bg: opts.bgColor || ind.defaultPalette.bg,
      primary: opts.primaryColor || ind.defaultPalette.primary,
      accent: opts.accentColor || ind.defaultPalette.accent,
      text: opts.textColor || (opts.bgColor && (opts.bgColor === '#f8fafc' || opts.bgColor === '#faf7f2') ? '#0f172a' : '#f8fafc'),
      card: opts.bgColor && (opts.bgColor === '#f8fafc' || opts.bgColor === '#faf7f2') ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
      cardBorder: opts.bgColor && (opts.bgColor === '#f8fafc' || opts.bgColor === '#faf7f2') ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
      gs: opts.primaryColor || ind.defaultPalette.primary,
      ge: opts.accentColor || ind.defaultPalette.accent
    };

    // Font with custom user overrides
    var fontKey = opts.fontKey || 'inter';
    var fontObj = FONT_PRESETS[fontKey] || FONT_PRESETS.inter;

    var products = ind.products || [];

    // Generate Products HTML
    var productsHTML = products.map(function (prod, i) {
      return `
        <div class="product-card glass" id="prod-card-${prod.id}">
          <div class="prod-badge-bar">
            <span class="prod-tag" style="background: ${p.primary}22; color: ${p.primary}; border: 1px solid ${p.primary}44;">${prod.tag}</span>
            <span class="prod-star">★ ${prod.rating}</span>
          </div>
          <div class="prod-preview-box" style="background: linear-gradient(135deg, ${p.primary}18, ${p.accent}08); border-color: ${p.primary}33;">
            <div class="prod-cube-icon" style="color: ${p.primary};">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="prod-watermark">${bn}</span>
          </div>
          <h3 class="prod-title">${prod.name}</h3>
          <p class="prod-desc">${prod.desc}</p>
          <div class="prod-footer">
            <div class="prod-price-box">
              <span class="prod-price-label">Cash on Delivery:</span>
              <span class="prod-price" style="color: ${p.primary};">$${prod.price.toFixed(2)}</span>
            </div>
            <button class="btn-buy-cod" onclick="selectProductForCheckout('${prod.id}', '${prod.name.replace(/'/g, "\\'")}', ${prod.price})" style="background: linear-gradient(135deg, ${p.gs}, ${p.ge}); color: #000;">
              <span>Order Now (COD) →</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bn} — Official Store & Services</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontObj.googleFontUrl}" rel="stylesheet">
  
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: ${fontObj.cssFamily};
      background-color: ${p.bg};
      color: ${p.text};
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Ambient Background Glows */
    .glow-blob {
      position: fixed;
      border-radius: 50%;
      filter: blur(140px);
      opacity: 0.18;
      pointer-events: none;
      z-index: 0;
    }
    .blob-1 { top: -100px; left: -100px; width: 600px; height: 600px; background: ${p.primary}; }
    .blob-2 { bottom: 20%; right: -150px; width: 700px; height: 700px; background: ${p.accent}; }

    /* Glass Panels */
    .glass {
      background: ${p.card};
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid ${p.cardBorder};
      border-radius: 18px;
    }

    /* Announcement Top Bar */
    .top-bar {
      background: linear-gradient(90deg, ${p.primary}33, ${p.accent}33);
      border-bottom: 1px solid ${p.primary}44;
      padding: 0.5rem 1rem;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.05em;
      position: relative;
      z-index: 50;
    }
    .top-bar strong { color: ${p.primary}; }

    /* Sticky Header */
    header {
      position: sticky;
      top: 0;
      z-index: 40;
      background: ${p.bg}dd;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-logo {
      font-size: 1.35rem;
      font-weight: 900;
      letter-spacing: 0.03em;
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
      font-size: 0.88rem;
      font-weight: 600;
      color: #94a3b8;
    }
    .nav-links a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: ${p.primary};
    }
    .header-cta {
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 800;
      font-size: 0.85rem;
      padding: 0.55rem 1.25rem;
      border-radius: 12px;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .header-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px ${p.primary}55;
    }

    /* Main Container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      position: relative;
      z-index: 10;
    }

    /* Hero Section (Scroll 1) */
    .hero {
      padding: 5rem 0 3.5rem;
      text-align: center;
    }
    .hero-tag {
      display: inline-block;
      padding: 0.35rem 1rem;
      border-radius: 30px;
      background: ${p.primary}18;
      border: 1px solid ${p.primary}44;
      color: ${p.primary};
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      margin-bottom: 1.25rem;
    }
    .hero h1 {
      font-size: clamp(2.2rem, 5.5vw, 4rem);
      font-weight: 900;
      line-height: 1.15;
      margin-bottom: 1.25rem;
      background: linear-gradient(135deg, #ffffff 30%, ${p.primary} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      font-size: 1.1rem;
      color: #94a3b8;
      max-width: 700px;
      margin: 0 auto 2rem;
      line-height: 1.6;
    }
    .hero-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }
    .btn-hero-primary {
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 800;
      font-size: 1rem;
      padding: 0.9rem 2.2rem;
      border-radius: 14px;
      text-decoration: none;
      transition: all 0.25s ease;
      box-shadow: 0 10px 30px ${p.primary}44;
    }
    .btn-hero-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 40px ${p.primary}66;
    }
    .btn-hero-secondary {
      background: rgba(255,255,255,0.06);
      color: #ffffff;
      font-weight: 700;
      font-size: 1rem;
      padding: 0.9rem 2rem;
      border-radius: 14px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.12);
      transition: all 0.25s ease;
    }
    .btn-hero-secondary:hover {
      background: rgba(255,255,255,0.12);
      border-color: ${p.primary};
    }

    /* Trust Metrics Grid */
    .metrics-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.25rem;
      margin-bottom: 4.5rem;
    }
    .metric-card {
      padding: 1.5rem;
      text-align: center;
      border-radius: 16px;
    }
    .metric-val {
      font-size: 2rem;
      font-weight: 900;
      color: ${p.primary};
      margin-bottom: 0.25rem;
    }
    .metric-label {
      font-size: 0.85rem;
      color: #94a3b8;
      font-weight: 600;
    }

    /* Products Section (Scroll 2) */
    .section-title-wrap {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .sec-badge {
      color: ${p.primary};
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      display: block;
    }
    .sec-title {
      font-size: 2.3rem;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 1.75rem;
      margin-bottom: 5rem;
    }
    .product-card {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 40px ${p.primary}22;
      border-color: ${p.primary}66;
    }
    .prod-badge-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .prod-tag {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 20px;
    }
    .prod-star {
      font-size: 0.75rem;
      color: #fbbf24;
      font-weight: 700;
    }
    .prod-preview-box {
      height: 150px;
      border-radius: 14px;
      border: 1px dashed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      position: relative;
      overflow: hidden;
    }
    .prod-watermark {
      font-size: 0.7rem;
      color: #94a3b8;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-top: 0.5rem;
      opacity: 0.6;
    }
    .prod-title {
      font-size: 1.2rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    .prod-desc {
      font-size: 0.85rem;
      color: #94a3b8;
      margin-bottom: 1.5rem;
      line-height: 1.5;
      flex-grow: 1;
    }
    .prod-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
      border-top: 1px solid rgba(255,255,255,0.06);
      padding-top: 1rem;
    }
    .prod-price-label {
      display: block;
      font-size: 0.68rem;
      color: #94a3b8;
    }
    .prod-price {
      font-size: 1.35rem;
      font-weight: 900;
    }
    .btn-buy-cod {
      border: none;
      padding: 0.7rem 1.2rem;
      border-radius: 10px;
      font-size: 0.85rem;
      font-weight: 800;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-buy-cod:hover {
      transform: scale(1.04);
      box-shadow: 0 6px 20px ${p.primary}55;
    }

    /* Checkout & Pay on Delivery Terminal (Scroll 3) */
    .checkout-section {
      padding: 3rem 0 5rem;
    }
    .checkout-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 2rem;
      align-items: start;
    }
    @media (max-width: 868px) {
      .checkout-grid { grid-template-columns: 1fr; }
    }

    .checkout-card {
      padding: 2rem;
    }
    .cod-guarantee-badge {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: ${p.primary}15;
      border: 1px solid ${p.primary}44;
      padding: 0.85rem 1rem;
      border-radius: 12px;
      margin-bottom: 1.5rem;
      color: ${p.text};
      font-size: 0.85rem;
      font-weight: 600;
    }
    .cod-icon-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${p.primary};
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      flex-shrink: 0;
    }

    .form-group {
      margin-bottom: 1rem;
    }
    .form-group label {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      color: #cbd5e1;
      margin-bottom: 0.35rem;
    }
    .form-input {
      width: 100%;
      padding: 0.8rem 1rem;
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      color: #ffffff;
      font-family: inherit;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .form-input:focus {
      border-color: ${p.primary};
      box-shadow: 0 0 15px ${p.primary}33;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .order-summary-box {
      background: rgba(0,0,0,0.25);
      border-radius: 14px;
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .summary-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
      font-size: 0.88rem;
      color: #94a3b8;
    }
    .summary-line.total {
      font-size: 1.15rem;
      font-weight: 900;
      color: #ffffff;
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 0.8rem;
      margin-top: 0.8rem;
    }
    .btn-submit-order {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 900;
      font-size: 1.05rem;
      border: none;
      border-radius: 14px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-submit-order:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px ${p.primary}66;
    }

    /* Digital Receipt Modal / View */
    .receipt-container {
      background: #0f1118;
      border: 2px solid ${p.primary};
      border-radius: 20px;
      padding: 2.25rem;
      color: #f1f5f9;
      box-shadow: 0 20px 60px rgba(0,0,0,0.8);
      position: relative;
    }
    .receipt-header {
      text-align: center;
      border-bottom: 1px dashed rgba(255,255,255,0.15);
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .receipt-check-icon {
      width: 54px;
      height: 54px;
      background: ${p.primary};
      color: #000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      font-weight: 900;
      margin: 0 auto 1rem;
    }
    .receipt-id {
      font-family: monospace;
      font-size: 0.85rem;
      color: ${p.primary};
      background: ${p.primary}18;
      padding: 0.25rem 0.75rem;
      border-radius: 8px;
      display: inline-block;
      margin-top: 0.5rem;
    }
    .receipt-table {
      width: 100%;
      margin: 1.25rem 0;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .receipt-table th, .receipt-table td {
      padding: 0.6rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .receipt-table th { color: #94a3b8; text-align: left; font-size: 0.78rem; text-transform: uppercase; }
    .receipt-table td.amount { text-align: right; font-weight: 700; }
    .receipt-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1.75rem;
    }
    .btn-receipt {
      flex: 1;
      padding: 0.8rem;
      border-radius: 10px;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      text-align: center;
      border: none;
    }
    .btn-receipt-print {
      background: ${p.primary};
      color: #000;
    }
    .btn-receipt-new {
      background: rgba(255,255,255,0.08);
      color: #fff;
    }

    /* FAQ Section */
    .faq-section {
      padding: 3rem 0 5rem;
    }
    .faq-grid {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .faq-item {
      padding: 1.25rem 1.5rem;
      cursor: pointer;
      transition: border-color 0.2s;
    }
    .faq-item:hover {
      border-color: ${p.primary}66;
    }
    .faq-q {
      font-size: 1.05rem;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .faq-a {
      font-size: 0.9rem;
      color: #94a3b8;
      margin-top: 0.75rem;
      line-height: 1.5;
    }

    /* Footer */
    footer {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 3.5rem 0 2rem;
      background: ${p.bg};
      text-align: center;
      color: #64748b;
      font-size: 0.85rem;
    }
    .footer-brand {
      font-size: 1.3rem;
      font-weight: 900;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
    .footer-cod-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 1rem;
      border-radius: 20px;
      background: ${p.primary}15;
      color: ${p.primary};
      font-weight: 700;
      font-size: 0.8rem;
      margin-bottom: 1.5rem;
    }
  </style>
</head>
<body>

  <!-- Ambient Glow Backgrounds -->
  <div class="glow-blob blob-1"></div>
  <div class="glow-blob blob-2"></div>

  <!-- Announcement Bar -->
  <div class="top-bar">
    ⚡ <strong>ZERO RISK SHOPPING:</strong> 100% Pay on Delivery (Cash / POS on Arrival) &bull; Free Nationwide Delivery &bull; 7-Day Easy Replacement
  </div>

  <!-- Main Navigation Header -->
  <header>
    <div class="brand-logo">${bn}</div>
    <nav class="nav-links">
      <a href="#products">Products</a>
      <a href="#checkout-section">Pay on Delivery</a>
      <a href="#faqs">How COD Works</a>
      <a href="#reviews">Verified Reviews</a>
    </nav>
    <a href="#checkout-section" class="header-cta">Quick Order (COD)</a>
  </header>

  <main class="container">

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- SCROLL 1: HERO & KEY VALUE PROPOSITION                      -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section class="hero">
      <span class="hero-tag">${ind.heroTag}</span>
      <h1>${ind.heroTitle(bn)}</h1>
      <p>${ind.heroSub}</p>

      <div class="hero-actions">
        <a href="#products" class="btn-hero-primary">Browse Catalog →</a>
        <a href="#checkout-section" class="btn-hero-secondary">Instant Pay on Delivery</a>
      </div>

      <!-- Trust Metrics Bar -->
      <div class="metrics-bar">
        <div class="metric-card glass">
          <div class="metric-val">100%</div>
          <div class="metric-label">Pay on Delivery (Zero Advance)</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-val">24-48h</div>
          <div class="metric-label">Express Doorstep Dispatch</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-val">4.9 / 5</div>
          <div class="metric-label">Customer Satisfaction Rating</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-val">50,000+</div>
          <div class="metric-label">Verified Deliveries Handled</div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- SCROLL 2: INTERACTIVE PRODUCT CATALOG                      -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="products" style="padding: 2rem 0;">
      <div class="section-title-wrap">
        <span class="sec-badge">FEATURED CATALOG</span>
        <h2 class="sec-title">Select Your Item & Pay on Arrival</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-top: 0.5rem;">Click "Order Now" on any product to automatically populate the Pay on Delivery checkout below.</p>
      </div>

      <div class="products-grid">
        ${productsHTML}
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- SCROLL 3: SEAMLESS CHECKOUT TERMINAL (COD ONLY) & RECEIPT   -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="checkout-section" class="checkout-section">
      <div class="section-title-wrap">
        <span class="sec-badge">100% SECURE CHECKOUT</span>
        <h2 class="sec-title">Pay on Delivery Order Terminal</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-top: 0.5rem;">No credit cards or bank details requested. Pay only when your package arrives in your hands.</p>
      </div>

      <!-- Live Checkout Active Form -->
      <div id="checkout-active-view" class="checkout-grid">
        
        <!-- Left Column: Selected Order Summary -->
        <div class="checkout-card glass">
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem; font-weight: 800;">Order Summary</h3>
          
          <div class="order-summary-box">
            <div class="summary-line">
              <span>Selected Product:</span>
              <strong id="summary-prod-name" style="color: #ffffff;">${products[0] ? products[0].name : 'Velocity Phantom Nitro'}</strong>
            </div>
            <div class="summary-line">
              <span>Item Price:</span>
              <strong id="summary-prod-price" style="color: ${p.primary};">$${products[0] ? products[0].price.toFixed(2) : '189.99'}</strong>
            </div>
            <div class="summary-line">
              <span>Delivery Fee:</span>
              <span style="color: #10b981; font-weight: 700;">FREE (Express Dispatch)</span>
            </div>
            <div class="summary-line">
              <span>Payment Mode:</span>
              <span style="color: #cbd5e1; font-weight: 700;">Cash / POS on Delivery</span>
            </div>
            <div class="summary-line total">
              <span>Total Payable on Delivery:</span>
              <span id="summary-total-price" style="color: ${p.primary};">$${products[0] ? products[0].price.toFixed(2) : '189.99'}</span>
            </div>
          </div>

          <div class="cod-guarantee-badge">
            <div class="cod-icon-circle">✓</div>
            <div>
              <div style="font-weight: 800; color: #ffffff;">100% Cash on Delivery Guarantee</div>
              <div style="font-size: 0.75rem; color: #94a3b8;">Inspect your package before giving cash to the courier. No upfront payment required.</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Customer Shipping Form (No Credit Cards) -->
        <div class="checkout-card glass">
          <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem; font-weight: 800;">Delivery & Contact Details</h3>

          <form id="cod-order-form" onsubmit="handlePlaceOrder(event)">
            <div class="form-row">
              <div class="form-group">
                <label for="cust-name">Full Name *</label>
                <input type="text" id="cust-name" class="form-input" placeholder="e.g. Alex Henderson" required />
              </div>
              <div class="form-group">
                <label for="cust-phone">Mobile Phone Number *</label>
                <input type="tel" id="cust-phone" class="form-input" placeholder="e.g. +1 (555) 234-5678" required />
              </div>
            </div>

            <div class="form-group">
              <label for="cust-email">Email Address (For Digital Receipt Copy) *</label>
              <input type="email" id="cust-email" class="form-input" placeholder="alex@gmail.com" required />
            </div>

            <div class="form-group">
              <label for="cust-address">Street Address & Apartment / Unit *</label>
              <input type="text" id="cust-address" class="form-input" placeholder="e.g. 742 Evergreen Terrace, Apt 4B" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="cust-city">City *</label>
                <input type="text" id="cust-city" class="form-input" placeholder="e.g. New York / Toronto" required />
              </div>
              <div class="form-group">
                <label for="cust-zip">Postal / Zip Code *</label>
                <input type="text" id="cust-zip" class="form-input" placeholder="e.g. 10001" required />
              </div>
            </div>

            <div class="form-group">
              <label for="cust-notes">Delivery Instructions / Landmark (Optional)</label>
              <input type="text" id="cust-notes" class="form-input" placeholder="e.g. Leave with building security if not home" />
            </div>

            <button type="submit" class="btn-submit-order" style="margin-top: 0.5rem;">
              Confirm Order (Pay on Delivery) →
            </button>
          </form>
        </div>

      </div>

      <!-- Generated Official Digital Receipt (Initially Hidden) -->
      <div id="checkout-receipt-view" style="display: none; max-width: 680px; margin: 0 auto;">
        <div class="receipt-container">
          <div class="receipt-header">
            <div class="receipt-check-icon">✓</div>
            <h3 style="font-size: 1.6rem; font-weight: 900; margin-bottom: 0.25rem;">Order Successfully Placed!</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Your package is being prepared for express dispatch.</p>
            <div id="receipt-order-id" class="receipt-id">#SYD-842910-COD</div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; font-size: 0.85rem;">
            <div>
              <span style="color: #94a3b8; display: block;">Recipient Name:</span>
              <strong id="receipt-cust-name" style="color: #ffffff;">Alex Henderson</strong>
            </div>
            <div>
              <span style="color: #94a3b8; display: block;">Contact Phone:</span>
              <strong id="receipt-cust-phone" style="color: #ffffff;">+1 (555) 234-5678</strong>
            </div>
            <div>
              <span style="color: #94a3b8; display: block;">Delivery Address:</span>
              <strong id="receipt-cust-address" style="color: #ffffff;">742 Evergreen Terrace</strong>
            </div>
            <div>
              <span style="color: #94a3b8; display: block;">Est. Delivery:</span>
              <strong id="receipt-delivery-date" style="color: #10b981;">2-3 Business Days</strong>
            </div>
          </div>

          <table class="receipt-table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th style="text-align: right;">Total (COD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="receipt-item-name">Velocity Phantom Nitro</td>
                <td id="receipt-item-price" class="amount">$189.99</td>
              </tr>
              <tr>
                <td>Express Doorstep Shipping</td>
                <td class="amount" style="color: #10b981;">$0.00 (FREE)</td>
              </tr>
              <tr>
                <td>Estimated Taxes & Handling</td>
                <td class="amount">$0.00</td>
              </tr>
              <tr style="border-top: 2px solid ${p.primary};">
                <td style="font-weight: 800; font-size: 1.05rem; color: #ffffff;">Total Due on Delivery</td>
                <td id="receipt-total-due" class="amount" style="color: ${p.primary}; font-size: 1.2rem;">$189.99</td>
              </tr>
            </tbody>
          </table>

          <div class="cod-guarantee-badge" style="margin-bottom: 0;">
            <div class="cod-icon-circle" style="width: 24px; height: 24px; font-size: 0.8rem;">i</div>
            <div style="font-size: 0.8rem; color: #cbd5e1;">Payment of <strong id="receipt-cod-alert-total" style="color: ${p.primary};">$189.99</strong> will be collected by the courier upon delivery via Cash or Mobile POS.</div>
          </div>

          <div class="receipt-actions">
            <button class="btn-receipt btn-receipt-print" onclick="window.print()">
              🖨️ Print / Save Receipt
            </button>
            <button class="btn-receipt btn-receipt-new" onclick="resetOrderForm()">
              ← Place Another Order
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- SCROLL 4: FREQUENTLY ASKED QUESTIONS (FAQS)                -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="faqs" class="faq-section">
      <div class="section-title-wrap">
        <span class="sec-badge">HELP & POLICIES</span>
        <h2 class="sec-title">Pay on Delivery Questions</h2>
      </div>

      <div class="faq-grid">
        <div class="faq-item glass">
          <div class="faq-q"><span>How does Pay on Delivery (COD) work?</span> <span style="color: ${p.primary};">+</span></div>
          <p class="faq-a">When your package arrives, our courier will hand you the parcel. You can inspect the package condition, then pay the exact amount using Cash or local mobile POS/UPI.</p>
        </div>
        <div class="faq-item glass">
          <div class="faq-q"><span>Do I need to enter any credit card or bank details?</span> <span style="color: ${p.primary};">+</span></div>
          <p class="faq-a">Never! We do not ask for any card numbers, CVVs, or bank logins. Your order is confirmed strictly with your delivery address and phone number.</p>
        </div>
        <div class="faq-item glass">
          <div class="faq-q"><span>What if I am not home during delivery?</span> <span style="color: ${p.primary};">+</span></div>
          <p class="faq-a">Our courier will call your provided phone number before arrival. You can schedule a convenient re-delivery or leave instructions for a family member or building reception to receive and pay.</p>
        </div>
      </div>
    </section>

  </main>

  <!-- Global Footer -->
  <footer>
    <div class="container">
      <div class="footer-brand">${bn}</div>
      <div class="footer-cod-badge">✓ 100% Cash on Delivery Authorized Merchant</div>
      <p>&copy; 2026 ${bn}. All rights reserved. Powered by SYDAS.x Genesis Matrix Industry Architect v6.0.</p>
    </div>
  </footer>

  <script>
    var currentSelectedProduct = {
      id: '${products[0] ? products[0].id : "default"}',
      name: '${products[0] ? products[0].name.replace(/'/g, "\\'") : "Velocity Phantom Nitro"}',
      price: ${products[0] ? products[0].price : 189.99}
    };

    function selectProductForCheckout(id, name, price) {
      currentSelectedProduct = { id: id, name: name, price: price };
      
      // Update Checkout summary fields
      var nameEl = document.getElementById('summary-prod-name');
      var priceEl = document.getElementById('summary-prod-price');
      var totalEl = document.getElementById('summary-total-price');

      if (nameEl) nameEl.textContent = name;
      if (priceEl) priceEl.textContent = '$' + price.toFixed(2);
      if (totalEl) totalEl.textContent = '$' + price.toFixed(2);

      // Smooth scroll to checkout section
      var checkoutSec = document.getElementById('checkout-section');
      if (checkoutSec) {
        checkoutSec.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function handlePlaceOrder(e) {
      e.preventDefault();

      var name = document.getElementById('cust-name').value;
      var phone = document.getElementById('cust-phone').value;
      var email = document.getElementById('cust-email').value;
      var address = document.getElementById('cust-address').value;
      var city = document.getElementById('cust-city').value;
      var zip = document.getElementById('cust-zip').value;

      var orderId = '#SYD-' + Math.floor(100000 + Math.random() * 900000) + '-COD';

      // Populate Receipt Details
      document.getElementById('receipt-order-id').textContent = orderId;
      document.getElementById('receipt-cust-name').textContent = name;
      document.getElementById('receipt-cust-phone').textContent = phone;
      document.getElementById('receipt-cust-address').textContent = address + ', ' + city + ' ' + zip;
      document.getElementById('receipt-item-name').textContent = currentSelectedProduct.name;
      document.getElementById('receipt-item-price').textContent = '$' + currentSelectedProduct.price.toFixed(2);
      document.getElementById('receipt-total-due').textContent = '$' + currentSelectedProduct.price.toFixed(2);
      document.getElementById('receipt-cod-alert-total').textContent = '$' + currentSelectedProduct.price.toFixed(2);

      // Hide Form, Show Receipt
      document.getElementById('checkout-active-view').style.display = 'none';
      document.getElementById('checkout-receipt-view').style.display = 'block';

      // Scroll to receipt
      document.getElementById('checkout-receipt-view').scrollIntoView({ behavior: 'smooth' });
    }

    function resetOrderForm() {
      document.getElementById('cod-order-form').reset();
      document.getElementById('checkout-receipt-view').style.display = 'none';
      document.getElementById('checkout-active-view').style.display = 'grid';
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
  </script>
</body>
</html>`;
  }

  /* ─────────────────────────────────────────────────────
     PUBLIC API EXPORT
  ───────────────────────────────────────────────────── */
  window.SYDAS_THEME_ENGINE = {
    INDUSTRIES: INDUSTRIES,
    FONT_PRESETS: FONT_PRESETS,
    buildFullWebsite: buildFullWebsite
  };

})();
