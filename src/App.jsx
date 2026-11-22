import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

/* =========================================
   1. IMAGE SOURCES & RUNWAY MODELS
========================================= */

const MODELS = [
  {
    look: 15,
    name: 'Gul-e-Noor Zari Suit',
    code: 'ZC-9033',
    img: '/model_9033.png',
    r: 1136 / 2000 // 0.568
  },
  {
    look: 16,
    name: 'Nazakat Peplum & Sharara',
    code: 'ZC-2601',
    img: '/model_2601.png',
    r: 1216 / 1968 // 0.6179
  },
  {
    look: 17,
    name: 'Shehr-e-Khaas Mink Ensemble',
    code: 'ZC-1435',
    img: '/model_1435.png',
    r: 1152 / 2176 // 0.5294
  },
  {
    look: 18,
    name: 'Afreen Peach Gold Anarkali',
    code: 'ZC-9018',
    img: '/model_9018.png',
    r: 1280 / 1920 // 0.6667
  },
  {
    look: 19,
    name: 'Gul-e-Lalarukh Terracotta Suit',
    code: 'ZC-NO',
    img: '/model_no.png',
    r: 1280 / 1920 // 0.6667
  },
  {
    look: 20,
    name: 'Nazneen Champagne Rose Suit',
    code: 'ZC-3763',
    img: '/model_3763.png',
    r: 1280 / 1920 // 0.6667
  },
  {
    look: 21,
    name: 'Rukhsaar Cinnamon Rust Ensemble',
    code: 'ZC-4022',
    img: '/model_4022.png',
    r: 1280 / 1920 // 0.6667
  },
  {
    look: 22,
    name: 'Mehtab Dusty Rose Festive Suit',
    code: 'ZC-4029',
    img: '/model_4029.png',
    r: 1280 / 1920 // 0.6667
  }
];

const ITEMS = [
  // =========================================
  // LOOK 15 (Dummy 1: ZC-9033 Mustard Handcrafted Set)
  // =========================================
  {
    name: 'Zari Embroidered Kurta',
    category: 'ZC-9033',
    look: 15,
    price: '₹2,499',
    priceVal: 2499,
    img: '/kurta_9033.png'
  },
  {
    name: 'Flared Palazzo Pants',
    category: 'ZC-9033',
    look: 15,
    price: '₹1,450',
    priceVal: 1450,
    img: '/palazzo_9033.png'
  },
  {
    name: 'Embellished Organza Dupatta',
    category: 'ZC-9033',
    look: 15,
    price: '₹980',
    priceVal: 980,
    img: '/dupatta_9033.png'
  },

  // =========================================
  // LOOK 16 (Dummy 2: ZC-2601 Sage Green Peplum & Sharara Set)
  // =========================================
  {
    name: 'Embroidered Peplum Kurti',
    category: 'ZC-2601',
    look: 16,
    price: '₹2,799',
    priceVal: 2799,
    img: '/peplum_2601.png'
  },
  {
    name: 'Flared Sharara Palazzo',
    category: 'ZC-2601',
    look: 16,
    price: '₹1,650',
    priceVal: 1650,
    img: '/palazzo_2601.png'
  },
  {
    name: 'Scalloped Organza Dupatta',
    category: 'ZC-2601',
    look: 16,
    price: '₹1,050',
    priceVal: 1050,
    img: '/dupatta_2601_card.png'
  },

  // =========================================
  // LOOK 17 (Dummy 3: ZC-1435 Mink / Silver Grey Handcrafted Set)
  // =========================================
  {
    name: 'Handcrafted Zari Kurta',
    category: 'ZC-1435',
    look: 17,
    price: '₹2,899',
    priceVal: 2899,
    img: '/kurta_1435.png'
  },
  {
    name: 'Tailored Silk Palazzo',
    category: 'ZC-1435',
    look: 17,
    price: '₹1,550',
    priceVal: 1550,
    img: '/palazzo_1435.png'
  },
  {
    name: 'Embroidered Mink Dupatta',
    category: 'ZC-1435',
    look: 17,
    price: '₹1,150',
    priceVal: 1150,
    img: '/dupatta_1435_card.png'
  },

  // =========================================
  // LOOK 18 (Dummy 4: ZC-9018 Peach Gold Anarkali Set)
  // =========================================
  {
    name: 'Embroidered Flared Kurti',
    category: 'ZC-9018',
    look: 18,
    price: '₹2,999',
    priceVal: 2999,
    img: '/kurta_9018.png'
  },
  {
    name: 'Flared Silk Palazzo Pants',
    category: 'ZC-9018',
    look: 18,
    price: '₹1,599',
    priceVal: 1599,
    img: '/palazzo_9018.png'
  },
  {
    name: 'Scalloped Peach Dupatta',
    category: 'ZC-9018',
    look: 18,
    price: '₹1,199',
    priceVal: 1199,
    img: '/dupatta_9018_card.png'
  },

  // =========================================
  // LOOK 19 (Dummy 5: ZC-NO Terracotta Rose Festive Set)
  // =========================================
  {
    name: 'Embroidered Rose Kurti',
    category: 'ZC-NO',
    look: 19,
    price: '₹2,799',
    priceVal: 2799,
    img: '/kurta_no.png'
  },
  {
    name: 'Flared Terracotta Palazzo',
    category: 'ZC-NO',
    look: 19,
    price: '₹1,599',
    priceVal: 1599,
    img: '/palazzo_no.png'
  },
  {
    name: 'Embellished Rose Dupatta',
    category: 'ZC-NO',
    look: 19,
    price: '₹1,150',
    priceVal: 1150,
    img: '/dupatta_no_card.png'
  },

  // =========================================
  // LOOK 20 (Dummy 6: ZC-3763 Champagne Rose Festive Set)
  // =========================================
  {
    name: 'Embroidered Champagne Kurti',
    category: 'ZC-3763',
    look: 20,
    price: '₹2,899',
    priceVal: 2899,
    img: '/kurta_3763.png'
  },
  {
    name: 'Flared Almond Palazzo Pants',
    category: 'ZC-3763',
    look: 20,
    price: '₹1,550',
    priceVal: 1550,
    img: '/palazzo_3763.png'
  },
  {
    name: 'Scalloped Champagne Dupatta',
    category: 'ZC-3763',
    look: 20,
    price: '₹1,150',
    priceVal: 1150,
    img: '/dupatta_3763_card.png'
  },

  // =========================================
  // LOOK 21 (Dummy 7: ZC-4022 Cinnamon Rust Festive Set)
  // =========================================
  {
    name: 'Handcrafted Cinnamon Kurti',
    category: 'ZC-4022',
    look: 21,
    price: '₹2,999',
    priceVal: 2999,
    img: '/kurta_4022.png'
  },
  {
    name: 'Straight Silk Pants',
    category: 'ZC-4022',
    look: 21,
    price: '₹1,499',
    priceVal: 1499,
    img: '/palazzo_4022.png'
  },
  {
    name: 'Organza Cinnamon Dupatta',
    category: 'ZC-4022',
    look: 21,
    price: '₹1,199',
    priceVal: 1199,
    img: '/dupatta_4022_card.png'
  },

  // =========================================
  // LOOK 22 (Dummy 8: ZC-4029 Dusty Rose Festive Set)
  // =========================================
  {
    name: 'Embroidered Dusty Rose Kurti',
    category: 'ZC-4029',
    look: 22,
    price: '₹2,899',
    priceVal: 2899,
    img: '/kurta_4029.png'
  },
  {
    name: 'Flared Soft Mauve Palazzo',
    category: 'ZC-4029',
    look: 22,
    price: '₹1,550',
    priceVal: 1550,
    img: '/palazzo_4029.png'
  },
  {
    name: 'Organza Pastel Rose Dupatta',
    category: 'ZC-4029',
    look: 22,
    price: '₹1,150',
    priceVal: 1150,
    img: '/dupatta_4029_card.png'
  }
];

const KX = [1.2, 0.744, 0.496, 0.346, 0.235, 0.15, 0.085];
const KF = [1.14, 0.89, 0.777, 0.704, 0.651, 0.616, 0.59];
const KH = [1.18, 0.832, 0.574, 0.436, 0.334, 0.258, 0.19];
const KB = [0, 0, 1.5, 4, 8, 12, 17];
const KO = [1, 1, 1, 1, 0.86, 0.5, 0];

const N = 8;
const FIRST = 15;

const wrap = (x, n) => ((x % n) + n) % n;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

const STORE_INFO = {
  name: 'ZAINAB COLLECTION',
  subtitle: 'Exclusive Ladies Wear & Runway Couture',
  address: 'Rajwada, State Bank ke ATM 🏧 ke Samne wali gali, Ground Floor, Shop No. 2, Indore (M.P.)',
  phone: '+91 98260 12345',
  whatsapp: '919826012345',
  timings: 'Monday to Sunday : 11:00 AM – 9:30 PM',
  mapUrl: 'https://maps.google.com/?q=Rajwada+Indore'
};

export default function App() {
  const stageRef = useRef(null);
  const railRef = useRef(null);
  const ringRef = useRef(null);
  const rollRef = useRef(null);
  const lineRef = useRef(null);
  const currentLookRef = useRef(0);

  // Modals & Drawers state
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Cart & Wishlist items state
  const [cart, setCart] = useState(() => {
    try {
      const s = localStorage.getItem('zc_cart_items');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const s = localStorage.getItem('zc_wishlist_items');
      return s ? JSON.parse(s) : [0, 1];
    } catch {
      return [0, 1];
    }
  });

  useEffect(() => {
    localStorage.setItem('zc_cart_items', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('zc_wishlist_items', JSON.stringify(wishlist));
  }, [wishlist]);

  const totalCartCount = cart.reduce((sum, it) => sum + it.qty, 0);

  const addToCart = (index) => {
    const item = ITEMS[index];
    setCart((prev) => {
      const existing = prev.find((it) => it.index === index);
      if (existing) {
        return prev.map((it) =>
          it.index === index ? { ...it, qty: it.qty + 1 } : it
        );
      }
      return [...prev, { index, name: item.name, price: item.price, priceVal: item.priceVal, qty: 1, img: item.img }];
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: 0.85, y: 0.5 }
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((it) => it.index !== index));
  };

  const updateCartQty = (index, delta) => {
    setCart((prev) =>
      prev
        .map((it) => (it.index === index ? { ...it, qty: it.qty + delta } : it))
        .filter((it) => it.qty > 0)
    );
  };

  const toggleWishlist = (index) => {
    setWishlist((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const shopCurrentLook = () => {
    const lookIdx = wrap(Math.round(currentLookRef.current), N);
    const item1Idx = (lookIdx * 3) % ITEMS.length;
    const item2Idx = (lookIdx * 3 + 1) % ITEMS.length;
    const item3Idx = (lookIdx * 3 + 2) % ITEMS.length;
    addToCart(item1Idx);
    addToCart(item2Idx);
    addToCart(item3Idx);
    setCartOpen(true);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map((it, i) => `${i + 1}. *${it.name}* (${it.price}) x ${it.qty}`)
      .join('\n');
    const total = cart.reduce((sum, it) => sum + it.priceVal * it.qty, 0);
    const msg = `✨ *NEW ORDER FROM ZAINAB COLLECTION RUNWAY*\n\n*Selected Pieces:*\n${itemsList}\n\n*Total Amount:* ₹${total.toLocaleString('en-IN')}\n*Store Location:* ${STORE_INFO.address}\n\nPlease confirm availability and trial at your Rajwada shop. Thank you!`;
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  /* =========================================
     RUNWAY 3D ENGINE LIFECYCLE
  ========================================= */
  useEffect(() => {
    const stage = stageRef.current;
    const rail = railRef.current;
    const ring = ringRef.current;
    const roll = rollRef.current;
    const line = lineRef.current;
    if (!stage || !rail || !ring || !roll || !line) return;

    line.innerHTML = '';
    rail.innerHTML = '';
    roll.innerHTML = '';

    // Create Runway Models (Look 15: 9033, Look 16: 2601, alternating)
    const people = MODELS.map((model, i) => {
      const e = document.createElement('div');
      e.className = 'm';
      e.dataset.i = i;

      const img = document.createElement('img');
      img.src = model.img;
      img.alt = `Zainab Collection Look ${FIRST + i} — ${model.name}`;
      img.draggable = false;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.objectPosition = 'bottom center';
      img.style.pointerEvents = 'none';

      e.append(img);
      line.append(e);

      return {
        e,
        r: model.r,
        f: '',
        o: ''
      };
    });

    // Create Product Cards in Rail (Cropped clothes from 11.jpg)
    const cardElements = ITEMS.map((item, i) => {
      const e = document.createElement('article');
      e.className = 'card' + (i % 2 ? ' alt' : '');
      e.dataset.index = i;

      const isFav = wishlist.includes(i);

      e.innerHTML = `
        <button
          class="fav ${isFav ? 'active' : ''}"
          aria-pressed="${isFav}"
          aria-label="Save ${item.name}"
          data-fav-index="${i}"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 20S3.5 15 3.5 9A4.6 4.6 0 0 1 12 6.6 4.600 4.600 0 0 1 20.500 9C20.500 15 12 20 12 20Z"/>
          </svg>
        </button>

        <span class="shot">
          <img src="${item.img}" alt="${item.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: contain;" />
        </span>

        <div class="meta">
          <h3 class="wide">${item.name}</h3>
          <span>${item.price}</span>
          <button
            class="add"
            aria-label="Add ${item.name} to cart"
            data-add-index="${i}"
          ></button>
        </div>
      `;

      rail.append(e);
      return e;
    });

    // Look Number Roll Numbers
    for (let i = 0; i <= N; i++) {
      const b = document.createElement('b');
      b.textContent = FIRST + (i % N);
      roll.append(b);
    }

    // Event Delegation for Rail Clicks
    const onRailClick = (e) => {
      const favBtn = e.target.closest('[data-fav-index]');
      if (favBtn) {
        const idx = parseInt(favBtn.dataset.favIndex, 10);
        toggleWishlist(idx);
        const nextFav = favBtn.getAttribute('aria-pressed') !== 'true';
        favBtn.setAttribute('aria-pressed', nextFav);
        favBtn.classList.toggle('active', nextFav);
        return;
      }

      const addBtn = e.target.closest('[data-add-index]');
      if (addBtn) {
        const idx = parseInt(addBtn.dataset.addIndex, 10);
        addToCart(idx);
      }
    };

    rail.addEventListener('click', onRailClick);

    // Animation & Dimension State
    let W = 0;
    let H = 0;
    let base = 0;
    let cardS = 0;
    let side = false;
    let dirty = true;

    let p = 0;
    let target = 0;
    let last = 0;

    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

    function size() {
      W = stage.clientWidth;
      H = stage.clientHeight;
      base = H * 1.2;
      side = window.innerWidth <= 820;

      people.forEach((m) => {
        m.e.style.width = base * m.r + 'px';
        m.e.style.height = base + 'px';
      });

      cardS = side ? 160 : rail.clientHeight / 3;

      cardElements.forEach((c) => {
        c.style.height = side ? '100%' : cardS + 'px';
      });

      dirty = true;
    }

    window.addEventListener('resize', size);

    // Main Paint Frame
    function paint() {
      // 1. Runway Models 3D Curve
      people.forEach((m, i) => {
        let d = wrap(i - p, N);
        if (d > N - 1) {
          d -= N;
        }

        const k = clamp(d + 1, 0, 6);
        const a = Math.floor(k);
        const b = Math.min(6, a + 1);
        const t = k - a;

        const mix = (A) => A[a] + (A[b] - A[a]) * t;

        const h = mix(KH) * H;
        const s = h / base;
        const w = h * m.r;

        const x = mix(KX) * W - w / 2;
        const y = mix(KF) * H - h;

        m.e.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${s.toFixed(4)})`;

        const f = mix(KB) / s;
        const fs = f < 0.2 ? 'none' : `blur(${f.toFixed(1)}px)`;
        const o = mix(KO).toFixed(3);

        if (fs !== m.f) {
          m.f = fs;
          m.e.style.filter = fs;
        }

        if (o !== m.o) {
          m.o = o;
          m.e.style.opacity = o;
        }

        m.e.style.zIndex = 100 - Math.round(d * 10);
      });

      // 2. Product Rail Vertical Slider (Exactly 3 cards per dummy)
      const all = cardS * ITEMS.length;
      cardElements.forEach((c, i) => {
        let y = wrap(i * cardS - p * 3 * cardS, all);
        if (y > all - cardS * 3) {
          y -= all;
        }

        c.style.transform = side
          ? `translate3d(${y.toFixed(1)}px, 0, 0)`
          : `translate3d(0, ${y.toFixed(1)}px, 0)`;
      });

      // 3. Look Roll Indicator
      if (roll.firstChild) {
        roll.style.transform = `translate3d(0, ${(-wrap(p, N) * roll.firstChild.offsetHeight).toFixed(1)}px, 0)`;
      }
    }

    // Pointer & Drag Engine
    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let down = false;
    let sx = 0;
    let st = 0;
    let moved = 0;
    let wheelT = 0;

    const PULL = () => Math.max(150, W * 0.2);

    const onPointerEnter = (e) => {
      if (e.pointerType === 'mouse') {
        ring.classList.add('show');
      }
    };

    const onPointerLeave = () => {
      ring.classList.remove('show');
    };

    const onPointerMove = (e) => {
      const r = stage.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;

      if (!down) return;

      const dx = e.clientX - sx;
      moved = Math.max(moved, Math.abs(dx));
      target = st + dx / PULL();
    };

    const onPointerDown = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;

      down = true;
      sx = e.clientX;
      st = target;
      moved = 0;

      stage.setPointerCapture(e.pointerId);
      ring.classList.add('drag');
    };

    const onRelease = (e) => {
      if (!down) return;
      down = false;
      ring.classList.remove('drag');

      if (moved < 6) {
        const hit = document
          .elementsFromPoint(e.clientX, e.clientY)
          .find((x) => x.classList && x.classList.contains('m'));

        if (hit) {
          let d = wrap(+hit.dataset.i - target, N);
          d = Math.round(d);
          if (d > 0 && d < N) {
            target = Math.round(target) + d;
          }
        }
      } else {
        target = Math.round(target);
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      target += clamp(e.deltaY + e.deltaX, -120, 120) / 420;
      clearTimeout(wheelT);
      wheelT = setTimeout(() => {
        target = Math.round(target);
      }, 150);
    };

    const onKeyDown = (e) => {
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        target = Math.round(target) + 1;
      }
      if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        target = Math.round(target) - 1;
      }
    };

    stage.addEventListener('pointerenter', onPointerEnter);
    stage.addEventListener('pointerleave', onPointerLeave);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointerup', onRelease);
    stage.addEventListener('pointercancel', onRelease);
    stage.addEventListener('wheel', onWheel, { passive: false });
    stage.addEventListener('keydown', onKeyDown);

    // Animation Loop
    let animId;
    function frame(now) {
      const dt = Math.min(50, now - last) || 16;
      last = now;

      const was = p;
      if (calm) {
        p = target;
      } else {
        p += (target - p) * (1 - Math.exp(-dt * 0.0072));
      }

      if (Math.abs(target - p) < 0.0004) {
        p = target;
      }

      if (p !== was || dirty) {
        dirty = false;
        paint();
      }

      currentLookRef.current = p;

      cx += (mx - cx) * 0.32;
      cy += (my - cy) * 0.32;

      ring.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      animId = requestAnimationFrame(frame);
    }

    // Preload & Init
    const preloads = [
      '/model_9033.png',
      '/model_2601.png',
      '/model_1435.png',
      '/model_9018.png',
      '/model_no.png',
      '/model_3763.png',
      '/model_4022.png',
      '/model_4029.png',
      '/kurta_9033.png',
      '/palazzo_9033.png',
      '/dupatta_9033.png',
      '/peplum_2601.png',
      '/palazzo_2601.png',
      '/dupatta_2601_card.png',
      '/kurta_1435.png',
      '/palazzo_1435.png',
      '/dupatta_1435_card.png',
      '/kurta_9018.png',
      '/palazzo_9018.png',
      '/dupatta_9018_card.png',
      '/kurta_no.png',
      '/palazzo_no.png',
      '/dupatta_no_card.png',
      '/kurta_3763.png',
      '/palazzo_3763.png',
      '/dupatta_3763_card.png',
      '/kurta_4022.png',
      '/palazzo_4022.png',
      '/dupatta_4022_card.png',
      '/kurta_4029.png',
      '/palazzo_4029.png',
      '/dupatta_4029_card.png'
    ];

    Promise.all(
      preloads.map((src) => {
        const im = new Image();
        im.src = src;
        return im.decode().catch(() => {});
      })
    )
      .then(() => document.fonts.ready)
      .then(() => {
        size();
        paint();
        setLoaded(true);
      });

    size();
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', size);
      rail.removeEventListener('click', onRailClick);
      stage.removeEventListener('pointerenter', onPointerEnter);
      stage.removeEventListener('pointerleave', onPointerLeave);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerdown', onPointerDown);
      stage.removeEventListener('pointerup', onRelease);
      stage.removeEventListener('pointercancel', onRelease);
      stage.removeEventListener('wheel', onWheel);
      stage.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="page">
      {/* =========================================
          HEADER
      ========================================== */}
      <header>
        <div className="r1">
          {/* Brand Name */}
          <div
            className="brand wide"
            onClick={() => setStoreOpen(true)}
            aria-label="Zainab Collection"
          >
            <span>Zainab Collection</span>
            <span className="brand-sub">• RAJWADA</span>
          </div>

          {/* Navigation Tabs */}
          <nav className="tabs wide" aria-label="Sections">
            <a className="on" href="#" aria-current="page">Runway</a>
            <button type="button" onClick={() => setStoreOpen(true)}>The Maison</button>
            <a href="#" onClick={(e) => { e.preventDefault(); setStoreOpen(true); }}>Lookbook</a>
            <button type="button" onClick={() => setCartOpen(true)}>Shop</button>
          </nav>

          {/* Right Account & Bag */}
          <div className="acct wide">
            <button type="button" onClick={() => setStoreOpen(true)}>Login</button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search Collection"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m15.5 15.5 5 5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setWishlistOpen(true)}
              aria-label="Saved Looks"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 20S3.5 15 3.5 9A4.6 4.6 0 0 1 12 6.6 4.600 4.600 0 0 1 20.500 9C20.500 15 12 20 12 20Z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Bag"
            >
              <svg viewBox="0 0 24 24">
                <path d="M5 8h14l1 13H4Z" />
                <path d="M9 10V6a3 3 0 0 1 6 0v4" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="mob-show"
            >
              Cart (<span id="cart">{totalCartCount}</span>)
            </button>
          </div>
        </div>

        {/* Row 2 Sub-Nav */}
        <nav className="r2 wide" aria-label="Departments">
          <a href="#">Collections</a>
          <a href="#">Clothing</a>
          <a href="#">Lookbook</a>
          <a href="#">Beauty</a>
          <a href="#">Accessories</a>
          <button
            type="button"
            className="store-btn"
            onClick={() => setStoreOpen(true)}
          >
            Rajwada Store 📍
          </button>
        </nav>
      </header>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <main>
        {/* RUNWAY STAGE */}
        <section
          className="stage"
          ref={stageRef}
          id="stage"
          aria-label="Runway looks. Drag, scroll or use the arrow keys to change look."
          tabIndex={0}
        >
          {/* Models Line Container */}
          <div className="line" ref={lineRef} id="line"></div>

          {/* Intro Text */}
          <div className="intro">
            <h2 className="wide">Festive Collection 2027</h2>
            <p>
              A celebration of royal grace and modern silhouettes. Handcrafted zari embroidery,
              pure Chanderi silks, and tailored festive ensembles from Zainab Collection, Rajwada.
            </p>
            <button
              type="button"
              onClick={() => setStoreOpen(true)}
              className="location-pill wide"
            >
              <span>📍 RAJWADA SHOP NO. 2</span>
            </button>
          </div>

          {/* Bottom Left Tag with Rolling Number */}
          <div className="tag">
            <div className="look wide" aria-live="polite">
              <span>Look</span>
              <span className="win">
                <span className="roll" ref={rollRef} id="roll"></span>
              </span>
            </div>

            <button
              type="button"
              className="shop wide"
              onClick={shopCurrentLook}
            >
              Shop the look
            </button>
          </div>

          {/* Custom Cursor Ring */}
          <div className="ring" ref={ringRef} id="ring"></div>
        </section>

        {/* PRODUCT RAIL */}
        <aside
          className="rail"
          ref={railRef}
          id="rail"
          aria-label="Pieces in this look"
        ></aside>
      </main>

      {/* LOADING OVERLAY */}
      <div className={`wait ${loaded ? 'gone' : ''}`} id="wait">
        <div className="wait-spinner"></div>
        <p className="wide" style={{ fontSize: '12px', letterSpacing: '0.2em' }}>
          ZAINAB COLLECTION
        </p>
      </div>

      {/* =========================================
          CART SLIDE-OVER DRAWER
      ========================================== */}
      {cartOpen && (
        <div className="modal-backdrop" onClick={() => setCartOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="wide" style={{ fontSize: '13px', letterSpacing: '0.18em' }}>
                Shopping Bag ({totalCartCount})
              </h3>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                style={{ fontSize: '20px', lineHeight: 1 }}
              >
                ✕
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--mid)' }}>
                  <p className="wide" style={{ fontSize: '11px', letterSpacing: '0.15em', marginBottom: '8px' }}>
                    Your Bag is Empty
                  </p>
                  <p style={{ fontSize: '13px' }}>Click the (+) icon on any piece to add it to your bag.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {cart.map((item) => (
                    <div
                      key={item.index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '16px',
                        borderBottom: '1px solid var(--line)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{ width: '50px', height: '65px', objectFit: 'contain', background: '#f8fafc', borderRadius: '6px' }}
                        />
                        <div>
                          <h4 className="wide" style={{ fontSize: '11px', letterSpacing: '0.14em', marginBottom: '4px' }}>
                            {item.name}
                          </h4>
                          <span style={{ fontSize: '13px', color: 'var(--mid)' }}>{item.price}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                            <button
                              type="button"
                              onClick={() => updateCartQty(item.index, -1)}
                              style={{ width: '24px', height: '24px', border: '1px solid var(--line)', borderRadius: '4px' }}
                            >
                              -
                            </button>
                            <span style={{ fontSize: '12px', fontWeight: '500' }}>{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => updateCartQty(item.index, 1)}
                              style={{ width: '24px', height: '24px', border: '1px solid var(--line)', borderRadius: '4px' }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="wide" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                          ₹{(item.priceVal * item.qty).toLocaleString('en-IN')}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.index)}
                          style={{ display: 'block', fontSize: '11px', color: '#b98179', marginTop: '6px' }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: '24px 28px', borderTop: '1px solid var(--line)', background: '#fafbfc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="wide" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>Total Amount</span>
                  <span className="wide" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    ₹{cart.reduce((sum, it) => sum + it.priceVal * it.qty, 0).toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  style={{
                    width: '100%',
                    background: '#25D366',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                    marginBottom: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Order via WhatsApp
                </button>

                <p style={{ fontSize: '11px', color: 'var(--mid)', textAlign: 'center' }}>
                  Pick up at <strong>Rajwada Shop No. 2</strong> or request direct home delivery.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================
          WISHLIST MODAL
      ========================================== */}
      {wishlistOpen && (
        <div className="modal-backdrop" onClick={() => setWishlistOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="wide" style={{ fontSize: '12px', letterSpacing: '0.18em' }}>
                Saved Pieces ({wishlist.length})
              </h3>
              <button type="button" onClick={() => setWishlistOpen(false)} style={{ fontSize: '18px' }}>✕</button>
            </div>

            <div style={{ padding: '20px 24px', maxHeight: '380px', overflowY: 'auto' }}>
              {wishlist.length === 0 ? (
                <p style={{ color: 'var(--mid)', textAlign: 'center', padding: '30px 0', fontSize: '13px' }}>
                  No saved items yet. Tap the heart on any card to save it.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {wishlist.map((idx) => {
                    const it = ITEMS[idx];
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          background: '#f8fafc',
                          borderRadius: '8px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <img src={it.img} alt={it.name} style={{ width: '40px', height: '50px', objectFit: 'contain' }} />
                          <div>
                            <h4 className="wide" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>{it.name}</h4>
                            <span style={{ fontSize: '12px', color: 'var(--mid)' }}>{it.price}</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(idx);
                              setWishlistOpen(false);
                              setCartOpen(true);
                            }}
                            className="wide"
                            style={{
                              fontSize: '10px',
                              background: 'var(--ink)',
                              color: '#fff',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            Add to Cart
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleWishlist(idx)}
                            style={{ color: '#b98179', fontSize: '12px', cursor: 'pointer' }}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          RAJWADA STORE LOCATION & DETAILS MODAL
      ========================================== */}
      {storeOpen && (
        <div className="modal-backdrop" onClick={() => setStoreOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 className="wide" style={{ fontSize: '14px', letterSpacing: '0.2em' }}>
                  {STORE_INFO.name}
                </h3>
                <span style={{ fontSize: '10px', color: 'var(--mid)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {STORE_INFO.subtitle}
                </span>
              </div>
              <button type="button" onClick={() => setStoreOpen(false)} style={{ fontSize: '20px' }}>✕</button>
            </div>

            <div style={{ padding: '24px 28px', spaceY: '16px' }}>
              {/* Address Spotlight */}
              <div style={{ background: '#f5f8fb', padding: '16px 20px', borderRadius: '10px', borderLeft: '4px solid #b98179', marginBottom: '16px' }}>
                <span className="wide" style={{ fontSize: '10px', color: '#b98179', letterSpacing: '0.15em', display: 'block', marginBottom: '6px' }}>
                  STORE ADDRESS & LANDMARK
                </span>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink)', fontWeight: '500' }}>
                  {STORE_INFO.address}
                </p>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--mid)', marginTop: '4px' }}>
                  Landmark: Rajwada, State Bank of India ATM ke Samne wali gali, Ground Floor, Shop #2
                </span>
              </div>

              {/* Timings & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div style={{ background: '#fafbfc', padding: '12px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--mid)', display: 'block' }}>STORE TIMINGS</span>
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>{STORE_INFO.timings}</span>
                </div>
                <div style={{ background: '#fafbfc', padding: '12px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--mid)', display: 'block' }}>CONTACT PHONE</span>
                  <a href={`tel:${STORE_INFO.phone}`} style={{ fontSize: '12px', fontWeight: '500', color: 'var(--ink)' }}>
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={STORE_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wide"
                  style={{
                    flex: 1,
                    background: 'var(--ink)',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    textAlign: 'center'
                  }}
                >
                  Google Maps Directions
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Zainab%20Collection,%20I%20want%20to%20visit%20your%20Rajwada%20Shop%20No.%202`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wide"
                  style={{
                    flex: 1,
                    background: '#25D366',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    textAlign: 'center'
                  }}
                >
                  WhatsApp Location
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          SEARCH MODAL
      ========================================== */}
      {searchOpen && (
        <div className="modal-backdrop" onClick={() => setSearchOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m15.5 15.5 5 5" />
              </svg>
              <input
                type="text"
                autoFocus
                placeholder="Search collection pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', background: 'transparent' }}
              />
              <button type="button" onClick={() => setSearchOpen(false)}>✕</button>
            </div>

            <div style={{ padding: '16px 20px', maxHeight: '300px', overflowY: 'auto' }}>
              {ITEMS.filter(
                (it) =>
                  it.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (it.category && it.category.toLowerCase().includes(searchQuery.toLowerCase()))
              ).map((it, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    addToCart(idx);
                    setSearchOpen(false);
                    setCartOpen(true);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: '1px solid var(--line)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={it.img} alt={it.name} style={{ width: '35px', height: '45px', objectFit: 'contain' }} />
                    <span className="wide" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>{it.name}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--mid)' }}>{it.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
