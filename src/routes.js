import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watch/:id" element={<Watch />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;