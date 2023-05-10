import { useContext } from "react";
import { EmailContext } from "../main";

export const Trash = () => {
  const { state } = useContext(EmailContext);
  const trashMail = state?.deleted;
  console.log(trashMail);
  return (
    <div id="container">
      <h1>Trash</h1>
      {trashMail?.map((item) => (
        <div key={item.mId} className="emailCard">
          <p>Subject : {item.subject}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};
