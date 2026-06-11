<<<<<<< HEAD
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
=======
const products = [
  {
    id: 1,
    name: 'Air Phantom Ultra',
    brand: 'Nike',
    category: 'Sneakers',
    price: 189.99,
    wasPrice: 219.99,
    tags: ['trending', 'limited'],
    stock: 'low',
    stockLabel: 'Low Stock',
    icon: '👟',
    description: 'A lightweight street runner built for all-day movement with layered foam cushioning and a crisp black-red finish.',
    colors: [
      { name: 'Shadow Red', value: '#ff2d20' },
      { name: 'Midnight', value: '#1a1a1a' },
      { name: 'Bone', value: '#d9d2c8' },
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    reviews: [
      { author: 'Jordan', rating: 5, text: 'Comfortable straight out of the box and the grip is excellent.', date: '2 days ago' },
      { author: 'Mia', rating: 4.5, text: 'Runs true to size and looks sharper in person.', date: '1 week ago' },
    ],
    gallery: ['👟', '👞', '🖤'],
    featured: ['trending', 'best'],
  },
  {
    id: 2,
    name: 'Core Motion Tee',
    brand: 'Adidas',
    category: 'Clothing',
    price: 34.99,
    wasPrice: 44.99,
    tags: ['new', 'sale'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '👕',
    description: 'A clean everyday tee cut from soft heavyweight cotton with a boxy silhouette and subtle tonal branding.',
    colors: [
      { name: 'Black', value: '#111111' },
      { name: 'White', value: '#f5f5f5' },
      { name: 'Ash', value: '#9a9a9a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    reviews: [
      { author: 'Kai', rating: 5, text: 'Heavy enough to feel premium but still breathable.', date: '4 days ago' },
      { author: 'Ava', rating: 4, text: 'Great fit for layering and the neckline holds shape well.', date: '2 weeks ago' },
    ],
    gallery: ['👕', '🧵', '⬛'],
    featured: ['new'],
  },
  {
    id: 3,
    name: 'Pulse Runner Pro',
    brand: 'Asics',
    category: 'Sneakers',
    price: 149.99,
    wasPrice: 169.99,
    tags: ['new', 'trending'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '👟',
    description: 'Responsive cushioning and a locked-in fit make this a reliable option for fast city miles and daily wear.',
    colors: [
      { name: 'Volt', value: '#c7ff00' },
      { name: 'Graphite', value: '#2d2d2d' },
      { name: 'Silver', value: '#c8d0d8' },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    reviews: [
      { author: 'Noah', rating: 5, text: 'The cushioning is excellent and they feel stable at pace.', date: '3 days ago' },
      { author: 'Ella', rating: 4.5, text: 'A clean colourway that works with everything.', date: '5 days ago' },
    ],
    gallery: ['👟', '🏃', '⚡'],
    featured: ['trending', 'new'],
  },
  {
    id: 4,
    name: 'Ridge Utility Pack',
    brand: 'Puma',
    category: 'Accessories',
    price: 35.99,
    wasPrice: 52.0,
    tags: ['limited'],
    stock: 'low',
    stockLabel: 'Few Left',
    icon: '🎒',
    description: 'A compact utility backpack with weather-resistant fabric, secure storage and a sleek urban profile.',
    colors: [
      { name: 'Black', value: '#121212' },
      { name: 'Forest', value: '#1f3b2c' },
      { name: 'Slate', value: '#505863' },
    ],
    sizes: ['One Size'],
    reviews: [
      { author: 'Luca', rating: 5, text: 'Well made, surprisingly roomy and easy to carry.', date: '1 day ago' },
      { author: 'Sophie', rating: 4, text: 'Great for commuting and fits the essentials perfectly.', date: '1 week ago' },
    ],
    gallery: ['🎒', '🧢', '📦'],
    featured: ['limited', 'best'],
  },
  {
    id: 5,
    name: 'Streetline Cap',
    brand: 'Nike',
    category: 'Accessories',
    price: 14.99,
    wasPrice: 24.99,
    tags: ['sale', 'trending'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '🧢',
    description: 'A curved-brim cap with breathable panels and a low-profile fit made for daily wear.',
    colors: [
      { name: 'Black', value: '#101010' },
      { name: 'Red', value: '#ff2d20' },
      { name: 'Stone', value: '#d6c7b5' },
    ],
    sizes: ['One Size'],
    reviews: [
      { author: 'Toby', rating: 4.5, text: 'Simple, clean and the fit adjustment is solid.', date: '6 days ago' },
      { author: 'Nina', rating: 5, text: 'Looks premium and goes with almost anything.', date: '1 week ago' },
    ],
    gallery: ['🧢', '🖤', '🧵'],
    featured: ['trending'],
  },
  {
    id: 6,
    name: 'Echo Windbreaker',
    brand: 'New Balance',
    category: 'Clothing',
    price: 84.99,
    wasPrice: 99.99,
    tags: ['limited', 'new'],
    stock: 'low',
    stockLabel: 'Low Stock',
    icon: '🧥',
    description: 'A lightweight shell jacket with a matte finish, adjustable hood and sharp contrast piping.',
    colors: [
      { name: 'Graphite', value: '#2f3136' },
      { name: 'Mist', value: '#cfd6df' },
      { name: 'Black', value: '#0f0f10' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    reviews: [
      { author: 'Eli', rating: 5, text: 'Packable, light and genuinely wind resistant.', date: '3 days ago' },
      { author: 'Grace', rating: 4.5, text: 'The fit is relaxed without looking oversized.', date: '1 week ago' },
    ],
    gallery: ['🧥', '🌧️', '⚫'],
    featured: ['new', 'best'],
  },
  {
    id: 7,
    name: 'Velocity Jogger',
    brand: 'Adidas',
    category: 'Clothing',
    price: 59.99,
    wasPrice: 74.99,
    tags: ['trending', 'sale'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '👖',
    description: 'Slim technical joggers with zip pockets, stretch fabric and a tapered silhouette.',
    colors: [
      { name: 'Black', value: '#111111' },
      { name: 'Grey', value: '#747474' },
      { name: 'Olive', value: '#556b2f' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    reviews: [
      { author: 'Ben', rating: 5, text: 'The taper is on point and they move really well.', date: '5 days ago' },
      { author: 'Zara', rating: 4, text: 'Good for travel and easy to style.', date: '2 weeks ago' },
    ],
    gallery: ['👖', '⚫', '🪡'],
    featured: ['trending', 'best'],
  },
  {
    id: 8,
    name: 'Arc Fusion 2',
    brand: 'Puma',
    category: 'Sneakers',
    price: 129.99,
    wasPrice: 149.99,
    tags: ['sale', 'limited'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '👟',
    description: 'A retro-inspired sneaker with layered materials, bold colour blocking and all-day comfort.',
    colors: [
      { name: 'Redline', value: '#ff2d20' },
      { name: 'White', value: '#f5f5f5' },
      { name: 'Carbon', value: '#2b2d30' },
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    reviews: [
      { author: 'Hassan', rating: 4.5, text: 'Great shape and the build feels sturdy.', date: '8 days ago' },
      { author: 'Leah', rating: 5, text: 'Comfortable and the red accent really pops.', date: '2 weeks ago' },
    ],
    gallery: ['👟', '🔴', '⬜'],
    featured: ['best'],
  },
  {
    id: 9,
    name: 'Mono Run Sock',
    brand: 'Asics',
    category: 'Accessories',
    price: 12.99,
    wasPrice: 18.99,
    tags: ['new'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '🧦',
    description: 'Breathable training socks with arch support, reinforced toe boxes and a smooth fit.',
    colors: [
      { name: 'Black', value: '#111111' },
      { name: 'White', value: '#f7f7f7' },
      { name: 'Red', value: '#ff2d20' },
    ],
    sizes: ['S', 'M', 'L'],
    reviews: [
      { author: 'Dani', rating: 5, text: 'Surprisingly comfortable and stay in place during runs.', date: '3 days ago' },
      { author: 'Owen', rating: 4, text: 'Great value and nice finish.', date: '1 week ago' },
    ],
    gallery: ['🧦', '⚪', '🟥'],
    featured: ['new'],
  },
  {
    id: 10,
    name: 'Transit Overshirt',
    brand: 'New Balance',
    category: 'Clothing',
    price: 69.99,
    wasPrice: 89.99,
    tags: ['trending'],
    stock: 'low',
    stockLabel: 'Low Stock',
    icon: '🧥',
    description: 'A structured overshirt with snap buttons and a roomy fit for layering through the seasons.',
    colors: [
      { name: 'Brown', value: '#5b4636' },
      { name: 'Black', value: '#111111' },
      { name: 'Sand', value: '#d2c0a3' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    reviews: [
      { author: 'Iris', rating: 5, text: 'Looks smart over a tee and layers beautifully.', date: '4 days ago' },
      { author: 'Jay', rating: 4.5, text: 'The material has a nice weight without being heavy.', date: '6 days ago' },
    ],
    gallery: ['🧥', '🟫', '⬛'],
    featured: ['trending', 'best'],
  },
  {
    id: 11,
    name: 'Court Legacy Low',
    brand: 'Nike',
    category: 'Sneakers',
    price: 112.0,
    wasPrice: 129.99,
    tags: ['best', 'sale'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '👟',
    description: 'A classic court silhouette with durable leather panels and a clean low-top profile.',
    colors: [
      { name: 'White', value: '#f2f2f2' },
      { name: 'Black', value: '#111111' },
      { name: 'Red', value: '#ff2d20' },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    reviews: [
      { author: 'Nate', rating: 5, text: 'Clean, versatile and super easy to wear.', date: '5 days ago' },
      { author: 'Tia', rating: 4.5, text: 'A timeless shape with better cushioning than expected.', date: '1 week ago' },
    ],
    gallery: ['👟', '⚪', '🟥'],
    featured: ['best', 'trending'],
  },
  {
    id: 12,
    name: 'Lift Training Belt',
    brand: 'Puma',
    category: 'Accessories',
    price: 18.99,
    wasPrice: 29.99,
    tags: ['limited', 'sale'],
    stock: 'in',
    stockLabel: 'In Stock',
    icon: '🪢',
    description: 'A reinforced training belt for strength sessions with a secure buckle and padded support.',
    colors: [
      { name: 'Black', value: '#111111' },
      { name: 'Red', value: '#ff2d20' },
      { name: 'Grey', value: '#8d8d8d' },
    ],
    sizes: ['S', 'M', 'L'],
    reviews: [
      { author: 'Mason', rating: 5, text: 'Solid support and easy to adjust between sets.', date: '2 days ago' },
      { author: 'Chloe', rating: 4, text: 'Well made and compact enough to keep in a gym bag.', date: '9 days ago' },
    ],
    gallery: ['🪢', '⬛', '🔴'],
    featured: ['limited'],
  },
];

const generated = generateProducts(5000, products.length + 1);
products.push(...generated);
products.push(...generateProducts(100, products.length + 1, 'Kids'));

// Remove duplicate products by name, keeping the first occurrence
const seenNames = new Set();
const uniqueProducts = [];
for (const product of products) {
  if (!seenNames.has(product.name)) {
    seenNames.add(product.name);
    uniqueProducts.push(product);
  }
}
products.length = 0;
products.push(...uniqueProducts);

function generateProducts(count, startId, forcedCategory = null) {
  const brands = [
    'Nike', 'Adidas', 'Puma', 'Asics', 'New Balance',
    'Reebok', 'Under Armour', 'Fila', 'Jordan', 'Saucony',
    'Columbia', 'The North Face',
  ];
  const categories = ['Sneakers', 'Clothing', 'Accessories', 'Equipment', 'Kids'];
  const tagsPool = ['new', 'trending', 'best', 'sale', 'limited'];
  const sizeMap = {
    Sneakers: [6, 7, 8, 9, 10, 11, 12],
    Clothing: ['S', 'M', 'L', 'XL', 'XXL'],
    Accessories: ['One Size'],
    Equipment: ['One Size'],
    Kids: ['2T', '3T', '4T', '5T', 'XS', 'S'],
  };
  const iconMap = {
    Sneakers: '👟',
    Clothing: '👕',
    Accessories: '🧢',
    Equipment: '🎒',
    Kids: '🧒',
  };
  const brandProductCatalog = {
    Nike: {
      Sneakers: ['Air Zoom Elite', 'Court Legacy', 'React Sprint', 'Phantom Glide', 'Trail Rider', 'Lunar Pace', 'Element Run', 'Quest Max', 'Sprint Pro', 'Dynamo Trainer'],
      Clothing: ['Dri-Fit Tee', 'Tech Hoodie', 'Flex Shorts', 'Training Legging', 'Aero Jacket', 'Performance Longsleeve', 'Stride Crop', 'Thermal Pullover'],
      Accessories: ['Sport Cap', 'Training Duffel', 'Performance Sock', 'Wristband Set', 'Gym Towel', 'Water Bottle'],
      Equipment: ['Yoga Mat', 'Recovery Roller', 'Resistance Band', 'Grip Trainer', 'Training Timer'],
      Kids: ['Air Zoom Jr', 'Court Legacy Mini', 'React Sprint Kids', 'Phantom Glide Jr', 'Trail Rider Youth', 'Lunar Pace Kids', 'Element Run Jr', 'Quest Max Youth', 'Sprint Pro Kids', 'Dynamo Trainer Jr'],
    },
    Adidas: {
      Sneakers: ['Ultraboost X', 'Gazelle Retro', 'NMD Runner', 'Court Master', 'Solar Pace', 'ZX Flux', 'Trail Voyager', 'Futuride', 'Adizero Swift', 'Pulse Trainer'],
      Clothing: ['Primeknit Tee', 'AEROREADY Hoodie', 'Tiro Track Pant', 'Essentials Crewneck', 'Climalite Shorts', '3-Stripes Jacket', 'Adicolor Windbreaker'],
      Accessories: ['Baseball Cap', 'Shoe Bag', 'Training Sock', 'Gym Belt', 'Headband', 'Hydration Bottle'],
      Equipment: ['Foam Roller', 'Jump Rope', 'Sports Towel', 'Resistance Loop', 'Workout Mat'],
      Kids: ['Ultraboost X Kids', 'Gazelle Retro Jr', 'NMD Runner Youth', 'Court Master Kids', 'Solar Pace Jr', 'ZX Flux Mini', 'Trail Voyager Kids', 'Futuride Jr', 'Adizero Swift Youth', 'Pulse Trainer Kids'],
    },
    Puma: {
      Sneakers: ['Arc Fusion', 'Ridge Runner', 'Legacy Court', 'Velocity Racer', 'Cali Cruiser', 'Evoke Street', 'Blaze Nitro', 'Slipstream', 'Chase Mid', 'Fast Trac'],
      Clothing: ['Evostripe Tee', 'Luxe Hoodie', 'Motion Trackpants', 'Ignite Jacket', 'Essentials Sweatshirt', 'Sport Shorts'],
      Accessories: ['Style Cap', 'Gear Pack', 'Lift Belt', 'Crew Sock', 'Training Band'],
      Equipment: ['Gym Mat', 'Bottle Carrier', 'Weighted Rope', 'Stretch Strap', 'Hand Grip'],
      Kids: ['Arc Fusion Kids', 'Ridge Runner Jr', 'Legacy Court Mini', 'Velocity Racer Youth', 'Cali Cruiser Kids', 'Evoke Street Jr', 'Blaze Nitro Kids', 'Slipstream Youth', 'Chase Mid Jr', 'Fast Trac Kids'],
    },
    Asics: {
      Sneakers: ['Pulse Runner', 'GT-2000', 'Gel Nimbus', 'Roadhawk', 'Sky Elite', 'Dynablast', 'MetaRide', 'Torrent', 'Novablast', 'Gel Kayano'],
      Clothing: ['Seamless Tee', 'Winter Jacket', 'Train Tight', 'Motion Short', 'Run Tank', 'Core Hoodie'],
      Accessories: ['Run Cap', 'Compression Sock', 'Arm Sleeve', 'Hydro Bottle'],
      Equipment: ['Stretch Band', 'Recovery Roller', 'Training Mat'],
      Kids: ['Pulse Runner Kids', 'GT-2000 Jr', 'Gel Nimbus Youth', 'Roadhawk Kids', 'Sky Elite Jr', 'Dynablast Kids', 'MetaRide Youth', 'Torrent Jr', 'Novablast Kids', 'Gel Kayano Jr'],
    },
    'New Balance': {
      Sneakers: ['Fresh Foam X', 'Made Fresh', 'FuelCell', 'Numeric Skate', '574 Core', '9060', '880v12', 'X-Racer', 'Rebel Run', 'Storm Runner'],
      Clothing: ['NB Essentials Tee', 'Tech Fleece Hoodie', 'Impact Short', 'Athletic Hoodie', 'Windbreaker Shell'],
      Accessories: ['Classic Cap', 'Performance Sock', 'Duffel Pack', 'Sport Towel'],
      Equipment: ['Workout Mat', 'Fitness Band', 'Hydration Pack'],
      Kids: ['Fresh Foam X Kids', 'Made Fresh Jr', 'FuelCell Youth', 'Numeric Skate Kids', '574 Core Mini', '9060 Jr', '880v12 Kids', 'X-Racer Youth', 'Rebel Run Jr', 'Storm Runner Kids'],
    },
    Reebok: {
      Sneakers: ['Nano Trainer', 'Classic Leather', 'Floatride Run', 'Zig Energy', 'Club C 85', 'Peloton Studio', 'Vital Runner'],
      Clothing: ['Training Tank', 'CrossFit Shorts', 'Studio Hoodie', 'Speedwick Tee'],
      Accessories: ['Gym Glove', 'Performance Band', 'Workout Towel'],
      Equipment: ['Jump Rope', 'Exercise Ball', 'Grip Trainer'],
      Kids: ['Nano Trainer Jr', 'Classic Leather Kids', 'Floatride Run Youth', 'Zig Energy Jr', 'Club C 85 Kids', 'Peloton Studio Youth', 'Vital Runner Jr'],
    },
    'Under Armour': {
      Sneakers: ['HOVR Phantom', 'Charged Assert', 'Project Rock Trainer', 'Flow Velocity', 'UA Warp'],
      Clothing: ['HeatGear Tee', 'Storm Jacket', 'Sportstyle Hoodie', 'Run Short', 'Recovery Pant'],
      Accessories: ['Baseball Cap', 'Training Sock', 'Arm Sleeve', 'Hydration Bottle'],
      Equipment: ['Resistance Band', 'Recovery Roller', 'Workout Mat'],
      Kids: ['HOVR Phantom Kids', 'Charged Assert Jr', 'Project Rock Trainer Youth', 'Flow Velocity Kids', 'UA Warp Jr'],
    },
    Fila: {
      Sneakers: ['Disruptor', 'Ray Tracer', 'Mindblower', 'Original Tennis', 'Vault CMR'],
      Clothing: ['Classic Tee', 'Sport Jacket', 'Track Pant', 'Heritage Hoodie'],
      Accessories: ['Logo Cap', 'Shoe Bag', 'Crew Sock'],
      Equipment: ['Gym Towel', 'Yoga Mat'],
      Kids: ['Disruptor Kids', 'Ray Tracer Jr', 'Mindblower Youth', 'Original Tennis Mini', 'Vault CMR Kids'],
    },
    Jordan: {
      Sneakers: ['Air Jordan 1', 'Air Jordan 4', 'Air Jordan 11', 'Jordan Zoom', 'Jordan React'],
      Clothing: ['Flight Hoodie', 'Legacy Tee', 'Jumpman Shorts', 'Warmup Jacket'],
      Accessories: ['Jordan Cap', 'Shoe Bag', 'Jumpman Sock'],
      Equipment: ['Training Mat', 'Resistance Band'],
      Kids: ['Air Jordan 1 Kids', 'Air Jordan 4 Jr', 'Air Jordan 11 Youth', 'Jordan Zoom Kids', 'Jordan React Jr'],
    },
    Saucony: {
      Sneakers: ['Kinvara', 'Ride', 'Endorphin', 'Guide', 'Freedom', 'Cohesion'],
      Clothing: ['Run Tee', 'Windbreaker', 'Training Short', 'Tech Hoodie'],
      Accessories: ['Run Sock', 'Hydration Bottle'],
      Equipment: ['Stretch Strap', 'Recovery Roller'],
      Kids: ['Kinvara Kids', 'Ride Jr', 'Endorphin Youth', 'Guide Kids', 'Freedom Jr', 'Cohesion Kids'],
    },
    Columbia: {
      Sneakers: ['Peak Sneak', 'Trail Summit', 'Outdoor Runner'],
      Clothing: ['Omni-Heat Jacket', 'Trail Shirt', 'Hiking Pant', 'Rain Hoodie'],
      Accessories: ['Trail Cap', 'Pack', 'Glove'],
      Equipment: ['Camping Mat', 'Hydro Flask'],
      Kids: ['Peak Sneak Kids', 'Trail Summit Jr', 'Outdoor Runner Youth', 'Omni-Heat Kids Jacket', 'Playground Hoodie'],
    },
    'The North Face': {
      Sneakers: ['Venture Runner', 'Trail Escape', 'Horizon Sneaker'],
      Clothing: ['Thermo Hoodie', 'Denali Jacket', 'Base Layer Tee', 'Summit Pants'],
      Accessories: ['Outdoor Cap', 'Neck Gaiter', 'Beanie'],
      Equipment: ['Hiking Mat', 'Gear Tote'],
      Kids: ['Mini Denali Jacket', 'Youth Adventure Tee', 'Trail Kid Shorts', 'Summit Little Hoodie', 'Playground Sneaker'],
    },
  };
  const reviewAuthors = ['Alex', 'Jamie', 'Taylor', 'Jordan', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn', 'Skyler'];
  const reviewPhrases = [
    'Feels great, durable and comfortable.',
    'Exactly what I needed for daily training.',
    'The fit is perfect and the materials feel premium.',
    'I appreciate the build and the style is clean.',
    'Good value for the price and works well.',
  ];
  const stockStates = ['in', 'low', 'out'];
  const stockLabelMap = {
    in: 'In Stock',
    low: 'Low Stock',
    out: 'Out of Stock',
  };
  const products = [];

  for (let index = 0; index < count; index += 1) {
    const id = startId + index;
    const brand = brands[index % brands.length];
    const category = forcedCategory || categories[index % categories.length];
    const productList = brandProductCatalog[brand][category] || [];
    const productName = productList[index % productList.length] || `Sport ${category}`;
    const productSuffix = Math.floor(index / Math.max(productList.length, 1)) + 1;
    const baseName = productName.includes(brand) ? productName : `${brand} ${productName}`;
    const name = `${baseName} ${productSuffix}`;
    let price;
    if (category === 'Kids') {
      price = Number((15 + ((index * 7) % 30)).toFixed(2));
    } else if (category === 'Accessories') {
      price = Number((10 + ((index * 5) % 40)).toFixed(2));
    } else if (category === 'Clothing') {
      price = Number((30 + ((index * 6) % 90)).toFixed(2));
    } else if (category === 'Equipment') {
      price = Number((25 + ((index * 9) % 75)).toFixed(2));
    } else {
      price = Number((70 + ((index * 8) % 110)).toFixed(2));
    }
    const hasWasPrice = index % 3 !== 0;
    const wasPrice = hasWasPrice ? Number((price + Math.max(8, (index % 20) + 5)).toFixed(2)) : null;
    const colorOptions = [
      { name: 'Black', value: '#111111' },
      { name: 'White', value: '#f5f5f5' },
      { name: 'Grey', value: '#9a9a9a' },
      { name: 'Navy', value: '#273c75' },
      { name: 'Red', value: '#ff2d20' },
      { name: 'Forest', value: '#1f3b2c' },
      { name: 'Sand', value: '#d2c0a3' },
      { name: 'Gold', value: '#d4af37' },
    ];
    const colors = [
      colorOptions[index % colorOptions.length],
      colorOptions[(index + 1) % colorOptions.length],
      colorOptions[(index + 3) % colorOptions.length],
    ];
    const tags = [
      tagsPool[index % tagsPool.length],
      tagsPool[(index + 2) % tagsPool.length],
    ].filter((tag, idx, self) => self.indexOf(tag) === idx);
    const featured = tags.filter((tag) => ['new', 'trending', 'best'].includes(tag));
    const stock = stockStates[index % stockStates.length];
    const productSizes = [...sizeMap[category]];
    const reviews = [
      {
        author: reviewAuthors[index % reviewAuthors.length],
        rating: 4 + ((index % 2) * 0.5),
        text: reviewPhrases[index % reviewPhrases.length],
        date: `${1 + (index % 10)} days ago`,
      },
      {
        author: reviewAuthors[(index + 3) % reviewAuthors.length],
        rating: 4 + (((index + 1) % 2) * 0.5),
        text: reviewPhrases[(index + 2) % reviewPhrases.length],
        date: `${2 + (index % 8)} days ago`,
      },
    ];

    products.push({
      id,
      name,
      brand,
      category,
      price,
      wasPrice,
      tags,
      stock,
      stockLabel: stockLabelMap[stock],
      icon: iconMap[category] || '🛍️',
      description: `A ${category.toLowerCase()} from ${brand} built for everyday activity and modern styling.`,
      colors,
      sizes: productSizes,
      reviews,
      gallery: [iconMap[category] || '🛍️', '✨', '🟫'],
      featured,
    });
  }

  return products;
>>>>>>> a347068987c3955a9b60db0e3cc3e73519ca1ebd
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
  selectedShipping: 'pickup',
  toastTimer: null,
  countdownTimer: null,
  authUser: null,
  authMode: 'login',
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
  refs.cartSubtotal = document.getElementById('cartSubtotal');
  refs.cartTotal = document.getElementById('cartTotal');
  refs.cartBadge = document.getElementById('cartBadge');
  refs.toast = document.getElementById('toast');
  refs.themeBtn = document.getElementById('themeBtn');
  refs.mobileMenu = document.getElementById('mobileMenu');
  refs.hamburger = document.getElementById('hamburger');
  refs.authBtn = document.getElementById('authBtn');
  refs.authModal = document.getElementById('authModal');
  refs.authTabLogin = document.getElementById('authTabLogin');
  refs.authTabSignup = document.getElementById('authTabSignup');
  refs.authPanelLogin = document.getElementById('authPanelLogin');
  refs.authPanelSignup = document.getElementById('authPanelSignup');
  refs.authAccountInfo = document.getElementById('authAccountInfo');
  refs.authUserName = document.getElementById('authUserName');
  refs.authUserEmail = document.getElementById('authUserEmail');
  refs.loginError = document.getElementById('loginError');
  refs.signupError = document.getElementById('signupError');
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
  loadUser();
  loadTheme();
  renderHomeSections();
  renderProducts();
  updateCartUI();
  updateAuthUI();
  updateThemeUI();
  updateCountdown();
  state.countdownTimer = window.setInterval(updateCountdown, 1000);

  document.addEventListener('click', preventHashJump, true);
  document.addEventListener('keydown', handleGlobalKeys);
  window.addEventListener('storage', syncCartFromStorage);
}

function loadTheme() {
  const saved = localStorage.getItem('elevate-theme');
  if (saved === 'light' || saved === 'dark') {
    state.theme = saved;
  }
}

function saveTheme() {
  localStorage.setItem('elevate-theme', state.theme);
}

function applyTheme() {
  if (state.theme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}

function updateThemeUI() {
  applyTheme();
  if (!refs.themeBtn) return;
  refs.themeBtn.textContent = state.theme === 'light' ? 'Dark Mode' : 'Light Mode';
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  saveTheme();
  updateThemeUI();
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
    closeAuthModal();
    closeMobileMenu();
  }
}

function loadUser() {
  try {
    const stored = JSON.parse(localStorage.getItem('elevate-auth'));
    if (stored && stored.email) {
      state.authUser = stored;
    }
  } catch {
    state.authUser = null;
  }
}

function saveUser() {
  if (state.authUser) {
    localStorage.setItem('elevate-auth', JSON.stringify(state.authUser));
  }
}

function clearAuth() {
  localStorage.removeItem('elevate-auth');
  state.authUser = null;
}

function updateAuthUI() {
  if (!refs.authBtn) return;
  const signedIn = Boolean(state.authUser);
  refs.authBtn.textContent = signedIn ? 'Account' : 'Login';

  if (!refs.authPanelLogin || !refs.authPanelSignup || !refs.authAccountInfo) return;
  refs.authPanelLogin.classList.toggle('hidden', signedIn);
  refs.authPanelSignup.classList.toggle('hidden', signedIn);
  refs.authAccountInfo.classList.toggle('hidden', !signedIn);

  if (signedIn) {
    refs.authUserName.textContent = state.authUser.name || 'Member';
    refs.authUserEmail.textContent = state.authUser.email;
  } else {
    switchAuthTab(state.authMode);
  }
}

function openAuthModal(mode = 'login') {
  state.authMode = mode;
  refs.authModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateAuthUI();
}

function closeAuthModal() {
  if (refs.authModal) {
    refs.authModal.classList.remove('open');
  }
  document.body.style.overflow = '';
}

function closeAuthModalOutside(event) {
  if (event.target === refs.authModal) {
    closeAuthModal();
  }
}

function switchAuthTab(mode) {
  state.authMode = mode;
  if (!refs.authTabLogin || !refs.authTabSignup || !refs.authPanelLogin || !refs.authPanelSignup) return;
  refs.authTabLogin.classList.toggle('active', mode === 'login');
  refs.authTabSignup.classList.toggle('active', mode === 'signup');
  refs.authPanelLogin.classList.toggle('hidden', mode !== 'login');
  refs.authPanelSignup.classList.toggle('hidden', mode !== 'signup');
  refs.authAccountInfo.classList.add('hidden');
  if (refs.loginError) refs.loginError.textContent = '';
  if (refs.signupError) refs.signupError.textContent = '';
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail')?.value?.trim() ?? '';
  const password = document.getElementById('loginPassword')?.value ?? '';
  if (!email || !password) {
    if (refs.loginError) refs.loginError.textContent = 'Enter both email and password.';
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem('elevate-auth-users') || '[]');
  const user = Array.isArray(storedUsers)
    ? storedUsers.find((entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password)
    : null;

  if (!user) {
    if (refs.loginError) refs.loginError.textContent = 'Invalid email or password.';
    return;
  }

  state.authUser = { name: user.name, email: user.email };
  saveUser();
  updateAuthUI();
  closeAuthModal();
  showToast('Logged in successfully');
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName')?.value?.trim() ?? '';
  const email = document.getElementById('signupEmail')?.value?.trim() ?? '';
  const password = document.getElementById('signupPassword')?.value ?? '';
  const confirm = document.getElementById('signupConfirm')?.value ?? '';

  if (!name || !email || !password || !confirm) {
    if (refs.signupError) refs.signupError.textContent = 'Please complete every field.';
    return;
  }
  if (password !== confirm) {
    if (refs.signupError) refs.signupError.textContent = 'Passwords do not match.';
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem('elevate-auth-users') || '[]');
  const users = Array.isArray(storedUsers) ? storedUsers : [];
  if (users.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
    if (refs.signupError) refs.signupError.textContent = 'Email already registered.';
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('elevate-auth-users', JSON.stringify(users));
  state.authUser = { name, email };
  saveUser();
  updateAuthUI();
  closeAuthModal();
  showToast('Account created successfully');
}

function handleLogout() {
  clearAuth();
  updateAuthUI();
  closeAuthModal();
  showToast('Logged out');
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

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = state.selectedShipping === 'home' ? 4.99 : 0;
  const total = subtotal + shipping;
  if (refs.cartSubtotal) refs.cartSubtotal.textContent = `£${subtotal.toFixed(2)}`;
  refs.cartTotal.textContent = `£${total.toFixed(2)}`;

  const hasItems = state.cart.length > 0;
  refs.cartEmpty.classList.toggle('visible', !hasItems);
  refs.cartFooter.classList.toggle('visible', hasItems);

  if (!hasItems) {
    refs.cartItems.innerHTML = '';
  }
}

function setShippingOption(option) {
  if (option !== 'pickup' && option !== 'home') return;
  state.selectedShipping = option;
  updateCartUI();
  showToast(option === 'home' ? 'Home shipping selected' : 'Pickup in store selected');
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

window.setShippingOption = setShippingOption;
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
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.closeAuthModalOutside = closeAuthModalOutside;
window.switchAuthTab = switchAuthTab;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleLogout = handleLogout;
window.toggleTheme = toggleTheme;
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
