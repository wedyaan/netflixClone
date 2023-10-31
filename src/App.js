import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
 import Account from "./pages/Account"; 
import { AuthContextProvider } from "./context/Authanti";


export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
