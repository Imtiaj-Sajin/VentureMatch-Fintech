  import { Injectable } from '@nestjs/common';
  import * as nodemailer from 'nodemailer';
  import * as dotenv from 'dotenv';

  @Injectable()
  export class forgotpassService {
    private transporter: nodemailer.Transporter;

    constructor() {
      this.transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.userEmail,
          pass: process.env.passEmail,
        },
      });
    }

    async sendMail(email: string) {
      const password = 'helloAdmin'; 

      const mailOptions = {
        from: 'ksajin63@gmail.com', 
        to: email,
        subject: 'Your Account Password',
        text: `Hello,\n\nYour password is: ${password}\n\nThank you!`,
      };

      try {
        await this.transporter.sendMail(mailOptions);
        return { message: 'Mail sent successfully to the provided email address' };
      } catch (error) {
        console.error('Error sending mail:', error);
        throw new Error('Failed to send mail');
      }
    }
  }
