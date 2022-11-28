import React,{useState, createContext, useContext} from "react";

const CountContext  = createContext()

export const useCountContext = () => {
    const context = useContext(CountContext)
    const [toggle, setToggle] = context.toggle

    const handleTheme = () => {
        setToggle(prev => (!prev))
    }

    return {
        handleTheme,
        toggle,
    }
}


export const CountProvider =  ({children}) => {
    const [toggle, setToggle]  = useState(true)

    return(
        <CountContext.Provider value={{toggle : [toggle, setToggle]}}>
            {children}
        </CountContext.Provider>
    )
}