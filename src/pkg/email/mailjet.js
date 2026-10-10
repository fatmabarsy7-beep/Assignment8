export class MailjetProvider{
    client;
    fromEmail;
    fromName;

    constructor(config){
      this.client=new Mailjej({
        apiKey:config.apiKey,apiSecret:config.apiSecret
      });
      this.fromName=config.fromName;
      this.fromEmail=config.fromEmail;
    }
   async sendMail(email,subject,html){
       this.client.post('send',{version:'v3.1'}).request({
        Message:[{
            From:{
                Email:this.fromEmail,Name:this.fromName,
            },
            To:[{
                Email:email,
            }] ,Subject:subject,HTMLpart:html,
        }]
       });

    }
}