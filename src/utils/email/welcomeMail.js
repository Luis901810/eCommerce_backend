const generateWelcomeMessage = name => {
    const welcomeMessage = `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <img src="digishoeslogo.aa136c25311c095df745.png" alt="Digishoes Logo" style="display: block; margin: 0 auto; max-width: 100%;">
            <h1 style="color: #333;">Bienvenido a nuestro sitio. ${
                name ? `Gracias por registrarte en DIGISHOES, ${name}!` : 'Gracias por registrarte en DIGISHOES!'
            }</h1>
            <p style="color: #555; font-size: 16px;">Gracias por registrarte en nuestro increíble sitio. Estamos emocionados de tenerte con nosotros.</p>
            <p style="color: #555; font-size: 16px;">¡Esperamos que disfrutes de tu tiempo en nuestra plataforma!</p>
        </div>
    `

    return welcomeMessage
}

module.exports = { generateWelcomeMessage }
