function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}
export default {
  state: {
    cart: []
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },
    cartItems: (state) => {
      return state.cart
    },
    totalQty: (state) => {
      let total = 0
      state.cart.forEach(item => {
        total += item.quantity
      })
      return total
    },
    totalAmount: (state) => {
      let total = 0
      state.cart.forEach(item => {
        total += item.totalprice
      })
      return total.toFixed(2)
    }
  },
  mutations: {
    addToCart (state, product) {
      let item = state.cart.find( i => i.id === product.id)

      if (item) {
        item.quantity++
        item.totalprice = item.quantity * item.price;
      } else {
        state.cart.push({...product, quantity: 1,totalprice:product.price})
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart (state, product) {
      let item = state.cart.find( i => i.id === product.id)

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          item.totalprice = item.quantity * item.price;
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id);
        }
      }
      updateLocalStorage(state.cart)
    },
    removeAllCart(state) {
      state.cart = []
      localStorage.removeItem('cart')
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {},
  modules: {}
};