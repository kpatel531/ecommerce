import dotenv from 'dotenv'
dotenv.config()

const verifyEmailTemplate = ({name, url}) => {
    return `
<p>Dear ${name}</p>
<p>Thank you for registering to ${process.env.DOMAIN}.</p>
<a href=${url} style="color: black;background: orange;margin-top:10px,padding:20px,display: block">
    Verify Email
</a>
`
}

export default verifyEmailTemplate