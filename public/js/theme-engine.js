/**
 * SYDAS.x GENESIS MATRIX — MULTI-SCROLL INDUSTRY ARCHITECT ENGINE v7.0
 * ═════════════════════════════════════════════════════════════════════
 * Generates rich, multi-scroll production-grade websites.
 * RULE: ONLY 'ecommerce' has product checkout, Pay on Delivery, and 
 * receipt generating capabilities. All other industries generate 
 * specialized inquiry, booking, portfolio, and consultation architectures.
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
     INDUSTRY CATALOG — 15 Detailed Verticals
  ───────────────────────────────────────────────────── */
  var INDUSTRIES = {
    // ═══════════════════════════════════════════════════
    // 1. E-COMMERCE (ONLY ONE WITH COD CHECKOUT & RECEIPTS)
    // ═══════════════════════════════════════════════════
    ecommerce: {
      label: 'E-Commerce & Marketplace',
      isEcommerce: true,
      defaultPalette: { bg: '#080c14', primary: '#3b82f6', accent: '#60a5fa', text: '#f1f5f9' },
      nav: ['Mega Deals', 'Electronics', 'Lifestyle', 'Pay on Delivery', 'Support'],
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

    // ═══════════════════════════════════════════════════
    // 2. FOOTWEAR (BRAND SHOWCASE & INQUIRY)
    // ═══════════════════════════════════════════════════
    footwear: {
      label: 'Footwear & Athletic Brand',
      isEcommerce: false,
      defaultPalette: { bg: '#08090d', primary: '#ff4d00', accent: '#ff8533', text: '#f5f5f5' },
      nav: ['Innovations', 'Athletes', 'Technology', 'Store Locator', 'Contact'],
      heroTag: 'ENGINEERED FOR SPEED',
      heroTitle: function(b){ return b + ' Velocity Lab Edition'; },
      heroSub: 'Aerospace-grade carbon plate technology and responsive foam cushioning crafted for world-class athletes.',
      heroCta: 'Explore Innovations',
      showcaseTitle: 'Signature Athletic Lines',
      items: [
        { title: 'Phantom Nitro Speed Core', category: 'Marathon Racing', desc: 'Custom carbon torsion shank engineered to return 87% kinetic stride energy.' },
        { title: 'Air Stride HyperTrail 360', category: 'All-Terrain Trek', desc: 'Vibram all-weather lug grip compound with waterproof Gore-Tex barrier.' },
        { title: 'Apex Street Matrix High', category: 'Lifestyle Icon', desc: 'Italian full-grain calfskin upper with sculpted dual-density midsole.' }
      ],
      inquiryTitle: 'Schedule a VIP Fitting / Retail Partnership',
      inquirySub: 'Connect with our brand specialists or request a wholesale retail catalog.'
    },

    // ═══════════════════════════════════════════════════
    // 3. CLOTHING (COUTURE LOOKBOOK & SHOWROOM)
    // ═══════════════════════════════════════════════════
    clothing: {
      label: 'Clothing & Fashion Couture',
      isEcommerce: false,
      defaultPalette: { bg: '#0b0b0f', primary: '#e2c08d', accent: '#c9a96e', text: '#f4f1ea' },
      nav: ['Haute Collection', 'Sustainability', 'Atelier', 'Private Showroom', 'Inquire'],
      heroTag: 'AUTUMN / WINTER COUTURE',
      heroTitle: function(b){ return b + ' Studio Haute Lookbook'; },
      heroSub: 'Architectural silhouettes, sustainably sourced Mongolian cashmere, and bespoke master tailoring.',
      heroCta: 'View Haute Lookbook',
      showcaseTitle: 'Seasonal Collections & Silhouettes',
      items: [
        { title: 'Bespoke Double-Breasted Cashmere Coat', category: 'Outerwear', desc: 'Pure wool-cashmere blend with hand-stitched lapels and horn buttons.' },
        { title: 'Architectural Pleated Crepe Suit', category: 'Tailoring', desc: 'Structured shoulders with fluid Japanese crepe drape and custom horn hardware.' },
        { title: 'Heavyweight Loopback Fleece Ensemble', category: 'Elevated Casual', desc: '500 GSM organic cotton fleece dyed in mineral pigments.' }
      ],
      inquiryTitle: 'Book a Private Atelier Appointment',
      inquirySub: 'Experience bespoke fitting sessions with our master tailors.'
    },

    // ═══════════════════════════════════════════════════
    // 4. IT & CONSULTING (ENTERPRISE SOLUTIONS & ADVISORY)
    // ═══════════════════════════════════════════════════
    it: {
      label: 'IT & Consulting Services',
      isEcommerce: false,
      defaultPalette: { bg: '#060a12', primary: '#00d4aa', accent: '#0ea5e9', text: '#e2e8f0' },
      nav: ['Cloud Solutions', 'AI Engineering', 'Cybersecurity', 'Case Studies', 'Consulting'],
      heroTag: 'ENTERPRISE DIGITAL TRANSFORMATION',
      heroTitle: function(b){ return b + ' Enterprise Cloud & AI Advisory'; },
      heroSub: 'Scalable multi-cloud architecture, bespoke AI workflow automation, and zero-trust cybersecurity frameworks for global enterprises.',
      heroCta: 'Explore Solutions',
      showcaseTitle: 'Core Technology Capabilities',
      items: [
        { title: 'Multi-Cloud Migration & DevOps Automation', category: 'Infrastructure', desc: 'Zero-downtime Kubernetes orchestration, Terraform IaC, and 99.999% SLA architecture.' },
        { title: 'Autonomous Enterprise AI & LLM Pipelines', category: 'Artificial Intelligence', desc: 'Custom fine-tuned models, RAG knowledge systems, and CRM workflow automation.' },
        { title: 'Zero-Trust Cybersecurity & Threat Matrix', category: 'Security', desc: 'Continuous compliance monitoring, automated SOC2 auditing, and pen-testing suites.' }
      ],
      inquiryTitle: 'Request an Architecture Consultation',
      inquirySub: 'Speak directly with our senior cloud and AI principal engineers.'
    },

    // ═══════════════════════════════════════════════════
    // 5. JEWELLERY (LUXURY ATELIER & BESPOKE GEMS)
    // ═══════════════════════════════════════════════════
    jewellery: {
      label: 'Jewellery & Haute Luxury',
      isEcommerce: false,
      defaultPalette: { bg: '#090806', primary: '#d4af37', accent: '#f5d060', text: '#faf8f0' },
      nav: ['Diamonds', 'High Jewellery', 'Heritage Timepieces', 'Private Vault', 'Consultation'],
      heroTag: 'TIMELESS BRILLIANCE & ARTISTRY',
      heroTitle: function(b){ return b + ' Royal Solitaire Vault'; },
      heroSub: 'Ethically sourced GIA-certified diamonds and hand-forged 18K solid gold crafted by master artisans.',
      heroCta: 'Explore Masterpieces',
      showcaseTitle: 'Signature Diamond Collections',
      items: [
        { title: 'Celestial Radiant Solitaire Diamond 18K', category: 'Solitaires', desc: '1.5 Carat VVS1 laboratory diamond set in hand-polished 18K recycled white gold.' },
        { title: 'Aura Brilliant Cut Platinum Tennis Choker', category: 'High Jewellery', desc: '5.0 Total Carat Weight brilliant cut diamonds in pure 950 platinum gallery.' },
        { title: 'Chronos Swiss Automatic Sapphire Watch', category: 'Timepieces', desc: 'In-house mechanical movement with scratchproof sapphire crystal and ceramic bezel.' }
      ],
      inquiryTitle: 'Schedule a Private Diamond Consultation',
      inquirySub: 'Meet with our certified gemologists for bespoke custom commissions.'
    },

    // ═══════════════════════════════════════════════════
    // 6. DINE-IN (FINE GASTRONOMY & RESERVATIONS)
    // ═══════════════════════════════════════════════════
    dinein: {
      label: 'Dine-In & Fine Gastronomy',
      isEcommerce: false,
      defaultPalette: { bg: '#0a0806', primary: '#c8553d', accent: '#e07a5f', text: '#fbf7f4' },
      nav: ['Tasting Menus', 'Wine Cellar', 'Chef Counter', 'Private Dining', 'Reserve Table'],
      heroTag: 'MICHELIN-INSPIRED GASTRONOMY',
      heroTitle: function(b){ return b + ' Prime Steakhouse & Cellar'; },
      heroSub: '45-day dry-aged prime steaks, coastal seafood flown in daily, and curated vintage wine pairings.',
      heroCta: 'View Tasting Menu',
      showcaseTitle: 'Chef Signature Courses',
      items: [
        { title: 'Dry-Aged Bone-In Tomahawk Ribeye 36oz', category: 'Prime Steaks', desc: 'Charred over white oak coals with truffle butter and black finishing salt.' },
        { title: 'A5 Miyazaki Wagyu & Shaved Black Truffle', category: 'Chef Special', desc: 'Seared medallions served with potato purée and aged Bordeaux reduction.' },
        { title: 'Wild Atlantic Jumbo Lobster & Caviar Duo', category: 'Seafood', desc: 'Steamed cold-water tails with Imperial Oscietra caviar and clarified herb butter.' }
      ],
      inquiryTitle: 'Reserve a Dining Experience',
      inquirySub: 'Secure your table or book our private sommelier dining room.'
    },

    // ═══════════════════════════════════════════════════
    // 7. HOTELS (LUXURY RESORTS & SUITE RESERVATIONS)
    // ═══════════════════════════════════════════════════
    hotels: {
      label: 'Hotels & Luxury Resorts',
      isEcommerce: false,
      defaultPalette: { bg: '#080a10', primary: '#b08d57', accent: '#d4a76a', text: '#f0ece4' },
      nav: ['Suites & Villas', 'Thermal Spa', 'Dining Experiences', 'Concierge', 'Book Stay'],
      heroTag: '5-STAR SANCTUARY',
      heroTitle: function(b){ return b + ' Grand Palace Resort & Spa'; },
      heroSub: 'Panoramic oceanfront vistas, personalized 24/7 butler concierge, and private thermal plunge pools.',
      heroCta: 'Explore Suites',
      showcaseTitle: 'Signature Suites & Private Villas',
      items: [
        { title: 'Presidential Oceanfront Penthouse Suite', category: 'Luxury Suites', desc: 'Wraparound glass terrace with private heated infinity pool and marble fireplace.' },
        { title: 'Overwater Sunset Pavilion Villa', category: 'Private Villas', desc: 'Direct lagoon access with glass floor viewing panels and sun deck loungers.' },
        { title: 'Thermal Hydrotherapy & Ayurvedic Spa Pass', category: 'Wellness', desc: 'Full-day access to mineral baths, salt saunas, and personalized botanical massages.' }
      ],
      inquiryTitle: 'Inquire About Dates & Concierge Bookings',
      inquirySub: 'Our VIP reservations team will tailor your bespoke itinerary.'
    },

    // ═══════════════════════════════════════════════════
    // 8. RESTAURANTS (CULINARY MENU & EVENT CATERING)
    // ═══════════════════════════════════════════════════
    restaurants: {
      label: 'Restaurants & Artisan Kitchens',
      isEcommerce: false,
      defaultPalette: { bg: '#0d0b07', primary: '#e8a838', accent: '#f0c050', text: '#f7f2ea' },
      nav: ['Menu Highlights', 'Smokery Specials', 'Family Feasts', 'Catering', 'Order Online'],
      heroTag: 'FRESHLY PREPARED DAILY',
      heroTitle: function(b){ return b + ' Artisan Kitchen & Smokehouse'; },
      heroSub: 'Handcrafted brioche burgers, 16-hour hickory smoked brisket, and stone-fired artisan pizzas.',
      heroCta: 'Explore Menu',
      showcaseTitle: 'House Specialties',
      items: [
        { title: 'Double Wagyu Truffle Smashburger', category: 'Burgers', desc: 'Double Wagyu smash patties, aged Gruyere cheese, shaved black truffle mayo, brioche bun.' },
        { title: '16-Hour Hickory Smoked Beef Brisket', category: 'Smokehouse', desc: 'Tender prime beef brisket, Texas BBQ sauce, jalapeño cornbread, and creamy slaw.' },
        { title: 'Stone-Fired Truffle Burrata Pizza', category: 'Artisan Pizza', desc: '72-hr fermented dough, San Marzano tomatoes, whole burrata, and fresh basil oil.' }
      ],
      inquiryTitle: 'Event Catering & Large Group Bookings',
      inquirySub: 'Bring our artisan kitchen and live smokehouse to your next celebration.'
    },

    // ═══════════════════════════════════════════════════
    // 9. PORTFOLIOS (CREATIVE DIRECTOR & ARCHITECT)
    // ═══════════════════════════════════════════════════
    portfolios: {
      label: 'Personal Portfolio & Creative Studio',
      isEcommerce: false,
      defaultPalette: { bg: '#07070b', primary: '#a78bfa', accent: '#c084fc', text: '#f1f5f9' },
      nav: ['Selected Works', 'Design Systems', 'Case Studies', 'Methodology', 'Hire Me'],
      heroTag: 'LEAD ARCHITECT & DESIGNER',
      heroTitle: function(b){ return b + ' — Digital Engineering Portfolio'; },
      heroSub: 'Designing award-winning SaaS platforms, high-performance web applications, and immersive digital systems.',
      heroCta: 'View Selected Works',
      showcaseTitle: 'Featured Case Studies',
      items: [
        { title: 'Global Fintech Mobile App & Design System', category: 'Fintech UI/UX', desc: 'Scaled user retention by 240% across 1.2M active accounts with seamless onboarding.' },
        { title: 'Interactive 3D WebGL Metaverse Space', category: 'Creative WebGL', desc: 'Sub-60fps real-time 3D particle landscape engineered using Three.js and GLSL shaders.' },
        { title: 'Enterprise Cloud Dashboard Modernization', category: 'Full-Stack SaaS', desc: 'Reduced server-side latency by 72% utilizing Next.js microservices and Redis caching.' }
      ],
      inquiryTitle: 'Initiate a Project Partnership',
      inquirySub: 'Available for high-impact contracts, design systems, and advisory roles.'
    },

    // ═══════════════════════════════════════════════════
    // 10. SECURITY (MILITARY-GRADE DEFENSE & ADVISORY)
    // ═══════════════════════════════════════════════════
    security: {
      label: 'Security & Enterprise Defense',
      isEcommerce: false,
      defaultPalette: { bg: '#04070d', primary: '#22d3ee', accent: '#06b6d4', text: '#e2e8f0' },
      nav: ['Zero-Trust Architecture', 'Hardware Shields', 'Threat Ops', 'Compliance', 'Audit Request'],
      heroTag: 'MILITARY-GRADE CYBER DEFENSE',
      heroTitle: function(b){ return b + ' Zero-Trust Threat Intelligence'; },
      heroSub: 'Cryptographic hardware security modules, automated identity governance, and 24/7 AI threat intelligence.',
      heroCta: 'View Defense Framework',
      showcaseTitle: 'Enterprise Security Modules',
      items: [
        { title: 'Hardware Security Key Cryptographic Tokens', category: 'Hardware Security', desc: 'FIPS 140-3 Level 3 certified NFC & USB-C tokens with biometric fingerprint authentication.' },
        { title: 'AI-Powered Continuous Threat Inspection Gateway', category: 'Network Shield', desc: 'Real-time DPI packet analysis, automated ransomware rollback, and zero-day containment.' },
        { title: 'Zero-Trust Identity Governance & Access Management', category: 'IAM & Cloud', desc: 'Automated least-privilege RBAC provisioning, biometric MFA, and real-time telemetry.' }
      ],
      inquiryTitle: 'Request a Confidential Security Audit',
      inquirySub: 'Our certified threat engineers will analyze your attack surface and vulnerabilities.'
    },

    // ═══════════════════════════════════════════════════
    // 11. GROCERY (ORGANIC MARKET & SUBSCRIPTIONS)
    // ═══════════════════════════════════════════════════
    grocery: {
      label: 'Grocery & Organic Market',
      isEcommerce: false,
      defaultPalette: { bg: '#080d08', primary: '#22c55e', accent: '#4ade80', text: '#f0fdf4' },
      nav: ['Farm Direct', 'Organic Produce', 'Bakery & Cheese', 'Weekly Subscriptions', 'Inquire'],
      heroTag: 'FARM-TO-DOORSTEP QUALITY',
      heroTitle: function(b){ return b + ' Organic Fresh Market'; },
      heroSub: '100% Certified organic produce harvested at sunrise from sustainable local farming partners.',
      heroCta: 'Explore Organic Lines',
      showcaseTitle: 'Farm Fresh Seasonal Collections',
      items: [
        { title: 'Seasonal Organic Harvest Mega Box (15kg)', category: 'Fresh Produce', desc: 'Organic apples, avocados, leafy greens, berries, heirloom carrots, and farm-fresh eggs.' },
        { title: 'Artisan Sourdough & Aged Farmhouse Cheeses', category: 'Bakery & Dairy', desc: 'Warm stone-baked sourdough loaves with aged sharp farmhouse cheddar and wildflower honey.' },
        { title: 'Pasture-Raised Poultry & Grass-Fed Beef Box', category: 'Butcher Craft', desc: '100% grass-fed Angus cuts and organic free-range poultry with verified traceability.' }
      ],
      inquiryTitle: 'Subscribe to Weekly Farm Delivery',
      inquirySub: 'Customize your family fresh produce basket delivered to your home.'
    },

    // ═══════════════════════════════════════════════════
    // 12. CONSTRUCTION (INFRASTRUCTURE & MATERIALS)
    // ═══════════════════════════════════════════════════
    construction: {
      label: 'Building & Construction Group',
      isEcommerce: false,
      defaultPalette: { bg: '#0a0907', primary: '#f59e0b', accent: '#fbbf24', text: '#f7f6f0' },
      nav: ['Mega Projects', 'Structural Materials', 'Engineering Services', 'Safety Compliance', 'Request Tender'],
      heroTag: 'PRECISION INFRASTRUCTURE',
      heroTitle: function(b){ return b + ' Heavy Construction Group'; },
      heroSub: 'Commercial towers, civil transport corridors, and high-performance engineered building materials.',
      heroCta: 'View Project Portfolio',
      showcaseTitle: 'Major Project Capabilities',
      items: [
        { title: 'Commercial High-Rise Structural Development', category: 'Civil & Towers', desc: 'Turnkey structural concrete, curtain wall engineering, and LEED Platinum certification.' },
        { title: 'Industrial Transport Corridors & Bridges', category: 'Heavy Infrastructure', desc: 'Reinforced seismic precast beams, geotechnical foundation stabilization, and paving.' },
        { title: 'Certified Architectural Materials Procurement', category: 'Materials', desc: 'Direct supply chain for high-early-strength cements, structural steel, and polymers.' }
      ],
      inquiryTitle: 'Submit Project Tender / Request Proposal',
      inquirySub: 'Provide your project blueprints for estimation from our chief civil engineers.'
    },

    // ═══════════════════════════════════════════════════
    // 13. MACHINERY (HEAVY EQUIPMENT & FLEET HIRE)
    // ═══════════════════════════════════════════════════
    machinery: {
      label: 'Machinery & Heavy Equipment',
      isEcommerce: false,
      defaultPalette: { bg: '#0a0906', primary: '#eab308', accent: '#facc15', text: '#fefce8' },
      nav: ['Excavators & Earthmoving', 'Power Generators', 'Attachments', 'Fleet Lease', 'Inquiry'],
      heroTag: 'ENGINEERED FOR EXTREME LOADS',
      heroTitle: function(b){ return b + ' Heavy Industries Machinery'; },
      heroSub: 'Industrial earthmoving excavators, soundproof diesel generators, and hydraulic attachments.',
      heroCta: 'Explore Equipment Fleet',
      showcaseTitle: 'Industrial Equipment Lines',
      items: [
        { title: 'Industrial Silent Diesel Power Generator 15kVA', category: 'Power Systems', desc: 'Water-cooled 4-stroke diesel engine with soundproof canopy and electric auto-switch.' },
        { title: 'Heavy Excavator Hydraulic Planetary Auger Attachment', category: 'Attachments', desc: 'Tungsten carbide drill teeth for solid rock penetration and deep foundation pilings.' },
        { title: '20-Ton Heavy Workshop Hydraulic Press System', category: 'Workshop Tools', desc: 'Reinforced H-frame steel body with dual-speed hydraulic pump and digital meter.' }
      ],
      inquiryTitle: 'Request Equipment Lease / Quote',
      inquirySub: 'Contact our fleet coordination team for machine availability and site delivery.'
    },

    // ═══════════════════════════════════════════════════
    // 14. AEROSPACE (AVIATION & PRIVATE FLIGHT SERVICES)
    // ═══════════════════════════════════════════════════
    aerospace: {
      label: 'Aerospace & Aviation Services',
      isEcommerce: false,
      defaultPalette: { bg: '#050810', primary: '#dc2626', accent: '#ef4444', text: '#f1f5f9' },
      nav: ['Private Charter', 'Flight Avionics', 'Fleet Management', 'Safety Certifications', 'Book Flight'],
      heroTag: 'ENGINEERED FOR FLIGHT LEVEL 450',
      heroTitle: function(b){ return b + ' Aviation & Skyway Services'; },
      heroSub: 'Private air charter operations, aircraft maintenance management, and flight avionics gear.',
      heroCta: 'Explore Aviation Services',
      showcaseTitle: 'Aviation Offerings',
      items: [
        { title: 'Midsize Jet VIP Private Charter Operations', category: 'Private Jets', desc: 'Non-stop intercontinental travel for up to 8 passengers with fully catered luxury cabin.' },
        { title: 'AeroPro Carbon ANC Pilot Aviation Headset', category: 'Avionics Gear', desc: 'Dual GA plugs, Bluetooth stereo audio, and magnesium ear cups with active noise cancellation.' },
        { title: 'Titanium Flight Chronograph Tachymeter Watch', category: 'Aviation Timepieces', desc: 'E6B slide rule bezel, Swiss quartz chronograph movement, and night-vision luminescence.' }
      ],
      inquiryTitle: 'Book Private Charter / Request Flight Quote',
      inquirySub: 'Our flight operations desk coordinates worldwide landing clearances and luxury transfers.'
    },

    // ═══════════════════════════════════════════════════
    // 15. ENTERTAINMENT (THEME PARKS & VIP ATTRACTIONS)
    // ═══════════════════════════════════════════════════
    entertainment: {
      label: 'Fun & Entertainment Parks',
      isEcommerce: false,
      defaultPalette: { bg: '#090612', primary: '#f472b6', accent: '#a855f7', text: '#fdf4ff' },
      nav: ['Thrill Rides', 'VIP Experiences', 'Seasonal Events', 'Group Packages', 'Book Tickets'],
      heroTag: 'UNFORGETTABLE THRILLS & ADVENTURE',
      heroTitle: function(b){ return b + ' Mega Adventure Parks'; },
      heroSub: 'Record-breaking rollercoasters, immersive VR pavilions, live fireworks spectacles, and family splash parks.',
      heroCta: 'Explore Attractions',
      showcaseTitle: 'Major Park Experiences',
      items: [
        { title: 'Apex HyperCoaster Launch Experience', category: 'Thrill Coasters', desc: '0 to 120 km/h in 1.8 seconds with 5 inverted zero-G rolls and 85-degree vertical drop.' },
        { title: 'Virtual Reality Galactic Metaverse Pavilion', category: 'Immersive VR', desc: 'Full-body haptic feedback suits with 360-degree wireless motion tracking arenas.' },
        { title: 'VIP Unlimited Skip-The-Line Concierge Pass', category: 'VIP Pass', desc: 'Dedicated park escort, priority ride boarding, reserved dinner tables, and gift packages.' }
      ],
      inquiryTitle: 'Inquire for Group VIP Packages & Bookings',
      inquirySub: 'Coordinate family reunions, corporate private park buyouts, or VIP group tours.'
    }
  };

  /* ─────────────────────────────────────────────────────
     BUILDER FUNCTION
     Generates:
     - E-COMMERCE: Product catalog + 100% Cash on Delivery 
       checkout terminal + automated digital printable receipt.
     - ALL OTHER INDUSTRIES: High-end showcase + inquiry/
       booking/consultation pipeline (NO receipt or payment).
  ───────────────────────────────────────────────────── */
  function buildFullWebsite(direction, brandName, industryKey, options) {
    var opts = options || {};
    var ind = INDUSTRIES[industryKey] || INDUSTRIES.ecommerce;
    var bn = brandName || 'Genesis Platform';

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

    var fontKey = opts.fontKey || 'inter';
    var fontObj = FONT_PRESETS[fontKey] || FONT_PRESETS.inter;

    // ───────────────────────────────────────────────────
    // IF E-COMMERCE: GENERATE PRODUCTS + COD + RECEIPT
    // ───────────────────────────────────────────────────
    if (ind.isEcommerce) {
      var products = ind.products || [];

      var productsHTML = products.map(function (prod) {
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
  <title>${bn} — E-Commerce MegaStore & Pay on Delivery</title>
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

    .glass {
      background: ${p.card};
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid ${p.cardBorder};
      border-radius: 18px;
    }

    .top-bar {
      background: linear-gradient(90deg, ${p.primary}33, ${p.accent}33);
      border-bottom: 1px solid ${p.primary}44;
      padding: 0.5rem 1rem;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.05em;
    }
    .top-bar strong { color: ${p.primary}; }

    header {
      position: sticky;
      top: 0;
      z-index: 40;
      background: ${p.bg}dd;
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-logo {
      font-size: 1.35rem;
      font-weight: 900;
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }
    .nav-links { display: flex; gap: 1.5rem; font-size: 0.88rem; font-weight: 600; color: #94a3b8; }
    .nav-links a { color: inherit; text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover { color: ${p.primary}; }
    .header-cta {
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 800;
      font-size: 0.85rem;
      padding: 0.55rem 1.25rem;
      border-radius: 12px;
      text-decoration: none;
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 10; }

    /* Hero */
    .hero { padding: 5rem 0 3.5rem; text-align: center; }
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
    .hero p { font-size: 1.1rem; color: #94a3b8; max-width: 700px; margin: 0 auto 2rem; }
    .hero-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
    .btn-hero-primary {
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 800;
      padding: 0.9rem 2.2rem;
      border-radius: 14px;
      text-decoration: none;
      box-shadow: 0 10px 30px ${p.primary}44;
    }
    .btn-hero-secondary {
      background: rgba(255,255,255,0.06);
      color: #ffffff;
      font-weight: 700;
      padding: 0.9rem 2rem;
      border-radius: 14px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.12);
    }

    .metrics-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 4.5rem; }
    .metric-card { padding: 1.5rem; text-align: center; }
    .metric-val { font-size: 2rem; font-weight: 900; color: ${p.primary}; margin-bottom: 0.25rem; }
    .metric-label { font-size: 0.85rem; color: #94a3b8; font-weight: 600; }

    /* Products Grid */
    .section-title-wrap { text-align: center; margin-bottom: 2.5rem; }
    .sec-badge { color: ${p.primary}; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
    .sec-title { font-size: 2.3rem; font-weight: 900; }
    .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1.75rem; margin-bottom: 5rem; }
    .product-card { padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.3s ease; }
    .product-card:hover { transform: translateY(-6px); }
    .prod-badge-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .prod-tag { font-size: 0.72rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 20px; }
    .prod-star { font-size: 0.75rem; color: #fbbf24; font-weight: 700; }
    .prod-preview-box { height: 140px; border-radius: 14px; border: 1px dashed; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 1.25rem; }
    .prod-watermark { font-size: 0.7rem; color: #94a3b8; font-weight: 700; margin-top: 0.5rem; }
    .prod-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; }
    .prod-desc { font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.5rem; flex-grow: 1; }
    .prod-footer { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1rem; }
    .prod-price-label { display: block; font-size: 0.68rem; color: #94a3b8; }
    .prod-price { font-size: 1.35rem; font-weight: 900; }
    .btn-buy-cod { border: none; padding: 0.7rem 1.2rem; border-radius: 10px; font-size: 0.85rem; font-weight: 800; cursor: pointer; }

    /* Checkout & Digital Receipt */
    .checkout-section { padding: 3rem 0 5rem; }
    .checkout-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: start; }
    @media (max-width: 868px) { .checkout-grid { grid-template-columns: 1fr; } }
    .checkout-card { padding: 2rem; }
    .cod-guarantee-badge { display: flex; align-items: center; gap: 0.75rem; background: ${p.primary}15; border: 1px solid ${p.primary}44; padding: 0.85rem 1rem; border-radius: 12px; margin-bottom: 1.5rem; }
    .cod-icon-circle { width: 32px; height: 32px; border-radius: 50%; background: ${p.primary}; color: #000; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-size: 0.8rem; font-weight: 700; color: #cbd5e1; margin-bottom: 0.35rem; }
    .form-input { width: 100%; padding: 0.8rem 1rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #ffffff; font-family: inherit; font-size: 0.9rem; outline: none; }
    .form-input:focus { border-color: ${p.primary}; box-shadow: 0 0 15px ${p.primary}33; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .order-summary-box { background: rgba(0,0,0,0.25); border-radius: 14px; padding: 1.25rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.06); }
    .summary-line { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; font-size: 0.88rem; color: #94a3b8; }
    .summary-line.total { font-size: 1.15rem; font-weight: 900; color: #ffffff; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.8rem; margin-top: 0.8rem; }
    .btn-submit-order { width: 100%; padding: 1rem; background: linear-gradient(135deg, ${p.gs}, ${p.ge}); color: #000; font-weight: 900; font-size: 1.05rem; border: none; border-radius: 14px; cursor: pointer; }

    /* Receipt */
    .receipt-container { background: #0f1118; border: 2px solid ${p.primary}; border-radius: 20px; padding: 2.25rem; color: #f1f5f9; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
    .receipt-header { text-align: center; border-bottom: 1px dashed rgba(255,255,255,0.15); padding-bottom: 1.5rem; margin-bottom: 1.5rem; }
    .receipt-check-icon { width: 54px; height: 54px; background: ${p.primary}; color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 900; margin: 0 auto 1rem; }
    .receipt-id { font-family: monospace; font-size: 0.85rem; color: ${p.primary}; background: ${p.primary}18; padding: 0.25rem 0.75rem; border-radius: 8px; display: inline-block; margin-top: 0.5rem; }
    .receipt-table { width: 100%; margin: 1.25rem 0; border-collapse: collapse; font-size: 0.9rem; }
    .receipt-table th, .receipt-table td { padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .receipt-table th { color: #94a3b8; text-align: left; font-size: 0.78rem; text-transform: uppercase; }
    .receipt-table td.amount { text-align: right; font-weight: 700; }
    .receipt-actions { display: flex; gap: 1rem; margin-top: 1.75rem; }
    .btn-receipt { flex: 1; padding: 0.8rem; border-radius: 10px; font-weight: 700; font-size: 0.9rem; cursor: pointer; text-align: center; border: none; }
    .btn-receipt-print { background: ${p.primary}; color: #000; }
    .btn-receipt-new { background: rgba(255,255,255,0.08); color: #fff; }

    footer { border-top: 1px solid rgba(255,255,255,0.08); padding: 3.5rem 0 2rem; background: ${p.bg}; text-align: center; color: #64748b; font-size: 0.85rem; }
    .footer-brand { font-size: 1.3rem; font-weight: 900; color: #ffffff; margin-bottom: 0.5rem; }
    .footer-cod-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.35rem 1rem; border-radius: 20px; background: ${p.primary}15; color: ${p.primary}; font-weight: 700; font-size: 0.8rem; margin-bottom: 1.5rem; }
  </style>
</head>
<body>
  <div class="glow-blob blob-1"></div>
  <div class="glow-blob blob-2"></div>

  <div class="top-bar">
    ⚡ <strong>ZERO RISK SHOPPING:</strong> 100% Pay on Delivery (Cash / POS on Arrival) &bull; Free Nationwide Delivery &bull; 7-Day Easy Replacement
  </div>

  <header>
    <div class="brand-logo">${bn}</div>
    <nav class="nav-links">
      <a href="#products">Products</a>
      <a href="#checkout-section">Pay on Delivery</a>
      <a href="#faqs">How COD Works</a>
    </nav>
    <a href="#checkout-section" class="header-cta">Quick Order (COD)</a>
  </header>

  <main class="container">
    <!-- Scroll 1: Hero -->
    <section class="hero">
      <span class="hero-tag">${ind.heroTag}</span>
      <h1>${ind.heroTitle(bn)}</h1>
      <p>${ind.heroSub}</p>

      <div class="hero-actions">
        <a href="#products" class="btn-hero-primary">Browse Catalog →</a>
        <a href="#checkout-section" class="btn-hero-secondary">Instant Pay on Delivery</a>
      </div>

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

    <!-- Scroll 2: Products Grid -->
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

    <!-- Scroll 3: Checkout & Digital Receipt (E-COMMERCE ONLY) -->
    <section id="checkout-section" class="checkout-section">
      <div class="section-title-wrap">
        <span class="sec-badge">100% SECURE CHECKOUT</span>
        <h2 class="sec-title">Pay on Delivery Order Terminal</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-top: 0.5rem;">No credit cards or bank details requested. Pay only when your package arrives in your hands.</p>
      </div>

      <div id="checkout-active-view" class="checkout-grid">
        <div class="checkout-card glass">
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem; font-weight: 800;">Order Summary</h3>
          
          <div class="order-summary-box">
            <div class="summary-line">
              <span>Selected Product:</span>
              <strong id="summary-prod-name" style="color: #ffffff;">${products[0] ? products[0].name : 'Quantum Ultra ANC Earbuds Pro'}</strong>
            </div>
            <div class="summary-line">
              <span>Item Price:</span>
              <strong id="summary-prod-price" style="color: ${p.primary};">$${products[0] ? products[0].price.toFixed(2) : '149.99'}</strong>
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
              <span id="summary-total-price" style="color: ${p.primary};">$${products[0] ? products[0].price.toFixed(2) : '149.99'}</span>
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

            <button type="submit" class="btn-submit-order" style="margin-top: 0.5rem;">
              Confirm Order (Pay on Delivery) →
            </button>
          </form>
        </div>
      </div>

      <div id="checkout-receipt-view" style="display: none; max-width: 680px; margin: 0 auto;">
        <div class="receipt-container">
          <div class="receipt-header">
            <div class="receipt-check-icon">✓</div>
            <h3 style="font-size: 1.6rem; font-weight: 900; margin-bottom: 0.25rem;">Order Successfully Placed!</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">Your package is being prepared for express dispatch.</p>
            <div id="receipt-order-id" class="receipt-id">#SYD-842910-COD</div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; font-size: 0.85rem;">
            <div><span style="color: #94a3b8; display: block;">Recipient Name:</span><strong id="receipt-cust-name" style="color: #ffffff;">Alex Henderson</strong></div>
            <div><span style="color: #94a3b8; display: block;">Contact Phone:</span><strong id="receipt-cust-phone" style="color: #ffffff;">+1 (555) 234-5678</strong></div>
            <div><span style="color: #94a3b8; display: block;">Delivery Address:</span><strong id="receipt-cust-address" style="color: #ffffff;">742 Evergreen Terrace</strong></div>
            <div><span style="color: #94a3b8; display: block;">Est. Delivery:</span><strong id="receipt-delivery-date" style="color: #10b981;">2-3 Business Days</strong></div>
          </div>

          <table class="receipt-table">
            <thead>
              <tr><th>Item Description</th><th style="text-align: right;">Total (COD)</th></tr>
            </thead>
            <tbody>
              <tr><td id="receipt-item-name">Quantum Ultra ANC Earbuds Pro</td><td id="receipt-item-price" class="amount">$149.99</td></tr>
              <tr><td>Express Doorstep Shipping</td><td class="amount" style="color: #10b981;">$0.00 (FREE)</td></tr>
              <tr style="border-top: 2px solid ${p.primary};"><td style="font-weight: 800; font-size: 1.05rem; color: #ffffff;">Total Due on Delivery</td><td id="receipt-total-due" class="amount" style="color: ${p.primary}; font-size: 1.2rem;">$149.99</td></tr>
            </tbody>
          </table>

          <div class="receipt-actions">
            <button class="btn-receipt btn-receipt-print" onclick="window.print()">🖨️ Print / Save Receipt</button>
            <button class="btn-receipt btn-receipt-new" onclick="resetOrderForm()">← Place Another Order</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section id="faqs" style="padding: 3rem 0 5rem;">
      <div class="section-title-wrap">
        <span class="sec-badge">HELP & POLICIES</span>
        <h2 class="sec-title">Pay on Delivery Questions</h2>
      </div>
      <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
        <div class="glass" style="padding: 1.25rem 1.5rem;">
          <div style="font-weight: 700;">How does Pay on Delivery (COD) work?</div>
          <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem;">Inspect your package condition upon doorstep arrival, then pay the exact amount using Cash or local mobile POS/UPI.</p>
        </div>
        <div class="glass" style="padding: 1.25rem 1.5rem;">
          <div style="font-weight: 700;">Do I need to enter any credit card or bank details?</div>
          <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem;">Never! We do not ask for any card numbers or bank logins. Your order is confirmed strictly with your delivery address.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-brand">${bn}</div>
      <div class="footer-cod-badge">✓ 100% Cash on Delivery Authorized Merchant</div>
      <p>&copy; 2026 ${bn}. All rights reserved. Powered by SYDAS.x Genesis Matrix.</p>
    </div>
  </footer>

  <script>
    var currentSelectedProduct = {
      id: '${products[0] ? products[0].id : "default"}',
      name: '${products[0] ? products[0].name.replace(/'/g, "\\'") : "Quantum Ultra ANC Earbuds Pro"}',
      price: ${products[0] ? products[0].price : 149.99}
    };

    function selectProductForCheckout(id, name, price) {
      currentSelectedProduct = { id: id, name: name, price: price };
      var nameEl = document.getElementById('summary-prod-name');
      var priceEl = document.getElementById('summary-prod-price');
      var totalEl = document.getElementById('summary-total-price');

      if (nameEl) nameEl.textContent = name;
      if (priceEl) priceEl.textContent = '$' + price.toFixed(2);
      if (totalEl) totalEl.textContent = '$' + price.toFixed(2);

      var checkoutSec = document.getElementById('checkout-section');
      if (checkoutSec) checkoutSec.scrollIntoView({ behavior: 'smooth' });
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

      document.getElementById('receipt-order-id').textContent = orderId;
      document.getElementById('receipt-cust-name').textContent = name;
      document.getElementById('receipt-cust-phone').textContent = phone;
      document.getElementById('receipt-cust-address').textContent = address + ', ' + city + ' ' + zip;
      document.getElementById('receipt-item-name').textContent = currentSelectedProduct.name;
      document.getElementById('receipt-item-price').textContent = '$' + currentSelectedProduct.price.toFixed(2);
      document.getElementById('receipt-total-due').textContent = '$' + currentSelectedProduct.price.toFixed(2);

      document.getElementById('checkout-active-view').style.display = 'none';
      document.getElementById('checkout-receipt-view').style.display = 'block';
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

    // ───────────────────────────────────────────────────
    // FOR ALL OTHER 14 INDUSTRIES: SHOWCASE + INQUIRY / BOOKING
    // (STRICTLY NO PAYMENT, NO COD, NO RECEIPTS)
    // ───────────────────────────────────────────────────
    var items = ind.items || [];
    var itemsHTML = items.map(function(it, i) {
      return `
        <div class="glass" style="padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: 18px; transition: transform 0.3s ease;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 800; color: ${p.primary}; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">${it.category}</span>
            <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.75rem; color: #ffffff;">${it.title}</h3>
            <p style="color: #94a3b8; font-size: 0.92rem; line-height: 1.6;">${it.desc}</p>
          </div>
          <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <a href="#inquiry-section" style="color: ${p.primary}; font-weight: 800; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;">
              <span>Inquire for Specs & Availability →</span>
            </a>
          </div>
        </div>
      `;
    }).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bn} — ${ind.label}</title>
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

    .glass {
      background: ${p.card};
      backdrop-filter: blur(20px);
      border: 1px solid ${p.cardBorder};
      border-radius: 18px;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 40;
      background: ${p.bg}dd;
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-logo {
      font-size: 1.35rem;
      font-weight: 900;
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }
    .nav-links { display: flex; gap: 1.5rem; font-size: 0.88rem; font-weight: 600; color: #94a3b8; }
    .nav-links a { color: inherit; text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover { color: ${p.primary}; }
    .header-cta {
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 800;
      font-size: 0.85rem;
      padding: 0.55rem 1.25rem;
      border-radius: 12px;
      text-decoration: none;
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 10; }

    /* Hero */
    .hero { padding: 5.5rem 0 3.5rem; text-align: center; }
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
    .hero p { font-size: 1.1rem; color: #94a3b8; max-width: 720px; margin: 0 auto 2rem; }
    .hero-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
    .btn-hero-primary {
      background: linear-gradient(135deg, ${p.gs}, ${p.ge});
      color: #000;
      font-weight: 800;
      padding: 0.9rem 2.2rem;
      border-radius: 14px;
      text-decoration: none;
      box-shadow: 0 10px 30px ${p.primary}44;
    }
    .btn-hero-secondary {
      background: rgba(255,255,255,0.06);
      color: #ffffff;
      font-weight: 700;
      padding: 0.9rem 2rem;
      border-radius: 14px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.12);
    }

    .metrics-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 4.5rem; }
    .metric-card { padding: 1.5rem; text-align: center; }
    .metric-val { font-size: 2rem; font-weight: 900; color: ${p.primary}; margin-bottom: 0.25rem; }
    .metric-label { font-size: 0.85rem; color: #94a3b8; font-weight: 600; }

    .showcase-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem; margin-bottom: 5rem; }

    /* Inquiry Section */
    .inquiry-wrap { max-width: 750px; margin: 0 auto 5rem; padding: 2.5rem; }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; font-size: 0.82rem; font-weight: 700; color: #cbd5e1; margin-bottom: 0.4rem; }
    .form-input { width: 100%; padding: 0.85rem 1rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #ffffff; font-family: inherit; font-size: 0.9rem; outline: none; }
    .form-input:focus { border-color: ${p.primary}; box-shadow: 0 0 15px ${p.primary}33; }
    .btn-submit-inquiry { width: 100%; padding: 1rem; background: linear-gradient(135deg, ${p.gs}, ${p.ge}); color: #000; font-weight: 900; font-size: 1rem; border: none; border-radius: 12px; cursor: pointer; }

    footer { border-top: 1px solid rgba(255,255,255,0.08); padding: 3.5rem 0 2rem; background: ${p.bg}; text-align: center; color: #64748b; font-size: 0.85rem; }
    .footer-brand { font-size: 1.3rem; font-weight: 900; color: #ffffff; margin-bottom: 0.5rem; }
  </style>
</head>
<body>
  <div class="glow-blob blob-1"></div>
  <div class="glow-blob blob-2"></div>

  <header>
    <div class="brand-logo">${bn}</div>
    <nav class="nav-links">
      <a href="#showcase">Offerings</a>
      <a href="#inquiry-section">Inquire / Consult</a>
      <a href="#about">About</a>
    </nav>
    <a href="#inquiry-section" class="header-cta">Contact Team</a>
  </header>

  <main class="container">
    <!-- Scroll 1: Hero -->
    <section class="hero">
      <span class="hero-tag">${ind.heroTag}</span>
      <h1>${ind.heroTitle(bn)}</h1>
      <p>${ind.heroSub}</p>

      <div class="hero-actions">
        <a href="#showcase" class="btn-hero-primary">${ind.heroCta} →</a>
        <a href="#inquiry-section" class="btn-hero-secondary">Consultation Request</a>
      </div>

      <div class="metrics-bar">
        <div class="metric-card glass">
          <div class="metric-val">100%</div>
          <div class="metric-label">Client Satisfaction SLA</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-val">&lt; 2h</div>
          <div class="metric-label">Executive Response Guarantee</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-val">Global</div>
          <div class="metric-label">North America &bull; Asia &bull; Europe</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-val">ISO 9001</div>
          <div class="metric-label">Certified Enterprise Standards</div>
        </div>
      </div>
    </section>

    <!-- Scroll 2: Industry Specific Offerings -->
    <section id="showcase" style="padding: 2rem 0;">
      <div style="text-align: center; margin-bottom: 2.5rem;">
        <span style="color: ${p.primary}; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase;">INDUSTRY SPECIFICATIONS</span>
        <h2 style="font-size: 2.3rem; font-weight: 900;">${ind.showcaseTitle}</h2>
      </div>

      <div class="showcase-grid">
        ${itemsHTML}
      </div>
    </section>

    <!-- Scroll 3: Executive Consultation & Inquiry Form (NO RECEIPT / NO PAYMENT) -->
    <section id="inquiry-section" style="padding: 2rem 0;">
      <div class="inquiry-wrap glass">
        <div style="text-align: center; margin-bottom: 1.75rem;">
          <h3 style="font-size: 1.6rem; font-weight: 900; margin-bottom: 0.35rem; color: #ffffff;">${ind.inquiryTitle}</h3>
          <p style="color: #94a3b8; font-size: 0.9rem;">${ind.inquirySub}</p>
        </div>

        <form id="industry-inquiry-form" onsubmit="handleInquirySubmit(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label for="inq-name">Your Full Name *</label>
              <input type="text" id="inq-name" class="form-input" placeholder="e.g. Morgan Vance" required />
            </div>
            <div class="form-group">
              <label for="inq-email">Business Email Address *</label>
              <input type="email" id="inq-email" class="form-input" placeholder="morgan@company.com" required />
            </div>
          </div>

          <div class="form-group">
            <label for="inq-phone">Contact Phone Number (Optional)</label>
            <input type="tel" id="inq-phone" class="form-input" placeholder="+1 (555) 019-2834" />
          </div>

          <div class="form-group">
            <label for="inq-message">Project Specifications / Requirements *</label>
            <textarea id="inq-message" class="form-input" rows="4" placeholder="Describe your timeline, project requirements, or booking specifications..." required></textarea>
          </div>

          <button type="submit" class="btn-submit-inquiry">
            Submit Specification & Inquire →
          </button>
        </form>

        <div id="inquiry-success-msg" style="display: none; text-align: center; padding: 2rem 1rem;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: ${p.primary}; color: #000; font-size: 1.5rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">✓</div>
          <h4 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.25rem;">Transmission Received</h4>
          <p style="color: #94a3b8; font-size: 0.9rem;">Thank you! Our executive lead has received your specifications and will respond within 2 hours.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-brand">${bn}</div>
      <p>&copy; 2026 ${bn}. All rights reserved. Powered by SYDAS.x Genesis Matrix.</p>
    </div>
  </footer>

  <script>
    function handleInquirySubmit(e) {
      e.preventDefault();
      var form = document.getElementById('industry-inquiry-form');
      var success = document.getElementById('inquiry-success-msg');
      if (form && success) {
        form.style.display = 'none';
        success.style.display = 'block';
      }
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
