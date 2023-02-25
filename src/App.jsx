import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { SearchResult, VideoDetail, ChannelDetail, Sidebar, Navbar, MobileSearch } from "./components";
import { Home } from "./pages";
import { useStateContext } from "./context/ContextApi";

function App() {
  const { mobile, setMobile } = useStateContext();
  return (
    <Box className="bg-dark h-auto">
      {mobile && (
        <div className="relative">
          <Sidebar />
          <div onClick={() => setMobile(false)} className="fixed bg-black/30 z-20 w-full min-h-screen  " />
        </div>
      )}
      <MobileSearch />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<VideoDetail />} path="/video/:id" />
        <Route element={<SearchResult />} path="/search/:searchResult" />
        <Route element={<ChannelDetail />} path="/channel/:id" />
      </Routes>
    </Box>
  );
}

export default App;
