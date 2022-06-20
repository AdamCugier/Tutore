export interface BooksStateI {
    books: [BookI] | [],
    loading: boolean
}
export interface BookI {
    [key: string]: string
}

export interface BookListI {
    cover: string
    title: string
    authors: string
    id: string
}
