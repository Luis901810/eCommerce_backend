const generateWelcomeMessage = name => {
    const welcomeMessage = `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333;">Bienvenido a nuestro sitio. ${
                name ? `Gracias por registrarte en DIGISHOES, ${name}!` : 'Gracias por registrarte en DIGISHOES!'
            }</h1>
            <img src="https://img.freepik.com/free-vector/hand-drawn-running-shoes-cartoon-illustration_23-2150920427.jpg" alt="Digishoes Logo" style="display: block; margin: 0 auto; max-width: 75%;">
            <p style="color: #555; font-size: 16px;">Gracias por registrarte en nuestro increíble sitio. Estamos emocionados de tenerte con nosotros.</p>
            <p style="color: #555; font-size: 16px;">¡Esperamos que disfrutes de tu tiempo en nuestra plataforma!</p>
        </div>
    `

    return welcomeMessage
}

module.exports = { generateWelcomeMessage }
