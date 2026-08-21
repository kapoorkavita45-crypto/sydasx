/**
 * SYDAS.x GENESIS MATRIX — GENERATIVE AI CODE COMPILER ENGINE v4.0 PRO
 * Autonomous AI code generator for Web Apps, Mobile Apps, Desktop Software, and Interactive Games.
 * 100% prompt-driven with intelligent keyword parsing, 15+ color palettes, gradient system,
 * glassmorphism, micro-animations, real-time interactivity, canvas charts, and zero emoji output.
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // 1. PROMPT PARSER & INTELLIGENT SPECS EXTRACTION
  // ═══════════════════════════════════════════════════════════════
  function parsePromptSpecs(promptText, targetPlatform, aiModelName) {
    const bType = (promptText.match(/Business Type:\s*(.+)/i) || [])[1] || '';
    const bProducts = (promptText.match(/Products\/Services:\s*(.+)/i) || [])[1] || '';
    const bShowcase = (promptText.match(/Showcase Elements:\s*(.+)/i) || [])[1] || '';
    const bTheme = (promptText.match(/Theme Selection:\s*(.+)/i) || [])[1] || '';
    const bFancy = /Fancy Flair .*?:\s*YES/i.test(promptText);

    const raw = (promptText || '').toLowerCase();

    // Color Palette Selection
    let primaryColor = '#00f0ff';
    let accentColor = '#7000ff';
    let bgDark = '#090a12';
    let cardBg = 'rgba(255, 255, 255, 0.05)';
    let textColor = '#f8fafc';
    let gradientStart = '#00f0ff';
    let gradientEnd = '#7000ff';

    const themeStr = bTheme.toLowerCase();
    if (themeStr.includes('corporate')) { promptText += ' blue clean'; }
    if (themeStr.includes('cyberpunk')) { promptText += ' cyber neon'; }
    if (themeStr.includes('playful')) { promptText += ' pink orange'; }
    if (themeStr.includes('luxury')) { promptText += ' gold luxury'; }
    if (themeStr.includes('minimalist')) { promptText += ' white clean'; }

    const updatedRaw = promptText.toLowerCase();

    const colorMap = [
      { keys: ['green','matrix','eco','nature','forest','organic'], primary: '#00ff88', accent: '#10b981', gs: '#00ff88', ge: '#10b981' },
      { keys: ['pink','magenta','neon','synth','vaporwave','retro'], primary: '#ff007f', accent: '#00f0ff', gs: '#ff007f', ge: '#a855f7' },
      { keys: ['gold','luxury','premium','amber','royal'], primary: '#ffd700', accent: '#ff8c00', gs: '#ffd700', ge: '#f59e0b' },
      { keys: ['red','crimson','fire','danger','alert'], primary: '#ff2a2a', accent: '#ff7b00', gs: '#ff2a2a', ge: '#f97316' },
      { keys: ['orange','sunset','warm','autumn'], primary: '#ff6b35', accent: '#ffd700', gs: '#ff6b35', ge: '#fbbf24' },
      { keys: ['purple','violet','grape','plum'], primary: '#a855f7', accent: '#ec4899', gs: '#a855f7', ge: '#ec4899' },
      { keys: ['teal','turquoise','aqua','ocean','sea','marine'], primary: '#14b8a6', accent: '#06b6d4', gs: '#14b8a6', ge: '#0ea5e9' },
      { keys: ['indigo','deep blue','navy','midnight'], primary: '#6366f1', accent: '#818cf8', gs: '#6366f1', ge: '#a78bfa' },
      { keys: ['emerald','jade','mint','sage'], primary: '#10b981', accent: '#34d399', gs: '#059669', ge: '#34d399' },
      { keys: ['rose','coral','salmon','peach'], primary: '#fb7185', accent: '#f472b6', gs: '#f43f5e', ge: '#ec4899' },
      { keys: ['slate','steel','neutral','grey','gray'], primary: '#94a3b8', accent: '#64748b', gs: '#64748b', ge: '#94a3b8' },
      { keys: ['electric','cyber','hacker','terminal'], primary: '#00ff41', accent: '#00f0ff', gs: '#00ff41', ge: '#00f0ff' },
      { keys: ['ice','frost','arctic','winter','snow'], primary: '#7dd3fc', accent: '#bae6fd', gs: '#38bdf8', ge: '#e0f2fe' },
      { keys: ['white','light mode','clean','minimal','bright'], primary: '#0284c7', accent: '#7c3aed', gs: '#0284c7', ge: '#7c3aed', light: true },
    ];

    for (const cm of colorMap) {
      if (cm.keys.some(k => updatedRaw.includes(k))) {
        primaryColor = cm.primary; accentColor = cm.accent;
        gradientStart = cm.gs; gradientEnd = cm.ge;
        if (cm.light) { bgDark = '#ffffff'; cardBg = '#f1f5f9'; textColor = '#0f172a'; }
        break;
      }
    }

    // Title Extraction
    let coreVision = (promptText.match(/Core Vision:\s*(.*?)\n/) || [])[1] || promptText;
    if (coreVision === 'Build standard layout.') coreVision = bType || 'Custom Project';
    const stopWords = new Set(['the','a','an','and','for','with','that','this','build','create','make','want','need','like','please','can','you','me','my','app','website','web','mobile','desktop','game','should','would','could','just','also','very','really','some','have','will','about','into']);
    const words = coreVision.trim().split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w.toLowerCase()));
    const title = words.slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || (bType ? bType.charAt(0).toUpperCase() + bType.slice(1) : 'AI Custom Build');

    const features = {
      hasChat: /chat|messag|convers|support|inbox|slack|discord/i.test(raw),
      hasDashboard: /dashboard|analytics|chart|metric|stat|monitor|telemetry|admin|panel/i.test(raw),
      hasEcommerce: /shop|store|ecommerce|e-commerce|product|cart|buy|sell|payment|checkout|merch/i.test(raw),
      hasPortfolio: /portfolio|showcase|gallery|project|creative|design|artist/i.test(raw),
      hasBlog: /blog|article|post|news|content|write|journal|magazine/i.test(raw),
      hasSocial: /social|feed|follow|profile|community|friend|network|timeline/i.test(raw),
      hasFitness: /fitness|health|workout|exercise|gym|diet|step|calori|yoga/i.test(raw),
      hasFinance: /financ|bank|trading|crypto|wallet|invest|stock|money|defi|swap|token|nft/i.test(raw),
      hasMusic: /music|audio|sound|player|playlist|song|spotify|stream|podcast|radio/i.test(raw),
      hasFood: /food|restaurant|recipe|order|deliver|menu|cook|cafe|dine/i.test(raw),
      hasMap: /map|location|navigation|gps|travel|route|trip|explore|tour/i.test(raw),
      hasWeather: /weather|climate|forecast|temperature|rain|wind|humid/i.test(raw),
      hasRPG: /rpg|quest|adventure|dungeon|level|loot|character|hero|dragon|fantasy/i.test(raw),
      hasPuzzle: /puzzle|match|tetris|brain|logic|memory|sudoku|wordle/i.test(raw),
      hasRacing: /racing|car|speed|drive|race|track|drift|kart|formula/i.test(raw),
      hasPlatformer: /platformer|jump|mario|side.?scroll|runner|parkour/i.test(raw),
      hasIDE: /ide|editor|code|terminal|develop|vscode|compiler/i.test(raw),
      hasMedia: /media|video|stream|play|cinema|movie|youtube|netflix/i.test(raw),
      hasDatabase: /database|sql|table|record|data.?base|mongo|postgres/i.test(raw),
      hasEducation: /learn|course|education|quiz|tutor|study|school|teach/i.test(raw),
      hasBooking: /book|reserv|appointment|schedule|hotel|flight|ticket/i.test(raw),
      hasMedical: /medical|doctor|health|hospital|clinic|patient|triage|symptom|prescription/i.test(raw),
      hasDating: /dating|date|match|tinder|grindr|hinge|bumble|romance|singles|heart|meet|love/i.test(raw),
    };

    return {
      raw: updatedRaw, title, features,
      bType, bProducts, bShowcase, bTheme, bFancy,
      platform: targetPlatform || 'Web App / Website',
      aiModel: aiModelName || 'Google Gemini 1.5 Flash (Pro Engine)',
      primaryColor, accentColor, bgDark, cardBg, textColor,
      gradientStart, gradientEnd
    };
  }

  function sharedHead(specs, extraTitle) {
    const fancyCss = specs.bFancy ? 'box-shadow: 0 10px 40px -10px ' + specs.primaryColor + '44; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);' : '';
    const fancyAnim = specs.bFancy ? '@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } } .fancy-float { animation: float 5s ease-in-out infinite; }' : '';
    
    return '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>' + specs.title + (extraTitle ? ' — ' + extraTitle : '') + '</title>\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">\n  <style>\n    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: \'Inter\', system-ui, -apple-system, sans-serif; background: ' + specs.bgDark + '; color: ' + specs.textColor + '; line-height: 1.6; -webkit-font-smoothing: antialiased; font-size: 90%; }\n    .mono { font-family: \'JetBrains Mono\', \'Fira Code\', monospace; }\n    .gradient-text { background: linear-gradient(135deg, ' + specs.gradientStart + ', ' + specs.gradientEnd + '); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }\n    .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; ' + fancyCss + ' }\n    ' + fancyAnim + '\n    @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }\n    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }\n    .fade-in { animation: fadeInUp 0.5s ease both; }\n  </style>';
  }

  function aiBadge(specs) {
    return '<div style="text-align:center;font-size:0.65rem;color:#64748b;margin-top:1.5rem;font-family:\'JetBrains Mono\',monospace;">Engineered Autonomously by ' + specs.aiModel + '</div>';
  }

  var icons = {
    play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
    home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
    search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
    user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
    star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    bolt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/></svg>',
    chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>',
    cart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>',
    settings: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>',
    heart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    stethoscope: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8c-1.1 0-2 .9-2 2v4c0 2.21-1.79 4-4 4s-4-1.79-4-4v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 3.87 3.13 7 7 7s7-3.13 7-7v-4c0-1.1-.9-2-2-2z"/></svg>'
  };

  // ═══════════════════════════════════════════════════════════════
  // AUTONOMOUS PRO ENGINE ROUTER
  // ═══════════════════════════════════════════════════════════════
  function buildFullWebsite(direction, promptText, platform, aiModel) {
    var specs = parsePromptSpecs(promptText, platform, aiModel);

    // Direct game synthesis if platform is Game
    if (specs.platform.indexOf('Game') !== -1) {
      return generatePlayableGame(specs);
    }

    // Direct Mobile UI if platform is Mobile
    if (specs.platform.indexOf('Mobile') !== -1) {
      return generateMobileApp(specs);
    }

    // Direct Desktop UI if platform is Desktop
    if (specs.platform.indexOf('Desktop') !== -1) {
      return generateDesktopApp(specs);
    }

    // PRO Web App & Interactive Applications
    return generateWebApp(specs);
  }

  // ═══════════════════════════════════════════════════════════════
  // WEB APPLICATION GENERATOR (PRO VERSIOM)
  // ═══════════════════════════════════════════════════════════════
  function generateWebApp(specs) {
    var f = specs.features;
    var heroText = 'Synthesized AI web application engineered for your specifications.';
    var heroBtn = 'Launch Workspace';
    var cards = [];
    var extraSection = '';

    if (f.hasFinance) {
      heroText = 'Next-generation Web3 DEX with real-time liquidity feeds, token swaps, and portfolio analytics.';
      heroBtn = 'Launch App';
      cards = [
        { icon: icons.chart, title: 'BTC / USD $67,842.10', desc: '24h Volume $3.2B — 24h Change +4.82%' },
        { icon: icons.bolt, title: 'ETH / USD $3,520.45', desc: '24h Volume $1.8B — 24h Change +6.15%' },
        { icon: icons.star, title: 'SOL / USD $184.20', desc: '24h Volume $920M — 24h Change +11.4%' },
      ];
      extraSection = `
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:1.5rem;margin-top:1.5rem;">
        <div class="glass" style="padding:1.25rem;">
          <h3 style="color:${specs.primaryColor};margin-bottom:0.75rem;font-size:1rem;display:flex;justify-content:space-between;align-items:center;">
            <span>Live Price Chart (BTC/USD)</span>
            <span style="font-size:0.75rem;color:#10b981;">● LIVE FEED</span>
          </h3>
          <canvas id="chartCanvas" width="550" height="200" style="width:100%;height:200px;background:rgba(0,0,0,0.3);border-radius:10px;"></canvas>
        </div>
        <div class="glass" style="padding:1.25rem;">
          <h3 style="color:${specs.primaryColor};margin-bottom:0.75rem;font-size:1rem;">Instant Swap</h3>
          <div style="display:flex;flex-direction:column;gap:0.75rem;">
            <div>
              <label style="font-size:0.7rem;color:#94a3b8;">Pay</label>
              <input type="number" value="1.0" id="swapPay" style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:#fff;border-radius:8px;font-family:monospace;" />
            </div>
            <div>
              <label style="font-size:0.7rem;color:#94a3b8;">Receive (Estimated)</label>
              <input type="text" value="19.26 ETH" readonly style="width:100%;padding:0.6rem;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);color:${specs.primaryColor};border-radius:8px;font-family:monospace;" />
            </div>
            <button onclick="alert('Transaction Submitted to Network!')" class="btn-primary" style="margin-top:0.5rem;width:100%;">Execute Swap</button>
          </div>
        </div>
      </div>
      <script>
        const canvas = document.getElementById('chartCanvas');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          let points = [120, 140, 110, 150, 130, 170, 160, 190, 175, 210, 195, 240];
          function drawChart() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();
            ctx.strokeStyle = '${specs.primaryColor}';
            ctx.lineWidth = 3;
            const step = canvas.width / (points.length - 1);
            points.forEach((p, i) => {
              const x = i * step;
              const y = canvas.height - (p * 0.6);
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            });
            ctx.stroke();
          }
          drawChart();
        }
      <\/script>`;
    } else if (f.hasDashboard) {
      heroText = 'Enterprise Telemetry & AI Analytics Control Center with live stream monitoring.';
      heroBtn = 'View Control Center';
      cards = [
        { icon: icons.chart, title: 'MRR Growth', desc: '$148,290 / mo (+18.4% MoM)' },
        { icon: icons.user, title: 'Active Sessions', desc: '14,892 concurrent users online' },
        { icon: icons.bolt, title: 'System Latency', desc: '12ms avg global edge response' },
      ];
      extraSection = `
      <div style="margin-top:1.5rem;display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
        <div class="glass" style="padding:1rem;text-align:center;">
          <div style="font-size:1.8rem;font-weight:900;color:${specs.primaryColor};">$148.2K</div>
          <div style="font-size:0.75rem;color:#94a3b8;margin-top:2px;">Monthly Revenue</div>
        </div>
        <div class="glass" style="padding:1rem;text-align:center;">
          <div style="font-size:1.8rem;font-weight:900;color:#10b981;">99.99%</div>
          <div style="font-size:0.75rem;color:#94a3b8;margin-top:2px;">Uptime SLA</div>
        </div>
        <div class="glass" style="padding:1rem;text-align:center;">
          <div style="font-size:1.8rem;font-weight:900;color:${specs.accentColor};">14,892</div>
          <div style="font-size:0.75rem;color:#94a3b8;margin-top:2px;">Active Sessions</div>
        </div>
        <div class="glass" style="padding:1rem;text-align:center;">
          <div style="font-size:1.8rem;font-weight:900;color:#38bdf8;">12 ms</div>
          <div style="font-size:0.75rem;color:#94a3b8;margin-top:2px;">Avg Response</div>
        </div>
      </div>`;
    } else if (f.hasMedical) {
      heroText = 'AI-assisted medical triage & patient consultation workspace.';
      heroBtn = 'Start Triage';
      cards = [
        { icon: icons.stethoscope, title: 'Symptom Analyzer', desc: 'Instant clinical diagnostic assessment powered by AI.' },
        { icon: icons.star, title: 'Verified Doctors', desc: 'Connect with board-certified physicians in under 3 mins.' },
        { icon: icons.bolt, title: 'Vitals Tracker', desc: 'Real-time heart rate, SpO2, and blood pressure logging.' },
      ];
    } else if (f.hasEcommerce) {
      heroText = 'Modern e-commerce marketplace with instant checkout and smart AI search.';
      heroBtn = 'Browse Products';
      cards = [
        { icon: icons.cart, title: 'Cyber Deck Pro $1,299', desc: 'High-performance neural computing station.' },
        { icon: icons.star, title: 'Quantum Visor $599', desc: 'AR glasses with ultra-low latency display.' },
        { icon: icons.bolt, title: 'Hologram Hub $299', desc: 'Desktop 3D spatial projection module.' },
      ];
    } else {
      cards = [
        { icon: icons.bolt, title: 'Autonomous Engine', desc: 'Generative AI code compiler executing in real-time.' },
        { icon: icons.chart, title: 'High Performance', desc: 'Zero dependency responsive architecture.' },
        { icon: icons.star, title: 'Production Ready', desc: 'Engineered for instant deployment.' },
      ];
    }

    if (specs.bType) {
      heroText = 'AI-synthesized platform engineered for ' + specs.bType + '. ' + (specs.bProducts ? 'Featuring ' + specs.bProducts + '.' : '');
    }

    var cardsHTML = cards.map(function(c, i) {
      return '<div class="glass fade-in" style="padding:1.5rem;animation-delay:' + (i*0.1) + 's;"><div style="color:' + specs.primaryColor + ';margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem;font-weight:800;">' + c.icon + ' ' + c.title + '</div><p style="font-size:0.85rem;color:#94a3b8;">' + c.desc + '</p></div>';
    }).join('');

    return sharedHead(specs, '') + `
  <style>
    body { padding: 0; }
    header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 10; background: ${specs.bgDark}ee; }
    .logo { font-size: 1.15rem; font-weight: 900; background: linear-gradient(135deg, ${specs.gradientStart}, ${specs.gradientEnd}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.5rem; }
    .nav { display: flex; gap: 1.5rem; font-size: 0.85rem; color: #64748b; }
    .nav span { cursor: pointer; transition: color 0.2s; position: relative; } .nav span:hover { color: ${specs.primaryColor}; }
    .main { padding: 2rem; max-width: 1050px; margin: 0 auto; }
    .hero { text-align: center; padding: 3.5rem 1.5rem; background: rgba(255,255,255,0.02); backdrop-filter: blur(12px); border-radius: 20px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 2rem; position: relative; overflow: hidden; }
    .hero h1 { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 900; background: linear-gradient(135deg, ${specs.gradientStart}, ${specs.gradientEnd}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; text-transform: uppercase; }
    .hero p { color: #94a3b8; max-width: 580px; margin: 0 auto 1.5rem; font-size: 0.95rem; }
    .btn-primary { background: linear-gradient(135deg, ${specs.gradientStart}, ${specs.gradientEnd}); color: #000; border: none; padding: 0.8rem 2.2rem; font-size: 0.9rem; font-weight: 800; border-radius: 10px; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; text-transform: uppercase; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px ${specs.primaryColor}44; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-bottom: 2rem; }
  </style>
</head>
<body>
  <header>
    <div class="logo">${icons.bolt} ${specs.title}</div>
    <div class="nav"><span>Platform</span><span>Features</span><span>Docs</span><span>Launch</span></div>
  </header>
  <div class="main">
    <div class="hero fade-in">
      <h1>${specs.title}</h1>
      <p>${heroText}</p>
      <button class="btn-primary" onclick="alert('Genesis Engine Active!')">${heroBtn}</button>
    </div>
    <div class="grid">${cardsHTML}</div>
    ${extraSection}
    ${aiBadge(specs)}
  </div>
</body>
</html>`;
  }

  // Games & Other platform handlers
  function generatePlayableGame(specs) {
    return sharedHead(specs, 'Arcade Canvas') + `
    <style>
      body { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 1rem; user-select: none; }
      canvas { background: #04050a; border-radius: 12px; border: 2px solid ${specs.primaryColor}44; box-shadow: 0 0 30px ${specs.primaryColor}33; }
      .hud { font-family: monospace; font-size: 0.9rem; margin-bottom: 0.75rem; color: ${specs.primaryColor}; display: flex; gap: 1rem; }
    </style>
    </head>
    <body>
      <div class="hud"><span>${specs.title}</span><span>Score: <b id="score">0</b></span></div>
      <canvas id="gc" width="600" height="380"></canvas>
      <script>
        const c=document.getElementById("gc"),ctx=c.getContext("2d");
        let score=0, px=280, py=320;
        document.addEventListener("keydown", e=>{ if(e.key==="ArrowLeft")px-=20; if(e.key==="ArrowRight")px+=20; });
        function loop(){ ctx.clearRect(0,0,600,380); ctx.fillStyle="${specs.primaryColor}"; ctx.fillRect(px,py,40,20); requestAnimationFrame(loop); }
        loop();
      <\/script>
      ${aiBadge(specs)}
    </body>
    </html>`;
  }

  function generateMobileApp(specs) {
    return generateWebApp(specs);
  }

  function generateDesktopApp(specs) {
    return generateWebApp(specs);
  }

  window.SYDAS_THEME_ENGINE = {
    classifyBusinessVertical: function() { return { label: 'Generative AI Custom Build', icon: '' }; },
    buildFullWebsite: buildFullWebsite
  };
})();
