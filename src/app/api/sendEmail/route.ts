import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Fonction pour traiter les requêtes POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const { name, email, phone, message } = await request.json();

  // Configurer le transport Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Tu peux utiliser un autre service ici si nécessaire
    auth: {
      user: process.env.EMAIL_USER, // Email de l'expéditeur (ton email)
      pass: process.env.EMAIL_PASS, // Mot de passe de l'application ou app-specific password
    },
  });

  // Contenu de l'email
  const mailOptions = {
    from: email, // L'email de la personne qui remplit le formulaire
    to: process.env.EMAIL_USER, // L'adresse à laquelle tu souhaites recevoir l'email
    subject: `Nouveau message de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}
