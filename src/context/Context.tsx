import React, { createContext, useState } from 'react'


export const Store: any = createContext(null)

const StoreProvider: React.FC = ({ children }) => {
    const [value, setValue] = useState([])
    
    return (
    <Store.Provider
        value={[value, setValue]}
    >
        { children }
    </Store.Provider>
    )
}

export default StoreProvider