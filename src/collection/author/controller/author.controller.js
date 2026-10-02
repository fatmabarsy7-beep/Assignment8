import * as authorService from '../service/author.service.js';

export async function createAuthor(req,res,next){
  try {
    const author = await authorService.createBook(req.body);

    res.status(201).json({
      message: "book created successfully",
      author
    });
  } catch (error) {
    next(error);
  }

}
