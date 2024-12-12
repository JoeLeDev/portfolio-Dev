
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
