"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
exports.products = [
    {
        id: "p001",
        name: "carro1",
        price: 1000,
        category: types_1.Category.ACCESSORIES
    }, {
        id: "p002",
        name: "carro2",
        price: 2000,
        category: types_1.Category.CLOTHES_AND_SHOES
    }
];
exports.purchases = [
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
];
function createUser(id, email, password) {
    exports.users.push({ id, email, password });
    return console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    if (category === types_1.Category.ACCESSORIES) {
        exports.products.push({ id, name, price, category: types_1.Category.ACCESSORIES });
    }
    else if (category === types_1.Category.CLOTHES_AND_SHOES) {
        exports.products.push({ id, name, price, category: types_1.Category.CLOTHES_AND_SHOES });
    }
    else {
        exports.products.push({ id, name, price, category: types_1.Category.ELECTRONICS });
    }
    return console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(products, idToSearch) {
    return products.filter((p) => {
        return p.id === idToSearch;
    });
}
exports.getProductById = getProductById;
function queryProductsByName(products, q) {
    return products.filter((p) => {
        return p.name === q;
    });
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchases.push({ userId, productId, quantity, totalPrice });
    return console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(purchases, userIdToSearch) {
    return purchases.filter((p) => {
        return p.userId === userIdToSearch;
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map