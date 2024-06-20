import {createTransport} from 'nodemailer'

 export const mailTransport = createTransport ({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: 'admin@shopa.life',
        pass: 'E2uJpsHeHZj4'
    }
}

);
