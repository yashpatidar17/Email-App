import { useContext } from "react"
import { EmailContext } from "../main"
import { useParams } from "react-router";

export const Email = ()=>{
    const {state} = useContext(EmailContext);
    const {emailId} = useParams();
    const individualMail = state.Mail.find((item)=> item.mId === emailId); 
    console.log(individualMail)
    return(
        <div id="container">
            <h2>Mail</h2>
            <div className="emailCard">
                <h2>{individualMail.subject}</h2>
                <p>{individualMail.content}</p>
            </div>
        </div>
    )
}