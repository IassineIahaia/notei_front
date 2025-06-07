import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./componets/screens/home";
import Register from "./componets/screens/auth/register";
import Login from "./componets/screens/auth/login";
import NoteScreen from "./componets/screens/notes/index";
import UserEdit from "./componets/screens/users/edit";
import Header from "./componets/header"; 
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<NoteScreen />} />
        <Route path="/users/edit" element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
