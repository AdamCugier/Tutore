export interface ClientDataStateI {
    clientData: ClientDataI
}

interface BaseDataI {
    name: string
    surname: string
    place: string
    postal_code: string
    phone: string
    email: string
}

export interface FormDataI extends BaseDataI {
    discount_code: string
}

export interface ClientDataI extends BaseDataI {
    price: string
}
