import "./App.css";
import Hero from "./Hero";
import Nav from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Hero />
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
