let carts = document.querySelectorAll('.add-cart');

let products = [
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
    }
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