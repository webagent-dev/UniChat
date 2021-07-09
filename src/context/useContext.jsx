import React,{ useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const createContext = React.createContext()

const contextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const History = useHistory()

const value = { user }
    return <createContext.Provider value={value}>{!loading && children}</createContext.Provider>
}


export const useAuth = () => {
    return useContext(createContext)
}
export default contextProvider