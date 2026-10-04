import * as authorService from '../service/author.service.js';


export async function register(req, res, next) { 
  try { 
    const author = await authorService.register(req.body); 
    res.status(201).json({
       message: "register successfully",
        author
       }); 
  } catch (error)
   { next(error);

    }
   }

export async function login(req, res, next) { 
  try {
     const result = await authorService.login(req.body);
      res.status(200).json({ 
        message: "login successfully",
         ...result
         }); 
        } catch (error) 
        { next(error);

         } 
        }


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
