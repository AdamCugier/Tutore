import {ActionContext} from "vuex";
import {BookI, BookListI, BooksStateI} from "@/types/book";
import {RootStateI} from "@/store";

export const books = {
    namespaced: true,
    state: (): BooksStateI => ({
        books: [],
        loading: false,
    }),
    mutations: {
        updateBooks(state: BooksStateI, payload: [BookI]) {
            state.books = payload
        },
        toggleLoading(state: BooksStateI) {
            state.loading = !state.loading
        }
    },
    actions: {
        getBooks({commit}: ActionContext<BooksStateI, RootStateI>) {
            commit('toggleLoading')
            fetch(`${process.env.VUE_APP_BOOK_STORE_URL}/new`)
                .then(res => res.json())
                .then(data => {
                    const finalData = data.books.map((book: BookI) => fetch(`${process.env.VUE_APP_BOOK_STORE_URL}/books/${book.isbn13}`)
                        .then((response) => response.json()).then((bookDetailsData: BookI) => bookDetailsData))

                    Promise.all(finalData).then(values => commit('updateBooks', values))
                        .finally(() => commit('toggleLoading'))
                })
        }
    },
    getters: {
        bookList(state: BooksStateI): BookListI[] {
            return state.books.map((book: BookI) => ({
                    cover: book.image,
                    title: book.title,
                    authors: book.authors,
                    id: book.isbn13
                })
            )
        }
    }
}
