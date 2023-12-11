import { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition} from "react-speech-recognition";
import TypingEffect from "../shared/typingEffect";

const SpeechToText = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [startListening, setStartListening] = useState(false);
    useEffect(()=>{
        SpeechRecognition.startListening({continuous: true});
    }, [startListening])
    return ( <div> 

        <div className="chat-window">
            <div className="chat">
               <div className="speech-text">
                <TypingEffect />
                {transcript}
                </div> 
                <div className="my-response">
                <input type="text" name="fname" autofocus />
                </div>
            </div>
            <div className="buttons">
                <button className="action-btns">Start Listening</button>
                <button className="action-btns" onClick={resetTranscript}>Clear Text</button>
                <button className="action-btns" onClick={(e)=>{
                    e.preventDefault();
                    SpeechRecognition.stopListening();
                }}>Stop Listening</button>
            </div>
        </div>
    </div>)
}

export default SpeechToText;