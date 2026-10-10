class Logger {
    constructor(){
        if(!Logger.instance){
            Logger.instance=this;
        }
        return Logger.instance;
    }
    log(level,message,metadata={}){
       let messageObj={
        level:level,
        message:message,
        timestamp:DataTransfer.now(),
        ...metadata,
       }
       console.log(JSON.stringify(messageObj));
    }
    error(message,metadata){
        this.log('error',message,metadata);

    }
    debug(message,metadata){

 this.log('debug',message,metadata);
    }
    info(message,metadata){
 this.log('error',message,metadata);
    }
}

export const logger = new Logger();