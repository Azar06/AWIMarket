import getDB from "../../persistence"
import uuid from "uuid"

let commandsService = {}

commandsService.getCommands = () => {
  return Promise.reject({code:501, description:"Not Implemented"})
}

commandsService.getCommand = (commandId) => {
  return Promise.reject({code:501, description:"Not Implemented"})
}

commandsService.updateCommand = (commandId) => {
  return Promise.reject({code:501, description:"Not Implemented"})
}

commandsService.updateProduct = (commandId, productId) => {
  return Promise.reject({code:501, description:"Not Implemented"})
}

commandsService.pay = (commandId) => {
  return Promise.reject({code:501, description:"Not Implemented"})
}

export default commandsService
