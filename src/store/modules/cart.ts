import {CartStateI} from "@/types/cart";
import {ActionContext} from "vuex";
import {RootStateI} from "@/store";
import {BooksStateI} from "@/types/book";

export const cart = {
    namespaced: true,
    state: (): CartStateI => ({
        cart: [],
        currency: 'USD',
        currency_value: 1,
        loading: false
    }),
    mutations: {
        addToCart(state: CartStateI, payload: string) {
            state.cart.push(payload)
        },
        removeFromCart(state: CartStateI, payload: string) {
            state.cart = state.cart.filter(item => item !== payload)
        },
        updateCurrency(state: CartStateI, payload: string) {
            state.currency = payload
        },
        updateCurrencyValue(state: CartStateI, payload: number) {
            state.currency_value = payload
        },
        toggleLoading(state: BooksStateI) {
            state.loading = !state.loading
        }
    },
    actions: {
        getCurrencyConverter({commit}: ActionContext<CartStateI, RootStateI>, payload: string) {
            commit('toggleLoading')
            switch (payload) {
                case 'PLN' :
                    fetch(`${process.env.VUE_APP_NBP_API_URL}A/USD`)
                        .then(res => res.json())
                        .then(res => {
                            commit('updateCurrency', 'PLN')
                            commit('updateCurrencyValue', Math.floor(res.rates[0].mid * 100) / 100)
                        }).finally(() => commit('toggleLoading'))
                    break;
                case 'EUR' :
                    fetch(`${process.env.VUE_APP_NBP_API_URL}A/USD`)
                        .then(res => res.json())
                        .then(res => {
                            const valUSD = res.rates[0].mid
                            fetch(`${process.env.VUE_APP_NBP_API_URL}A/EUR`)
                                .then(response => response.json())
                                .then(response => {
                                    const valEUR = response.rates[0].mid
                                    commit('updateCurrency', 'EUR')
                                    commit('updateCurrencyValue', Math.floor((valUSD / valEUR) * 100) / 100)
                                }).finally(() => commit('toggleLoading'))
                        })
                    break;
                default:
                    commit('updateCurrency', 'USD')
                    commit('updateCurrencyValue', 1)
                    commit('toggleLoading')
            }
        }
    },
    getters: {
        getCartItemsCount(state: CartStateI) {
            return state.cart.length
        }
    }
}
