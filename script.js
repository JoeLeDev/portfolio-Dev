const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const contactForm = document.getElementById('contact-form');

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
function addEventListeners() {
    document.querySelectorAll('.service-logo').forEach(element => {
        element.addEventListener('mouseover', function() {
            toggleText(this);
        });
        element.addEventListener('mouseout', function() {
            toggleText(this);
        });

       
        if (window.innerWidth <= 768) {
            element.addEventListener('click', function() {
                toggleText(this);
            });
        }
    });
}

// Appeler la fonction pour ajouter les écouteurs d'événements
addEventListeners();

// Réajouter les écouteurs d'événements lors du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    
    document.querySelectorAll('.service-logo').forEach(element => {
        element.replaceWith(element.cloneNode(true));
    });

    // Ajouter les nouveaux écouteurs d'événements
    addEventListeners();
});

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


document.querySelectorAll('.service-text').forEach(element => {
    element.style.display = "none";
});