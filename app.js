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
    price: 52.0,
    wasPrice: 62.0,
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
    price: 24.99,
    wasPrice: 29.99,
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
    price: 18.99,
    wasPrice: 24.99,
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
    price: 29.99,
    wasPrice: 34.99,
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
