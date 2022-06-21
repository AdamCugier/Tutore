import Vue from 'vue'
import Vuex from 'vuex'
import {books} from "@/store/modules/books";
import {cart} from "@/store/modules/cart";
import {clientData} from "@/store/modules/clientdata";
import {BooksStateI} from "@/types/book";
import {CartStateI} from "@/types/cart";
import {ClientDataStateI} from "@/types/summary";

Vue.use(Vuex)

export interface RootStateI {
    books: BooksStateI
    cart: CartStateI,
    clientData: ClientDataStateI
}

export default new Vuex.Store({
    modules: {
        books,
        cart,
        clientData
    }
})
