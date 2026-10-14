/**
 * AMAZON ECOMMERCE ENGINE - SCRIPT.JS
 * Complete interactive shopping experience:
 * - Product catalog rendering & filtering
 * - Live search with autocomplete suggestions
 * - Persistent shopping cart with localStorage
 * - Dynamic coupons & promo code engine
 * - Multi-step checkout simulation with order tracking
 * - Quick-view product modal
 * - Horizontal deal rail navigation
 * - Real-time countdown clocks
 * - Toast notification system
 */

// ==========================================================================
// 1. COMPREHENSIVE PRODUCT CATALOG DATASET
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones with Auto NC Optimizer",
    category: "audio",
    price: 249.00,
    originalPrice: 399.99,
    discount: "38% OFF",
    rating: 4.8,
    reviews: 24520,
    badge: "Best Seller",
    badgeType: "bestseller",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8hxZV5KL8CesKMU8Ra4Bm2fe7B8Jm6EufzsSjOQA7v17QogOVqwVrzAzipF3mRqalgmSBFn3wEtZKKYuEOKDmoafOpqVQQzao5DjMp-k2BCIV0emrnIpX182zryBVGmBfWKpK6so3gpEF57PVf8F3M9dT8QsZzoDJ-vE3gPKlFb_cKqVr-m3lPDZYSLjubqwJkzmpE_ZThVxLhhV93M8duYs23LkwJkYpDhKYtQoeaaqHe45Rmaqg",
    inStock: true,
    stockCount: 14,
    brand: "Sony",
    specs: [
      { name: "Connectivity", val: "Bluetooth 5.2 / 3.5mm" },
      { name: "Battery Life", val: "Up to 30 Hours" },
      { name: "Noise Canceling", val: "Dual Processor V1 + HD QN1" },
      { name: "Weight", val: "250g Ultra-lightweight" }
    ],
    description: "Industry-leading noise canceling optimized to you automatically. Exceptional sound quality engineered with the new Integrated Processor V1 and crystal clear hands-free calling with 4 beamforming microphones."
  },
  {
    id: 2,
    title: "Ergonomic Custom Mechanical Keyboard with Pre-Lubed Linear Switches & RGB",
    category: "electronics",
    price: 129.50,
    originalPrice: 179.00,
    discount: "28% OFF",
    rating: 4.7,
    reviews: 8340,
    badge: "Amazon's Choice",
    badgeType: "choice",
    prime: true,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB46PEGYvXoOfFK2qvueyJ0GKtCUV3d_pdC8Nzgc1pdwXsgVsLUozBosZOTih80B1kotnaP2L4wfuGPb1uraLUBp_ld1aMO0GRpIGS6gR7-KUgkjzS_0fshKhOuxinlVyKdMHKmbfnBV7Jn7ndKjEeOFwMYjKJ9zo9La63r8NbDhwUh8TZ0q2EnkokXrs2nZ_sGdkQV8cpvN_6jNasWkiaACoa9u38AOM2qmj2isy_hZOvIWnDXBHQ4",
    inStock: true,
    stockCount: 8,
    brand: "Keychron",
    specs: [
      { name: "Switches", val: "Hot-swappable Red Linear" },
      { name: "Keycaps", val: "Double-shot PBT Cherry Profile" },
      { name: "Connection", val: "Tri-mode (2.4G / BT 5.1 / USB-C)" },
      { name: "Layout", val: "75% Compact Layout" }
    ],
    description: "Full aluminum frame with sound-dampening acoustic silicone layers. Multi-device Bluetooth pairing up to 3 devices simultaneously."
  },
  {
    id: 3,
    title: "Ultra-Thin 32-inch 4K HDR IPS Computer Monitor with 99% sRGB & USB-C 90W Hub",
    category: "electronics",
    price: 379.99,
    originalPrice: 529.99,
    discount: "28% OFF",
    rating: 4.9,
    reviews: 14200,
    badge: "Best Seller",
    badgeType: "bestseller",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkg5oe5ENP0x_Q0uTY3e3TToJyzJwJ6PDMJcdTCPiWFqaDZkewAoX4JupCYzABO59wfQOHhEx-nh36onYE4dTgb-S5h6TBi2Y-RBsaCxYcUyBJbDAdBHuZs62dLAWApKWVYVZ62LcObarXtI0viZvyQ2VoS7-WANPB878maHBvU3pJ7SH1rgy-QRKxm_Vu9OlUlWT4aqEVwm44ZCOJmfl3yaXxKAcDtWN_d0rSwUcNdhAjheb0vYIh",
    inStock: true,
    stockCount: 5,
    brand: "Dell UltraSharp",
    specs: [
      { name: "Resolution", val: "3840 x 2160 4K UHD" },
      { name: "Refresh Rate", val: "60Hz IPS HDR400" },
      { name: "Port Hub", val: "USB-C with 90W Power Delivery" },
      { name: "Stand", val: "Height, Tilt, Swivel & Pivot" }
    ],
    description: "Stunning color fidelity and edge-to-edge clarity with ultra-thin bezels. Connect and power your MacBook or PC with a single USB-C cable."
  },
  {
    id: 4,
    title: "Smart Ambient RGBIC LED Gradient Light Strip 16.4ft with Music Sync & Alexa",
    category: "home",
    price: 34.99,
    originalPrice: 49.99,
    discount: "30% OFF",
    rating: 4.6,
    reviews: 31200,
    badge: "Prime Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDbRwSBcQF_ZagKY_W5PYpLyPP8ljOlsSeLTfH8n1utPv5Q_6vugm_okallh5Nj9exlxx4285GjkIhpis0ydgNTliP9UzY3eGcbP8KeBYSX83tjwKahKzbDa6Zy9tXCcehb0Ld1qDDUQs8z9WSVCUUD_g5xM2lkns1kUgWBjY8KkObw9BFPkeJ0X-lp_LrtC3hZUxLDPOgt7WW558yWxmO5lGMrv7bsE8wLNacNeP9bs2ScArztWCV",
    inStock: true,
    stockCount: 22,
    brand: "Govee",
    specs: [
      { name: "Length", val: "16.4ft / 5 Meters" },
      { name: "Voice Control", val: "Amazon Alexa & Google Assistant" },
      { name: "Color Tech", val: "RGBIC Segmented Color Control" },
      { name: "App Support", val: "WiFi & Bluetooth Companion App" }
    ],
    description: "Display multiple vibrant colors simultaneously on a single strip. Features 64+ animated scene modes and reactive music sync rhythm engine."
  },
  {
    id: 5,
    title: "Pro Noise-Canceling Wireless Earbuds with Spatial Audio & Qi Wireless Case",
    category: "audio",
    price: 169.99,
    originalPrice: 259.99,
    discount: "35% OFF",
    rating: 4.9,
    reviews: 18920,
    badge: "Limited Time Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHRIyjH_Fi2CL0URvMMbD6rCLQKIzwlMUazq5qluw_90rFvCEgQsm2n1SHEcBcEuk_h8J_IIsJQgc1BCJawVVNNcddwrVNt9ohUlBYSJNpQ1fGKLv9CzKLuFqjriKJ7cVGmikSl0f_qgG_3FyP1_iqAj83SASK1XPkzquu0Mn3u6C8vkqfKiUgUFGz-sRf5DZJpD5YupRXZ1nRIVzV5j8zGB1Ju6lYqcT-g1V-zX-aR74kKlnc8JwZ",
    inStock: true,
    stockCount: 11,
    brand: "Bose QuietComfort",
    specs: [
      { name: "Audio", val: "CustomTune Audio Calibration" },
      { name: "Playtime", val: "6 Hrs (24 Hrs with Qi Case)" },
      { name: "Resistance", val: "IPX4 Sweat & Weather Resistant" },
      { name: "Microphones", val: "4 Noise-rejecting microphones per bud" }
    ],
    description: "World's best noise cancellation engineered specifically for earbuds. CustomTune technology personalizes the noise cancellation and sound performance to fit your ears."
  },
  {
    id: 6,
    title: "Artisanal Pour-Over Electric Gooseneck Kettle with Variable Temp Control",
    category: "home",
    price: 59.99,
    originalPrice: 89.99,
    discount: "33% OFF",
    rating: 4.8,
    reviews: 9540,
    badge: "Amazon's Choice",
    badgeType: "choice",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArPvYGeBH7vuY2CkqRqJ_nwwV_dtaLwu4XMyZkAwqFOz0dLnbJpDhbq68C4xijStCY-dByjA7WJ_smyyeSPH-970uFy6H066g3l767Xn7R6jFzI3ILmDzbUyOFkU1P5pcCdJcIU6wbTTNGignTteza7r_fgTvoa7gm5bKBQh2xYQ9ADi29IY-d0HCZ5Ck51vB-GrOXjgRpwvdU0lSgcmJsnwLWFdUJ7coZ8OQlRXGBrQWXzJ_IpWEZ",
    inStock: true,
    stockCount: 19,
    brand: "Fellow Stagg Style",
    specs: [
      { name: "Capacity", val: "0.9 Liter / 30 oz" },
      { name: "Temperature Range", val: "135°F - 212°F (1°F increments)" },
      { name: "Power", val: "1200W Rapid Heating" },
      { name: "Material", val: "Food-grade 304 Stainless Steel" }
    ],
    description: "Sleek matte design with counterbalanced wooden handle. The fluted gooseneck spout provides an optimal pour-over flow rate with no drip back."
  },
  {
    id: 7,
    title: "Modern Minimalist Sculptural Textured Ceramic Flower Vase (Terracotta)",
    category: "home",
    price: 28.00,
    originalPrice: 38.00,
    discount: "26% OFF",
    rating: 4.7,
    reviews: 4120,
    badge: "Curator's Pick",
    badgeType: "choice",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_Ei2DOYdKWoW4J9sBijGxzNoO8OehQbxtR3JEgKF2JAasgCpr9rXhg9TeyI86_mb0Z1z4sifA1GjVDgOabstun9QV0J0JTrbj32Za4RRsSN5gPfN7PiJa735qf-IUl464f4_a4hVdSjX5qjGR9ytYfkbtPef-THZjBO2YiWIj7Ywv9HQuDRau_Y6SA92pphwWQEEQF3etFrCEZBcMX5xm86Ewy6_9AeqwIbX8N6V-Ug4wv8JZ-uyF",
    inStock: true,
    stockCount: 30,
    brand: "Aesthetic Living",
    specs: [
      { name: "Dimensions", val: "8.5\" H x 5.2\" W" },
      { name: "Material", val: "Handcrafted Matte Ceramic" },
      { name: "Style", val: "Nordic Minimalist Geometry" }
    ],
    description: "Architectural stoneware vase with a tactile sand finish. Perfect center decor for dried eucalyptus, pampas grass, or fresh stems."
  },
  {
    id: 8,
    title: "100% Organic Washed Linen Textured Throw Blanket (Warm Walnut Oatmeal)",
    category: "home",
    price: 42.50,
    originalPrice: 65.00,
    discount: "35% OFF",
    rating: 4.9,
    reviews: 7310,
    badge: "Best Seller",
    badgeType: "bestseller",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPFialIT5Q2_EhFq2_gQoZAZoK8q-fwYkcCAay_u2vlK7kMTIFYk34ssPKI3qv1nkqCc2sx1rqNAr8q1ZQ2DaG_GRxTLHOguaPDj6mU8podcYmLCNEpqOqs19jZDdK_nhx8jrHvXsaaNWc4C34EL1RsAZjd5ft_YzinfyAdKIrmEO0mh8QRZ4hfs1HUm2xbGFqSi1y0yZzdmcsRkP2Z7jvl9N6lBU6urc53246TKvKdr02vbJj5KLj",
    inStock: true,
    stockCount: 25,
    brand: "Loom & Craft",
    specs: [
      { name: "Size", val: "50\" x 70\" Throw" },
      { name: "Material", val: "100% French Flax Linen" },
      { name: "Care", val: "Machine Washable Pre-washed Softness" }
    ],
    description: "Crafted from premium flax fibers with breathable natural temperature regulation. Hypoallergenic and gets softer with every wash."
  },
  {
    id: 9,
    title: "Ultra-Quiet Ultrasonic Stone Aroma Essential Oil Diffuser with Ambient Glow",
    category: "home",
    price: 38.99,
    originalPrice: 55.00,
    discount: "29% OFF",
    rating: 4.8,
    reviews: 11200,
    badge: "Prime Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVZ62rfRFOd49Dh9ah6GKQm12d-JQiqWF_F4YRG62oqCl9tOkSQlcpWwpPMez2ofMAdk_tTGHgneXDgJKd1Jx_XA_SFjM7SuQhKv1qfSAR9kDgLl4P9UkmYcTBkV5Ouq-lIvkpCoUGIQYtLhj4__FHGwE4ULvabZG86JlmrgTzFEog_fQguI6VRcKG-KyuJmr06Xf9MuR2WVZv-i-4P8RTLAAnm5kFPilRdkduI2WmF2D4mIiK6u0H",
    inStock: true,
    stockCount: 16,
    brand: "Vitruvi Style",
    specs: [
      { name: "Coverage", val: "Up to 500 sq. ft." },
      { name: "Run Time", val: "4-hour continuous or 8-hour interval" },
      { name: "Safety", val: "Auto-shutoff waterless detection" }
    ],
    description: "Hand-poured porcelain ceramic shell with warm internal LED illumination. Diffuses pure essential oils naturally without burning."
  },
  {
    id: 10,
    title: "Pro Cinema Mirrorless 4K60p Camera Body with 5-Axis In-Body Stabilization",
    category: "electronics",
    price: 499.00,
    originalPrice: 799.00,
    discount: "38% OFF",
    rating: 4.8,
    reviews: 12410,
    badge: "Lightning Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYysb2DaXIE6Y-MAGp8AqBl03DoVVBj2r8XGVotw8r67rgNpkBqkKPhpJk-qFlGFSlXH1xvrD0MG1qF6YQizxqqKGGBk0dyabHNiLvpVG-LAE2d-qWDGnFTgcIgHoGgjno4CIJ8nJK1-1NYY3ngRR8YlEI6ks3iKKmSfM0xLz2AJZTP3SGIppowmwz5szaUQzHOpTSqmgYuhdci90RfBwPUmIkASHcNGYUs0xOB0KpbtXqH_UKza2m",
    inStock: true,
    stockCount: 4,
    brand: "Lumix Alpha",
    specs: [
      { name: "Sensor", val: "24.2MP Full-Frame BSI CMOS" },
      { name: "Video", val: "4K 60p 10-Bit 4:2:2 Internal" },
      { name: "Stabilization", val: "5-Axis Dual I.S. 2 (6.5 stops)" }
    ],
    description: "Engineered for creators and professional filmmakers with limitless recording times, dual native ISO, and cinematic color science."
  },
  {
    id: 11,
    title: "Rugged GPS Smartwatch with Multisport Tracking, Sapphire Glass & 14-Day Battery",
    category: "wearables",
    price: 179.99,
    originalPrice: 309.99,
    discount: "42% OFF",
    rating: 4.9,
    reviews: 8450,
    badge: "Lightning Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxk5ItMN_k2dhIe8Sl4bown94ovJ3zgrQ3mL_pWIt85eJQytWQY96HeHZTRllxKnBs3Uuuj4pXav__IXY8qj9k1tFUFiaKu0GijjXxPRQD-hOS9uC9aEih0H76aFZh3AF2B6kwzFmunS7laBkSiI-Ho19NT6_HmxX7k3jJpVLrhdW6k3AfIAR7y50bLI1NdEi7PdRcnmYibQ5yhNzcz5NDRoLndils8u83HZJyQwD2sJiLlAibXRmC",
    inStock: true,
    stockCount: 6,
    brand: "Garmin Instinct",
    specs: [
      { name: "Battery Life", val: "Up to 14 days in smartwatch mode" },
      { name: "Durability", val: "U.S. Military Standard 810G rated" },
      { name: "Sensors", val: "Heart Rate, SpO2, Barometer, Compass" }
    ],
    description: "Built to withstand the toughest outdoor environments. Water-rated to 100 meters with multi-GNSS satellite support."
  },
  {
    id: 12,
    title: "Compact Barista Espresso Maker with Integrated Precision Conical Burr Grinder",
    category: "home",
    price: 299.95,
    originalPrice: 429.00,
    discount: "30% OFF",
    rating: 4.7,
    reviews: 6218,
    badge: "Lightning Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcvMBNWEeF_xq9cE5IVstmWjJNCOBAVE0XjaH2Z2cyaISQLMyA04rwobD5tYG4XVeaePCwjh12uUbd0CiUlGxl1fRZQm2MrFmALmXMhST-fejYx7Tv3VNxn97yfHzsYh7sxp94pepTOAzYZcbiEx-h7K4f3BRXroQl-R4GPFhhj_YoBuY9ygZMGNhBJSRdw9i7-04zDVSUh35ylueP39IYyDNigKinuKaiHkiIE-jUtdXRBk0ERwTu",
    inStock: true,
    stockCount: 3,
    brand: "Breville Barista",
    specs: [
      { name: "Pump Pressure", val: "15 Bar Italian Pump" },
      { name: "Grinder", val: "Stainless Steel Conical Burr" },
      { name: "Steam Wand", val: "Microfoam Milk Texturing" }
    ],
    description: "Create third-wave specialty coffee at home from bean to espresso in less than a minute with digital PID temperature precision."
  },
  {
    id: 13,
    title: "Portable 360-Degree Spatial Bluetooth Speaker, IPX7 Waterproof & 24h Playtime",
    category: "audio",
    price: 59.99,
    originalPrice: 119.99,
    discount: "50% OFF",
    rating: 4.8,
    reviews: 34812,
    badge: "Lightning Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPzmhAMpzvEqCv4bgwjR9r7Was8fsSCDHwmU_cBWrInJXBB5E1MDHRgpPB1tBRPU1lEeLH2LCYGYJsGKOCtgCnIMpzuiBPkz7YK01PWMqLWJZQHV4qLiK9HhXARZ73fI2dYGKEczXnwsy55to5FdgSwwLP_8g9gCZx0lswmReLOp8NELiBbdu17OGxGhq3ycs7Oei3qci7IH0WX3ZbRp2uLG1EG_G_tQ4OeK45wE30HsG3GIuIfQVi",
    inStock: true,
    stockCount: 15,
    brand: "JBL Flip Edition",
    specs: [
      { name: "Output", val: "30W Dual Passive Radiators" },
      { name: "Waterproof", val: "IPX7 Submersible" },
      { name: "Battery", val: "24-Hour USB-C Fast Recharge" }
    ],
    description: "Room-filling 360-degree bass with acoustically transparent fabric weave. Pair two speakers together for wireless stereo immersion."
  },
  {
    id: 14,
    title: "Ultralight Wireless Esports Precision Gaming Mouse 26K Sensor (58g Weight)",
    category: "electronics",
    price: 89.99,
    originalPrice: 119.99,
    discount: "25% OFF",
    rating: 4.9,
    reviews: 5120,
    badge: "Lightning Deal",
    badgeType: "deal",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKZPHVO_Bvde28QgSTlWaeiAxhmJIvbNgHouSBxFrP9Snxe-Zi212fgM03o6IRt2Y_fO873Hg01zzp5rLkpF1gKr3X2s13dwL-d3tmdZf5U_Bz_G1gclP4cpNYiDRdo42jZnjY6u8su8nGZel3Vc0xBEQZdJvuyT_viHLv2_atwgXFltM0SnM2Wgk7iS63VhNGsyP5gS9vGdiTGY5nzvdjManjyt35N-DG8_q1ujmqbOzm2eAbR4EA",
    inStock: true,
    stockCount: 9,
    brand: "Logitech G Pro",
    specs: [
      { name: "Sensor", val: "HERO 2 32,000 DPI Optical" },
      { name: "Weight", val: "58 Grams Ultra-lightweight" },
      { name: "Polling Rate", val: "4000Hz Wireless Hyperspeed" }
    ],
    description: "Designed in collaboration with championship esports pros. Zero-smoothing, zero-filtering tracking with optical-mechanical hybrid switches."
  },
  {
    id: 15,
    title: "Principles of Artificial Horizons: Systems, Ethics & Future Cognition",
    category: "books",
    price: 18.99,
    originalPrice: 32.00,
    discount: "40% OFF",
    rating: 4.9,
    reviews: 4890,
    badge: "#1 Best Seller",
    badgeType: "bestseller",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Oe_svgSW-_Hxyb-HgFpQvks4nH2zdOL-IOtYKsTaH0wgG6yhtj2TkiqdJqqaXcZEkyw5fGScD2JIaQ9hfRumKpiunoHE5Q91zGfL3CCbOA-3Bhb5BxelULFXzJ9oyeURbYOUdqto2p96VWQSiOifU95Rp0wXj6JnX-IdA1AEAaOpaj4ymaott2WiuqCaswvi6mwTTarpOxSPGbvMLWqvjvhfV1vzJbVlHufi1A1Zd7_OXzsb32-X",
    inStock: true,
    stockCount: 40,
    brand: "MIT Press",
    specs: [
      { name: "Format", val: "Hardcover + Kindle Included" },
      { name: "Pages", val: "448 Pages" },
      { name: "Language", val: "English" }
    ],
    description: "An illuminating, critically acclaimed manifesto on the architectural paradigms reshaping artificial intelligence and computing."
  },
  {
    id: 16,
    title: "Form, Space & Pure Modernism: Architecture in the 21st Century",
    category: "books",
    price: 42.00,
    originalPrice: 60.00,
    discount: "30% OFF",
    rating: 4.8,
    reviews: 1940,
    badge: "Collector's Edition",
    badgeType: "choice",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Orctcs12RT_G5N1c9dbgvVT66vv6y8M1InmN_Ny1j5yycylCVzAsNfs50idcwSSn2BZAuXfNEJUzxfg7xbCDU-87xjPe_ztnpAS3o6r3gNsg9wwxfOLmq_0QfNeB6Wp-lR6trc_qJjYyB7UJw9ep39_n0p2d6O_6za3dzibCTCqiLtJQQzy7Pmi2w_Qw5tnrHitKx86HewMQ-ksZhndpwqY4ma0xVfHd3g3_3_LdGpwMiUQ4ckm-",
    inStock: true,
    stockCount: 12,
    brand: "Phaidon Press",
    specs: [
      { name: "Format", val: "Oversized Travertine Hardcover" },
      { name: "Plates", val: "320 Full-Color Photographs" }
    ],
    description: "A monumental monograph profiling brutalist and neo-modernist architectural masterpieces across Tokyo, Berlin, and San Francisco."
  },
  {
    id: 17,
    title: "The Fermentation Laboratory: Artisanal Ferments, Kombuchas & Breads",
    category: "books",
    price: 27.50,
    originalPrice: 40.00,
    discount: "31% OFF",
    rating: 4.9,
    reviews: 3820,
    badge: "Culinary Essential",
    badgeType: "bestseller",
    prime: true,
    deliveryDate: "Tomorrow, 8 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTOnddXrU-FZ-JYcsuzFKYFdFBK7UQjHDJieWXqkIQffz1w-0L3vN7t4Whj41A26Xggv63MWl1Pbxnzdz5K0zGf6yk4oREOtLFRVycbmmbKM56WjhdGMP00WFs12E-pYsRwQ3SqqqmWPMSTCnJJqrNiCSjIDkkp6RxDIwB4WWtexACkr5wjDg8dYUVle3PrUY7WvOQJQQEDqZqVizAW4j2ZBsqWnTC1_S3zIG6w83Zni5PSIDrsc6T",
    inStock: true,
    stockCount: 18,
    brand: "Ten Speed Press",
    specs: [
      { name: "Format", val: "Embossed Linen Hardbound" },
      { name: "Recipes", val: "120 Master Class Recipes" }
    ],
    description: "Unlock ancient culinary microbiology. Step-by-step master guides to miso, garums, fermented hot sauces, sourdough, and vinegar."
  },
  {
    id: 18,
    title: "100W GaN III 4-Port Fast Desktop Wall Charger with Braided USB-C Cables",
    category: "electronics",
    price: 45.99,
    originalPrice: 69.99,
    discount: "34% OFF",
    rating: 4.7,
    reviews: 9830,
    badge: "Top Choice",
    badgeType: "choice",
    prime: true,
    deliveryDate: "Tomorrow, 11 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPMw5YDYEyr9ouNNwZj_uZ6x_vOSGZEahP3L82jQ60C23UozVlr6FnkM9OpK5rqBTb3DDApAg-xoGxJNYqNgLWPNdSD4bptkaqWXPPM4HJ1azzYE43A14IG_HKQuuKItcdxcpVSg6xlpdi0IFxjR3KXF4RCNOJ2oaqP_yi1yYLJqeR5zv87C5zmXWDUlmBCsVjqwHwGMZAH8mpr9GsE3GFPBBynSrC6wJzB8H5CSALAg65mv5ZUG1K",
    inStock: true,
    stockCount: 28,
    brand: "Anker Prime",
    specs: [
      { name: "Total Output", val: "100W Max Fast Delivery" },
      { name: "Ports", val: "3x USB-C + 1x USB-A" },
      { name: "Technology", val: "Gallium Nitride (GaN III)" }
    ],
    description: "Compact 4-in-1 power station capable of charging two MacBooks and two smartphones simultaneously at peak rapid rates."
  }
];

// ==========================================================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================================================
let cart = JSON.navigationSavedCart || [];
let activeDiscount = 0; // percentage or dollar
let discountCode = "";
let currentFilter = "all";
let currentSort = "featured";
let currentSearchQuery = "";
let currentSlide = 0;
let slideInterval = null;
let wishlist = new Set([1, 5]);

// Load saved cart from localStorage if present
try {
  const savedCart = localStorage.getItem("amz_cart_items");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    // Initial welcome cart with 2 items for rich immediate demo
    cart = [
      { id: 1, qty: 1 },
      { id: 4, qty: 2 }
    ];
  }
} catch (e) {
  console.warn("Storage not available, using memory cart.");
}

function saveCart() {
  try {
    localStorage.setItem("amz_cart_items", JSON.stringify(cart));
  } catch (e) {}
  updateCartBadge();
  renderCartDrawer();
}

// ==========================================================================
// 3. INITIALIZATION ON DOM LOADED
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroCarousel();
  initCountdownTimer();
  renderProducts();
  updateCartBadge();
  initSearchAutocomplete();
  initEventListeners();
});

// ==========================================================================
// 4. HERO CAROUSEL ENGINE
// ==========================================================================
function initHeroCarousel() {
  const slides = document.querySelectorAll(".amz-hero-slide");
  const dots = document.querySelectorAll(".amz-dot");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");
  const carouselEl = document.getElementById("heroCarousel");

  if (!slides.length) return;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    slides.forEach((s, i) => {
      s.classList.toggle("active", i === currentSlide);
    });
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentSlide);
    });
  }

  function startAutoPlay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5500);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      startAutoPlay();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      startAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  if (carouselEl) {
    carouselEl.addEventListener("mouseenter", () => clearInterval(slideInterval));
    carouselEl.addEventListener("mouseleave", () => startAutoPlay());
  }

  startAutoPlay();
}

// Realtime Countdown Clocks
function initCountdownTimer() {
  const heroTimer = document.getElementById("heroCountdownTimer");
  let totalSecs = 14 * 3600 + 32 * 60 + 45;

  setInterval(() => {
    if (totalSecs > 0) {
      totalSecs--;
      const h = Math.floor(totalSecs / 3600);
      const m = Math.floor((totalSecs % 3600) / 60);
      const s = totalSecs % 60;
      if (heroTimer) {
        heroTimer.textContent = `${h}h ${m < 10 ? '0' : ''}${m}m ${s < 10 ? '0' : ''}${s}s`;
      }
    }
  }, 1000);
}

// ==========================================================================
// 5. PRODUCT CATALOG RENDERING & FILTERING
// ==========================================================================
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (currentFilter !== "all") {
    list = list.filter(p => p.category === currentFilter);
  }

  // Search filter
  if (currentSearchQuery.trim()) {
    const q = currentSearchQuery.toLowerCase().trim();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (currentSort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else {
    // Featured default
    list.sort((a, b) => a.id - b.id);
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const items = getFilteredProducts();

  // Search banner visibility
  const banner = document.getElementById("searchFeedbackBanner");
  const querySpan = document.getElementById("searchFeedbackQuery");
  const countSpan = document.getElementById("searchResultCount");

  if (currentSearchQuery || currentFilter !== "all") {
    if (banner) banner.style.display = "flex";
    if (querySpan) querySpan.textContent = currentSearchQuery || currentFilter;
    if (countSpan) countSpan.textContent = items.length;
  } else {
    if (banner) banner.style.display = "none";
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #ffffff; border-radius: 12px;">
        <span class="material-symbols-outlined" style="font-size: 54px; color: #a0aec0; margin-bottom: 0.5rem;">search_off</span>
        <h3 style="font-size: 1.25rem; font-weight: 700;">No products found matching your search.</h3>
        <p style="color: #64748b; margin-top: 0.25rem;">Try checking your spelling or use more general terms.</p>
        <button class="amz-btn amz-btn-amber mt-3" onclick="resetFilters()">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(p => {
    const isWished = wishlist.has(p.id);
    const dollars = Math.floor(p.price);
    const cents = (p.price % 1).toFixed(2).substring(2);

    return `
      <article class="amz-grid-card" data-product-id="${p.id}">
        <!-- Badge -->
        ${p.badge ? `<span class="amz-prod-badge badge-${p.badgeType || 'choice'}">${p.badge}</span>` : ''}

        <!-- Wishlist Heart Button -->
        <button class="amz-wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Add to Wishlist">
          <span class="material-symbols-outlined font-sm ${isWished ? 'font-fill text-red' : ''}">favorite</span>
        </button>

        <!-- Product Thumbnail with Quick View Hover -->
        <div class="amz-grid-thumb" onclick="openQuickView(${p.id})">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <button type="button" class="amz-qv-trigger">Quick View</button>
        </div>

        <!-- Meta -->
        <div>
          <h3 class="amz-grid-title" onclick="openQuickView(${p.id})" title="${p.title}">${p.title}</h3>
          
          <div class="amz-rating-row">
            <div class="amz-stars text-amber">★★★★★</div>
            <span class="font-bold">${p.rating}</span>
            <span class="amz-rating-count">(${p.reviews.toLocaleString()})</span>
          </div>

          <div class="amz-grid-price-block">
            <span class="amz-price-big">
              <span class="amz-price-currency">$</span>${dollars}<span class="amz-price-cents">${cents}</span>
            </span>
            ${p.originalPrice ? `<span class="amz-price-msrp">$${p.originalPrice.toFixed(2)}</span>` : ''}
          </div>

          <div class="amz-prime-delivery-tag">
            <span class="amz-mini-prime-badge">prime</span>
            <span>Get it <strong>${p.deliveryDate}</strong></span>
          </div>
        </div>

        <!-- Add to Cart CTA -->
        <div class="amz-grid-card-actions">
          <button class="amz-btn amz-btn-add w-full" onclick="addToCart(${p.id}, event)">
            <span class="material-symbols-outlined font-sm">add_shopping_cart</span>
            <span>Add to Cart</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// 6. SEARCH & AUTOCOMPLETE ENGINE
// ==========================================================================
function initSearchAutocomplete() {
  const searchInput = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("searchSuggestions");
  const clearBtn = document.getElementById("searchClearBtn");
  const searchForm = document.getElementById("searchForm");
  const categorySelect = document.getElementById("searchCategorySelect");

  if (!searchInput || !suggestionsBox) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length > 0) {
      if (clearBtn) clearBtn.style.display = "flex";
      showSuggestions(query);
    } else {
      if (clearBtn) clearBtn.style.display = "none";
      suggestionsBox.style.display = "none";
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      suggestionsBox.style.display = "none";
      currentSearchQuery = "";
      renderProducts();
    });
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearchQuery = searchInput.value.trim();
    if (categorySelect && categorySelect.value !== "all") {
      currentFilter = categorySelect.value;
      updateFilterPillsUI();
    }
    suggestionsBox.style.display = "none";
    renderProducts();
    scrollToCatalog();
  });

  // Close suggestions if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".amz-search-zone")) {
      suggestionsBox.style.display = "none";
    }
  });
}

function showSuggestions(query) {
  const box = document.getElementById("searchSuggestions");
  const matches = PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  ).slice(0, 5);

  if (matches.length === 0) {
    box.style.display = "none";
    return;
  }

  box.innerHTML = matches.map(m => `
    <div class="amz-suggestion-item" onclick="selectSuggestion('${m.title.replace(/'/g, "\\'")}', '${m.category}')">
      <span class="material-symbols-outlined amz-sugg-icon">search</span>
      <span>${highlightMatch(m.title, query)}</span>
      <span class="amz-sugg-cat">in ${capitalize(m.category)}</span>
    </div>
  `).join("");

  box.style.display = "block";
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return text.substring(0, idx) + '<strong>' + text.substring(idx, idx + query.length) + '</strong>' + text.substring(idx + query.length);
}

function selectSuggestion(title, cat) {
  const searchInput = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("searchSuggestions");
  if (searchInput) searchInput.value = title;
  if (suggestionsBox) suggestionsBox.style.display = "none";
  currentSearchQuery = title;
  renderProducts();
  scrollToCatalog();
}

function scrollToCatalog() {
  const target = document.getElementById("catalogSection");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// 7. SHOPPING CART ENGINE & DRAWER
// ==========================================================================
function addToCart(productId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart();

  // Find product for toast feedback
  const prod = PRODUCTS.find(p => p.id === productId);
  if (prod) {
    showToast(prod);
  }

  // Trigger bounce animation on badge
  const badge = document.getElementById("cartCountBadge");
  if (badge) {
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateCartBadge() {
  const count = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const badge = document.getElementById("cartCountBadge");
  const drawerCount = document.getElementById("cartDrawerTotalCount");

  if (badge) badge.textContent = count;
  if (drawerCount) drawerCount.textContent = count;
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.qty : 0);
  }, 0);
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotalAmount");
  const totalEl = document.getElementById("cartTotalAmount");
  const discountRow = document.getElementById("discountRow");
  const discountEl = document.getElementById("cartDiscountAmount");

  if (!container) return;

  const subtotal = calculateSubtotal();
  let discountAmount = 0;

  if (activeDiscount > 0) {
    discountAmount = (subtotal * activeDiscount);
    if (discountRow) discountRow.style.display = "flex";
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="amz-cart-empty">
        <span class="material-symbols-outlined">remove_shopping_cart</span>
        <h3 class="font-bold text-lg">Your Amazon Cart is empty</h3>
        <p class="text-sm mt-1">Shop today's top lightning deals and trending electronics.</p>
        <button class="amz-btn amz-btn-amber mt-3" onclick="closeCart(); scrollToCatalog();">Continue Shopping</button>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return '';

    return `
      <div class="amz-cart-item">
        <div class="amz-cart-item-thumb">
          <img src="${prod.image}" alt="${prod.title}">
        </div>
        <div class="amz-cart-item-details">
          <div>
            <h4 class="amz-cart-item-title">${prod.title}</h4>
            <span class="text-xs text-green font-bold">In Stock</span>
          </div>
          <div class="amz-cart-qty-row">
            <div class="amz-qty-stepper">
              <button class="amz-qty-btn" onclick="updateCartQty(${prod.id}, -1)">−</button>
              <span class="amz-qty-value">${item.qty}</span>
              <button class="amz-qty-btn" onclick="updateCartQty(${prod.id}, 1)">+</button>
            </div>
            <strong class="amz-cart-item-price">$${(prod.price * item.qty).toFixed(2)}</strong>
            <button class="amz-cart-remove-btn" onclick="removeFromCart(${prod.id})">Delete</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Promo code engine
function applyCoupon() {
  const input = document.getElementById("promoCodeInput");
  const notice = document.getElementById("promoNotice");
  if (!input || !notice) return;

  const code = input.value.trim().toUpperCase();
  if (code === "PRIME20" || code === "AMAZON20") {
    activeDiscount = 0.20;
    discountCode = code;
    notice.style.display = "block";
    notice.className = "amz-promo-notice text-green";
    notice.textContent = `✓ 20% discount applied with code "${code}"!`;
    saveCart();
  } else if (code === "SAVE10") {
    activeDiscount = 0.10;
    discountCode = code;
    notice.style.display = "block";
    notice.className = "amz-promo-notice text-green";
    notice.textContent = `✓ 10% discount applied with code "${code}"!`;
    saveCart();
  } else {
    notice.style.display = "block";
    notice.className = "amz-promo-notice text-red";
    notice.textContent = `Invalid code. Try "PRIME20" for 20% off!`;
  }
}

// Open / Close Cart Drawer
function openCart() {
  const overlay = document.getElementById("cartOverlay");
  if (overlay) overlay.classList.add("open");
  renderCartDrawer();
}
function closeCart() {
  const overlay = document.getElementById("cartOverlay");
  if (overlay) overlay.classList.remove("open");
}

// ==========================================================================
// 8. QUICK VIEW PRODUCT DETAIL MODAL
// ==========================================================================
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("quickViewModal");
  const body = document.getElementById("qvContainer");
  if (!modal || !body) return;

  const dollars = Math.floor(prod.price);
  const cents = (prod.price % 1).toFixed(2).substring(2);

  body.innerHTML = `
    <!-- Gallery -->
    <div class="amz-qv-gallery">
      <div class="amz-qv-main-image">
        <img src="${prod.image}" alt="${prod.title}" id="qvActiveImage">
      </div>
    </div>

    <!-- Details -->
    <div class="amz-qv-details">
      <span class="amz-qv-brand">${prod.brand}</span>
      <h2 class="amz-qv-title">${prod.title}</h2>
      
      <div class="amz-qv-rating">
        <div class="amz-stars text-amber">★★★★★</div>
        <span class="font-bold text-sm">${prod.rating}</span>
        <span class="amz-rating-count text-sm">(${prod.reviews.toLocaleString()} customer ratings)</span>
      </div>

      <div class="amz-qv-price-box">
        ${prod.discount ? `<span class="amz-qv-badge">${prod.discount}</span>` : ''}
        <div class="amz-price-row">
          <span class="amz-price-big">
            <span class="amz-price-currency">$</span>${dollars}<span class="amz-price-cents">${cents}</span>
          </span>
          ${prod.originalPrice ? `<span class="amz-price-msrp">$${prod.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>

      <div class="amz-qv-stock">
        <span class="material-symbols-outlined text-green font-fill font-sm">verified</span>
        <span>${prod.inStock ? `In Stock (Only ${prod.stockCount} left in stock - order soon)` : 'Currently Unavailable'}</span>
      </div>

      <div class="amz-qv-specs">
        ${prod.specs.map(s => `
          <div class="amz-spec-row">
            <span class="amz-spec-name">${s.name}:</span>
            <span class="amz-spec-val">${s.val}</span>
          </div>
        `).join('')}
      </div>

      <p class="text-sm text-muted mb-3">${prod.description}</p>

      <div class="amz-qv-actions">
        <button class="amz-btn amz-btn-amber amz-btn-lg flex-1" onclick="addToCart(${prod.id}, event); closeQuickView();">
          <span class="material-symbols-outlined">add_shopping_cart</span>
          <span>Add to Cart</span>
        </button>
        <button class="amz-btn amz-btn-primary amz-btn-lg flex-1" onclick="buyNowDirect(${prod.id})">
          <span class="material-symbols-outlined">bolt</span>
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.remove("open");
}

function buyNowDirect(productId) {
  closeQuickView();
  addToCart(productId);
  openCheckoutModal();
}

// ==========================================================================
// 9. MULTI-STEP CHECKOUT FLOW SIMULATION
// ==========================================================================
let checkoutState = {
  address: "Alex Vance, 1200 6th Ave, Apt 14B, Seattle, WA 98101",
  payment: "Amazon Prime Visa Card ending in 4242",
  speed: "FREE Tomorrow Morning by 8 AM"
};

function openCheckoutModal() {
  closeCart();
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  goToCheckoutStep(1);
  modal.classList.add("open");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("open");
}

function goToCheckoutStep(step) {
  const step1Pane = document.getElementById("checkoutStep1");
  const step2Pane = document.getElementById("checkoutStep2");
  const step3Pane = document.getElementById("checkoutStep3");
  const stepSuccess = document.getElementById("checkoutSuccess");

  const ind1 = document.getElementById("step1Indicator");
  const ind2 = document.getElementById("step2Indicator");
  const ind3 = document.getElementById("step3Indicator");

  // Reset display
  [step1Pane, step2Pane, step3Pane, stepSuccess].forEach(p => p && p.classList.remove("active"));
  [ind1, ind2, ind3].forEach(i => i && i.classList.remove("active"));

  if (step === 1) {
    if (step1Pane) step1Pane.classList.add("active");
    if (ind1) ind1.classList.add("active");
  } else if (step === 2) {
    if (step2Pane) step2Pane.classList.add("active");
    if (ind2) ind2.classList.add("active");
  } else if (step === 3) {
    if (step3Pane) step3Pane.classList.add("active");
    if (ind3) ind3.classList.add("active");
    populateReviewStep();
  } else if (step === 4) {
    if (stepSuccess) stepSuccess.classList.add("active");
    populateSuccessStep();
  }
}

function populateReviewStep() {
  const subtotal = calculateSubtotal();
  const discount = subtotal * activeDiscount;
  const tax = (subtotal - discount) * 0.088; // 8.8% WA tax
  const total = subtotal - discount + tax;

  const itemsEl = document.getElementById("reviewItemsTotal");
  const discountRow = document.getElementById("reviewDiscountRow");
  const discountEl = document.getElementById("reviewDiscountAmount");
  const taxEl = document.getElementById("reviewTaxAmount");
  const totalEl = document.getElementById("reviewFinalTotal");

  if (itemsEl) itemsEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  if (discount > 0) {
    if (discountRow) discountRow.style.display = "flex";
    if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = "none";
  }
}

function populateSuccessStep() {
  const subtotal = calculateSubtotal();
  const discount = subtotal * activeDiscount;
  const tax = (subtotal - discount) * 0.088;
  const total = subtotal - discount + tax;
  const totalCount = cart.reduce((acc, curr) => acc + curr.qty, 0);

  const orderId = `114-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(1000000 + Math.random() * 9000000)}`;

  const orderIdEl = document.getElementById("receiptOrderId");
  const countEl = document.getElementById("receiptItemCount");
  const totalAmountEl = document.getElementById("receiptTotalAmount");

  if (orderIdEl) orderIdEl.textContent = orderId;
  if (countEl) countEl.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  if (totalAmountEl) totalAmountEl.textContent = `$${total.toFixed(2)}`;

  // Clear cart on successful order
  cart = [];
  activeDiscount = 0;
  saveCart();
}

// ==========================================================================
// 10. LOCATION PICKER MODAL
// ==========================================================================
function openLocationModal() {
  const modal = document.getElementById("locationModal");
  if (modal) modal.classList.add("open");
}
function closeLocationModal() {
  const modal = document.getElementById("locationModal");
  if (modal) modal.classList.remove("open");
}
function applyCustomLocation() {
  const select = document.getElementById("addressSelect");
  const zipInput = document.getElementById("customZipInput");
  const cityLabel = document.getElementById("deliverToCity");

  if (zipInput && zipInput.value.trim().length === 5) {
    if (cityLabel) cityLabel.textContent = `ZIP ${zipInput.value.trim()}`;
  } else if (select) {
    if (cityLabel) cityLabel.textContent = select.value.split(" - ")[1] || select.value;
  }
  closeLocationModal();
}

// ==========================================================================
// 11. SIDE MENU (HAMBURGER "ALL")
// ==========================================================================
function openSideMenu() {
  const overlay = document.getElementById("sideMenuOverlay");
  if (overlay) overlay.classList.add("open");
}
function closeSideMenu() {
  const overlay = document.getElementById("sideMenuOverlay");
  if (overlay) overlay.classList.remove("open");
}

// ==========================================================================
// 12. TOAST NOTIFICATION
// ==========================================================================
let toastTimeout = null;
function showToast(prod) {
  const toast = document.getElementById("cartToast");
  const thumb = document.getElementById("toastItemThumb");
  const name = document.getElementById("toastItemName");

  if (!toast) return;

  if (thumb) thumb.src = prod.image;
  if (name) name.textContent = prod.title;

  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Wishlist Toggle
function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    if (btn) btn.classList.remove("active");
  } else {
    wishlist.add(id);
    if (btn) btn.classList.add("active");
  }
  renderProducts();
}

// Filter and Sort triggers
function filterByCategory(category) {
  currentFilter = category;
  currentSearchQuery = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  updateFilterPillsUI();
  updateSubnavLinksUI();
  renderProducts();
  closeSideMenu();
  scrollToCatalog();
}

function updateFilterPillsUI() {
  const pills = document.querySelectorAll(".amz-pill");
  pills.forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-filter") === currentFilter);
  });
}

function updateSubnavLinksUI() {
  const links = document.querySelectorAll(".amz-subnav-link");
  links.forEach(l => {
    l.classList.toggle("active", l.getAttribute("data-category") === currentFilter);
  });
}

function resetFilters() {
  currentFilter = "all";
  currentSearchQuery = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  updateFilterPillsUI();
  updateSubnavLinksUI();
  renderProducts();
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ==========================================================================
// 13. DOM EVENT LISTENERS
// ==========================================================================
function initEventListeners() {
  // Navigation Buttons
  const cartNavBtn = document.getElementById("cartNavBtn");
  if (cartNavBtn) cartNavBtn.addEventListener("click", openCart);

  const closeCartBtn = document.getElementById("closeCartBtn");
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);

  const locationBtn = document.getElementById("locationBtn");
  if (locationBtn) locationBtn.addEventListener("click", openLocationModal);

  const closeLocBtn = document.getElementById("closeLocationModalBtn");
  if (closeLocBtn) closeLocBtn.addEventListener("click", closeLocationModal);

  const confirmLocBtn = document.getElementById("confirmLocationBtn");
  if (confirmLocBtn) confirmLocBtn.addEventListener("click", applyCustomLocation);

  const applyZipBtn = document.getElementById("applyZipBtn");
  if (applyZipBtn) applyZipBtn.addEventListener("click", applyCustomLocation);

  const openSideBtn = document.getElementById("openSideMenuBtn");
  if (openSideBtn) openSideBtn.addEventListener("click", openSideMenu);

  const closeSideBtn = document.getElementById("closeSideMenuBtn");
  if (closeSideBtn) closeSideBtn.addEventListener("click", closeSideMenu);

  const closeQvBtn = document.getElementById("closeQuickViewBtn");
  if (closeQvBtn) closeQvBtn.addEventListener("click", closeQuickView);

  const applyPromoBtn = document.getElementById("applyPromoBtn");
  if (applyPromoBtn) applyPromoBtn.addEventListener("click", applyCoupon);

  const proceedBtn = document.getElementById("proceedToCheckoutBtn");
  if (proceedBtn) proceedBtn.addEventListener("click", openCheckoutModal);

  const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

  // Checkout Step Transitions
  const step1Next = document.getElementById("step1NextBtn");
  if (step1Next) step1Next.addEventListener("click", () => goToCheckoutStep(2));

  const step2Back = document.getElementById("step2BackBtn");
  if (step2Back) step2Back.addEventListener("click", () => goToCheckoutStep(1));

  const step2Next = document.getElementById("step2NextBtn");
  if (step2Next) step2Next.addEventListener("click", () => goToCheckoutStep(3));

  const step3Back = document.getElementById("step3BackBtn");
  if (step3Back) step3Back.addEventListener("click", () => goToCheckoutStep(2));

  const placeOrderBtn = document.getElementById("placeOrderFinalBtn");
  if (placeOrderBtn) placeOrderBtn.addEventListener("click", () => goToCheckoutStep(4));

  const successContinueBtn = document.getElementById("continueShoppingSuccessBtn");
  if (successContinueBtn) successContinueBtn.addEventListener("click", () => {
    closeCheckoutModal();
    scrollToCatalog();
  });

  // Toast actions
  const toastViewCart = document.getElementById("toastViewCartBtn");
  if (toastViewCart) toastViewCart.addEventListener("click", () => {
    document.getElementById("cartToast").classList.remove("show");
    openCart();
  });
  const toastClose = document.getElementById("toastCloseBtn");
  if (toastClose) toastClose.addEventListener("click", () => {
    document.getElementById("cartToast").classList.remove("show");
  });

  // Filter Pills click
  const pills = document.querySelectorAll(".amz-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterByCategory(pill.getAttribute("data-filter"));
    });
  });

  // Subnav Links click
  const sublinks = document.querySelectorAll(".amz-subnav-link");
  sublinks.forEach(link => {
    link.addEventListener("click", () => {
      filterByCategory(link.getAttribute("data-category"));
    });
  });

  // Sort select
  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentSort = sortSelect.value;
      renderProducts();
    });
  }

  // Clear filter button in banner
  const clearFilterBtn = document.getElementById("clearActiveFilterBtn");
  if (clearFilterBtn) clearFilterBtn.addEventListener("click", resetFilters);

  // Lightning rail horizontal scroll buttons
  const rail = document.getElementById("lightningDealRail");
  const scrollLeftBtn = document.getElementById("railScrollLeft");
  const scrollRightBtn = document.getElementById("railScrollRight");

  if (rail && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener("click", () => {
      rail.scrollBy({ left: -320, behavior: "smooth" });
    });
    scrollRightBtn.addEventListener("click", () => {
      rail.scrollBy({ left: 320, behavior: "smooth" });
    });
  }

  // Radio card active toggles in Checkout
  document.querySelectorAll(".amz-radio-card").forEach(card => {
    card.addEventListener("click", () => {
      const radio = card.querySelector("input[type='radio']");
      if (radio) {
        radio.checked = true;
        const name = radio.getAttribute("name");
        document.querySelectorAll(`input[name='${name}']`).forEach(r => {
          r.closest(".amz-radio-card")?.classList.remove("active");
        });
        card.classList.add("active");
      }
    });
  });

  // Audible claim button toast
  const audibleBtn = document.getElementById("claimAudibleBtn");
  if (audibleBtn) {
    audibleBtn.addEventListener("click", () => {
      alert("🎉 Prime perk activated: 30-day Audible Premium Plus free trial has been added to Alex Vance's account!");
    });
  }

  // Manage Prime button
  const primeBtn = document.getElementById("managePrimeBtn");
  if (primeBtn) {
    primeBtn.addEventListener("click", () => {
      alert("👑 Prime Benefits: Active (Next renewal: Dec 2026). Free Two-Day Shipping, Prime Video & Amazon Music unlimited are enabled.");
    });
  }

  // Back to top smooth scroll
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
