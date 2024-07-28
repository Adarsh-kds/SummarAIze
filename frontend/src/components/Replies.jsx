import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'

const Replies = (props) => {

    let [answer, setAnswer] = useState('')

    async function getAnswer() {
        try {
            setAnswer('Answer will load here...');
            const answer = await axios.post('https://summaraize-backend.onrender.com', { question: props.question });
            setAnswer(answer.data.response[0].summary_text);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAnswer();
    }, [props.question])

    return (
        <div>
            {props.question !== '' ?
                <p className='question'>
                    <span>Q.</span>
                    {props.question}
                </p>
                : null}
            {answer !== `Answer will load here...` ?
                <p className='answer'><span>Ans.</span>{answer}</p> :
                <p className='answer color-change'>{answer}</p>}
        </div>
    )
}

export default Replies