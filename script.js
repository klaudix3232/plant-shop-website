// let navbarExpanded = false;

// document.addEventListener('DOMContentLoaded', (event) => {
//     const button = document.getElementById('navbar-toggler');

//     button.onclick = function(event) {

//         const nav = document.querySelector('nav');
//         if (navbarExpanded) {
//             nav.style.backdropFilter = 'blur(0px)';
//             nav.style.webkitBackdropFilter =  'blur(0px)';
//             navbarExpanded = false;
//         } else {
//             nav.style.backdropFilter = 'blur(100px)';
//             nav.style.webkitBackdropFilter =  'blur(100px)';
//             navbarExpanded = true;
//         }
//     };
//   });

  let navbarExpanded = false;

  document.addEventListener('DOMContentLoaded', (event) => {
    // Get the navbar and button elements
    const nav = document.querySelector('nav');
    const button = document.getElementById('navbar-toggler');
  
    // Set the initial backdropFilter style for the navbar
    nav.style.backdropFilter = 'blur(0px)';
    nav.style.webkitBackdropFilter = 'blur(0px)'; // For Safari
  
    // Set up the button click event
    button.onclick = function(event) {
      if (navbarExpanded) {
        nav.style.backdropFilter = 'blur(0px)';
        nav.style.webkitBackdropFilter = 'blur(0px)';
        navbarExpanded = false;
      } else {
        nav.style.backdropFilter = 'blur(100px)';
        nav.style.webkitBackdropFilter = 'blur(100px)';
        navbarExpanded = true;
      }
    };
  });
  