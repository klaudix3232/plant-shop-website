let navbarExpanded = false;

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('navbar-toggler');

    button.onclick = function(event) {

        const nav = document.querySelector('nav');
        if (navbarExpanded) {
            nav.style.backdropFilter = 'blur(0px)';
            nav.style.webkitBackdropFilter =  'blur(0px)';
            navbarExpanded = false;
        } else {
            nav.style.backdropFilter = 'blur(100px)';
            nav.style.webkitBackdropFilter =  'blur(100px)';
            navbarExpanded = true;
        }
    };
  });

  