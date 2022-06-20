import Vue from 'vue'
import Vuex from 'vuex'
import {books} from "@/store/modules/books";
import {cart} from "@/store/modules/cart";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        books,
        cart
    }
})
