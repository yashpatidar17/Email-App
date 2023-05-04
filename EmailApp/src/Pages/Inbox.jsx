import { useContext } from "react"
import { EmailContext } from "../main"

export const Inbox = ()=>{
    const {item} = useContext(EmailContext)
    return(
        <>
<h1>Inbox</h1>
        <p>{item}</p>
        </>
        
    )
}