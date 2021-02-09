import React,{useState} from 'react';
import './Breathing.css';

const Breathing = ()=> {
    const [breathingState,setbreathingState] = useState("Inhale");

    if(breathingState === 'Inhale'){
        setTimeout(function(){setbreathingState("Hold");},3000);
    }

    if(breathingState === 'Hold'){
        setTimeout(function(){setbreathingState("Exhale");},3000);
    }

    if(breathingState === 'Exhale'){
        setTimeout(function(){setbreathingState("Inhale");},3000);
    }

    return (
        <div className="breathing-body">
            <div className={"breathing-container"+ (breathingState==='Inhale' ? " grow" : breathingState==='Hold' ? " grow" : " shrink")} id="container">
                <div className="circle"></div>
                    <p id="text">{breathingState}</p>

                <div className="pointer-container">
                    <span className="pointer"></span>
                </div>

                <div className="gradient-circle"></div>
            </div>
        </div>
    )
}

export default Breathing
