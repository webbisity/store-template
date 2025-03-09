import { createContext, useEffect, useState } from 'react';

import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    const [categories, setCategories] = useState();
    const [products ,setProducts] = useState();
    
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ33SSTUxamOKdJYCvkt1WHN_q8hgMtUESgzKeeIbPlfF__ZtA_9Woy1oEjIQiS_0vzk9TpcMjvhQ9y/pub?gid=967279093&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setCategories(Object.keys(results.data[0]));
            }
        })
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ33SSTUxamOKdJYCvkt1WHN_q8hgMtUESgzKeeIbPlfF__ZtA_9Woy1oEjIQiS_0vzk9TpcMjvhQ9y/pub?gid=0&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setProducts(results.data);
            }
        })
    },[])
    
    return (
        <DBContext.Provider value={{
            categories, products
        }}>{ children }
        </DBContext.Provider>
    )
}