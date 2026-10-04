
import { Author } from "../model/author.model.js";

export async function createAuthor(authorData) {
    return await Author.create(authorData);
}

export async function findAuthorByEmail(email) {
    return await Author.findOne({ email });
}

export async function getAllAuthor() {
    return await Author.find();
}

