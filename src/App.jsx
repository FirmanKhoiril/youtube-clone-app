import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, SearchResult, VideoDetail, ChannelDetail, Sidebar } from "./components";
import { Home } from "./pages";
import { useStateContext } from "./context/ContextApi";

function App() {
  const { mobile } = useStateContext();
  return (
    <Box className="bg-dark">
      <Navbar />
      {!mobile && (
        <div className="relative">
          <Sidebar />
          <div className="absolute bg-black/40 w-full h-screen" />
        </div>
      )}
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
