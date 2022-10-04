const hamburgerBlock = document.querySelector("#bur"),
      hamburgerIcon = document.querySelector("#bur-icon"),
      menu = document.querySelector('#menu'),
      menuList = document.querySelector('.menu-list'),
      header = document.querySelector("header"),
      menuItems = document.querySelectorAll(".menu-list__item"),
      logo = document.querySelector("#logo[data-scroll]"),
      nav = document.querySelector('.header-nav'),
      section = document.querySelectorAll('.sect'),
      menuLinks = document.querySelectorAll(".menu-list__link[data-scroll]"),
      images = document.querySelectorAll('img'),
      inputs = document.querySelectorAll('.input');

// <=================== Preloader ===============>

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('#preloader');
    const mediafiles = document.querySelectorAll('img, use');
    const body = document.querySelector('.body');
    let i = 0;
    mediafiles.forEach((file, index) => {
        file.onload = () => {
            i++;
            persent.innerHTML = (( ( 100 / mediafiles.length) * i) << 0 + '%');
            if(i === mediafiles.length){
                persent.innerHTML = 100;
                if(!preloader.classList.contains('loaded')) {
                    preloader.classList.add('loaded');
                    body.classList.remove('loading');
                } else {
                    preloader.classList.remove('loaded');
                    body.classList.add('loading');
                }
               

            }
        }
    });
});

// <=================== Preloader ===============>

// <================== Menu hamburger ==========>

hamburgerBlock.addEventListener('click', () => {
    if (hamburgerBlock) {
        hamburgerBlock.classList.toggle('active');
        hamburgerIcon.classList.toggle("fa-xmark");
        menu.classList.toggle("active");
    } else {
        removeClasses();
    }
});
const removeClasses = () => {
    hamburgerBlock.classList.remove('active');
    hamburgerIcon.classList.remove("fa-xmark");
    menu.classList.remove("active");
}

// <================== Menu hamburger ==========>

// <=================== Active link =============> {

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            menuItems.forEach((item) => {
                let link = item.querySelector('a').getAttribute('href').replace('#', '');
                if (link === entry.target.id) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    })
}, {
    threshold: 0.4,
});

section.forEach(
    (item) => observer.observe(item),
);
menuList.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-list__item')) {
        e.preventDefault();
    } else if (menu.classList.contains('active')) {
        removeClasses();
    }
  
});

// <=================== Active link =============>

// <================== fixed header ==========>
const headerFixed = () => {
    if (window.pageYOffset > 65) {
        header.classList.add("header--fixed");
    } else {
           header.classList.remove("header--fixed");
           for (const menuItem of menuItems) {
            menuItem.classList.remove('active');
        }
    }
}

window.onscroll = headerFixed;
window.onload = headerFixed;

// <================== fixed header ==========>

// <================== smooth scrolling ==========>

const menuLinkClick = (e) => {
    const menuLink = e.target;
    if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
        const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
        const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
        window.scrollTo({
            top: scrollToBlockValue,
            behavior: "smooth"
        })

        e.preventDefault()
    }
}

if (menuLinks.length > 0) {
    for (const menuItem of menuItems) {
        menuItem.addEventListener('click', menuLinkClick)
        
    }
}

// <================== smooth scrolling ==========>

// <================ Custom input Messege ==========>

inputs.forEach((input, ind) => {
    input.setAttribute('required', '');
    const customMessege = () => {
        input.setCustomValidity('Fill this field, please');
    }

    input.addEventListener('invalid', customMessege);

    
    input.oninput = () => {
        input.setCustomValidity('');
    }
});

// <================ Custom input Messege ==========>
