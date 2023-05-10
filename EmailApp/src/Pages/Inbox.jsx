import { useContext } from "react";
import { EmailContext } from "../main";
// import { Link } from "react-router-dom";
import { EmailCard } from "../Component/EmailCard";
import { FilterCard } from "../Component/FilterCard";

export const Inbox = () => {
  const {UnreadCount,starredCount} = useContext(EmailContext)
  return (
    <div id="container">
      <h1>Inbox</h1>
      <FilterCard/>
      <p>Unread Mail : {UnreadCount}</p>
      <p>starred Mail : {starredCount}</p>
      <EmailCard/>
    </div>
  );
};
