'use strict';

// navbar transparent when It is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// scrolling when tapping in navbar
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e) => {
  // console.log(e.target.dataset.link);
  const target = e.target;
  const link = target.dataset.link;
  // console.log(link);
  scrollIntoView(link);
});
// scrolling to pade home
const home = document.querySelector('#home');
const homeContainer = document.querySelector('#home .section__container');
const homeHeight = home.getBoundingClientRect().height;
console.log(`homeHeight: ${homeHeight}`);
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(window.scrollY)
});

// arrow up to home

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.remove('invisible');
  } else {
    arrowUp.classList.add('invisible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// click "contact me" button
const homeBtn = document.querySelector('.home__contact');
homeBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// utility funtion
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior : "smooth"});
}

// project filtering & animation
const workCategories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');



workCategories.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  console.log(filter);
  if(filter == null) {
    return;
  }
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  const selected = document.querySelector('.category__btn.active');
  selected.classList.remove('active');
  target.classList.add('active');
projectContainer.classList.add('anim-out');
setTimeout(() => {
  projectContainer.classList.remove('anim-out');
  projects.forEach((project) => {
    // console.log(project.dataset.type);
    if(filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
}, 300);
});


  // console.log('-----------');
  // for(let project of projects) {
  //   console.log(project);

  // };
  
  // console.log('------------');
  // let project;
  // for(let i = 0; i < projects.length; i++) {
  //   console.log(projects[i]);
  // };

// Device
const deviceContainer = document.querySelector('.device__container');
const deviceOST = deviceContainer.offsetTop;
console.log(`deviceOST: ${deviceOST}`);
const subtractOffset = 500;


document.addEventListener('scroll', () => {
  const monitor = document.querySelector('#monitor');
  if(window.scrollY > (deviceOST - subtractOffset)) {
    monitor.classList.add('animate');
  } else {
    monitor.classList.remove('animate');
  }
  
  const phone = document.querySelector('#phone');
  if(window.scrollY > deviceOST - subtractOffset) {
    phone.classList.add('animate');
  } else {
    phone.classList.remove('animate');
  }
});

// Features
const features = document.querySelectorAll('.feature img');
const featureNames = document.querySelectorAll('.feature__name');
const featureContainer = document.querySelector('#features');
const featuresOST = featureContainer.offsetTop;

function selectedGrow(select) {
  document.addEventListener('scroll', () => {
    if(window.scrollY > (featuresOST - subtractOffset)) {
      select.classList.add('imgGrow');
    } else {
      select.classList.remove('imgGrow');
    }
  });  
}

features.forEach((imgAction) => {
  selectedGrow(imgAction);
});
console.log(`featuresOST: ${featuresOST}`);

featureNames.forEach((feature__name) => {
  selectedGrow(feature__name);
})


// Location
const locationContainer = document.querySelector('#location');
const locationOST = locationContainer.offsetTop;
const stripes = document.querySelectorAll('.stripe');
console.log(`locationOST: ${locationOST}`);

stripes.forEach((stripe, index) => {
  document.addEventListener('scroll', () => {
    if(window.scrollY > (locationOST - subtractOffset)) {
      setTimeout(() => {
        stripe.classList.add('stripeGrow');
      }, 100*index)
    } else {
      stripe.classList.remove('stripeGrow');
    }
  });
  console.log(stripe);
});