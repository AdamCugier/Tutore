import {ClientDataStateI} from "@/types/summary";

export const clientData = {
    namespaced: true,
    state: (): ClientDataStateI => ({
        clientData: {
            name: '',
            surname: '',
            place: '',
            postal_code: '',
            phone: '',
            email: '',
            price: '',
        }
    }),
    mutations: {},
    actions: {},
    getters: {}
}
