import { createContactMessage } from "../services/contact.service.js";
import sendEmail from "../utils/sendEmail.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const result = await createContactMessage({
      name,
      email,
      subject,
      message,
    });

    try {
      await sendEmail({
        name,
        email,
        subject,
        message,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};