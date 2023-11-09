const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// Ruta de inicio
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/login/login.html");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
