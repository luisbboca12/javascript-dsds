const navBarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamMenu = document.querySelector('.menu-ham-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const carritoCompra = document.querySelector('.navbar-shopping-cart')
const asideCarrito = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container')

navBarEmail.addEventListener('click', mostrarMenuEmail)
menuHamMenu.addEventListener('click', mostrarMenuHamb)
carritoCompra.addEventListener('click', mostrarCarrito)

//esta funcion saca y pone la clase inactive
function mostrarMenuEmail() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive')
    if (isAsideCarritoClosed){
        desktopMenu.classList.toggle('inactive')
    }else{
        asideCarrito.classList.add('inactive')
    }
    
}
function mostrarMenuHamb() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive')
    if (isAsideCarritoClosed){
        mobileMenu.classList.toggle('inactive')
       
       }else{
        asideCarrito.classList.add('inactive')
       }
}
function mostrarCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isMenuMailClosed = desktopMenu.classList.contains('inactive')
   
 
   if (isMobileMenuClosed && isMenuMailClosed ){
    asideCarrito.classList.toggle('inactive')
   
   }else{
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
   }
    
}
const productList = []

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
chargerProducts(productList)

{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}


function chargerProducts(arr) {
    for (product of arr){
        //Crear div principal Product card
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

     //Crear etiqueta img principal del producto
        const imgPrincipal = document.createElement('img')
        imgPrincipal.setAttribute('src', product.image)
     //Crear div de product info
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
     
        ////Infodiv
        const productInfoDiv = document.createElement('div')
     //Crear  Precio
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
     //Crear Nombre
        const productName = document.createElement('p')
        productName.innerText = product.name
     //Insertar precio y nombre al div info
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName )
     
        ////Crear etiqueta Figure
        const productFigure= document.createElement('figure')
        //Crear etiqueta img Icono de carrito
        const productImgFigure = document.createElement('img')
        productImgFigure.setAttribute('src','./icons/bt_add_to_cart.svg')
        //Insertar imgcarrito en Figure
     
        productFigure.appendChild(productImgFigure)
        //Insertar Div info y Figure en div Product info
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productFigure)
        //Insertar img Principal y div Product info en div Product card
     
        productCard.appendChild(imgPrincipal)
        productCard.appendChild(productInfo)

        //Insertar div Product card en la card Container, creada en una variable
     
        cardContainer.appendChild(productCard)
     
         
     }
}
