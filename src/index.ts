import express, { Request, Response } from 'express';
import cors from 'cors';
import { products, purchases, users } from './database';
import { CATEGORY, TProduct, TPurchase, TUser } from './types';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

// // Testando o servidor
// app.get("/ping", (req: Request, res: Response) => {
//   res.send("Pong!");
// });

// Endpoint getAllUsers
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users);
});

// Endpoint getAllProducts
app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products);
});

// Endpoint searchProductByName
app.get("/product/search", (req: Request, res: Response) => {
    const q = req.query.q as string

    const result = q ? products.filter(item => item.name.toLowerCase().includes(q.toLowerCase())) : products;

    res.status(200).send(result);
});

//Endpoint createUser
app.post("/users", (req: Request, res: Response) => {
    const id: string = req.body.id;
    const email: string = req.body.email;
    const password: string = req.body.password;

    const newUser: TUser = {
        id, email, password
    }

    users.push(newUser);

    res.status(201).send("Cadastro realizado com sucesso");
})

//Endpoint createProduct
app.post("/products", (req: Request, res: Response) => {
    const id: string = req.body.id;
    const name: string = req.body.name;
    const price: number = req.body.price;
    const category: CATEGORY = req.body.category;

    const newProduct: TProduct = {
        id, name, price, category
    }

    products.push(newProduct);

    res.status(201).send("Produto cadastrado com sucesso");
})


//Endpoint createPurchase
app.post("/purchases", (req: Request, res: Response) => {
    const userId: string = req.body.userId;
    const productId: string = req.body.productId;
    const quantity: number = req.body.quantity;
    const totalPrice: number = req.body.totalPrice;

    const newPurchase: TPurchase = {
        userId, productId, quantity, totalPrice
    }

    purchases.push(newPurchase);

    res.status(201).send("Compra realizada com sucesso");
})