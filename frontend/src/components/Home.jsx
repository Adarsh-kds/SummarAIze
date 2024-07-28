import React, { useEffect, useState } from 'react'
import './home.css'
import Replies from './Replies'

const Home = () => {

    let [question, setQuestion] = useState(``);

    const submitQuestion = (e) => {
        e.preventDefault();
        setQuestion(e.target[0].value);
        console.log(question);
    }

    return (
        <>
            <div className="body">
                <div className="head">
                    <h1>SummarAIze</h1>
                </div>
                <div className='container'>
                    <div className="replies">
                        <Replies question={question} />
                    </div>
                    <form onSubmit={submitQuestion}>
                        <textarea type="text" placeholder='Provide your input here...' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home