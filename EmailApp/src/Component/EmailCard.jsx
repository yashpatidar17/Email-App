import { useContext } from "react";
import { EmailContext } from "../main";
import { Link } from "react-router-dom";


export const EmailCard = ()=>{
    const {dispatch,filteredData} = useContext(EmailContext);
    return(
        <div className="Card">
        {filteredData.map((item) => {
            const { mId, unread, isStarred, subject, content } = item;
            return (
              <div key={mId} className="emailCard">
                <h2>Subject : {subject}</h2>
                <p >{content}</p>
                <div className="buttonCard">
                <button  onClick={()=>dispatch({type:"starred",payload:item})} style={{color: isStarred ?"green":"red"}} className="commonButton">Star</button>
                <Link className="linkStyle" to={`/email/${mId}`}>View Details</Link>
                <button onClick={()=>dispatch({type:"Delete",payload:mId})} className="commonButton">Delete</button>
                <button onClick={()=>dispatch({type:"readUnread",payload:item})} className="commonButton">{unread ? "Mark as Read" : "Mark as Unread"}</button>
                <button onClick={()=>dispatch({type:"ADD_TO_SPAM",payload: mId  })} className="commonButton">Report Spam</button>
                </div>
              </div>
            );
          })}
          </div>
    )
}