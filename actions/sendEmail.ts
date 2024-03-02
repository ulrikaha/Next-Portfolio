"use server";

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// check if the string is valid and not too long
const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false;
    }
    return true;
}

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


    try {

        await resend.sendEmail({
            from: 'onboarding@resend.dev',
            to: 'ulrikahahn83@gmail.com',
            subject: 'New message from Ulrikas portfolio web',
            reply_to: senderEmail as string,
            text: message as string
        })

    } catch (error) {
        console.log(error)
    }
}
