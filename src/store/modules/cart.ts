import {CartStateI} from "@/types/cart";

export const cart = {
    namespaced: true,
    state: (): CartStateI => ({
        cart: []
    }),
    mutations: {
        addToCart(state: CartStateI, payload: string) {
            state.cart.push(payload)
        }
    },
    actions: {},
    getters: {
        getCartItemsCount(state: CartStateI) {
            return state.cart.length
        }
    }
}
