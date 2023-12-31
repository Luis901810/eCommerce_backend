const generateWelcomeMessage = userName => `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Bienvenido a nuestro sitio. Gracias por registrarte, ${userName}!</h1>
        <p style="color: #555; font-size: 16px;">Gracias por registrarte en nuestro increíble sitio. Estamos emocionados de tenerte con nosotros.</p>
        <p style="color: #555; font-size: 16px;">¡Esperamos que disfrutes de tu tiempo en nuestra plataforma!</p>
    </div>
`

module.exports = { generateWelcomeMessage }
