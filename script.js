document.addEventListener("DOMContentLoaded", () => {
  // Menu burger
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  }

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  document.querySelector('header nav').onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

  // GSAP + ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".timeline-item", {
    scrollTrigger: {
      trigger: ".timeline-item",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".service-box", {
    scrollTrigger: {
      trigger: ".services",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".project-reveal", {
    scrollTrigger: {
      trigger: ".projets",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });

  // Swiper init
  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1048: { slidesPerView: 2 },
    }
  });


  // Logos animés au hover / clic
  function toggleText(element) {
    const textElement = element.nextElementSibling;
    const parentDiv = element.parentElement;

    if (textElement.style.display === "none" || textElement.style.display === "") {
      textElement.style.display = "block";
      parentDiv.style.height = "480px";
    } else {
      textElement.style.display = "none";
      parentDiv.style.height = "fit-content";
    }
  }

  function addEventListeners() {
    document.querySelectorAll('.service-logo').forEach(element => {
      element.addEventListener('mouseover', () => toggleText(element));
      element.addEventListener('mouseout', () => toggleText(element));
      if (window.innerWidth <= 768) {
        element.addEventListener('click', () => toggleText(element));
      }
    });
  }

  document.querySelectorAll('.service-text').forEach(el => el.style.display = "none");
  addEventListeners();

  window.addEventListener('resize', () => {
    document.querySelectorAll('.service-logo').forEach(element => {
      element.replaceWith(element.cloneNode(true));
    });
    addEventListeners();
  });


  console.log("Début animation titres");
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".heading").forEach((heading, i) => {
  gsap.fromTo(
    heading,
    { opacity: 0, y: 30 },
    {
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }
  );
});

// Animation des boutons
gsap.from(".btn", {
  scrollTrigger: {
    trigger: ".btn",
    start: "top 95%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  stagger: 0.2,
  ease: "back.out(1.7)"
});
  // Animation des images de la section "About"
  gsap.from(".about-img", {
    scrollTrigger: {
      trigger: ".about-img",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
  });

  // Animation des images de la section "Projets"
  gsap.from(".project-img", {
    scrollTrigger: {
      trigger: ".project-img",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
  });
  // Animation des images de la section "Services"
  gsap.from(".service-img", {
    scrollTrigger: {
      trigger: ".service-img",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
  });
  // Animation des images de la section "Contact"
  gsap.from(".contact-img", {
    scrollTrigger: {
      trigger: ".contact-img",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
  });
});
