import { createStore } from "vuex";
import CartSlice from "./Slices/Cart.js";
import TodoSlice from "./Slices/Todo.js";

export default createStore({
  modules: {CartSlice,TodoSlice}
});