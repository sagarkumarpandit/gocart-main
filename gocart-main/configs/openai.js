import OpenAI from "openai";


export const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,
    baseurl: process.env.OPENAI_BASE_URL
});

