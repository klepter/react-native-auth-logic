import {View, Text, Pressable} from "react-native"
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"

export default function HomeScreen() {
    const { userData, logout } = useContext(AuthContext)
    const logoutHandle = () => {
        logout()
    }
    return (
        <View>
            <Text>Home</Text>
            <Text>{userData !== null ? userData.name : ''}</Text>
            <Text>{userData !== null ? userData.isActivated ? "true" : "false" : ''}</Text>

            <Pressable onPress={logoutHandle}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    )
}