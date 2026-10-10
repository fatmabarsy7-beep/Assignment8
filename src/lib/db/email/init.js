
import { MailjetProvider } from "../../../pkg/email/mailjet.js";
import {env} from '../../config/env.js'

export const MailjetProvider=new MailjetProvider({
    apikey:env.mailjet.apikey,
    apiSecret:env.mailjet.apiSecret,
    fromEmail:env.mailjet.fromEmail,
    fromName:env.mailjet.fromName
})