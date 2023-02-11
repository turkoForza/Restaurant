//!search-toggle
const srcButton=document.querySelector('.fa-magnifying-glass');

const srcToggler=document.querySelector('#s-area');

srcButton.addEventListener('click', function(){
    srcToggler.classList.toggle('s-active');

    document.addEventListener('click', function(e){
        if(
            !e.composedPath().includes(srcButton) && !e.composedPath().includes(srcToggler)
        )
        {
            srcToggler.classList.remove('s-active');
        }
    })
});

//!navbar-nav
const barButton=document.querySelector('.fa-bars');

const barToggler=document.querySelector('#navbar-nav');

barButton.addEventListener('click', function(){
        barToggler.classList.toggle('s-active');

        document.addEventListener('click', function(e){
            if(
                !e.composedPath().includes(barButton) && !e.composedPath().includes(barToggler)
            )
            {
                barToggler.classList.remove('s-active');
            }
        })
});


//!Shopping-cart
const cartButton=document.querySelector('.fa-cart-shopping');

const cartToggler=document.querySelector('#shopping-cart');

cartButton.addEventListener('click', function(){
    cartToggler.classList.toggle('s-active');

    document.addEventListener('click', function(e){
        if(
            !e.composedPath().includes(cartButton) && !e.composedPath().includes(cartToggler)
        )
        {
            cartToggler.classList.remove('s-active');
        }
    })
});

