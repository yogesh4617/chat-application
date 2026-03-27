import { resendClient, sender } from "../configs/smtp.js";
import { generateEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (fullName, email, verificationLink) => {
  const emailContent = generateEmailTemplate({ fullName, verificationLink });

  const { error, data } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Our Platform!",
    html: emailContent,
  });

  if (error) {
    console.log("error in sending email", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("welcome email is sended seccussesfully",data);
  
};
