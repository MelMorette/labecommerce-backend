import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database";

// console.log("Aplicativo iniciado");
// console.log(users, products, purchases);

console.log(createUser("u003", "beltrano@email.com", "beltrano99"));
// console.table(getAllUsers());

console.log(createProduct("p003", "Monitor HD", 800, "Eletrônicos"));
// console.table(getAllProducts());
// console.table(getProductById(products, "p003"));
// console.table(queryProductsByName(products, "monitor"));

console.log(createPurchase("u003", "p003", 2, 1600));
console.table(getAllPurchasesFromUserId(purchases, "u003"));