function repeatNavBar() {
    var navBarHTML = 
                        '<div class="openinglogo">' +
                          '<a href="./index.html">'+
                          '<img src="./logo-img/logo-flor.PNG" alt="flower" /></a>' +
                          '<p>Green Thumb Landscape</p>' +
                        '</div>' +
                        '<nav>' +
                          '<div class="dropdown">' +
                            '<button class="activeMenu">Menu</button>' +
                            '<ul class="dropdown-itens">' +
                              '<li><a href="./About.html">About Us</a></li>' +
                              '<li><a href="./services.html">Services</a></li>' +
                              '<li><a href="./contact.html">Contact</a></li>' +
                              '<li><a href="./review.html">Testimonials</a></li>' +
                            '</ul>' +
                          '</div>' +
                          '<a href="./quote.html"><button class="quoteButton">Quote</button></a>' +
                        '</nav>';
  
    return navBarHTML;
  }
var navBarHTML = repeatNavBar();
document.querySelector('header').innerHTML = navBarHTML;
  
  
  
  
  