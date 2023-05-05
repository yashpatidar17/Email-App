import { createContext, useReducer } from "react";
import { mails } from "../Data/DataProvider";
export const EmailContext = createContext();

const emailReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_SPAM":
      return {
        ...state,
        spam: [
          ...state.spam,
          state.Mail.find((mail) => mail.mId === action.payload),
        ],
        Mail: state.Mail.filter((item) => item.mId !== action.payload),
      };

    case "Delete":
      return {
        ...state,
        deleted: [
          ...state.deleted,
          state.Mail.find((item) => item.mId === action.payload),
        ],
        Mail: state.Mail.filter((item) => item.mId !== action.payload),
      };

    case "readUnread":
      return {
        ...state,
        Mail: state.Mail.map((item) =>
          item.mId === action.payload.mId
            ? { ...item, unread: !item.unread }
            : item
        ),
      };

    case "starred":
      return {
        ...state,
        Mail: state.Mail.map((item) =>
          item.mId === action.payload.mId
            ? { ...item, isStarred: !item.isStarred }
            : item
        ),
      };

    case "isRead":
      return {
        ...state,
        isRead: !state.isRead,
      };

    case "isStarred":
      return {
        ...state,
        isStar: !state.isStar,
      };
  }
};

export const EmailContextProvider = ({ children }) => {
  const initial = {
    spam: [],
    Mail: mails,
    deleted: [],
    isRead: false,
    isStar: false,
  };
  const [state, dispatch] = useReducer(emailReducer, initial);
  console.log(state);

  const filteredData = state.Mail.filter(
    (item) =>
      (item.unread && state.isRead) ||
      (state.isStar && item.isStarred) ||
      (!state.isRead && !state.isStar)
  );
  console.log(filteredData);

  const UnreadCount = state.Mail.reduce(
    (acc, curr) => (curr.unread ? acc + 1 : acc),
    0
  );

  const starredCount = state.Mail.reduce(
    (acc, curr) => (curr.isStarred ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <EmailContext.Provider
        value={{ mails, UnreadCount, state, dispatch, starredCount,filteredData }}
      >
        {children}
      </EmailContext.Provider>
    </div>
  );
};
