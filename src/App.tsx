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
import Post from "./pages/Feed/Post";
import { GlobalContext } from "./context/GlobalContext";
import Register from "./pages/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/" element={<Layout />}>
              <Route index path="/feed" element={<Feed />} />
              <Route path="/feed/post" element={<Post />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/auth/write" element={<Write />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </ThemeProvider>
  );
}

export default App;
