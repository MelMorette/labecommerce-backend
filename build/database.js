"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
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
exports.products = [
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
exports.purchases = [
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
];
//# sourceMappingURL=database.js.map