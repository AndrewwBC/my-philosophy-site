import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./assets/global.css";
import Feed from "./components/pages/Feed";
import Layout from "./components/Layout";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import Write from "./components/pages/Write";
import Post from "./components/pages/Feed/Post";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/in" element={<Layout />}>
              <Route index path="/in/feed" element={<Feed />} />
              <Route path="/in/feed/post" element={<Post />} />
              <Route path="/in/contact" element={<Contact />} />
              <Route path="/in/login" element={<Login />} />
              <Route path="/in/auth/write" element={<Write />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </ThemeProvider>
  );
}

export default App;
