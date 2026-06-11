const currencyFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 2,
});

function formatCAD(amount) {
  return currencyFormatter.format(amount);
}

const styleModifiers = [
  'Compact', 'Classic', 'Pro', 'Ultra', 'Core', 'Peak', 'Urban', 'Studio', 'Active', 'Everyday',
  'Travel', 'Performance', 'Signature', 'Motion', 'Terrain', 'Precision', 'Nova', 'Prime', 'Flex', 'Luxe',
  'Sprint', 'Vibe', 'Edge', 'Altitude', 'Form',
];

const productSeeds = [
  { name: 'Running Shoe', category: 'Sneakers', icon: '👟', brands: ['Nike', 'Adidas', 'Asics', 'Puma', 'New Balance'], basePrice: 140, priceSpread: 70, tags: ['trending', 'best'], stockLabel: 'In Stock', stock: 'in', colors: ['Shadow', 'Midnight', 'Bone'], sizes: [6, 7, 8, 9, 10, 11, 12], description: 'A real-world running shoe built for comfort, grip and daily training.', gallery: ['👟', '🏃', '⚡'] },
  { name: 'Training T-Shirt', category: 'Clothing', icon: '👕', brands: ['Nike', 'Adidas', 'Puma', 'Under Armour'], basePrice: 32, priceSpread: 18, tags: ['new', 'sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'White', 'Ash'], sizes: ['XS', 'S', 'M', 'L', 'XL'], description: 'A breathable training tee made for movement and everyday wear.', gallery: ['👕', '🧵', '⬛'] },
  { name: 'Backpack', category: 'Accessories', icon: '🎒', brands: ['Nike', 'Puma', 'Samsonite', 'The North Face'], basePrice: 55, priceSpread: 35, tags: ['limited'], stockLabel: 'Few Left', stock: 'low', colors: ['Black', 'Forest', 'Slate'], sizes: ['One Size'], description: 'A practical backpack with structured storage and everyday durability.', gallery: ['🎒', '📦', '🧢'] },
  { name: 'Water Bottle', category: 'Accessories', icon: '🥤', brands: ['Hydro Flask', 'Stanley', 'Yeti', 'Nike'], basePrice: 24, priceSpread: 12, tags: ['new', 'trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Silver', 'Blue'], sizes: ['One Size'], description: 'A reusable water bottle for gym sessions, commutes and long days out.', gallery: ['🥤', '💧', '⚪'] },
  { name: 'Hoodie', category: 'Clothing', icon: '🧥', brands: ['Nike', 'Adidas', 'Puma', 'New Balance'], basePrice: 68, priceSpread: 30, tags: ['best', 'sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Grey', 'Navy'], sizes: ['S', 'M', 'L', 'XL'], description: 'A heavyweight hoodie with a soft interior and a relaxed fit.', gallery: ['🧥', '⬛', '🪡'] },
  { name: 'Desk Lamp', category: 'Home', icon: '💡', brands: ['Philips', 'Ikea', 'TaoTronics', 'HomeSense'], basePrice: 48, priceSpread: 28, tags: ['trending'], stockLabel: 'In Stock', stock: 'in', colors: ['White', 'Black', 'Brass'], sizes: ['One Size'], description: 'A real desk lamp with clean lines and practical lighting for workspaces.', gallery: ['💡', '🖥️', '✨'] },
  { name: 'Wireless Mouse', category: 'Tech', icon: '🖱️', brands: ['Logitech', 'Microsoft', 'Dell', 'HP'], basePrice: 35, priceSpread: 20, tags: ['new'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Grey', 'Red'], sizes: ['One Size'], description: 'A wireless mouse designed for clean desk setups and daily productivity.', gallery: ['🖱️', '💻', '⚫'] },
  { name: 'Notebook', category: 'Office', icon: '📓', brands: ['Moleskine', 'Muji', 'Leuchtturm1917', 'Staples'], basePrice: 14, priceSpread: 10, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Red', 'Cream'], sizes: ['One Size'], description: 'A real notebook for notes, sketches and planning.', gallery: ['📓', '✍️', '📝'] },
  { name: 'Sneaker Cleaner Kit', category: 'Accessories', icon: '🧽', brands: ['Jason Markk', 'Crep Protect', 'Reshoevn8r', 'Nike'], basePrice: 28, priceSpread: 16, tags: ['limited', 'sale'], stockLabel: 'Low Stock', stock: 'low', colors: ['White', 'Black', 'Blue'], sizes: ['One Size'], description: 'A compact cleaning kit for keeping shoes looking fresh.', gallery: ['🧽', '👟', '💧'] },
  { name: 'Yoga Mat', category: 'Accessories', icon: '🧘', brands: ['Lululemon', 'Manduka', 'Gaiam', 'Puma'], basePrice: 42, priceSpread: 18, tags: ['new', 'trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Purple', 'Black', 'Teal'], sizes: ['One Size'], description: 'A real yoga mat with cushion and grip for floor work and stretching.', gallery: ['🧘', '🟣', '🟩'] },
  { name: 'Bluetooth Speaker', category: 'Tech', icon: '🔊', brands: ['JBL', 'Sony', 'Bose', 'Ultimate Ears'], basePrice: 78, priceSpread: 45, tags: ['best', 'trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Blue', 'Red'], sizes: ['One Size'], description: 'A portable Bluetooth speaker made for music at home or on the move.', gallery: ['🔊', '🎶', '🔵'] },
  { name: 'Baseball Cap', category: 'Accessories', icon: '🧢', brands: ['Nike', 'Adidas', 'New Era', 'Puma'], basePrice: 24, priceSpread: 12, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'White', 'Red'], sizes: ['One Size'], description: 'A classic baseball cap for everyday wear and sun coverage.', gallery: ['🧢', '⚫', '🟥'] },
  { name: 'Lunch Box', category: 'Home', icon: '🍱', brands: ['Bentgo', 'Sistema', 'Thermos', 'Munchkin'], basePrice: 22, priceSpread: 14, tags: ['new'], stockLabel: 'In Stock', stock: 'in', colors: ['Blue', 'Grey', 'Pink'], sizes: ['One Size'], description: 'A real lunch box with a secure lid and simple organization.', gallery: ['🍱', '🥗', '📦'] },
  { name: 'Bluetooth Earbuds', category: 'Tech', icon: '🎧', brands: ['Apple', 'Sony', 'Jabra', 'Bose'], basePrice: 95, priceSpread: 55, tags: ['best', 'new'], stockLabel: 'In Stock', stock: 'in', colors: ['White', 'Black', 'Silver'], sizes: ['One Size'], description: 'Compact wireless earbuds for calls, workouts and commuting.', gallery: ['🎧', '🎶', '⚪'] },
  { name: 'Travel Pillow', category: 'Travel', icon: '🛌', brands: ['Cabeau', 'Trtl', 'Samsonite', 'Bucky'], basePrice: 26, priceSpread: 15, tags: ['limited'], stockLabel: 'Few Left', stock: 'low', colors: ['Grey', 'Blue', 'Black'], sizes: ['One Size'], description: 'A travel pillow designed for flights, trains and long rides.', gallery: ['🛌', '✈️', '💤'] },
  { name: 'Insulated Mug', category: 'Home', icon: '☕', brands: ['Stanley', 'Yeti', 'Thermos', 'Contigo'], basePrice: 30, priceSpread: 15, tags: ['sale', 'trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Silver', 'Green'], sizes: ['One Size'], description: 'A real insulated mug for coffee, tea or cold drinks.', gallery: ['☕', '🔥', '🫖'] },
  { name: 'Resistance Band', category: 'Accessories', icon: '🪢', brands: ['Nike', 'Rogue', 'TheraBand', 'Puma'], basePrice: 18, priceSpread: 10, tags: ['new'], stockLabel: 'In Stock', stock: 'in', colors: ['Red', 'Black', 'Green'], sizes: ['One Size'], description: 'A resistance band for warmups, stretching and strength work.', gallery: ['🪢', '🏋️', '🔴'] },
  { name: 'Sunglasses', category: 'Accessories', icon: '🕶️', brands: ['Ray-Ban', 'Oakley', 'Nike', 'Persol'], basePrice: 74, priceSpread: 40, tags: ['trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Brown', 'Smoke'], sizes: ['One Size'], description: 'A classic pair of sunglasses built for daylight and everyday use.', gallery: ['🕶️', '☀️', '⚫'] },
  { name: 'Kitchen Knife', category: 'Home', icon: '🔪', brands: ['Zwilling', 'Wusthof', 'Victorinox', 'OXO'], basePrice: 58, priceSpread: 30, tags: ['best'], stockLabel: 'In Stock', stock: 'in', colors: ['Silver', 'Black', 'Wood'], sizes: ['One Size'], description: 'A practical kitchen knife for prep work and everyday cooking.', gallery: ['🔪', '🍅', '🧅'] },
  { name: 'Duffel Bag', category: 'Accessories', icon: '🧳', brands: ['Nike', 'Adidas', 'Samsonite', 'Puma'], basePrice: 64, priceSpread: 40, tags: ['limited', 'best'], stockLabel: 'Low Stock', stock: 'low', colors: ['Black', 'Navy', 'Olive'], sizes: ['One Size'], description: 'A durable duffel bag for training, travel and weekend use.', gallery: ['🧳', '🎒', '🖤'] },
  { name: 'Standing Desk Mat', category: 'Home', icon: '🪑', brands: ['Fellowes', 'ErgoFoam', 'Ikea', 'Staples'], basePrice: 40, priceSpread: 20, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Grey', 'Brown'], sizes: ['One Size'], description: 'A standing desk mat designed for better comfort during long work sessions.', gallery: ['🪑', '🖥️', '⬛'] },
  { name: 'Phone Stand', category: 'Tech', icon: '📱', brands: ['Anker', 'UGREEN', 'Belkin', 'Apple'], basePrice: 16, priceSpread: 10, tags: ['new', 'sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'White', 'Silver'], sizes: ['One Size'], description: 'A simple phone stand for desks, kitchens and nightstands.', gallery: ['📱', '🪄', '⚫'] },
  { name: 'Thermal Flask', category: 'Accessories', icon: '🥤', brands: ['Stanley', 'Hydro Flask', 'Yeti', 'Thermos'], basePrice: 38, priceSpread: 18, tags: ['trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Red', 'Black', 'Silver'], sizes: ['One Size'], description: 'A thermal flask that keeps drinks hot or cold for hours.', gallery: ['🥤', '🌡️', '🔴'] },
  { name: 'Jump Rope', category: 'Accessories', icon: '🪢', brands: ['Nike', 'Crossrope', 'Rogue', 'Puma'], basePrice: 20, priceSpread: 10, tags: ['best'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Red', 'Blue'], sizes: ['One Size'], description: 'A real jump rope for cardio, footwork and conditioning.', gallery: ['🪢', '🏃', '🔴'] },
  { name: 'Laptop Sleeve', category: 'Tech', icon: '💼', brands: ['Tomtoc', 'Bellroy', 'Amazon Basics', 'Dell'], basePrice: 29, priceSpread: 18, tags: ['new'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Grey', 'Blue'], sizes: ['13"', '15"', '16"'], description: 'A padded laptop sleeve for carrying and protecting your device.', gallery: ['💼', '💻', '⬛'] },
  { name: 'Skate Deck', category: 'Sports', icon: '🛹', brands: ['Element', 'Santa Cruz', 'Globe', 'Powell Peralta'], basePrice: 72, priceSpread: 35, tags: ['limited', 'trending'], stockLabel: 'Low Stock', stock: 'low', colors: ['Natural', 'Black', 'Red'], sizes: ['One Size'], description: 'A real skateboard deck for street and park sessions.', gallery: ['🛹', '🛣️', '🔴'] },
  { name: 'Massager Ball', category: 'Accessories', icon: '⚪', brands: ['TriggerPoint', 'Theragun', 'Nike', 'Hyperice'], basePrice: 24, priceSpread: 12, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Grey', 'Black', 'Blue'], sizes: ['One Size'], description: 'A compact massage ball for recovery, mobility and release work.', gallery: ['⚪', '💆', '⚫'] },
  { name: 'Coffee Grinder', category: 'Home', icon: '☕', brands: ['Bodum', 'Krups', 'Breville', 'OXO'], basePrice: 54, priceSpread: 28, tags: ['best'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Silver', 'White'], sizes: ['One Size'], description: 'A real coffee grinder for fresh beans and better mornings.', gallery: ['☕', '⚙️', '🫘'] },
  { name: 'Rolling Suitcase', category: 'Travel', icon: '🧳', brands: ['Samsonite', 'Away', 'Travelpro', 'Monos'], basePrice: 118, priceSpread: 70, tags: ['trending', 'limited'], stockLabel: 'Few Left', stock: 'low', colors: ['Black', 'Navy', 'Silver'], sizes: ['Carry-On', 'Medium', 'Large'], description: 'A rolling suitcase for weekend trips and longer journeys.', gallery: ['🧳', '✈️', '🔒'] },
  { name: 'Floor Fan', category: 'Home', icon: '🌀', brands: ['Dyson', 'Vornado', 'Honeywell', 'Philips'], basePrice: 66, priceSpread: 34, tags: ['new'], stockLabel: 'In Stock', stock: 'in', colors: ['White', 'Black', 'Grey'], sizes: ['One Size'], description: 'A simple floor fan for bedrooms, studios and offices.', gallery: ['🌀', '🌬️', '⚪'] },
  { name: 'Tablet Stand', category: 'Tech', icon: '📲', brands: ['Anker', 'Belkin', 'UGREEN', 'Apple'], basePrice: 27, priceSpread: 15, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Silver', 'Black', 'White'], sizes: ['One Size'], description: 'A tablet stand for reading, streaming and video calls.', gallery: ['📲', '🖥️', '⬜'] },
  { name: 'Tennis Racket', category: 'Sports', icon: '🎾', brands: ['Wilson', 'Babolat', 'Head', 'Yonex'], basePrice: 109, priceSpread: 55, tags: ['best', 'trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Yellow', 'Blue'], sizes: ['One Size'], description: 'A real tennis racket for court play and practice sessions.', gallery: ['🎾', '🏟️', '🟡'] },
  { name: 'Office Chair', category: 'Home', icon: '🪑', brands: ['Herman Miller', 'Branch', 'Ikea', 'Staples'], basePrice: 210, priceSpread: 120, tags: ['limited'], stockLabel: 'Few Left', stock: 'low', colors: ['Black', 'Grey', 'Tan'], sizes: ['One Size'], description: 'An office chair designed for desks, WFH setups and daily use.', gallery: ['🪑', '🖥️', '⬛'] },
  { name: 'Portable Charger', category: 'Tech', icon: '🔋', brands: ['Anker', 'Belkin', 'Mophie', 'Samsung'], basePrice: 34, priceSpread: 18, tags: ['new', 'trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'White', 'Blue'], sizes: ['One Size'], description: 'A portable charger for phones, tablets and other devices.', gallery: ['🔋', '📱', '⚡'] },
  { name: 'Rain Jacket', category: 'Clothing', icon: '🧥', brands: ['The North Face', 'Patagonia', 'Nike', 'Arc\'teryx'], basePrice: 94, priceSpread: 60, tags: ['limited', 'best'], stockLabel: 'Low Stock', stock: 'low', colors: ['Black', 'Navy', 'Olive'], sizes: ['S', 'M', 'L', 'XL'], description: 'A real rain jacket built for wet weather and daily commutes.', gallery: ['🧥', '🌧️', '💦'] },
  { name: 'Cooking Pan', category: 'Home', icon: '🍳', brands: ['T-fal', 'All-Clad', 'OXO', 'Cuisinart'], basePrice: 62, priceSpread: 38, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Silver', 'Copper'], sizes: ['One Size'], description: 'A practical cooking pan for stovetop meals and everyday use.', gallery: ['🍳', '🔥', '🥘'] },
  { name: 'Fitness Tracker', category: 'Tech', icon: '⌚', brands: ['Fitbit', 'Garmin', 'Apple', 'Samsung'], basePrice: 128, priceSpread: 72, tags: ['best', 'new'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Silver', 'Rose'], sizes: ['One Size'], description: 'A fitness tracker for workouts, sleep tracking and step counting.', gallery: ['⌚', '🏃', '❤️'] },
  { name: 'Throw Blanket', category: 'Home', icon: '🛋️', brands: ['Casper', 'Brooklinen', 'Ikea', 'Pottery Barn'], basePrice: 48, priceSpread: 24, tags: ['trending'], stockLabel: 'In Stock', stock: 'in', colors: ['Cream', 'Grey', 'Blue'], sizes: ['One Size'], description: 'A soft throw blanket for couches, beds and reading corners.', gallery: ['🛋️', '🧶', '🟦'] },
  { name: 'Guitar Cable', category: 'Tech', icon: '🎸', brands: ['Fender', 'Ernie Ball', 'Roland', 'Hosa'], basePrice: 15, priceSpread: 8, tags: ['sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Red', 'Blue'], sizes: ['3m', '6m', '10m'], description: 'A real guitar cable for practice, recording and stage setups.', gallery: ['🎸', '🔌', '⚫'] },
  { name: 'Baking Tray', category: 'Home', icon: '🧁', brands: ['Pyrex', 'OXO', 'Nordic Ware', 'Cuisinart'], basePrice: 24, priceSpread: 14, tags: ['new'], stockLabel: 'In Stock', stock: 'in', colors: ['Silver', 'Black', 'Blue'], sizes: ['One Size'], description: 'A simple baking tray for ovens, cookies and roasted meals.', gallery: ['🧁', '🔥', '🥮'] },
  { name: 'Running Shorts', category: 'Clothing', icon: '🩳', brands: ['Nike', 'Adidas', 'Under Armour', 'Puma'], basePrice: 36, priceSpread: 16, tags: ['trending', 'sale'], stockLabel: 'In Stock', stock: 'in', colors: ['Black', 'Grey', 'Blue'], sizes: ['S', 'M', 'L', 'XL'], description: 'Lightweight running shorts for training and warm weather.', gallery: ['🩳', '🏃', '⚫'] },
  { name: 'Cutlery Set', category: 'Home', icon: '🍴', brands: ['Zwilling', 'OXO', 'Crate & Barrel', 'Ikea'], basePrice: 44, priceSpread: 24, tags: ['best'], stockLabel: 'In Stock', stock: 'in', colors: ['Silver', 'Black', 'Gold'], sizes: ['One Size'], description: 'A real cutlery set for everyday meals and hosting.', gallery: ['🍴', '🍽️', '✨'] },
  { name: 'Camping Lantern', category: 'Outdoor', icon: '🏕️', brands: ['Coleman', 'BioLite', 'Black Diamond', 'Goal Zero'], basePrice: 52, priceSpread: 30, tags: ['limited', 'new'], stockLabel: 'Low Stock', stock: 'low', colors: ['Green', 'Black', 'Orange'], sizes: ['One Size'], description: 'A camping lantern for tents, patios and emergency lighting.', gallery: ['🏕️', '💡', '🟩'] },
];

const productCount = 1000;
const products = Array.from({ length: productCount }, (_, index) => createProduct(index, productSeeds, styleModifiers));

function createProduct(index, seeds, modifiers) {
  const seed = seeds[index % seeds.length];
  const modifier = modifiers[Math.floor(index / seeds.length) % modifiers.length];
  const variantNumber = Math.floor(index / (seeds.length * modifiers.length)) + 1;
  const brand = seed.brands[index % seed.brands.length];
  const isSneakerOrClothing = seed.category === 'Sneakers' || seed.category === 'Clothing';
  const basePrice = seed.basePrice + ((index % 5) * 2.5) + (Math.floor(index / seeds.length) % 4) * 4;
  const price = Number((basePrice + (index % 3) * 1.25).toFixed(2));
  const wasPrice = Number((price + seed.priceSpread / 2 + ((index % 4) * 1.75)).toFixed(2));
  const colors = seed.colors.map((colorName, colorIndex) => ({
    name: `${colorName} ${modifier}`.trim(),
    value: colorPalette[(index + colorIndex) % colorPalette.length],
  }));
  const sizes = isSneakerOrClothing ? seed.sizes : seed.sizes;
  const tagCycle = [
    ...(index % 3 === 0 ? ['new'] : []),
    ...(index % 4 === 0 ? ['trending'] : []),
    ...(index % 5 === 0 ? ['sale'] : []),
    ...(index % 7 === 0 ? ['limited'] : []),
  ];
  const tags = Array.from(new Set([...seed.tags, ...tagCycle]));
  const featured = Array.from(new Set([
    ...(tags.includes('trending') ? ['trending'] : []),
    ...(tags.includes('new') ? ['new'] : []),
    ...(index % 8 === 0 ? ['best'] : []),
  ]));
  const stock = index % 9 === 0 ? 'low' : 'in';
  const stockLabel = stock === 'low' ? 'Low Stock' : seed.stockLabel;
  const reviewBase = index % 100;

  return {
    id: index + 1,
    name: `${modifier} ${seed.name} ${variantNumber}`,
    brand,
    category: seed.category,
    price,
    wasPrice,
    tags,
    stock,
    stockLabel,
    icon: seed.icon,
    description: `${seed.description} This ${modifier.toLowerCase()} edition is part of the ${variantNumber}th batch in the collection.`,
    colors,
    sizes,
    reviews: buildReviews(seed.name, brand, reviewBase),
    gallery: seed.gallery,
    featured,
  };
}

const colorPalette = ['#111111', '#f5f5f5', '#ff2d20', '#1f3b2c', '#505863', '#cfd6df', '#c7ff00', '#8d8d8d'];

function buildReviews(name, brand, seed) {
  const reviewers = ['Jordan', 'Mia', 'Kai', 'Ava', 'Noah', 'Ella', 'Luca', 'Sophie', 'Ben', 'Zara', 'Hassan', 'Leah'];
  const comments = [
    'Arrived quickly and feels better than expected.',
    'Good quality and easy to use every day.',
    'Fits the description and looks solid in person.',
    'Comfortable, practical and worth the price.',
    'The finish is clean and the build feels reliable.',
    'Simple, durable and works exactly as expected.',
  ];

  return [
    {
      author: reviewers[seed % reviewers.length],
      rating: 4.5 + ((seed + brand.length) % 2) * 0.5,
      text: `${name} from ${brand} ${comments[seed % comments.length]}`,
      date: `${(seed % 12) + 1} days ago`,
    },
    {
      author: reviewers[(seed + 3) % reviewers.length],
      rating: 4 + ((seed + 1) % 3) * 0.5,
      text: `Strong value and a clean look for everyday use.`,
      date: `${(seed % 6) + 1} week${(seed % 6) + 1 === 1 ? '' : 's'} ago`,
    },
  ];
}

const state = {
  currentPage: 'home',
  searchTerm: '',
  maxPrice: 300,
  sortBy: 'default',
  filters: {
    brand: new Set(),
    category: new Set(),
    tag: new Set(),
  },
  selectedProduct: null,
  selectedColor: null,
  selectedSize: null,
  selectedGalleryIndex: 0,
  cart: [],
  toastTimer: null,
  countdownTimer: null,
};

const refs = {};

function cacheRefs() {
  refs.pageHome = document.getElementById('page-home');
  refs.pageShop = document.getElementById('page-shop');
  refs.trendingGrid = document.getElementById('trendingGrid');
  refs.newGrid = document.getElementById('newGrid');
  refs.bestGrid = document.getElementById('bestGrid');
  refs.productGrid = document.getElementById('productGrid');
  refs.resultCount = document.getElementById('resultCount');
  refs.noResults = document.getElementById('noResults');
  refs.searchBanner = document.getElementById('searchBanner');
  refs.searchInput = document.getElementById('searchInput');
  refs.priceRange = document.getElementById('priceRange');
  refs.priceLabel = document.getElementById('priceLabel');
  refs.cartOverlay = document.getElementById('cartOverlay');
  refs.cartPanel = document.getElementById('cartPanel');
  refs.cartItems = document.getElementById('cartItems');
  refs.cartEmpty = document.getElementById('cartEmpty');
  refs.cartFooter = document.getElementById('cartFooter');
  refs.cartTotal = document.getElementById('cartTotal');
  refs.cartBadge = document.getElementById('cartBadge');
  refs.toast = document.getElementById('toast');
  refs.mobileMenu = document.getElementById('mobileMenu');
  refs.hamburger = document.getElementById('hamburger');
  refs.modalOverlay = document.getElementById('productModal');
  refs.modalMainImg = document.getElementById('modalMainImg');
  refs.modalThumbs = document.getElementById('modalThumbs');
  refs.modalBrand = document.getElementById('modalBrand');
  refs.modalName = document.getElementById('modalName');
  refs.modalPrice = document.getElementById('modalPrice');
  refs.modalStock = document.getElementById('modalStock');
  refs.modalDesc = document.getElementById('modalDesc');
  refs.colorSwatches = document.getElementById('colorSwatches');
  refs.colorwayLabel = document.getElementById('colorwayLabel');
  refs.sizeGrid = document.getElementById('sizeGrid');
  refs.reviewStars = document.getElementById('reviewStars');
  refs.reviewAvg = document.getElementById('reviewAvg');
  refs.reviewCount = document.getElementById('reviewCount');
  refs.reviewsList = document.getElementById('reviewsList');
  refs.addToCartBtn = document.getElementById('addToCartBtn');
  refs.cdH = document.getElementById('cdH');
  refs.cdM = document.getElementById('cdM');
  refs.cdS = document.getElementById('cdS');
}

function init() {
  cacheRefs();
  loadCart();
  renderHomeSections();
  renderProducts();
  updateCartUI();
  updateCountdown();
  state.countdownTimer = window.setInterval(updateCountdown, 1000);

  document.addEventListener('click', preventHashJump, true);
  document.addEventListener('keydown', handleGlobalKeys);
  window.addEventListener('storage', syncCartFromStorage);
}

function preventHashJump(event) {
  const link = event.target.closest('a[href="#"]');
  if (link) {
    event.preventDefault();
  }
}

function handleGlobalKeys(event) {
  if (event.key === 'Escape') {
    closeModal();
    closeCart();
    closeMobileMenu();
  }
}

function showPage(page) {
  state.currentPage = page;
  refs.pageHome.classList.toggle('active', page === 'home');
  refs.pageShop.classList.toggle('active', page === 'shop');

  if (page === 'shop') {
    renderProducts();
  }

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle('open');
  const open = refs.mobileMenu.classList.contains('open');
  refs.hamburger.setAttribute('aria-expanded', String(open));
}

function closeMobileMenu() {
  refs.mobileMenu.classList.remove('open');
  refs.hamburger.setAttribute('aria-expanded', 'false');
}

function toggleCart(forceState) {
  const shouldOpen = typeof forceState === 'boolean' ? forceState : !refs.cartPanel.classList.contains('open');
  refs.cartPanel.classList.toggle('open', shouldOpen);
  refs.cartOverlay.classList.toggle('open', shouldOpen);
}

function closeCart() {
  toggleCart(false);
}

function clearAllFilters() {
  state.filters.brand.clear();
  state.filters.category.clear();
  state.filters.tag.clear();
  state.searchTerm = '';
  state.maxPrice = 300;
  state.sortBy = 'default';

  document.querySelectorAll('.filter-check input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });

  if (refs.searchInput) refs.searchInput.value = '';
  if (refs.priceRange) refs.priceRange.value = '300';
  if (refs.priceLabel) refs.priceLabel.textContent = '£300';

  renderProducts();
  showToast('Filters cleared');
}

function toggleFilter(type, value) {
  const checkbox = document.querySelector(`.filter-check input[value="${CSS.escape(value)}"]`);
  const bucket = state.filters[type];
  if (!bucket) return;

  if (checkbox && checkbox.checked) {
    bucket.add(value);
  } else {
    bucket.delete(value);
  }

  renderProducts();
}

function filterByTag(tag) {
  ensureShopPage();
  setCheckbox('tag', tag, true, true);
  state.filters.tag = new Set([tag]);
  renderProducts();
}

function filterCat(category) {
  ensureShopPage();
  setCheckbox('category', category, true, true);
  state.filters.category = new Set([category]);
  renderProducts();
}

function setCheckbox(type, value, checked, exclusive = false) {
  const input = Array.from(document.querySelectorAll('.filter-check input')).find((item) => item.value === value);
  if (input) {
    input.checked = checked;
  }

  if (exclusive) {
    const groupInputs = Array.from(document.querySelectorAll(`.filter-group input`)).filter((item) => item.value !== value);
    groupInputs.forEach((item) => {
      if (item.checked) {
        item.checked = false;
        const otherType = item.closest('.filter-group')?.querySelector('h4')?.textContent?.toLowerCase();
        if (otherType === type) {
          item.checked = false;
        }
      }
    });
  }
}

function ensureShopPage() {
  if (state.currentPage !== 'shop') {
    showPage('shop');
  }
}

function handleSearch(value) {
  state.searchTerm = value.trim();
  if (state.searchTerm) {
    refs.searchBanner.textContent = `Searching for "${state.searchTerm}"`;
    refs.searchBanner.classList.remove('hidden');
  } else {
    refs.searchBanner.textContent = '';
    refs.searchBanner.classList.add('hidden');
  }
  renderProducts();
}

function updatePriceFilter(value) {
  state.maxPrice = Number(value);
  if (refs.priceLabel) refs.priceLabel.textContent = `£${Number(value).toFixed(0)}`;
  renderProducts();
}

function sortProducts(value) {
  state.sortBy = value;
  renderProducts();
}

function matchesFilters(product) {
  const term = state.searchTerm.toLowerCase();
  const matchesSearch = !term || [product.name, product.brand, product.category, product.tags.join(' ')].join(' ').toLowerCase().includes(term);
  const matchesPrice = product.price <= state.maxPrice;
  const matchesBrand = state.filters.brand.size === 0 || state.filters.brand.has(product.brand);
  const matchesCategory = state.filters.category.size === 0 || state.filters.category.has(product.category);
  const matchesTag = state.filters.tag.size === 0 || product.tags.some((tag) => state.filters.tag.has(tag));
  return matchesSearch && matchesPrice && matchesBrand && matchesCategory && matchesTag;
}

function sortedProducts(list) {
  const items = [...list];
  switch (state.sortBy) {
    case 'price-asc':
      return items.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return items.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return items.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return items;
  }
}

function renderProducts() {
  const filtered = sortedProducts(products.filter(matchesFilters));
  refs.productGrid.innerHTML = filtered.map((product) => renderProductCard(product)).join('');
  refs.resultCount.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
  refs.noResults.classList.toggle('hidden', filtered.length > 0);
}

function renderHomeSections() {
  refs.trendingGrid.innerHTML = renderSectionCards(getFeaturedProducts('trending'));
  refs.newGrid.innerHTML = renderSectionCards(getFeaturedProducts('new'));
  refs.bestGrid.innerHTML = renderSectionCards(getFeaturedProducts('best'));
}

function getFeaturedProducts(tag) {
  const matches = products.filter((product) => product.featured.includes(tag) || product.tags.includes(tag));
  return matches.slice(0, 4);
}

function renderSectionCards(list) {
  return list.map((product) => renderProductCard(product)).join('');
}

function renderProductCard(product) {
  const badges = product.tags.slice(0, 2).map((tag) => `<span class="tag-badge badge-${tag}">${tag.replace(/\b\w/g, (char) => char.toUpperCase())}</span>`).join('');
  const wasPrice = product.wasPrice ? `<span class="was">£${product.wasPrice.toFixed(2)}</span>` : '';

  return `
    <article class="product-card" onclick="openProductModal(${product.id})">
      <div class="card-img">
        <div class="card-img-inner">${product.icon}</div>
        <div class="card-badges">${badges}</div>
      </div>
      <div class="card-body">
        <p class="card-brand">${product.brand}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.category}</p>
        <div class="card-footer">
          <div class="card-price">${wasPrice}£${product.price.toFixed(2)}</div>
          <button class="btn-view" onclick="event.stopPropagation(); openProductModal(${product.id})">View</button>
        </div>
      </div>
    </article>
  `;
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  state.selectedProduct = product;
  state.selectedColor = product.colors[0];
  state.selectedSize = getFirstAvailableSize(product);
  state.selectedGalleryIndex = 0;

  refs.modalBrand.textContent = product.brand;
  refs.modalName.textContent = product.name;
  refs.modalPrice.textContent = `£${product.price.toFixed(2)}`;
  refs.modalStock.textContent = product.stockLabel;
  refs.modalStock.className = `modal-stock stock-${product.stock}`;
  refs.modalDesc.textContent = product.description;
  refs.colorwayLabel.textContent = product.colors[0].name;
  refs.addToCartBtn.textContent = `Add to Cart`;

  renderModalGallery(product);
  renderColorSwatches(product);
  renderSizeGrid(product);
  renderReviews(product);
  renderReviewSummary(product);
  updateModalMainImage(product.gallery[0]);
  refs.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModalGallery(product) {
  refs.modalThumbs.innerHTML = product.gallery.map((item, index) => `
    <button class="modal-thumb ${index === 0 ? 'active' : ''}" onclick="selectGalleryImage(${index})">${item}</button>
  `).join('');
}

function selectGalleryImage(index) {
  if (!state.selectedProduct) return;
  state.selectedGalleryIndex = index;
  Array.from(refs.modalThumbs.children).forEach((thumb, thumbIndex) => {
    thumb.classList.toggle('active', thumbIndex === index);
  });
  updateModalMainImage(state.selectedProduct.gallery[index]);
}

function updateModalMainImage(content) {
  refs.modalMainImg.textContent = content;
}

function renderColorSwatches(product) {
  refs.colorSwatches.innerHTML = product.colors.map((color, index) => `
    <button
      class="swatch ${index === 0 ? 'active' : ''}"
      title="${color.name}"
      aria-label="${color.name}"
      style="background:${color.value}"
      onclick="selectColor(${index})"
    ></button>
  `).join('');
}

function selectColor(index) {
  if (!state.selectedProduct) return;
  state.selectedColor = state.selectedProduct.colors[index];
  refs.colorwayLabel.textContent = state.selectedColor.name;
  Array.from(refs.colorSwatches.children).forEach((swatch, swatchIndex) => {
    swatch.classList.toggle('active', swatchIndex === index);
  });
}

function renderSizeGrid(product) {
  refs.sizeGrid.innerHTML = product.sizes.map((size) => {
    const selected = String(size) === String(state.selectedSize) ? 'selected' : '';
    return `<button class="size-btn ${selected}" data-size="${String(size)}" onclick="selectSize(this.dataset.size)">${size}</button>`;
  }).join('');
}

function selectSize(size) {
  state.selectedSize = size;
  Array.from(refs.sizeGrid.children).forEach((button) => {
    button.classList.toggle('selected', button.textContent === String(size));
  });
}

function getFirstAvailableSize(product) {
  return product.sizes[0];
}

function renderReviews(product) {
  refs.reviewsList.innerHTML = product.reviews.map((review) => `
    <div class="review-item">
      <div class="review-top">
        <div class="review-author">${review.author}</div>
        <div class="review-stars">${renderStarRow(review.rating)}</div>
      </div>
      <div class="review-text">${review.text}</div>
      <div class="review-date">${review.date}</div>
    </div>
  `).join('');
}

function renderReviewSummary(product) {
  const average = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length;
  refs.reviewStars.innerHTML = renderStarRow(average);
  refs.reviewAvg.textContent = average.toFixed(1);
  refs.reviewCount.textContent = `(${product.reviews.length} reviews)`;
}

function renderStarRow(rating) {
  const stars = [];
  for (let index = 1; index <= 5; index += 1) {
    if (rating >= index) {
      stars.push('<span class="star-fill">★</span>');
    } else if (rating >= index - 0.5) {
      stars.push('<span class="star-half">★</span>');
    } else {
      stars.push('<span class="star-empty">★</span>');
    }
  }
  return stars.join('');
}

function closeModal() {
  refs.modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(event) {
  if (event.target === refs.modalOverlay) {
    closeModal();
  }
}

function addToCart() {
  if (!state.selectedProduct) return;
  const product = state.selectedProduct;
  const size = state.selectedSize ?? getFirstAvailableSize(product);
  const color = state.selectedColor ?? product.colors[0];
  const cartKey = `${product.id}-${size}-${color.name}`;
  const existing = state.cart.find((item) => item.key === cartKey);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      key: cartKey,
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      icon: product.icon,
      size,
      color: color.name,
      quantity: 1,
    });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to bag`);
}

function changeCartQty(key, delta) {
  const item = state.cart.find((entry) => entry.key === key);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.key !== key);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(key) {
  state.cart = state.cart.filter((item) => item.key !== key);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  refs.cartBadge.textContent = String(state.cart.reduce((sum, item) => sum + item.quantity, 0));
  refs.cartItems.innerHTML = state.cart.map((item) => `
    <div class="cart-item">
      <div class="cart-item-img">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size ${item.size} · ${item.color}</div>
        <div class="cart-item-bottom">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeCartQty('${item.key}', -1)">−</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="changeCartQty('${item.key}', 1)">+</button>
          </div>
          <div class="cart-item-price">£${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <button class="remove-btn" onclick="removeCartItem('${item.key}')">Remove</button>
      </div>
    </div>
  `).join('');

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  refs.cartTotal.textContent = `£${total.toFixed(2)}`;

  const hasItems = state.cart.length > 0;
  refs.cartEmpty.classList.toggle('visible', !hasItems);
  refs.cartFooter.classList.toggle('visible', hasItems);

  if (!hasItems) {
    refs.cartItems.innerHTML = '';
  }
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    refs.toast.classList.remove('show');
  }, 2000);
}

function updateCountdown() {
  if (!refs.cdH || !refs.cdM || !refs.cdS) return;

  if (!state.countdownTarget) {
    const target = new Date();
    target.setHours(target.getHours() + 4, target.getMinutes() + 27, 0, 0);
    state.countdownTarget = target;
  }

  const distance = Math.max(0, state.countdownTarget.getTime() - Date.now());
  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  refs.cdH.textContent = String(hours).padStart(2, '0');
  refs.cdM.textContent = String(minutes).padStart(2, '0');
  refs.cdS.textContent = String(seconds).padStart(2, '0');
}

function saveCart() {
  localStorage.setItem('striker-cart', JSON.stringify(state.cart));
}

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem('striker-cart'));
    if (Array.isArray(stored)) {
      state.cart = stored;
    }
  } catch {
    state.cart = [];
  }
}

function syncCartFromStorage(event) {
  if (event.key === 'striker-cart') {
    loadCart();
    updateCartUI();
  }
}

window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleCart = toggleCart;
window.clearAllFilters = clearAllFilters;
window.toggleFilter = toggleFilter;
window.filterByTag = filterByTag;
window.filterCat = filterCat;
window.handleSearch = handleSearch;
window.updatePriceFilter = updatePriceFilter;
window.sortProducts = sortProducts;
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.closeModalOutside = closeModalOutside;
window.addToCart = addToCart;
window.changeCartQty = changeCartQty;
window.removeCartItem = removeCartItem;
window.selectColor = selectColor;
window.selectSize = selectSize;
window.selectGalleryImage = selectGalleryImage;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
