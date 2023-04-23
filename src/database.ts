import { TUser, TProduct, TPurchase } from "./types"

export const users: Array<TUser> = [
    {
        id: "u01",
        email: "teste@gmail.com",
        password: "senha1"
    }, {
        id: "u02",
        email: "teste2@gmail.com",
        password: "senha2"
    }
];

export const products: Array<TProduct> = [
    {
        id: "p01",
        name: "carro1",
        price: 1000,
        category: "automóveis"
    }, {
        id: "p02",
        name: "carro2",
        price: 2000,
        category: "automóveis"
    }
];

export const purchases: Array<TPurchase> = [
    {
        userId: "u01",
        prodcutId: "p01",
        quantity: 2,
        totalPrice: 2000
    }, {
        userId: "u02",
        prodcutId: "p02",
        quantity: 3,
        totalPrice: 6000
    }
]