const express = require("express");

const app = express();



const PORT = process.env.PORT || 3000;




// Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor esta corriendo en http://localhost:${PORT}`);
});


app.get("/inicio/:id", (req, res) =>{
    const id = req.params.id
    res.send(`id:  ${id}`)
});