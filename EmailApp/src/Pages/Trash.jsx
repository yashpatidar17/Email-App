import { useContext } from "react";
import { EmailContext } from "../main";

export const Trash = () => {
  const { state } = useContext(EmailContext);
  const trashMail = state?.deleted;
  console.log(trashMail);
  return (
    <div>
      <h1>Spam</h1>
      {trashMail?.map((item) => (
        <div key={item.mId}>
          <p>Subject : {item.subject}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};
