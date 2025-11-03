document.addEventListener('DOMContentLoaded', () => {
  // --- RESPONSIVE NAVIGATION (HAMBURGER MENU) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-header nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      // Toggle the 'active' class to show/hide the mobile navigation
      nav.classList.toggle('active');
    });
  }


  // --- CAROUSEL LOGIC ---
  let slideIndex = 1;
  const slides = document.getElementsByClassName("carousel-slide");

  // Function to move to the next or previous slide
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Function to display a specific slide
  function showSlides(n) {
    if (slides.length === 0) return;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  // Initialize the carousel if it exists on the page
  if (slides.length > 0) {
    showSlides(slideIndex);
    // Add event listeners for the previous and next arrow buttons
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    if(prev) prev.addEventListener('click', () => plusSlides(-1));
    if(next) next.addEventListener('click', () => plusSlides(1));

    // Auto-slide every 5 seconds
    setInterval(() => plusSlides(1), 5000);
  }

  // --- PRODUCT PAGE FILTERING LOGIC ---
  const genderSelect = document.getElementById('gender');
  const categorySelect = document.getElementById('category');
  const brandSelect = document.getElementById('brand');
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort');
  const productGrid = document.getElementById('productGrid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const loadingIndicator = document.getElementById('loading-indicator');

  // --- DYNAMIC PRODUCT LOADING & FILTERING ---
  if (productGrid) {
    let currentPage = 0;
    const productsPerPage = 12; // Show 12 products at a time
    let currentFilteredProducts = [];

    // Function to create the HTML for a single product card
    const createProductCard = (product) => {
      // Create size options if sizes are available
      let sizeOptions = '';
      if (product.sizes && product.sizes.length > 0) {
        sizeOptions = `
          <label for="size${product.id}">Size:</label>
          <select id="size${product.id}">
            ${product.sizes.map(size => `<option>${size}</option>`).join('')}
          </select>
        `;
      }

      const card = document.createElement('div');
      card.className = 'product-card';
      // Set data attributes for potential future use, though filtering is now JS-based
      card.dataset.gender = product.gender;
      card.dataset.brand = product.brand;
      card.dataset.category = product.category;

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">R${product.price.toFixed(2)}</p>
        ${sizeOptions}
        <button>Add to Cart</button>
      `;
      return card;
    };

    // Function to render a batch of products
    const renderProducts = (products) => {
      products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
      });
    };

    // Function to handle loading more products
    const loadMoreProducts = () => {
      loadingIndicator.style.display = 'block';
      loadMoreBtn.style.display = 'none';

      // Simulate a network delay for a better user experience
      setTimeout(() => {
        const startIndex = currentPage * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToLoad = currentFilteredProducts.slice(startIndex, endIndex);

        renderProducts(productsToLoad);
        currentPage++;

        loadingIndicator.style.display = 'none';
        // Show the "Load More" button if there are more products to display
        if (currentPage * productsPerPage < currentFilteredProducts.length) {
          loadMoreBtn.style.display = 'block';
        }
      }, 500); // 0.5 second delay
    };

    // The main function to filter products from the allProducts array
    const filterAndDisplayProducts = () => {
      const gender = genderSelect.value.toLowerCase();
      const category = categorySelect.value.toLowerCase();
      const brand = brandSelect.value.toLowerCase();
      const searchTerm = searchInput.value.toLowerCase();
      const sortValue = sortSelect.value;

      currentFilteredProducts = allProducts.filter(p => {
        const pName = p.name.toLowerCase();
        const pGender = p.gender.toLowerCase();
        const pCategory = p.category.toLowerCase();
        const pBrand = p.brand.toLowerCase();

        return (
          pName.includes(searchTerm) &&
          (gender === 'all' || pGender === gender || (gender !== 'men' && gender !== 'women' && pGender === 'all')) &&
          (category === 'all' || pCategory === category) &&
          (brand === 'all' || pBrand === brand)
        );
      });

      // --- SORTING LOGIC ---
      if (sortValue === 'price-asc') {
        currentFilteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortValue === 'price-desc') {
        currentFilteredProducts.sort((a, b) => b.price - a.price);
      } else if (sortValue === 'name-asc') {
        currentFilteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortValue === 'name-desc') {
        currentFilteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      // Reset the view
      productGrid.innerHTML = '';
      currentPage = 0;
      loadMoreBtn.style.display = 'block';

      // Display a message if no products match the filters
      const noResultsMessage = document.getElementById('no-results-message');
      if (currentFilteredProducts.length === 0) {
        noResultsMessage.style.display = 'block';
        loadMoreBtn.style.display = 'none';
      } else {
        noResultsMessage.style.display = 'none';
        loadMoreProducts(); // Load the first page of filtered results
      }
    };

    // Set up initial state and event listeners
    const params = new URLSearchParams(window.location.search);
    if (genderSelect && params.get('gender')) genderSelect.value = params.get('gender').toLowerCase();
    if (categorySelect && params.get('category')) categorySelect.value = params.get('category').toLowerCase();
    if (brandSelect && params.get('brand')) brandSelect.value = params.get('brand').toLowerCase();

    searchInput.addEventListener('input', filterAndDisplayProducts);
    genderSelect.addEventListener('change', filterAndDisplayProducts);
    categorySelect.addEventListener('change', filterAndDisplayProducts);
    brandSelect.addEventListener('change', filterAndDisplayProducts);
    sortSelect.addEventListener('change', filterAndDisplayProducts);
    loadMoreBtn.addEventListener('click', loadMoreProducts);

    // Initial load
    filterAndDisplayProducts();
  }

  // --- OLD PRODUCT PAGE FILTERING LOGIC (REPLACED) ---
  /*
  const productCards = document.querySelectorAll('.product-card');
  function filterProducts() { ... }
  if (productCards.length > 0 && document.getElementById('productGrid')) { ... }
  */

  // --- SOCCER PAGE FILTERING LOGIC ---
  const soccerCategorySelect = document.getElementById('soccer-category');
  const soccerSortSelect = document.getElementById('soccer-sort');
  const soccerCards = document.querySelectorAll('.soccer-card');
  const soccerGrid = document.getElementById('soccerGrid');

  // This function filters soccer items based on the selected category
  function filterSoccerItems() {
    if (!soccerCategorySelect || !soccerGrid) return; // Guard clause

    const category = soccerCategorySelect.value.toLowerCase();
    const sortValue = soccerSortSelect.value;

    // Convert NodeList to Array to make it sortable
    let cardsArray = Array.from(soccerCards);

    // 1. Filter the cards
    const visibleCards = cardsArray.filter(card => {
      const cardCategory = (card.getAttribute("data-category") || '').toLowerCase();
      const shouldShow = category === "all" || cardCategory === category;
      // Hide or show based on category filter first
      card.style.display = shouldShow ? "block" : "none";
      return shouldShow;
    });

    // 2. Sort the *visible* cards
    if (sortValue !== 'default') {
      visibleCards.sort((a, b) => {
        const nameA = a.querySelector('h3').textContent;
        const nameB = b.querySelector('h3').textContent;
        const priceA = parseFloat(a.querySelector('.price').textContent.replace('R', ''));
        const priceB = parseFloat(b.querySelector('.price').textContent.replace('R', ''));

        if (sortValue === 'price-asc') return priceA - priceB;
        if (sortValue === 'price-desc') return priceB - priceA;
        if (sortValue === 'name-asc') return nameA.localeCompare(nameB);
        if (sortValue === 'name-desc') return nameB.localeCompare(nameA);
      });
    }


    // No need to clear, just re-append which moves them
    visibleCards.forEach(card => soccerGrid.appendChild(card));
  }

  // If the soccer filter dropdown exists, set it up
  if (soccerCategorySelect) {
    // Check for a category parameter in the URL
    const params = new URLSearchParams(window.location.search);
    const soccerCategoryParam = params.get('soccer-category');
    if (soccerCategoryParam) soccerCategorySelect.value = soccerCategoryParam.toLowerCase();
    
    // Add event listener and run the filter on page load
    soccerCategorySelect.addEventListener('change', filterSoccerItems);
    if (soccerSortSelect) soccerSortSelect.addEventListener('change', filterSoccerItems);
    filterSoccerItems();
  }

  // --- ENQUIRY FORM SUBMISSION LOGIC ---
  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    const emailInput = document.getElementById("enquiry-email");
    const subjectSelect = document.getElementById("enquiry-subject");
    const message = document.getElementById("form-message");

    // Find the submit button to disable it during submission
    const submitButton = enquiryForm.querySelector('button[type="submit"]');


    enquiryForm.addEventListener("submit", function (e) {
      // Prevent the default form submission which reloads the page
      e.preventDefault();
      const email = emailInput.value.trim();
      const subject = subjectSelect.value;
      const name = document.getElementById("enquiry-name").value.trim();
      const enquiryMessage = document.getElementById("enquiry-message").value.trim();
      const regex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

      // --- Validation ---
      if (!name || !email || !subject || !enquiryMessage) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
      }

      if (!regex.test(email)) {
        message.textContent = " Please enter a valid email address.";
        message.style.color = "red";
        return;
      }

      // Disable button and show loading message
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
      message.textContent = ""; // Clear previous messages

      // --- Simulate AJAX Submission ---
      setTimeout(() => {
        // --- Process and Respond based on subject ---
        let responseText = "";
        if (subject === 'product') {
          responseText = "Thank you for your interest in our products! A product specialist will review your query and respond within 24 hours.";
        } else if (subject === 'order') {
          responseText = "For order support, please expect a reply from our customer service team within the next 2-4 business hours. For urgent issues, call our support line.";
        } else if (subject === 'sponsorship') {
          responseText = "Thank you for your interest in collaborating with Studio 88! Your proposal has been forwarded to our marketing team. They will contact you if there is a potential fit.";
        } else {
          responseText = "Thank you for your feedback! We appreciate you taking the time to write to us. Our team will review your message and get in touch if a response is needed.";
        }
        message.textContent = responseText;
        message.style.color = "limegreen";
        
        // Reset form and re-enable button
        enquiryForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Enquiry';

      }, 1000); // Simulate 1-second network delay

    });
  }

  // --- NEWSLETTER SUBSCRIPTION LOGIC ---
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    const emailInput = document.getElementById("emailInput");
    const message = document.getElementById("newsletterMessage");

    newsletterForm.addEventListener("submit", function (e) {
      // Prevent the default form submission
      e.preventDefault();
      const email = emailInput.value.trim();
      // Regex for basic email validation
      const regex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

      if (!regex.test(email)) {
        message.textContent = "❌ Please enter a valid email address.";
        message.style.color = "red";
      } else {
        message.textContent = "✅ Thank you for subscribing!";
        message.style.color = "limegreen";
        // Clear the input field after successful submission
        newsletterForm.reset();
      }
    });
  }

  // --- ADD TO CART LOGIC ---
  // This logic should be available on all pages with products
  const productGrids = document.querySelectorAll('.product-grid, .soccer-grid, .new-grid, .sales-grid');

  productGrids.forEach(grid => {
    grid.addEventListener('click', (e) => {
      // Check if an "Add to Cart" button was clicked
      if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Add to Cart') {
        const card = e.target.closest('.product-card, .soccer-card, .new-card, .sales-card');
        
        // Check if user is logged in before adding to cart
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
          alert('Please log in to add items to your cart.');
          window.location.href = 'login.html'; // Redirect to login page
          return; // Stop the function
        }
        if (card) {
          const product = {
            name: card.querySelector('h3').textContent,
            price: parseFloat(card.querySelector('.price').textContent.replace('R', '')),
            image: card.querySelector('img').src,
            size: card.querySelector('select') ? card.querySelector('select').value : 'N/A'
          };
          
          // This function is defined in cart.js
          if(typeof addToCart === 'function') {
            addToCart(product);
          }
        }
      }
    });
  });

  // --- IMAGE LIGHTBOX GALLERY ---
  productGrids.forEach(grid => {
    grid.addEventListener('click', (e) => {
      // Check if an image inside a card was clicked
      if (e.target.tagName === 'IMG' && e.target.closest('.product-card, .soccer-card, .new-card, .sales-card')) {
        e.preventDefault(); // Prevent any default image behavior

        // Create the lightbox structure
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
          <span class="lightbox-close">&times;</span>
          <img src="${e.target.src}" alt="${e.target.alt}" class="lightbox-content">
        `;
        document.body.appendChild(lightbox);

        // Show the lightbox with a fade-in effect
        setTimeout(() => {
          lightbox.classList.add('show');
        }, 10); // Small delay to allow CSS transition

        // Function to close the lightbox
        const closeLightbox = () => {
          lightbox.classList.remove('show');
          // Wait for the fade-out transition to finish before removing the element
          lightbox.addEventListener('transitionend', () => {
            if (document.body.contains(lightbox)) {
              document.body.removeChild(lightbox);
            }
          }, { once: true }); // Ensure the event listener is removed after it runs
        };

        // Close lightbox when the 'x' button is clicked
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

        // Close lightbox when clicking on the background overlay
        lightbox.addEventListener('click', (event) => {
          if (event.target === lightbox) { // Only close if the click is on the overlay itself
            closeLightbox();
          }
        });

        // Close lightbox with the 'Escape' key
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
            closeLightbox();
          }
        }, { once: true }); // The listener is removed after the key is pressed once
      }
    });
  });

  // --- STORE LOCATOR LOGIC ---
  const list = document.getElementById("store-list");
  const select = document.getElementById("province-select");
  const mapFrame = document.getElementById("map-frame");

  if (list && select && mapFrame) {
    function renderStores(filterProvince = "all") {
      list.innerHTML = "";
      let filtered = stores;

      if (filterProvince.toLowerCase() !== "all") {
        filtered = stores.filter(s => s.province.toLowerCase() === filterProvince.toLowerCase());
      }

      filtered.forEach(store => {
        const li = document.createElement("li");
        li.className = "store-item";
        li.innerHTML = `
          <h3>${store.name}</h3>
          <a href="${store.mapsUrl}" target="_blank">Open in Google Maps</a>
        `;

        // Click updates iframe to show store location
        li.addEventListener("click", () => {
          // Remove 'active' class from all other items
          document.querySelectorAll('.store-item').forEach(item => {
            item.classList.remove('active');
          });
          // Add 'active' class to the clicked item
          li.classList.add('active');

          // Use the direct embed URL from store.js
          if (store.embedUrl) {
            mapFrame.src = store.embedUrl;
          }
        });

        list.appendChild(li);
      });
    }

    // Initial render
    renderStores();

    
    // Province filter
    select.addEventListener("change", e => renderStores(e.target.value));

    // --- INITIAL MAP LOAD ---
    // Function to load the first store by default
    function initialLoad() {
      renderStores(); // Render all stores
      if (stores.length > 0) {
        // Set the iframe to the first store's embed URL
        mapFrame.src = stores[0].embedUrl;
        // Find the first rendered store item and mark it as active
        const firstStoreItem = list.querySelector('.store-item');
        if (firstStoreItem) {
          firstStoreItem.classList.add('active');
        }
      }
    }
    initialLoad(); // Call the function to load the map on page start
  }

  // --- CONTACT PAGE FORM (BELOW MAP) ---
  const pageContactForm = document.getElementById('page-contact-form');
  if (pageContactForm) {
    pageContactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      const messageBox = document.getElementById('contact-form-message-box');
      const submitButton = pageContactForm.querySelector('button[type="submit"]');

      // --- Validation ---
      // Trim values to ensure fields with only spaces are considered empty
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !subject || !message) {
        displayFormMessage('Please fill in all fields.', 'error');
        return;
      }

      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!emailRegex.test(emailInput.value)) {
        displayFormMessage('Please enter a valid email address.', 'error');
        return;
      }

      // --- AJAX Submission Simulation ---
      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Simulate a network request
      setTimeout(() => {
        // On "success", display a confirmation message
        displayFormMessage('Thank you for your message! We will get back to you shortly.', 'success');
        
        // Reset the form
        pageContactForm.reset();

        // Re-enable the button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';

      }, 1000); // 1-second delay to simulate sending
    });

    // Helper function to show the message box
    function displayFormMessage(message, type) {
      const messageBox = document.getElementById('contact-form-message-box');
      messageBox.textContent = message;
      messageBox.className = `show ${type}`; // e.g., 'show success' or 'show error'

      // Hide the message after 4 seconds
      setTimeout(() => {
        messageBox.classList.remove('show');
      }, 4000);
    }
  }

});
