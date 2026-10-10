
export  class AppError extends Error{
    statusCode;
    isOperational;

    constructor(message,statusCode,isOperational){
        super(message);
        this.statusCode=statusCode;
        this,isOperational
    }
}
const err= new AppError("User not found",404);
console.log(err);
