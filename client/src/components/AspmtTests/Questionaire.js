import React from 'react';
import "./Questionare.css";

const Questionaire = ({ 
    selectedAnswer,
    showAnswers,
    handleAnswer, 
    handleNextQuestion,
    testName,
    index,
    data: { question, options },
}) => {
    return (
                <div className="atc_charts">
                    <h1>{testName}</h1>
                    
                    <div className="charts__right">        
                        <div className="charts__right__title">
                            <div>
                                <h1>Q{index+1}. {question}</h1>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>

                        <div className="charts__right__cards">
                            {options.map((answer) => {
                                    const textColor = showAnswers 
                                    ? answer === selectedAnswer 
                                        ? 'text-white' 
                                        : 'text-warning'
                                    : 'text-dark';

                                return(
                                    <div key={answer} className={`cardd1 ${textColor}`} onClick={() => handleAnswer(answer)}>
                                        <label className={`radio`}> 
                                            <input type="radio" />
                                            <span>{answer}</span>
                                        </label>
                                    </div>
                                );
                            })}

                            {showAnswers && (
                                <button className="signin_buttonn" type="button" onClick = {handleNextQuestion}>Next</button>
                            )}
                        </div>    
                    </div>
                </div>
)};

export default Questionaire;


