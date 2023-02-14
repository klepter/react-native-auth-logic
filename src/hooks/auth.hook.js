import {useState, useCallback, useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage" 
import {useHttp} from "./http.hook" 
import {BACKEND_URI} from "../../config" 

const storageName = 'userData'

export const useAuth = () => {
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userData, setUserData] = useState(null)
    const { loading, request, error, clearError } = useHttp()


    const login = useCallback((accessToken, refreshToken, user) => {
        setAccessToken(accessToken)
        setRefreshToken(refreshToken)
        setUserData(user)
        AsyncStorage.setItem(storageName, JSON.stringify({
            user, accessToken, refreshToken
        }))
    }, [])


    const logout = useCallback(() => {
        setAccessToken(null)
        setRefreshToken(null)
        setUserData(null)
        AsyncStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        AsyncStorage.getItem(storageName)
            .then((data) => {
                const parsedData = JSON.parse(data)
                if(parsedData && parsedData.refreshToken) {
                    request(`${BACKEND_URI}/api/refresh`, "POST", {refreshToken: parsedData.refreshToken})
                        .then(data => {
                            login(data.accessToken, data.refreshToken, data.user)
                        })
                }
            })

        setReady(true)
    }, [login])

    return { login, logout, accessToken, userData, ready, loading }
}