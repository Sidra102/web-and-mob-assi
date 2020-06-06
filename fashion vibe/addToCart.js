let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Short Shirt with Trouser',
        tag: 'mahroonshirttrouser',
        price: 1299,
        inCart: 0
    },
    {
        name: 'pumps with heals',
        tag: 'redpumps',
        price: 999,
        inCart: 0
    },
    {
        name: 'Ladies Jeans',
        tag: 'blueladiesjeans',
        price: 999,
        inCart: 0
    },
    {
        name: 'Shoes with heals',
        tag: 'blackhealshoes',
        price: 999,
        inCart: 0
    },
    {
        name: 'Girl T-shirt',
        tag: 'whitegirlshirt',
        price: 699,
        inCart: 0
    },
    {
        name: 'Lipstick  , Facepowder and Foundation',
        tag: 'redlipstickfacepowder',
        price: 999,
        inCart: 0
    },
    {
        name: 'Net Embroidered Suit',
        tag: 'greynetsuit',
        price: 999,
        inCart: 0
    },
    {
        name: 'Wedding Dress',
        tag: 'lightgreyweddingdress',
        price: 999,
        inCart: 0
    },
    {
        name: 'Fancy Embroidered Suit',
        tag: 'darkgreyfancysuit',
        price: 999,
        inCart: 0
    },
    {
        name: 'Wedding Dress',
        tag: 'lightgreenwedding',
        price: 999,
        inCart: 0
    },
    {
        name: 'Full Maxi',
        tag: 'goldenpinkfullmaxi',
        price: 999,
        inCart: 0
    },
    {
        name: 'Black Saari',
        tag: 'blackladiessaari',
        price: 999,
        inCart: 0
    },
    {
        name: 'Bridal Maxi',
        tag: 'teapinkbridalmaxi',
        price: 999,
        inCart: 0
    },
    {
        name: 'Bridal Dress',
        tag: 'faunwithreddupatta',
        price: 999,
        inCart: 0
    },
    {
        name: 'Casual Wear',
        tag: 'blackcasualwear',
        price: 999,
        inCart: 0
    },
    {
        name: 'Heavy Embroidered Bridal Dress',
        tag: 'Dullgoldenbridaldress',
        price: 999,
        inCart: 0
    },
    {
        name: 'party Wear',
        tag: 'whiteandgreypartydress',
        price: 999,
        inCart: 0
    },
    {
        name: 'Casual Wear',
        tag: 'Mahrooncasualwear',
        price: 999,
        inCart: 0
    },
    {
        name: 'party Wear',
        tag: 'BlackpartyWear',
        price: 999,
        inCart: 0
    },
    {
        name: 'Western Dress',
        tag: 'blackwesterndress',
        price: 999,
        inCart: 0
    },
    {
        name: 'Ladies Sandal',
        tag: 'goldenladiessandal',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies pumps ',
        tag: 'faunladiespump',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies Shoes',
        tag: 'whiteladiesshoes',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies Black pump',
        tag: 'blackladiespump',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies silver sandal',
        tag: 'silversilversandal',
        price: 799,
        inCart: 0
    },
    {
        name: 'Red pumps',
        tag: 'ladiesredpump',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies Brown Shoes',
        tag: 'ladiesbrownshoes',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies Golden Sandal',
        tag: 'goldenladiessandal',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies Blue Shoes',
        tag: 'blueladiesshoes',
        price: 799,
        inCart: 0
    },
    {
        name: 'Black Ladies Sandal',
        tag: 'ladiesblacksandal',
        price: 799,
        inCart: 0
    },
    {
        name: 'ladies Red pump',
        tag: 'redladiespump',
        price: 799,
        inCart: 0
    },
    {
        name: 'Golden Ladies Sandal',
        tag: 'ladiesgoldensandal',
        price: 799,
        inCart: 0
    },
    {
        name: 'Ladies pink shoes',
        tag: 'ladiespinkshoes',
        price: 799,
        inCart: 0
    },
    {
        name: 'Sea-Green Sandal',
        tag: 'seagreenladiessandal',
        price: 799,
        inCart: 0
    },
    {
        name: 'Black Ladies pumps',
        tag: 'ladiespumpsblack',
        price: 799,
        inCart: 0
    },
    {
        name: 'Golden Bangal',
        tag: 'ladiesgoldenbangal',
        price: 1499,
        inCart: 0
    },
    {
        name: 'Ear Rings',
        tag: 'ladieasearringsgolden',
        price: 499,
        inCart: 0
    },
    {
        name: 'Ladies Ring',
        tag: 'ladiensilverstonering',
        price: 399,
        inCart: 0
    },
    {
        name: 'Ladies Ear Rings',
        tag: 'ladiesgoldenearRings',
        price: 499,
        inCart: 0
    },
    {
        name: 'Ladies Golden Ring',
        tag: 'ladiesgoldenRing',
        price: 399,
        inCart: 0
    },
    {
        name: 'ladies Bangal',
        tag: 'ladiessilverBangal',
        price: 499,
        inCart: 0
    },
    {
        name: 'Leather Hand bag',
        tag: 'blacklestherhandbag',
        price: 999,
        inCart: 0
    },
    {
        name: 'purple leather hand bag',
        tag: 'darkpurpleleatherbag',
        price: 999,
        inCart: 0
    },
    {
        name: 'Hand bag',
        tag: 'whitehandbag',
        price: 999,
        inCart: 0
    },
    {
        name: 'full makeup set',
        tag: 'makeupsetfull',
        price: 899,
        inCart: 0
    },
    {
        name: 'Makeup Set',
        tag: 'makeupset',
        price: 899,
        inCart: 0
    },
    {
        name: 'Makeup brushes',
        tag: 'makeupbrushesfoundation',
        price: 899,
        inCart: 0
    },
    {
        name: 'Jeans with line strip',
        tag: 'bluestripjeans',
        price: 699,
        inCart: 0
    },
    {
        name: 'Girls T-shirt',
        tag: 'whitetshirt',
        price: 699,
        inCart: 0
    },
    {
        name: 'Plain jeans',
        tag: 'blueplainjeans',
        price: 699,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("no of loos ", products[i]);
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null || cartCost == "0") {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    let productNumbers = localStorage.getItem('cartNumbers');

    console.log(cartItems);

    if (cartItems && productContainer && productNumbers != 0) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "col-3 col-sm-5 col-lg-5 product">  
            <span><img src="images/${item.tag}.jpg" width="50px" height="50px"></span> &nbsp   
            <span>${item.name}</span>
            </div>

            <div class = "col-2 col-sm-2 col-lg-2 price" > ${item.price}.00Rs
        </div>

        <div class = "col-4 col-sm-3 col-lg-3 quantity" >
         <span>${item.inCart}</span>
      </div>
            <div class="col-2 col-sm-2 col-lg-2 total"> ${item.inCart * item.price}.00Rs </div>

            `
        });

        productContainer.innerHTML += `
        
        <div class ="col-6 offset-6 col-sm-5 col-lg-5  basketCostContainer">
        <h4 class = "basketTotalTitle">
          Basket Total Cost: </h4>
          <h4 class = "basketTotal" >
            ${cartCost}.00Rs
          </h4>
          </div> 
          ` ;
    }

    productContainer.innerHTML += `

          <div class="container">
          <div class="row row-content">
              <div class="col-12 col-sm-7 col-lg-7">
              </div>

              <div class="col-12 col-sm-5 col-lg-5 cart-buttons">
                  <button type="button" class="btn btn-warning btn-lg clear-cart-btn">
                      Clear Cart
                  </button>
                  <button type="submit" class="btn btn-warning btn-lg submit-cart-btn">
                      Submit Order
                  </button>

              </div>
          </div>
      </div>
        ` ;

    var submitButton = document.getElementsByClassName("submit-cart-btn");
    for (let i = 0; i < submitButton.length; i++) {
        submitButton[i].addEventListener('click' , submitCartItem)
    };

    function submitCartItem(event){
        let buttonClicked = event.target ;
        let productsInCart =localStorage.getItem('productsInCart');

        if(productsInCart){
            for (var i = 0; i < submitButton.length; i++) {
                buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
            }
            localStorage.setItem('cartNumbers', 0);
            localStorage.setItem('totalCost', 0);
            localStorage.setItem('productsInCart', JSON.stringify(''))
            let productNumbers = localStorage.getItem('cartNumbers');

            if (productNumbers) {
                document.querySelector('.cart span').textContent = productNumbers;
            }

            alert("Your Order has Successfully Submitted. \n Thanks For Shopping with us!")

        }

        else if (productsInCart ===  null){
            alert("Your Cart is Empty");
        }
    }


    var removeButton = document.getElementsByClassName("clear-cart-btn");
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeCartItem)
    };

    function removeCartItem(event) {
        var buttonClicked = event.target;
        var productsInCart = localStorage.getItem('productsInCart');
        if (productsInCart) {
            for (var i = 0; i < removeButton.length; i++) {
                buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
            }
            localStorage.setItem('cartNumbers', 0);
            localStorage.setItem('totalCost', 0);
            localStorage.setItem('productsInCart', JSON.stringify(''))
            let productNumbers = localStorage.getItem('cartNumbers');

            if (productNumbers) {
                document.querySelector('.cart span').textContent = productNumbers;
            }
        }
    };
};

onLoadCartNumber();
displayCart();