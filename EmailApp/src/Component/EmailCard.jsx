import { useContext } from "react";
import { EmailContext } from "../main";
import { Link } from "react-router-dom";


export const EmailCard = ()=>{
    const {dispatch,filteredData} = useContext(EmailContext);
    return(
        <div>
        {filteredData.map((item) => {
            const { mId, unread, isStarred, subject, content } = item;
            return (
              <div key={mId}>
                <p>Subject : {subject}</p>
                <p>{content}</p>
                <button  onClick={()=>dispatch({type:"starred",payload:item})} style={{color: isStarred ?"green":"red"}}>Star</button>
                <Link>View Details</Link>
                <button onClick={()=>dispatch({type:"Delete",payload:mId})}>Delete</button>
                <button onClick={()=>dispatch({type:"readUnread",payload:item})}>{unread ? "Mark as Read" : "Mark as Unread"}</button>
                <button onClick={()=>dispatch({type:"ADD_TO_SPAM",payload: mId  })}>Report Spam</button>
              </div>
            );
          })}
          </div>
    )
}