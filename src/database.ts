import { TUser, CATEGORY, TProduct, TPurchase } from "./types"

export const users: Array<TUser> = [
    {
        id: "u001",
        email: "teste@gmail.com",
        password: "senha1"
    }, {
        id: "u002",
        email: "teste2@gmail.com",
        password: "senha2"
    }
];

export const products: Array<TProduct> = [
    {
        id: "p001",
        name: "carro1",
        price: 1000,
        category: CATEGORY.ACCESSORIES
    }, {
        id: "p002",
        name: "carro2",
        price: 2000,
        category: CATEGORY.CLOTHES_AND_SHOES
    }
];

export const purchases: Array<TPurchase> = [
    {
        userId: "u001",
        productId: "p01",
        quantity: 2,
        totalPrice: 2000
    }, {
        userId: "u002",
        productId: "p02",
        quantity: 3,
        totalPrice: 6000
    }
]

// export function createUser(id: string, email: string, password: string): void {
//     users.push({ id, email, password });
//     return console.log("Cadastro realizado com sucesso");
// }

// export function getAllUsers(): Array<TUser> {
//     return users;
// }

// export function createProduct(id: string, name: string, price: number, category: string): void {
//     if (category === Category.ACCESSORIES) {
//         products.push({ id, name, price, category: Category.ACCESSORIES });
//     } else if (category === Category.CLOTHES_AND_SHOES) {
//         products.push({ id, name, price, category: Category.CLOTHES_AND_SHOES });
//     } else {
//         products.push({ id, name, price, category: Category.ELECTRONICS });
//     }

//     return console.log("Produto criado com sucesso");
// }

// export function getAllProducts(): TProduct[] {
//     return products;
// }

// export function getProductById(products: TProduct[], idToSearch?: string): TProduct[] {
//     return products.filter((p) => {
//         return p.id === idToSearch;
//     });
// }

// export function queryProductsByName(products: TProduct[], q?: string): TProduct[] {
//     return products.filter((p) => {
//         return p.name === q;
//     });
// }

// export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number): void {
//     purchases.push({ userId, productId, quantity, totalPrice });
//     return console.log("Compra realizada com sucesso");
// }

// export function getAllPurchasesFromUserId(purchases: TPurchase[], userIdToSearch?: string): TPurchase[] {
//     return purchases.filter((p) => {
//         return p.userId === userIdToSearch;
//     });
// }