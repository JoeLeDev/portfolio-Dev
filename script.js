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
  
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); 
  
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'), 
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
  
    try {
      const response = await fetch('/api/mail', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Succès:', result);
  

      alert('Votre message a été envoyé avec succès !');
    } catch (error) {
      console.error('Erreur:', error);
  
      alert('Une erreur s\'est produite lors de l\'envoi du message.');
    }
  })
});
  