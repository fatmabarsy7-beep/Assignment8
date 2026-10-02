import * as authorRepository from '../repository/author.repository.js';


 export async function createAuthor(authorData) {
  return await authorRepository.createAuthor(authorData)
}


export async function getAllAuthor() {
    return await authorRepository.getAllAuthor()
}