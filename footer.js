function repeatFooter() {
    var FooterHTML =   '<p class="footerText">Green Thumb Landscape. All rights reserved.</p>'+
    '<div class="imgBox">'+
      '<div class="footerImages">'+
        '<a href="https://www.facebook.com/">'+
          '<img src="./logo-img/facebook.png" alt="Facebook"'+
        '/></a>'+
      '</div>'+
      '<div class="footerImages">'+
       ' <a href="https://www.instagram.com/">'+
          '<img src="./logo-img/instagram.png" alt="Instagram"'+
        '/></a>'+
      '</div>'+
    '</div>';
  return FooterHTML;
  }
var FooterHTML = repeatFooter();
document.querySelector('footer').innerHTML = FooterHTML;