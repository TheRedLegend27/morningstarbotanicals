// Morning Star Botanicals - Main JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Morning Star Botanicals website loaded');
    
    // Initialize all functionality
    initializeNavigation();
    initializeScrollEffects();
    initializeSmoothScroll();
    initializeEnhancedSmoothScroll();
    initializeFeaturedProducts();
    initializeBrandStoryAnimation();
    initializeProductsPage();
    initializeMobileOptimizations();
    initializeMicroInteractions();
    initializeParallaxEffects();
    initializeScrollAnimations();
    initializeLazyLoading();
});

// Initialize mobile-specific optimizations
function initializeMobileOptimizations() {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 767;
    
    if (isMobile) {
        // Add mobile class to body for CSS targeting
        document.body.classList.add('mobile-device');
        
        // Initialize touch-friendly interactions
        initializeTouchInteractions();
        
        // Optimize images for mobile
        optimizeImagesForMobile();
        
        // Initialize mobile-specific scroll behavior
        initializeMobileScrollBehavior();
        
        // Prevent zoom on input focus
        preventInputZoom();
        
        console.log('Mobile optimizations initialized');
    }
}

// Initialize touch-friendly interactions
function initializeTouchInteractions() {
    // Add touch feedback to all buttons
    const buttons = document.querySelectorAll('.btn, .product-card__cta, .hero__cta, .story__cta');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add touch feedback to product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        card.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Optimize images for mobile devices
function optimizeImagesForMobile() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading="lazy" if not already present
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Prevent image dragging on mobile
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
        
        // Add error handling for broken images
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image not available';
        });
    });
}

// Initialize mobile-specific scroll behavior
function initializeMobileScrollBehavior() {
    let isScrolling = false;
    
    // Throttle scroll events for better performance
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                // Update header on scroll
                const header = document.querySelector('.header');
                const scrollTop = window.pageYOffset;
                
                if (scrollTop > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            // Recalculate viewport height after orientation change
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }, 100);
    });
    
    // Set initial viewport height
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Prevent zoom on input focus for iOS
function preventInputZoom() {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Ensure font-size is at least 16px to prevent zoom
        const computedStyle = window.getComputedStyle(input);
        const fontSize = parseFloat(computedStyle.fontSize);
        
        if (fontSize < 16) {
            input.style.fontSize = '16px';
        }
    });
}

// Initialize navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Mobile menu toggle functionality
    if (navToggle && navMenu) {
        // Enhanced touch support for mobile menu toggle
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
        
        // Add touch event support for better mobile responsiveness
        navToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
        });
        
        navToggle.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1)';
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
            
            // Add touch feedback for nav links
            link.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            link.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('nav__menu--open')) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('nav__menu--open')) {
                closeMobileMenu();
            }
        });
        
        // Handle window resize and orientation change
        window.addEventListener('resize', function() {
            if (window.innerWidth > 767 && navMenu.classList.contains('nav__menu--open')) {
                closeMobileMenu();
            }
        });
        
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                if (window.innerWidth > 767 && navMenu.classList.contains('nav__menu--open')) {
                    closeMobileMenu();
                }
            }, 100);
        });
        
        // Prevent scrolling when mobile menu is open
        navMenu.addEventListener('touchmove', function(e) {
            if (navMenu.classList.contains('nav__menu--open')) {
                e.preventDefault();
            }
        });
    }
    
    console.log('Navigation initialized with mobile optimizations');
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.classList.toggle('nav__toggle--active');
        navMenu.classList.toggle('nav__menu--open');
        
        // Update aria-expanded attribute for accessibility
        const isOpen = navMenu.classList.contains('nav__menu--open');
        navToggle.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scroll when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close mobile menu
function closeMobileMenu() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.classList.remove('nav__toggle--active');
        navMenu.classList.remove('nav__menu--open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// Initialize scroll effects for header
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    
    if (header) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class when scrolling down
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Complete Products Data Structure
const productsData = [
    {
        id: 'lavender-dreams',
        name: 'Lavender Dreams',
        description: 'A soothing blend of organic lavender and chamomile, perfect for evening relaxation and gentle cleansing.',
        ingredients: ['Organic Lavender', 'Chamomile', 'Shea Butter', 'Coconut Oil'],
        image: 'images/products/lavender-dreams-soap.jpg',
        featured: true,
        badge: 'Bestseller'
    },
    {
        id: 'eucalyptus-mint',
        name: 'Eucalyptus Mint',
        description: 'Invigorating eucalyptus and peppermint create a refreshing cleansing experience that awakens the senses.',
        ingredients: ['Eucalyptus Oil', 'Peppermint', 'Olive Oil', 'Cocoa Butter'],
        image: 'images/products/eucalyptus-mint-soap.jpg',
        featured: true,
        badge: 'Energizing'
    },
    {
        id: 'rose-garden',
        name: 'Rose Garden',
        description: 'Luxurious rose petals and geranium oil provide a romantic, moisturizing cleanse with a delicate floral scent.',
        ingredients: ['Rose Petals', 'Geranium Oil', 'Argan Oil', 'Goat Milk'],
        image: 'images/products/rose-garden-soap.jpg',
        featured: true,
        badge: 'Luxurious'
    },
    {
        id: 'oatmeal-honey',
        name: 'Oatmeal Honey',
        description: 'Gentle exfoliation meets deep moisturizing with colloidal oatmeal and raw honey for sensitive skin.',
        ingredients: ['Colloidal Oatmeal', 'Raw Honey', 'Almond Oil', 'Vanilla'],
        image: 'images/products/oatmeal-honey-soap.jpg',
        featured: false,
        badge: 'Gentle'
    },
    {
        id: 'tea-tree-charcoal',
        name: 'Tea Tree Charcoal',
        description: 'Purifying activated charcoal and tea tree oil work together to deeply cleanse and clarify problem skin.',
        ingredients: ['Tea Tree Oil', 'Activated Charcoal', 'Jojoba Oil', 'Clay'],
        image: 'images/products/tea-tree-charcoal-soap.jpg',
        featured: false,
        badge: 'Purifying'
    },
    {
        id: 'citrus-burst',
        name: 'Citrus Burst',
        description: 'Energizing blend of orange, lemon, and grapefruit oils creates an uplifting morning cleanse experience.',
        ingredients: ['Orange Oil', 'Lemon Oil', 'Grapefruit Oil', 'Sunflower Oil'],
        image: 'images/products/citrus-burst-soap.jpg',
        featured: false,
        badge: 'Uplifting'
    },
    {
        id: 'coconut-vanilla',
        name: 'Coconut Vanilla',
        description: 'Tropical coconut and warm vanilla create a creamy, moisturizing soap that transports you to paradise.',
        ingredients: ['Coconut Oil', 'Vanilla Extract', 'Cocoa Butter', 'Sweet Almond Oil'],
        image: 'images/products/coconut-vanilla-soap.jpg',
        featured: false,
        badge: 'Tropical'
    },
    {
        id: 'patchouli-sage',
        name: 'Patchouli Sage',
        description: 'Earthy patchouli and cleansing sage combine for a grounding, purifying cleanse with herbal notes.',
        ingredients: ['Patchouli Oil', 'Sage Extract', 'Hemp Seed Oil', 'Sea Salt'],
        image: 'images/products/patchouli-sage-soap.jpg',
        featured: false,
        badge: 'Earthy'
    },
    {
        id: 'lemongrass-mint',
        name: 'Lemongrass Mint',
        description: 'Fresh lemongrass and cooling mint provide an invigorating cleanse that refreshes and energizes.',
        ingredients: ['Lemongrass Oil', 'Spearmint', 'Avocado Oil', 'Green Tea Extract'],
        image: 'images/products/lemongrass-mint-soap.jpg',
        featured: false,
        badge: 'Fresh'
    }
];

// Get featured products for home page
const featuredProductsData = productsData.filter(product => product.featured);

// Initialize featured products section
function initializeFeaturedProducts() {
    const productsGrid = document.getElementById('featured-products-grid');
    
    if (productsGrid) {
        // Clear existing content
        productsGrid.innerHTML = '';
        
        // Create product cards
        featuredProductsData.forEach((product, index) => {
            const productCard = createProductCard(product, index);
            productsGrid.appendChild(productCard);
        });
        
        // Add intersection observer for animation
        observeProductCards();
        
        console.log('Featured products initialized');
    }
}

// Create individual product card
function createProductCard(product, index) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.2}s`;
    card.setAttribute('role', 'article');
    card.setAttribute('aria-labelledby', `product-title-${product.id}`);
    card.setAttribute('tabindex', '0');
    
    card.innerHTML = `
        <div class="product-card__image-container">
            <img src="${product.image}" alt="${product.name} handmade natural soap" class="product-card__image" 
                 onerror="this.src='data:image/svg+xml;base64,${createPlaceholderImage(product.name)}'">
            <div class="product-card__badge" aria-label="${product.badge} product">${product.badge}</div>
            <div class="product-card__overlay" aria-hidden="true">
                <div class="product-card__overlay-text">Handcrafted with natural ingredients</div>
            </div>
        </div>
        <div class="product-card__content">
            <h3 class="product-card__title" id="product-title-${product.id}">${product.name}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__ingredients">
                <div class="product-card__ingredients-title">Key Ingredients</div>
                <div class="product-card__ingredients-list">${product.ingredients.join(', ')}</div>
            </div>
            <a href="products.html#${product.id}" class="product-card__cta" aria-describedby="product-title-${product.id}">Learn More</a>
        </div>
    `;
    
    // Add hover animation event listeners
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add keyboard navigation
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const cta = this.querySelector('.product-card__cta');
            if (cta) {
                cta.click();
            }
        }
    });
    
    // Add focus management
    card.addEventListener('focus', function() {
        this.style.transform = 'translateY(-4px) scale(1.01)';
        this.style.outline = '3px solid var(--gold-accent)';
        this.style.outlineOffset = '2px';
    });
    
    card.addEventListener('blur', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.outline = 'none';
    });
    
    return card;
}

// Create placeholder image for products
function createPlaceholderImage(productName) {
    const svg = `
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="productGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#7BA7A9;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4A7C7E;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#productGradient)"/>
            <text x="200" y="140" font-family="serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">${productName}</text>
            <text x="200" y="170" font-family="sans-serif" font-size="14" text-anchor="middle" fill="rgba(255,255,255,0.8)">Handcrafted Natural Soap</text>
            <circle cx="200" cy="200" r="20" fill="none" stroke="#D4AF37" stroke-width="2"/>
            <circle cx="200" cy="200" r="5" fill="#D4AF37"/>
        </svg>
    `;
    return btoa(svg);
}

// Observe product cards for scroll animations
function observeProductCards() {
    const cards = document.querySelectorAll('.product-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            observer.observe(card);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, index * 200);
        });
    }
}

// Initialize brand story section animations
function initializeBrandStoryAnimation() {
    const storySection = document.querySelector('.brand-story');
    const storyContent = document.querySelector('.story__content');
    const storyIcon = document.querySelector('.story__icon');
    const storyTitle = document.querySelector('.story__content .section__title');
    const storyText = document.querySelector('.story__text');
    const storySubtext = document.querySelector('.story__subtext');
    const storyCta = document.querySelector('.story__cta');
    
    if (storySection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate elements in sequence
                    setTimeout(() => {
                        if (storyIcon) {
                            storyIcon.style.animation = 'fadeInUp 0.8s ease-out forwards';
                        }
                    }, 100);
                    
                    setTimeout(() => {
                        if (storyTitle) {
                            storyTitle.style.animation = 'fadeInUp 0.8s ease-out forwards';
                        }
                    }, 300);
                    
                    setTimeout(() => {
                        if (storyText) {
                            storyText.style.animation = 'fadeInUp 0.8s ease-out forwards';
                        }
                    }, 500);
                    
                    setTimeout(() => {
                        if (storySubtext) {
                            storySubtext.style.animation = 'fadeInUp 0.8s ease-out forwards';
                        }
                    }, 700);
                    
                    setTimeout(() => {
                        if (storyCta) {
                            storyCta.style.animation = 'fadeInUp 0.8s ease-out forwards';
                        }
                    }, 900);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Set initial state
        [storyIcon, storyTitle, storyText, storySubtext, storyCta].forEach(element => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            }
        });
        
        observer.observe(storySection);
    } else {
        // Fallback for browsers without IntersectionObserver
        setTimeout(() => {
            [storyIcon, storyTitle, storyText, storySubtext, storyCta].forEach((element, index) => {
                if (element) {
                    setTimeout(() => {
                        element.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    }, index * 200);
                }
            });
        }, 500);
    }
    
    console.log('Brand story animations initialized');
}

// Initialize products page functionality
function initializeProductsPage() {
    const productsGrid = document.getElementById('products-grid');
    
    // Only run on products page
    if (!productsGrid) {
        return;
    }
    
    // Clear existing placeholder content
    productsGrid.innerHTML = '';
    
    // Generate all product cards dynamically
    productsData.forEach((product, index) => {
        const productCard = createProductCardForProductsPage(product, index);
        productsGrid.appendChild(productCard);
    });
    
    // Add intersection observer for scroll animations
    observeProductCardsOnProductsPage();
    
    // Initialize lazy loading for images
    initializeLazyLoading();
    
    // Test grid responsiveness (for development)
    setTimeout(() => {
        testProductGridResponsiveness();
    }, 1000);
    
    console.log('Products page initialized with', productsData.length, 'products');
}

// Create product card specifically for products page
function createProductCardForProductsPage(product, index) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.id = product.id;
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('role', 'article');
    card.setAttribute('aria-labelledby', `product-title-${product.id}`);
    card.setAttribute('tabindex', '0');
    
    // Create placeholder image URL
    const placeholderUrl = `https://via.placeholder.com/400x300/${getColorFromBadge(product.badge)}/FFFFFF?text=${encodeURIComponent(product.name)}`;
    
    card.innerHTML = `
        <div class="product-card__image-container">
            <img class="product-card__image" 
                 data-src="${product.image}" 
                 src="${placeholderUrl}"
                 alt="${product.name} handmade natural soap with ${product.ingredients.slice(0, 2).join(' and ')}" 
                 loading="lazy"
                 onerror="this.src='${placeholderUrl}'">
            <div class="product-card__badge" aria-label="${product.badge} product">${product.badge}</div>
            <div class="product-card__overlay" aria-hidden="true">
                <p class="product-card__overlay-text">Made with natural botanical ingredients</p>
            </div>
        </div>
        <div class="product-card__content">
            <h3 class="product-card__title" id="product-title-${product.id}">${product.name}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__ingredients">
                <h4 class="product-card__ingredients-title">Key Ingredients</h4>
                <p class="product-card__ingredients-list">${product.ingredients.join(', ')}</p>
            </div>
            <a href="#${product.id}" class="product-card__cta" aria-describedby="product-title-${product.id}">Learn More</a>
        </div>
    `;
    
    // Add enhanced hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Add click handler for accessibility
    card.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
            const cta = this.querySelector('.product-card__cta');
            if (cta) {
                cta.click();
            }
        }
    });
    
    // Add keyboard navigation
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const cta = this.querySelector('.product-card__cta');
            if (cta) {
                cta.click();
            }
        }
    });
    
    // Add focus management
    card.addEventListener('focus', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.outline = '3px solid var(--gold-accent)';
        this.style.outlineOffset = '2px';
        
        // Announce to screen readers
        this.setAttribute('aria-live', 'polite');
        this.setAttribute('aria-atomic', 'true');
    });
    
    card.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
        this.style.outline = 'none';
        this.removeAttribute('aria-live');
        this.removeAttribute('aria-atomic');
    });
    
    return card;
}

// Get color based on product badge
function getColorFromBadge(badge) {
    const colorMap = {
        'Bestseller': '4A7C7E',
        'Energizing': '7BA7A9',
        'Luxurious': 'D4AF37',
        'Gentle': 'B8941F',
        'Purifying': '4A7C7E',
        'Uplifting': 'D4AF37',
        'Tropical': '7BA7A9',
        'Earthy': '4A7C7E',
        'Fresh': '7BA7A9'
    };
    return colorMap[badge] || '4A7C7E';
}

// Observe product cards for scroll animations on products page
function observeProductCardsOnProductsPage() {
    const cards = document.querySelectorAll('.product-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'all 0.6s ease-out';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'none';
            
            // Stagger the observation slightly
            setTimeout(() => {
                observer.observe(card);
            }, index * 50);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'all 0.6s ease-out';
            }, index * 100);
        });
    }
}

// Initialize lazy loading for product images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        // Add loading state
                        img.classList.add('loading');
                        
                        // Create a new image to preload
                        const newImg = new Image();
                        newImg.onload = function() {
                            img.src = src;
                            img.classList.remove('loading');
                            img.classList.add('loaded');
                            
                            // Fade in effect for mobile
                            if (document.body.classList.contains('mobile-device')) {
                                img.style.opacity = '0';
                                img.style.transition = 'opacity 0.3s ease';
                                setTimeout(() => {
                                    img.style.opacity = '1';
                                }, 50);
                            }
                        };
                        newImg.onerror = function() {
                            // Keep placeholder on error
                            img.classList.remove('loading');
                            img.classList.add('error');
                        };
                        newImg.src = src;
                        
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px 0px'
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback: load all images immediately
        images.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
        });
    }
    
    // Initialize native lazy loading for all images
    const allImages = document.querySelectorAll('img:not([loading])');
    allImages.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
    
    console.log('Lazy loading initialized for', images.length, 'images');
}

// Enhanced smooth scrolling with offset calculation
function initializeEnhancedSmoothScroll() {
    // Handle all anchor links including section navigation
    const anchorLinks = document.querySelectorAll('a[href^="#"], .section-nav__link');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just a hash
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset based on header height and add extra padding
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const extraPadding = 20;
                const targetPosition = targetElement.offsetTop - headerHeight - extraPadding;
                
                // Smooth scroll with custom easing
                smoothScrollTo(targetPosition, 800);
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Update URL hash after scroll completes
                setTimeout(() => {
                    history.pushState(null, null, targetId);
                }, 800);
            }
        });
    });
    
    // Handle initial page load with hash
    if (window.location.hash) {
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                smoothScrollTo(targetPosition, 600);
            }
        }, 100);
    }
}

// Custom smooth scroll function with easing
function smoothScrollTo(targetPosition, duration = 600) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Initialize micro-interactions and hover effects
function initializeMicroInteractions() {
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn, .product-card__cta, .hero__cta, .story__cta, .about-cta__btn');
    
    buttons.forEach(button => {
        // Mouse enter effect
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.transition = 'all 0.2s ease';
            this.style.boxShadow = '0 8px 25px rgba(74, 124, 126, 0.3)';
        });
        
        // Mouse leave effect
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        // Click effect
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
    
    // Enhanced product card interactions
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        let hoverTimeout;
        
        card.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 20px 40px rgba(74, 124, 126, 0.15)';
            
            // Animate the overlay
            const overlay = this.querySelector('.product-card__overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'translateY(0)';
            }
            
            // Animate the badge
            const badge = this.querySelector('.product-card__badge');
            if (badge) {
                badge.style.transform = 'scale(1.1) rotate(-2deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
                
                // Reset overlay
                const overlay = this.querySelector('.product-card__overlay');
                if (overlay) {
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateY(10px)';
                }
                
                // Reset badge
                const badge = this.querySelector('.product-card__badge');
                if (badge) {
                    badge.style.transform = 'scale(1) rotate(0deg)';
                }
            }, 50);
        });
    });
    
    // Logo hover effect
    const logos = document.querySelectorAll('.logo, .hero__logo-img');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Navigation link hover effects
    const navLinks = document.querySelectorAll('.nav__link, .section-nav__link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.transition = 'all 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Footer link hover effects
    const footerLinks = document.querySelectorAll('.footer a, .about-cta__link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--gold-accent)';
            this.style.transform = 'translateX(3px)';
            this.style.transition = 'all 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.transform = 'translateX(0)';
        });
    });
    
    console.log('Micro-interactions initialized');
}

// Initialize parallax scrolling effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero, .brand-story, .story__icon');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            if (element.classList.contains('hero')) {
                element.style.transform = `translateY(${rate * 0.3}px)`;
            } else if (element.classList.contains('story__icon')) {
                element.style.transform = `translateY(${rate * 0.1}px) rotate(${scrolled * 0.05}deg)`;
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Only enable parallax on desktop to avoid performance issues on mobile
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', requestTick);
    }
    
    console.log('Parallax effects initialized');
}

// Initialize scroll-triggered animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section__title, .story__text, .process__step, .story__value');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(element => {
            element.classList.add('animate-ready');
            animationObserver.observe(element);
        });
    }
    
    console.log('Scroll animations initialized');
}

// Test responsive grid functionality
function testProductGridResponsiveness() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    const breakpoints = [
        { width: 320, expected: 1 },   // Mobile
        { width: 768, expected: 2 },   // Tablet
        { width: 1024, expected: 3 },  // Desktop
        { width: 1200, expected: 3 }   // Large desktop
    ];
    
    console.log('Testing product grid responsiveness...');
    
    breakpoints.forEach(bp => {
        // Simulate viewport width (this is for testing purposes)
        const computedStyle = window.getComputedStyle(grid);
        const gridColumns = computedStyle.getPropertyValue('grid-template-columns');
        const columnCount = gridColumns.split(' ').length;
        
        console.log(`At ${bp.width}px: ${columnCount} columns (expected: ${bp.expected})`);
    });
}

// Initialize about page functionality
function initializeAboutPage() {
    // Only run on about page
    if (!document.body.classList.contains('about-page') && !window.location.pathname.includes('about')) {
        return;
    }
    
    initializeAboutNavigation();
    initializeAboutAnimations();
    initializeAboutScrollSpy();
    
    console.log('About page functionality initialized');
}

// Initialize about page navigation
function initializeAboutNavigation() {
    const sectionNavLinks = document.querySelectorAll('.section-nav__link');
    const aboutSections = document.querySelectorAll('#story, #process');
    
    // Add smooth scroll behavior to section navigation
    sectionNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                // Smooth scroll to section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                updateActiveSectionNav(this);
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Focus management for accessibility
                setTimeout(() => {
                    targetSection.focus();
                    targetSection.setAttribute('tabindex', '-1');
                }, 500);
            }
        });
    });
    
    // Add keyboard navigation support
    sectionNavLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Update active section navigation
function updateActiveSectionNav(activeLink) {
    const sectionNavLinks = document.querySelectorAll('.section-nav__link');
    
    sectionNavLinks.forEach(link => {
        link.classList.remove('section-nav__link--active');
        link.setAttribute('aria-current', 'false');
    });
    
    activeLink.classList.add('section-nav__link--active');
    activeLink.setAttribute('aria-current', 'page');
}

// Initialize about page animations
function initializeAboutAnimations() {
    const storySection = document.getElementById('story');
    const processSection = document.getElementById('process');
    const ctaSection = document.querySelector('.about-cta');
    
    // Animate sections on scroll
    const sections = [storySection, processSection, ctaSection].filter(Boolean);
    
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-animated');
                    animateSectionContent(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
    
    // Animate story values on scroll
    animateStoryValues();
    
    // Animate process steps
    animateProcessSteps();
    
    // Animate CTA elements
    animateCtaElements();
}

// Animate section content
function animateSectionContent(section) {
    const animatableElements = section.querySelectorAll(
        '.story__header, .story__main, .story__values, ' +
        '.process__header, .process__steps, .process__commitment, ' +
        '.about-cta__content'
    );
    
    animatableElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'all 0.8s ease-out';
        }, index * 200);
    });
}

// Animate story values
function animateStoryValues() {
    const storyValues = document.querySelectorAll('.story__value');
    
    if ('IntersectionObserver' in window) {
        const valueObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const values = entry.target.querySelectorAll('.story__value');
                    values.forEach((value, index) => {
                        setTimeout(() => {
                            value.style.opacity = '1';
                            value.style.transform = 'translateY(0) scale(1)';
                            value.style.transition = 'all 0.6s ease-out';
                        }, index * 150);
                    });
                    valueObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });
        
        const storyValuesContainer = document.querySelector('.story__values');
        if (storyValuesContainer) {
            // Set initial state
            storyValues.forEach(value => {
                value.style.opacity = '0';
                value.style.transform = 'translateY(30px) scale(0.9)';
            });
            
            valueObserver.observe(storyValuesContainer);
        }
    }
}

// Animate process steps
function animateProcessSteps() {
    const processSteps = document.querySelectorAll('.process__step');
    
    if ('IntersectionObserver' in window) {
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.style.transition = 'all 0.8s ease-out';
                    stepObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        processSteps.forEach((step, index) => {
            // Set initial state with alternating slide directions
            step.style.opacity = '0';
            step.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
            
            // Observe each step
            setTimeout(() => {
                stepObserver.observe(step);
            }, index * 100);
        });
    }
}

// Animate CTA elements
function animateCtaElements() {
    const ctaElements = document.querySelectorAll(
        '.about-cta__title, .about-cta__text, .about-cta__actions, .about-cta__links'
    );
    
    if ('IntersectionObserver' in window) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll(
                        '.about-cta__title, .about-cta__text, .about-cta__actions, .about-cta__links'
                    );
                    
                    elements.forEach((element, index) => {
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                            element.style.transition = 'all 0.6s ease-out';
                        }, index * 200);
                    });
                    
                    ctaObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        const ctaSection = document.querySelector('.about-cta');
        if (ctaSection) {
            // Set initial state
            ctaElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            });
            
            ctaObserver.observe(ctaSection);
        }
    }
}

// Initialize scroll spy for section navigation
function initializeAboutScrollSpy() {
    const sections = document.querySelectorAll('#story, #process');
    const navLinks = document.querySelectorAll('.section-nav__link');
    
    if ('IntersectionObserver' in window && sections.length > 0) {
        const scrollSpyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const correspondingLink = document.querySelector(`.section-nav__link[href="#${sectionId}"]`);
                    
                    if (correspondingLink) {
                        updateActiveSectionNav(correspondingLink);
                    }
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px 0px -50% 0px'
        });
        
        sections.forEach(section => {
            scrollSpyObserver.observe(section);
        });
    }
}

// Enhanced smooth scroll with better easing
function smoothScrollToElement(targetElement, offset = 0) {
    if (!targetElement) return;
    
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (ease-out-cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startPosition + distance * easeOutCubic);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            // Focus management for accessibility
            targetElement.focus();
            targetElement.setAttribute('tabindex', '-1');
        }
    }
    
    requestAnimationFrame(animation);
}

// Test content readability and visual consistency
function testAboutPageConsistency() {
    console.log('Testing about page content readability and visual consistency...');
    
    // Test color contrast
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, .story__tagline, .process__intro');
    const contrastIssues = [];
    
    textElements.forEach(element => {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        // Log for manual review (automated contrast checking would require additional libraries)
        if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
            console.log(`Element: ${element.tagName}, Color: ${color}, Background: ${backgroundColor}`);
        }
    });
    
    // Test responsive breakpoints
    const breakpoints = [320, 768, 1024, 1200];
    console.log('Testing responsive breakpoints:', breakpoints);
    
    // Test navigation functionality
    const sectionNavLinks = document.querySelectorAll('.section-nav__link');
    const aboutSections = document.querySelectorAll('#story, #process');
    
    console.log(`Section navigation: ${sectionNavLinks.length} links, ${aboutSections.length} sections`);
    
    // Test accessibility
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    console.log(`Focusable elements: ${focusableElements.length}`);
    
    // Test image alt texts
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');
    if (imagesWithoutAlt.length > 0) {
        console.warn(`Images without alt text: ${imagesWithoutAlt.length}`);
    }
    
    console.log('About page consistency test completed');
}

// Add about page initialization to the main DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code ...
    
    // Initialize about page specific functionality
    initializeAboutPage();
    
    // Test consistency (only in development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setTimeout(testAboutPageConsistency, 2000);
    }
});

// Mobile performance monitoring and optimization
function initializeMobilePerformanceOptimizations() {
    // Only run on mobile devices
    if (!document.body.classList.contains('mobile-device')) {
        return;
    }
    
    // Debounce scroll events for better performance
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    }, { passive: true });
    
    // Optimize touch events
    document.addEventListener('touchstart', function() {
        // Empty handler to enable :active pseudo-class on iOS
    }, { passive: true });
    
    // Preload critical resources on mobile
    const criticalImages = document.querySelectorAll('.hero__logo-img, .logo');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
    
    // Monitor and log performance metrics for mobile
    if ('performance' in window && 'getEntriesByType' in performance) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                
                console.log('Mobile page load time:', loadTime + 'ms');
                
                // Log if load time is concerning
                if (loadTime > 3000) {
                    console.warn('Mobile page load time is slow:', loadTime + 'ms');
                }
            }, 0);
        });
    }
    
    // Handle connection quality
    if ('connection' in navigator) {
        const connection = navigator.connection;
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            // Disable animations for slow connections
            document.body.classList.add('slow-connection');
            
            // Add CSS for slow connections
            const style = document.createElement('style');
            style.textContent = `
                .slow-connection * {
                    animation: none !important;
                    transition: none !important;
                }
                .slow-connection .hero {
                    background: var(--primary-teal) !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    console.log('Mobile performance optimizations initialized');
}

// Initialize mobile performance optimizations after DOM load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeMobilePerformanceOptimizations, 100);
});

// Handle visibility change for mobile battery optimization
document.addEventListener('visibilitychange', function() {
    if (document.body.classList.contains('mobile-device')) {
        if (document.hidden) {
            // Page is hidden, pause animations
            document.body.classList.add('page-hidden');
        } else {
            // Page is visible, resume animations
            document.body.classList.remove('page-hidden');
        }
    }
});

// Add CSS for page hidden state
const hiddenStateStyle = document.createElement('style');
hiddenStateStyle.textContent = `
    .page-hidden * {
        animation-play-state: paused !important;
    }
`;
document.head.appendChild(hiddenStateStyle);