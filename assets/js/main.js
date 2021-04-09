(function($) {
  "use strict";



  // Sticky-Header
  function StickyHeader() {
    let header = document.querySelector('.header-area')
    window.addEventListener('scroll', () => {
      let scrolling = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrolling > header.offsetHeight ) {
        header.classList.add('stickyHeader')
        document.querySelector('body').style.paddingTop = header.offsetHeight +"px"
      }else{
        header.classList.remove('stickyHeader')
        document.querySelector('body').style.paddingTop = 0
      }
    })
  }
  StickyHeader()


  // Plan-changing
  function PlanChange() {

    let PlanMainDiv  = document.querySelector('.plane-option')
    let planBtn      = PlanMainDiv.querySelector('.planChange')

    planBtn.addEventListener('click', () => {
      PlanMainDiv.classList.toggle('monthly')
    })
 


  }
  PlanChange()

  // Scroll-indicator
  function ScrollIndicator() {
    let animDiv = document.querySelector('.scrolling')
    window.addEventListener('scroll', () => { 
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height    = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled  = (winScroll / height) * 100;
      animDiv.style.width = scrolled + "%"
    })
  }
  ScrollIndicator()



  // menu 
  function HeaderMenu() {
    let mobileMenu = document.querySelectorAll('.mobile-menu li a')

    mobileMenu.forEach(singlA => {
      singlA.addEventListener('click', () => { 
        $('.mobile-menu').toggleClass('siteBar');  
      })
    }) 
    $('.siteBar-btn').click( function (e){
      e.preventDefault()
      $('.mobile-menu').toggleClass('siteBar');   
    }); 
  
  }
  HeaderMenu()


  $('select').niceSelect(); 
 
   
  AOS.init({   
    offset: 120, // offset (in px) from the original trigger point 
    duration: 1100, // values from 0 to 3000, with step 50ms  
    once: true, // whether animation should happen only once - while scrolling down 
  });
 
})(jQuery);
