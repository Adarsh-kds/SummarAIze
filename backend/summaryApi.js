import fetch from "node-fetch";
import { config } from "dotenv";
config();

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

export async function getData(data){
    const response = await query(data);
    return response;
}




