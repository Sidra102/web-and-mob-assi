var ShoppingCart = (function($) {
    "use strict";
    
    // Cahce necesarry DOM Elements
    var productsEl = document.querySelector(".products"),
        cartEl =     document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");
    
    // Fake JSON data array here should be API call
    var products = [
      {
        id: 0,
        name: "dress10",
        description: "  book your favourite dress!",
        imageUrl: "dress10.jpg",
       
        price:1299$
      },
      {
        id: 1,
        name: "DOUBLE APPLE",
  description: " book your favourite flavour!",
        imageUrl: "https://4.imimg.com/data4/AO/RY/MY-5565404/double-apple-flavoured-hookah-molasses-500x500.jpg",
        price:1,
      },
      {
        id: 2,
        name: "GRAPE",
        description: " book your favourite flavour!.",
        imageUrl: "https://img1.exportersindia.com/product_images/bc-small/dir_21/601200/grape-flavoured-hookah-molasses-1490273792-2536291.png",
        price: 1,
      },
      {
        id: 3,
        name: "PINEAPPLE",
        description: "book your favourite flavour!.",
        imageUrl: "https://img1.exportersindia.com/product_images/bc-small/dir_21/601200/pineapple-flavoured-hookah-tobacco-1490767903-378227.png",
        price: 1,
      },
      {
        id: 4,
        name: "TANGGY BERRY",
        description: "book your favourite flavour!",
        imageUrl: "http://aafreenhookah.com/UploadImg/TANGY-BERRY.png",
        price:1,
      },
      {
        id: 5,
        name: "ORANGE CREME",
        description: "book your favourite flavour!.",
        imageUrl: "https://4.imimg.com/data4/WM/DA/MY-5565404/orange-creme-flavoured-hookah-molasses-500x500.jpg",
        price:1,
      }
    ],
        productsInCart = [];
    
   
    var generateProductList = function() {
      products.forEach(function(item) {
        var productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `<div class="product-image">
                                  <img src="${item.imageUrl}" alt="${item.name}">
                               </div>
                               <div class="product-name"><span>Product:</span> ${item.name}</div>
                               <div class="product-description"><span>Description:</span> ${item.description}</div>
                               <div class="product-price"><span>Price:</span> ${item.price} $</div>
                               <div class="product-add-to-cart">
                                 <a href="#0" class="button see-more">More Details</a>
                                 <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                               </div>
                            </div>
  `;
                               
  productsEl.appendChild(productEl);
      });
    }
    
    
    var generateCartList = function() {
      
      cartEl.innerHTML = "";
      
      productsInCart.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
        cartEl.appendChild(li);
      });
      
      productQuantityEl.innerHTML = productsInCart.length;
      
      generateCartButtons()
    }
    
    
    
    var generateCartButtons = function() {
      if(productsInCart.length > 0) {
        emptyCartEl.style.display = "block";
        cartCheckoutEl.style.display = "block"
        totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
      } else {
        emptyCartEl.style.display = "none";
        cartCheckoutEl.style.display = "none";
      }
    }
    
    
    var setupListeners = function() {
      productsEl.addEventListener("click", function(event) {
        var el = event.target;
        if(el.classList.contains("add-to-cart")) {
         var elId = el.dataset.id;
         addToCart(elId);
        }
      });
      
      emptyCartEl.addEventListener("click", function(event) {
        if(confirm("Are you sure?")) {
          productsInCart = [];
        }
        generateCartList();
      });
    }
    
    var addToCart = function(id) {
      var obj = products[id];
      if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
        productsInCart.push({product: obj, quantity: 1});
      } else {
        productsInCart.forEach(function(item) {
          if(item.product.id === obj.id) {
            item.quantity++;
          }
        });
      }
      generateCartList();
    }
    
    
    
    var productFound = function(productId) {
      return productsInCart.find(function(item) {
        return item.product.id === productId;
      });
    }
  
    var calculateTotalPrice = function() {
      return productsInCart.reduce(function(total, item) {
        return total + (item.product.price *  item.quantity);
      }, 0);
    }
    
    var init = function() {
      generateProductList();
      setupListeners();
    }
    
    
    return {
      init: init
    };
    
  })(jQuery);
  
  ShoppingCart.init();