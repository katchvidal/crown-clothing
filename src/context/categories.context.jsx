import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../lib/firebase/firebase.lib.js";


export const CategoriesContext = createContext({
    categoriesMap: {}

})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap ] = useState({})

    useEffect(() => {
        const getCategorieMap = async() => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap( categoryMap )
        }
        getCategorieMap()
    }, [])
    
  

    const value = { categoriesMap }
    return (<CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>)
}