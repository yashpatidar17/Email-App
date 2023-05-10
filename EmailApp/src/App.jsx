import { Route, Routes } from "react-router";
import "./App.css";
import {  NavLink } from "react-router-dom";
import { Inbox } from "./Pages/Inbox";
import { Spam } from "./Pages/Spam";
import { Trash } from "./Pages/Trash";
import { Email } from "./Pages/Email";

// const navStyle=({ isActive, isPending }) => {
//   return {
//     fontWeight: isActive ? "bold" : "",
//     color: isPending ? "yellow" : "black",
//   };
// }
// style={navStyle}

function App() {
  return (
    <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" >Inbox </NavLink>
            </li>
            <li>
              <NavLink to="/spam" > Spam </NavLink>
            </li>
            <li>
              <NavLink to="/trash" >Trash</NavLink>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/email/:emailId" element={<Email/>} />
      </Routes>
    </div>
  );
}

export default App;
