import config from "../../config"
import {
  initDb,
  clearDb,
  createUser,
  createSellingCompany,
  createProduct,
  createCommand,
  createJournal,
  createEntry,
  createObjective,
  createNotification
} from "../persistence/db"



let users = [
  {
    id: "1",
    firstName: "mehdi",
    lastName: "chamouma",
    email: "mehdi@gmail.com",
    password: "azerty",
    adresse: "montpellier",
  },
  {
    id: "2",
    firstName: "nassim",
    lastName: "vachor",
    email: "nassim@gmail.com",
    password: "azerty",
    adresse: "montpellier",
  },
  {
    id: "3",
    firstName: "arnaud",
    lastName: "zaragoza",
    email: "arnaud@gmail.com",
    password: "azerty",
    adresse: "montpellier",
  },
]

let sellingCompany = [
  {
    userId: "1",
    id: "1",
    nameSc: "company 1",
    siret: "abc",
  },
  {
    userId: "2",
    id: "2",
    nameSc: "company 2",
    siret: "pma",
  }
]
let products = [
  {
    idSc: "1",
    id: "1",
    Name: "product A1",
    desc: "this is the product A1",
    price: 40,
    quantity: 20,
  },
  {
    idSc: "1",
    id: "2",
    Name: "product A2",
    desc: "this is the product A2",
    price: 30,
    quantity: 10,
  },
  {
    idSc: "1",
    id: "3",
    Name: "product A3",
    desc: "this is the product A3",
    price: 70,
    quantity: 0,
  },
  {
    idSc: "2",
    id: "4",
    Name: "product B1",
    desc: "this is the product B1",
    price: 10,
    quantity: 5,
  },
  {
    idSc: "2",
    id: "5",
    Name: "product B2",
    desc: "this is the product B2",
    price: 20,
    quantity: 50,
  },
]

let commands = [
  {
    idUser: "3",
    id: "1",
    products: [
      {id: "4", quantity: 2 , price: 20},
      {id: "1", quantity: 5 , price: 30},
    ],
  },
  {
    idUser: "3",
    id: "2",
    products: [
      {id: "4", quantity: 2 , price: 20},
    ],
  },
  {
    idUser: "2",
    id: "3",
    products: [
      {id: "1", quantity: 2 , price: 20},
      {id: "2", quantity: 5 , price: 30},
    ],
  }
]
let journals = [
  {
    userId: "1",
    id: "1",
    title: 'Projet AIOP',
    creationDate: new Date(2016,11,16),
  },
  {
    userId: "1",
    id: "4",
    title: 'Polytech',
    creationDate: new Date(),
  },
  {
    userId: "1",
    id: "5",
    title: 'PIFE',
    creationDate: new Date(),
  },
  {
    userId: "2",
    id:"2",

    userId: "2",
    id:"2",
    title: 'Stage IG5',
    creationDate: new Date(2016,11,15),
  },
  {
    userId: "3",
    id: "3",
    title: 'Java',
    creationDate: new Date(2016,11,14),
  }
]
let entries = [
  {
    journalId: "1",
    id: "1",
    description: 'bientôt les soutenances',
    ressourceType: 'text',
    ressourceUrl: '',
    creationDate: new Date(2016,11,14),
  },
  {
    journalId: "1",
    id: "2",
    description: 'finir le DAT pour ce soir',
    ressourceType: 'text',
    ressourceUrl: '',
    creationDate: new Date(2016,11,15),
  },
  {
    journalId: "2",
    id: "3",
    description: 'je dois trouver un stage',
    ressourceType: 'text',
    ressourceUrl: '',
    creationDate: new Date(2016,11,15),
  }
]
let objectives = [
  {
    journalId: "1",
    id: "1",
    description: 'avoir une bonne note en AIOP',
  },
  {
    journalId: "2",
    id: "2",
    description: 'Stage avec pre-embauche',
  },
  {
    journalId: "3",
    id: "3",
    description: 'integrer java community',
  }
]
let notifications = [
  {
    userId: "1",
    id: "1",
    content: 'commande validee',
    type: 'for user',
    creationDate: new Date(2016,11,16),
    readingDate: '',
  },
  {
    userId: "1",
    id: "2",
    content: 'commande validee',
    type: 'for user',
    creationDate: new Date(2016,12,16),
    readingDate: '',
  },
  {
    userId: "2",
    id: "2",
    content: 'payement effectue',
    type: 'for user',
    creationDate: new Date(2016,11,16),
    readingDate: '',
  }
]

let log = (shouldLog, ...args) => {
  shouldLog && console.log(...args)
}
export default (dbUrl, verbose = false) => {
  log(verbose, "clear database");
  initDb(dbUrl)
  return clearDb().then(() => {
    log(verbose, "database cleared");
    return Promise.all(users.map(u => createUser(u.id, u.firstName, u.lastName, u.email, u.password, u.adresse)))
  })
  .then(() => {
    log(verbose, "users created");
    log(verbose, "create selling companies");
    return Promise.all(sellingCompany.map(sc => createSellingCompany(sc.userId, sc.id, sc.nameSc, sc.siret)))
  })
  .then(() => {
    log(verbose, "create products");
    return Promise.all(products.map(p => createProduct(p.idSc, p.id, p.Name, p.desc, p.price, p.quantity)))
    log(verbose, "products created");
  })
  .then(() => {
    log(verbose, "create commands");
    //return Promise.resolve()
    return Promise.all(commands.map(c => createCommand(c.idUser, c.id, c.products)))
    log(verbose, "commands created");
  })
  .then(() => {
    log(verbose, "create journals");
    //return Promise.resolve()
    return Promise.all(journals.map(c => createJournal(c.userId, c.id, c.title, c.creationDate)))
    log(verbose, "journals created");
  })
  .then(() => {
    log(verbose, "create entries");
    //return Promise.resolve()
    return Promise.all(entries.map(c => createEntry(c.journalId, c.id, c.description, c.ressourceType, c.ressourceUrl, c.creationDate)))
    log(verbose, "entries created");
  })
  .then(() => {
    log(verbose, "create objectives");
    //return Promise.resolve()
    return Promise.all(objectives.map(c => createObjective(c.journalId, c.id, c.description)))
    log(verbose, "objectives created");
  })
  .then(() => {
    log(verbose, "create notifications");
    //return Promise.resolve()
    return Promise.all(notifications.map(c => createNotification(c.userId, c.id, c.content, c.type, c.creationDate, c.readingDate)))
    log(verbose, "notifications created");
  })
  .then(() => {
    log(verbose, "all it's right");
    return Promise.resolve()
  })
  .then(() => {
    log(verbose, "database populated");
  })
}
