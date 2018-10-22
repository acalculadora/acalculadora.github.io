$(document).ready(function(){
  //menu hamburger
  $(".mobile-navegation").on("click", function() {
    $(".navegation-link-content").toggle(200);
    $(".icon-menu").toggleClass('icon-menu-active','');
  });
  $('.navegation-link-content').click(function(event){
    event.stopPropagation();
  });

  // scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  // navegation
  const btnAria = document.querySelector('.nav-btn[aria-expanded="false"]');
  btnAria.onclick = function() {
    const attrBtn = this.getAttribute('aria-expanded');
    if (attrBtn == 'false') {
      this.setAttribute("aria-expanded", "true");
      $(".calculators-all").show(200);
    } else if (attrBtn == 'true') {
      this.setAttribute("aria-expanded", "false");
      $(".calculators-all").hide(200);
    }
  };

});//wrapper end
