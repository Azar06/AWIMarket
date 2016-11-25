import {setToken} from "./ApiClient"

export default {
  state: {
    message: 'Hello!',
    isConnected: false,
    user: null,
    token: null,
    cart: {
      content: []
    }
  },
  setMessageAction (newValue) {
    this.state.message = newValue
  },
  clearMessageAction () {
    this.state.message = 'action B triggered'
  },
  setUserAction(x) {
    this.state.user = x
  },
  cartAddProduct(product, quantity) {
    this.state.cart.content.push({product, quantity})
    this.saveCart()
  },
  cartRemoveProduct(index) {
    this.state.cart.content.splice(index, 1)
    this.saveCart()
  },
  cartEmptyCart() {
    this.state.cart.content = []
    this.saveCart()
  },
  setUserToken(token) {
    localStorage.userToken = token
    setToken(token)
    this.state.token = token
  },
  getUserToken() {
    if(this.state.token) {
      return this.state.token
    }
    else {
      let token = localStorage.userToken
      if(token) {
        this.setUserToken(localStorage.userToken)
        return token
      }
      return null
    }
  },
  addNotification(data) {
    if(this.state.user && this.state.user.notifications) {
      this.state.user.notifications.unshift(data)
    }
  },
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  },
  restoreCart() {
    if(localStorage.cart) {
      this.state.cart = JSON.parse(localStorage.cart)
    }
  }
}
