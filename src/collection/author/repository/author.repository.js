import { Author } from "../model/author.model";

export async function createAuthor(authorData) {
    return await Author.createAuthor(authorData)
}

export async function getAllAuthor() {
    return await Author.getAllAuthor()
}