import getDB from "../../persistence"

let companiesService = {}

companiesService.getCompanies = () => {
  return getDB().getSellingCompanies()
  .catch((error) => {
    return Promise.reject({code:500, description:"Server error (persistence/db/getCompanies)"})
  })
}

companiesService.createCompany = (data) => {
  if(data.company != undefined) {
    let p = data.company
    console.log(p);
    console.log(p.userId instanceof String);
    if(p.userId != undefined && typeof p.userId == "string" &&
      p.companyName != undefined && typeof p.companyName == "string" &&
      p.siret != undefined && typeof p.siret == "string" &&
      p.image != undefined && typeof p.image == "string"
      ) {
        console.log("ok");
      return getDB().createSellingCompany(p.userId, undefined, p.companyName, p.siret, p.image)
      .catch((error) => {
        console.log(error);
        return Promise.reject({code:500, description:"Server error (persistence/db/createCompany)"})
      })
    }
  }
  return Promise.reject({code:400, description:"Bad Request"})
}

companiesService.getCompany = (companyId) => {
  if(companyId != undefined && companyId instanceof String)
  {
    return getDB().getSellingCompany(companyId)
    .catch((error) => {
      return Promise.reject({code:500, description:"Server error (persistence/db/getCompany)"})
    })
  }
  return Promise.reject({code:400, description:"Bad Request"})
}

companiesService.updateCompany = (companyId, data) => {
  if(data.company != undefined) {
    let p = data.company
    if(p.companyName != undefined && p.companyName instanceof String &&
      p.siret != undefined && p.siret instanceof String
      ) {
      return getDB().updateSellingCompany(companyId, p.companyName, p.siret)
      .catch((error) => {
        return Promise.reject({code:500, description:"Server error (persistence/db/createCompany)"})
      })
    }
  }
  return Promise.reject({code:400, description:"Bad Request"})
}

companiesService.getOrders = (companyId) => {
  if(companyId != undefined && companyId instanceof String)
  {
    return getDB().getOrdersByCompanyId(companyId)
    .catch((error) => {
      return Promise.reject({code:500, description:"Server error (persistence/db/getOrders)"})
    })
  }
  return Promise.reject({code:400, description:"Bad Request"})
}

export default companiesService
