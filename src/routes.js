import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/watch/:id" element={<Watch />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;