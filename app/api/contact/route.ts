import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const { nom, telephone, email, budget, service, message, terms } = data

        // Validation simple
        if (
            !nom ||
            !telephone ||
            !email ||
            !budget ||
            !service ||
            !message ||
            !terms
        ) {
            return NextResponse.json(
                { error: 'Tous les champs sont obligatoires.' },
                { status: 400 }
            )
        }

        console.log(
            'RESEND_API_KEY:',
            process.env.RESEND_API_KEY ? 'OK' : 'undefined'
        )
        const resend = new Resend(process.env.RESEND_API_KEY)

        // Envoi à l'administrateur
        await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: process.env.RESEND_TO!,
            subject: 'Nouveau message de contact SIGI Africa',
            text: `
Nom : ${nom}
Téléphone : ${telephone}
Email : ${email}
Budget : ${budget}
Service : ${service}
Message : ${message}
            `,
        })

        // Envoi d'un email de confirmation au client
        await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: email,
            subject: 'Confirmation de réception - SIGI Africa',
            text: `Merci de nous avoir contacté, votre préoccupation a été prise en compte. Nous allons vous répondre dans un bref délai.`,
        })

        return NextResponse.json({
            success: true,
            message:
                'Message reçu avec succès, email envoyé et confirmation transmise au client !',
        })
    } catch (error) {
        console.error(
            'Erreur lors de la soumission du formulaire de contact :',
            error
        )
        return NextResponse.json(
            { error: 'Erreur lors de la soumission.' },
            { status: 500 }
        )
    }
}
