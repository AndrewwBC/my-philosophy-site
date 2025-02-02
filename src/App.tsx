import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/global.css";
import Feed from "./pages/Feed";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import Write from "./pages/Write";
import Register from "./pages/Register";
import { UserProvider } from "./context/userContext";
import Post from "./pages/Feed/Posts/Post";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Layout />}>
              <Route index path="/feed" element={<Feed />} />

              <Route index path="/post" element={<Post />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/auth/write" element={<Write />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
