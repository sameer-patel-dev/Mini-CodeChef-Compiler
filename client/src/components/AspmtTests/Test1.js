import React, { useContext, useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom';

import { Questionaire } from './'
import { Test1Data } from './Test1Data';
function Test1(TestData) {
    const[questions, setQuestions] = useState([]);
    const[currentIndex, setCurrentIndex] = useState(0);
    const[score, setScore] = useState(0);
    const[showAnswers, setShowAnswers] = useState(false);
    const[selectedAnswer, setSelectedAnswer] = useState(null)
    const history = useHistory()

    useEffect(() => {
        setQuestions(TestData.data)
    }, []);

    const handleAnswer = (answer) => {
        if(!showAnswers) {
            if(answer === questions[currentIndex].options[0]) {
                setScore(score => score + 0)
            }
            else if(answer === questions[currentIndex].options[1]) {
                setScore(score => score + 1)
            }
            else if(answer === questions[currentIndex].options[2]) {
                setScore(score => score + 2)
            }
            else if(answer === questions[currentIndex].options[3]) {
                setScore(score => score + 3)
            }
            setSelectedAnswer(answer)
        }

        setShowAnswers(true);

    }

    const handleNextQuestion = () => {
        setShowAnswers(false);
        setSelectedAnswer(null);
        setCurrentIndex(currentIndex => currentIndex + 1);
    }

    const storeScore = () => {
        fetch(TestData.routeForTest, {
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                score:score          
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert("Score stored")
                history.push('/profile')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return questions.length > 0 ? (
        <div className="container mt-5">
            {currentIndex >= questions.length ? (
                <div>
                    <h1>Your Score is {score}</h1>
                    <br/>
                    <button className="btn btn-primary quizNextButton" onClick={()=>storeScore()}>Go To Dashboard</button>
                </div>
            ) : (
                <Questionaire 
                data = {questions[currentIndex]}
                showAnswers = {showAnswers}
                handleAnswer = {handleAnswer}
                handleNextQuestion = {handleNextQuestion}
                selectedAnswer = {selectedAnswer}
                testName = {TestData.testName}
                index = {currentIndex} />
            )}
        </div>
    ) : (
            <h1>We are loading..</h1>
    );
}

export default Test1;