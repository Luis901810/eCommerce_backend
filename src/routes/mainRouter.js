const { Router } = require("express");
const mainRouter = Router();

const userRouter = require("./userRouter")

mainRouter.get("/", (req, res) =>{
    res.send("Bienvenidos al Backend de Tienda de Zapatos con fines de estudios de Henry")
});
mainRouter.use((req, res) => {
    res.status(404).send(`Ruta no encontrada: ${req.method} ${req.originalUrl}`)
})

mainRouter.use("/user", userRouter)

module.exports = mainRouter;