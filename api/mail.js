export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Tous les champs requis ne sont pas remplis.' });
    }

    try {
      console.log(`Nom: ${name}, Email: ${email}, Sujet: ${subject}, Message: ${message}`);
      return res.status(200).json({ message: 'Message reçu avec succès' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de l\'envoi.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée.` });
  }
}
