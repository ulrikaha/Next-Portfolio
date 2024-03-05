"use server";

import { Resend } from "resend"
import { validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');


    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.sendEmail({
            from: 'Ulrikas portfolio website <onboarding@resend.dev>',
            to: 'ulrikahahn83@gmail.com',
            subject: 'New message from Ulrikas contact form',
            reply_to: senderEmail as string,
            text: message as string
        });

        return {
           data,
            success: true,
        };

    } catch (error) {
        console.error("Error sending email:", error);
        return {
            error: "An error occurred while sending the email, Please use the email address provided.",
        };
    }
}
