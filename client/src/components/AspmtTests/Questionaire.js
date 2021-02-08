import React from 'react';

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
    <div>
        <div className="d-flex justify-content-center row">
            <div className="col-md-10 col-lg-10">
                <div className="border">

                    <div className="question bg-white p-3 border-bottom">
                        <div className="d-flex flex-row justify-content-between align-items-center mcq">
                            <h4>{testName}</h4>
                            {/* <span>(5 of 20)</span> */}
                        </div>
                    </div>

                    <div className="question bg-white p-3 border-bottom">
                        <div className="d-flex flex-row align-items-center question-title mb-3">
                            <h3 className="text-danger">Q{index+1}.</h3>
                            <h5 className="mt-1 ml-2">{question}</h5>
                        </div>
                        
                        {options.map((answer) => {
                            const textColor = showAnswers 
                            ? answer === selectedAnswer 
                                ? 'text-white' 
                                : 'text-warning'
                            : 'text-dark';
                            const bgColor = showAnswers 
                            ? answer === selectedAnswer 
                                ? 'bg-success' 
                                : 'text-warning'
                            : 'text-dark';
                            return(
                                <div key={answer} className={`${textColor} ans ml-5`}>
                                    <label className={`${bgColor} radio`}> <input type="radio"
                                    onClick={() => handleAnswer(answer)} /> <span>{answer}</span>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="d-flex flex-row justify-content-center align-items-center p-3 bg-white">
                    {showAnswers && (
                        <button className="btn btn-primary align-items-center quizNextButton" type="button" onClick = {handleNextQuestion}>Next<i className="fa fa-angle-right ml-2"></i></button>
                    )}
                    </div>

                </div>
            </div>
        </div>
        
        
    </div>
)};

export default Questionaire;


