import { useContext } from "react"
import { EmailContext } from "../main"

export const Spam = ()=>{
    const {state} = useContext(EmailContext);
    const spamMail = state?.spam
    console.log(spamMail);
    return(
        <div id="container">
        <h1>Spam</h1>
        {spamMail?.map((item)=>(
            <div key={item.mId} className="emailCard">
                <p>Subject : {item.subject}</p>
                <p>{item.content}</p>
              </div>
        ))}
        </div>
        
    )
}