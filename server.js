var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bensalemabdelhafidh.go@gmail.com',
        pass: 'fuauhreaibubseql'
    }
});

var mailOptions = {
    from: 'bensalemabdelhafidh@gmail.com',
    to: 'abdelhafidh.bensalem1990@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});