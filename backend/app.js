import express from 'express';
const app = express();
app.use(express.json());

import { config } from "dotenv";
config();

import cors from 'cors';
app.use(cors());

import { getData } from './summaryApi.js';

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/', async (req, res) => {
    console.log('Process started');
    try {
        const question = req.body.question;
        const response = await getData({
            inputs: `${question}`
        });
        console.log(response);
        res.status(201).json({ response: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});

//Article to try it out yourself -
//`Managerial Round: As with previous methods, on Webex itself, they sent us the schedule of each candidate, and as per that, my interview was from 9.30 to 10.15 a.m. They tagged and sent personalized links for the meeting for each candidate. I started my Interview at 9.30 a.m. After a brief introduction, he started asking me about the “X Application (Not revealed the Name)” design, like how it works and uses AI/ML, how the Inventory system works, and How Delivery Boy is assigned using AI. How It delivered the products within few minutes. At peak traffic time when the app responds slowly how you can handle this situation? Discussed cloud, load balancer, clustering, etc. And asked more about the Cloud. I was totally shocked, as I didn’t expect this type of system design question as an intern-level job. As I am in my 3rd Year, totally unaware of this topic, But I give my best and respond to whatever point or idea I get. But, this is totally unexpected. He explained later all the things and then asked basic HR-level questions and wrapped up. It was not good, so I knew I would get rejected soon. In the meantime, they started the ETR round (HR) for a few candidates, I just checked again and again whether my name was there or not and waited. But after a few hours, They sent a list of rejected candidates. and, my name was there.`
