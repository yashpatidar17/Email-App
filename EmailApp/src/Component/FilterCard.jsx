import { useContext } from "react";
import { EmailContext } from "../main";


export const FilterCard = () => {
  const {dispatch}= useContext(EmailContext)
  return (
    <div>
      <label>
        <input type="checkbox" onChange={()=>dispatch({type:"isRead"})} />
        Show Unread Mails
        
      </label>

      <label>
        <input type="checkbox" onChange={()=>dispatch({type:"isStarred"})} />
        Show Starred Mails
      </label>
    </div>
  );
};
