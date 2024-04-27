const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    console.log("Recipient: "+email);

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pascalineuwingabire99@gmail.com',
                pass: 'yirhjjkupljjjj',
            },
        });

        const options = {
            from: "pascalineuwingabire99@gmail.com",
            to: email,
            subject: subject,
            text: text
        };

        //Send email
        await transporter.sendMail(options, function(error, infor) {
            if (error) {
                console.log("Failed to send email: "+error);
                return error;
            } else {
                console.log("Email Sent: "+infor.response);
                return "Email Sent: "+infor.response;
            }
        });
    } catch (error) {
        return error;
    }
}

module.exports = sendEmail;