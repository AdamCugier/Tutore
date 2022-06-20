import {CartStateI} from "@/types/cart";

export const cart = {
    namespaced: true,
    state: (): CartStateI => ({
        cart: []
    }),
    mutations: {
        addToCart(state: CartStateI, payload: string) {
            state.cart.push(payload)
        },
        removeFromCart(state: CartStateI, payload: string) {
            state.cart = state.cart.filter(item => item !== payload)
        }
    },
    actions: {},
    getters: {
        getCartItemsCount(state: CartStateI) {
            return state.cart.length
        }
    }
}
