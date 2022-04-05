/**
* Template Name: MyPortfolio - v4.3.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

 function addGradient(){
   // set classes
   var classes     = new Array (
                           'dull',
                           'margo',
                           'margo2',
                           'margo3',
                           'margo4',
                           'margo5',
                           'margo6',
                           'margo7',
                           'margo8',
                           'margo9',
                           'margo10',
                           'margo11',
                           'margo12',
                           'margo13',
                           'margo14',

                           // 'bluelight',
                           // 'freshair',
                           // 'greenlight',
                           // 'sunrise',
                           // 'vlight',


                          //  'honeydew',
                          // 'yell',
                          // 'purple',
                          // 'vlight',
                          // 'notsure',
                          // 'delicate',
                          //
                          // 'margo4',
                          //
                          // 'gblue',
                          // 'teal',
                          // 'blue',
                          // 'green',
                          // 'pinkblu',
                          // 'orange',
                          // 'bluyel',
                               );

   // calculate length once, as this will never change
   var length      = classes.length;

   // select all a-tags
   var links       = $('body');
   var classtoadd =  classes[ Math.floor ( Math.random() * length ) ]
   // loop through all a-tags and apply color randomly
   $.each( links, function(key, value) {
       // get random value/class-name from array and add it using the addClass function
       $(value).addClass(classtoadd);
   });
 }

(function() {
  "use strict";
  // $(document).ready(addGradient);

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })


  window.smoothScroll = function(target) {
      var scrollContainer = target;
      do { //find scroll container
          scrollContainer = scrollContainer.parentNode;
          if (!scrollContainer) return;
          scrollContainer.scrollTop += 1;
      } while (scrollContainer.scrollTop == 0);

      var targetY = 0;
      do { //find the top of target relatively to the container
          if (target == scrollContainer) break;
          targetY += target.offsetTop;
      } while (target = target.offsetParent);

      scroll = function(c, a, b, i) {
          i++; if (i > 30) return;
          c.scrollTop = a + (b - a) / 30 * i;
          setTimeout(function(){ scroll(c, a, b, i); }, 20);
      }
      // start scrolling
      scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }
  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
