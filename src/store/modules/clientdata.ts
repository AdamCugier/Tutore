import {ClientDataI, ClientDataStateI} from "@/types/summary";

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
    mutations: {
        updateClientData(state: ClientDataStateI, payload: ClientDataI) {
            state.clientData = payload
        },
        clearClientData(state: ClientDataStateI) {
            state.clientData = {
                name: '',
                surname: '',
                place: '',
                postal_code: '',
                phone: '',
                email: '',
                price: '',

            }
        }
    },
    actions: {},
    getters: {}
}
