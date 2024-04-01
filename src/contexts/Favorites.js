import { createContext, useContext, useState } from "react"

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider 
            value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
};

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {

        const repeatedFavorite = favorite.some((item) => item === newFavorite);

        let newFavoriteList = [...favorite];

        if(!repeatedFavorite) {
            newFavoriteList.push(newFavorite);
            return setFavorite(newFavoriteList);
        }

        newFavoriteList = favorite.filter((item) => item != newFavorite);
        return setFavorite(newFavoriteList);
    }

    return {
        favorite,
        addFavorite
    }
}