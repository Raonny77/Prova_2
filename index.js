import express from 'express';
const app = express();

app.use(express.json());

const fornecedor=[]

app.post("/fornecedor", (req, res) => {
    const body = req.body
    fornecedor.push(body)
    res.status(201).send({message: "Fornecedor cadastrado com sucesso!"})

});

app.get("/fornecedor", (req, res) => {
    res.send({message: "Esses são seus fornecedores:",fornecedor})
});



//Metodos => GET, POST, PUT, DELETE

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});