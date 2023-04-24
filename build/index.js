"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log((0, database_1.createUser)("u003", "beltrano@email.com", "beltrano99"));
console.log((0, database_1.createProduct)("p003", "Monitor HD", 800, "Eletrônicos"));
console.log((0, database_1.createPurchase)("u003", "p003", 2, 1600));
console.table((0, database_1.getAllPurchasesFromUserId)(database_1.purchases, "u003"));
//# sourceMappingURL=index.js.map