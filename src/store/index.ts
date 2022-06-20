import Vue from 'vue'
import Vuex from 'vuex'
import {books} from "@/store/modules/books";
import {cart} from "@/store/modules/cart";
import {BooksStateI} from "@/types/book";

Vue.use(Vuex)

export interface RootStateI {
    books: BooksStateI
    cart: [string],
}

export default new Vuex.Store({
    modules: {
        books,
        cart
    }
})
