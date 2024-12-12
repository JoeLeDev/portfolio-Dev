let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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
  
// Formulaire de contact
  import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Tous les champs requis ne sont pas remplis.' });
    }

    const mailOptions = {
      to: 'jonathanluembe@yahoo.com',
      from: 'joe-94240@hotmail.fr', 
      subject: subject || 'Prise de ciontact depuis le portfolio',
      text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
    };

    try {
      await sgMail.send(mailOptions);
      return res.status(200).json({ message: 'Message envoyé avec succès !' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de l\'envoi.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée.` });
  }
}
