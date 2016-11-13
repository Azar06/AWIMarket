import config from "../../config"
import {
  initDb,
  clearDb,
  createUser,
  createSellingCompany,
  createProduct,
  createCommand
} from "../persistence/db"

initDb(config.DB_URL)

let users = [
  {
    id: 1,
    firstName: "mehdi",
    lastName: "chamouma",
    email: "mehdi@gmail.com",
    password: "azerty",
    adresse: "montpellier",
  },
  {
    id: 2,
    firstName: "nassim",
    lastName: "vachor",
    email: "nassim@gmail.com",
    password: "azerty",
    adresse: "montpellier",
  },
  {
    id: 3,
    firstName: "arnaud",
    lastName: "zaragoza",
    email: "arnaud@gmail.com",
    password: "azerty",
    adresse: "montpellier",
  },
]

let sellingCompany = [
  {
    userId: 1,
    id: 1,
    nameSc: "company 1",
    siret: "abc",
  },
  {
    userId: 2,
    id: 2,
    nameSc: "company 2",
    siret: "pma",
  }
]
let products = [
  {
    idSc: 1,
    id: 1,
    Name: "product A1",
    desc: "this is the product A1",
    price: 40,
    quantity: 20,
  },
  {
    idSc: 1,
    id: 2,
    Name: "product A2",
    desc: "this is the product A2",
    price: 30,
    quantity: 10,
  },
  {
    idSc: 1,
    id: 3,
    Name: "product A3",
    desc: "this is the product A3",
    price: 70,
    quantity: 0,
  },
  {
    idSc: 2,
    id: 4,
    Name: "product B1",
    desc: "this is the product B1",
    price: 10,
    quantity: 5,
  },
  {
    idSc: 2,
    id: 5,
    Name: "product B2",
    desc: "this is the product B2",
    price: 20,
    quantity: 50,
  },
]

let commands = [
  {
    idUser: 3,
    id: 1,
    products: [
      {id: 4, quantity: 2 , price: 20},
      {id: 1, quantity: 5 , price: 30},
    ],
  },
  {
    idUser: 3,
    id: 2,
    products: [
      {id: 4, quantity: 2 , price: 20},
    ],
  },
  {
    idUser: 2,
    id: 3,
    products: [
      {id: 1, quantity: 2 , price: 20},
      {id: 2, quantity: 5 , price: 30},
    ],
  }
]

console.log("clear database");
clearDb()
.then(() => {
  console.log("database cleared");
  return Promise.all(users.map(u => createUser(u.id, u.firstName, u.lastName, u.email, u.password, u.adresse)))
})
.then(() => {
  console.log("users created");
  console.log("create selling companies");
  return Promise.all(sellingCompany.map(sc => createSellingCompany(sc.userId, sc.id, sc.nameSc, sc.siret)))
})
.then(() => {
  console.log("create products");
  return Promise.all(products.map(p => createProduct(p.idSc, p.id, p.Name, p.desc, p.price, p.quantity)))
  console.log("products created");
})
.then(() => {
  console.log("create commands");
  //return Promise.resolve()
  return Promise.all(commands.map(c => createCommand(c.idUser, c.id, c.products)))

})
.then(() => {
  console.log("commands created");
  return Promise.resolve()
})
.then(() => {
  console.log("database populated");
})