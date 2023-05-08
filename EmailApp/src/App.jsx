import { Route, Routes } from "react-router";
import "./App.css";
import { Link } from "react-router-dom";
import { Inbox } from "./Pages/Inbox";
import { Spam } from "./Pages/Spam";
import { Trash } from "./Pages/Trash";

function App() {
  return (
    <>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Inbox </Link>
            </li>
            <li>
              <Link to="/spam"> Spam </Link>
            </li>
            <li>
              <Link to="/trash">Trash</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </>
  );
}

export default App;
