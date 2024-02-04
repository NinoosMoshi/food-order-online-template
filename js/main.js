// showing bavbar when click menu on mobile view
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function () {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

// close menu when click
mobileLink.addEventListener("click", function () {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.remove("is-active");
        mobileLink.classList.remove("active");
    }
});

// move the menu to right and left when click back and next
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "-=" + step + "px"
  });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
      scrollLeft: "+=" + step + "px"
    });
  });

 // when click back and next on menu filters
 $(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
      scrollLeft: "-=" + step + "px"
    });
  });
  
  $(".next-menus").bind("click", function(e){
      e.preventDefault();
      $(".filter-wrapper").animate({
        scrollLeft: "+=" + step + "px"
      });
    });


 // Add touch events for sliding in the main highlight section
const mainHighlight = document.querySelector('.main-highlight');
let touchStartXHighlight = 0;

mainHighlight.addEventListener('touchstart', function (e) {
    touchStartXHighlight = e.touches[0].clientX;
});

mainHighlight.addEventListener('touchmove', function (e) {
    if (scrolling) {
        let touchEndXHighlight = e.touches[0].clientX;
        let deltaXHighlight = touchEndXHighlight - touchStartXHighlight;

        if (deltaXHighlight > step) {
            // Swiping right (previous)
            $(".highlight-wrapper").animate({
                scrollLeft: "-=" + step + "px"
            });
            touchStartXHighlight = touchEndXHighlight;  // Update the starting position
        } else if (deltaXHighlight < -step) {
            // Swiping left (next)
            $(".highlight-wrapper").animate({
                scrollLeft: "+=" + step + "px"
            });
            touchStartXHighlight = touchEndXHighlight;  // Update the starting position
        }

        // Prevent the default scroll behavior
        e.preventDefault();
    }
});

mainHighlight.addEventListener('touchend', function () {
    touchStartXHighlight = 0;
});   


    // Add touch events for sliding in the main menus section
// const mainMenus = document.querySelector('.main-menus');
// let touchStartX = 0;

// mainMenus.addEventListener('touchstart', function (e) {
//     touchStartX = e.touches[0].clientX;
// });

// mainMenus.addEventListener('touchmove', function (e) {
//     if (scrolling) {
//         let touchEndX = e.touches[0].clientX;
//         let deltaX = touchEndX - touchStartX;

//         if (deltaX > 0) {
//             // Swiping right (previous)
//             $(".filter-wrapper").animate({
//                 scrollLeft: "-=" + Math.abs(deltaX) + "px"
//             });
//         } else {
//             // Swiping left (next)
//             $(".filter-wrapper").animate({
//                 scrollLeft: "+=" + Math.abs(deltaX) + "px"
//             });
//         }

//         // Prevent the default scroll behavior
//         e.preventDefault();
//     }
// });

// mainMenus.addEventListener('touchend', function () {
//     touchStartX = 0;
// });


//.......
const mainMenus = document.querySelector('.main-menus');
let touchStartX = 0;

mainMenus.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
});

mainMenus.addEventListener('touchmove', function (e) {
    if (scrolling) {
        let touchEndX = e.touches[0].clientX;
        let deltaX = touchEndX - touchStartX;

        if (deltaX > step) {
            // Swiping right (previous)
            $(".filter-wrapper").animate({
                scrollLeft: "-=" + stepFilter + "px"
            });
            touchStartX = touchEndX;  // Update the starting position
        } else if (deltaX < -step) {
            // Swiping left (next)
            $(".filter-wrapper").animate({
                scrollLeft: "+=" + stepFilter + "px"
            });
            touchStartX = touchEndX;  // Update the starting position
        }

        // Prevent the default scroll behavior
        e.preventDefault();
    }
});

mainMenus.addEventListener('touchend', function () {
    touchStartX = 0;
});