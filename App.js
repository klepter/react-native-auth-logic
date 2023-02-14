import { StyleSheet, View } from 'react-native';
import {AuthContext} from "./src/context/AuthContext";
import {useAuth} from "./src/hooks/auth.hook";
import HomeScreen from "./src/screens/HomeScreen";
import AuthScreen from "./src/screens/AuthScreen";
import Loader from "./src/ui/Loader";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {
    const {accessToken, login, logout, userData, ready, loading} = useAuth()
    const isAuthenticated = !!accessToken

    if(!ready || loading) {
        return (
            <Loader />
        )
    }

    return (
        <AuthContext.Provider value={{
            accessToken, login, logout, userData, isAuthenticated
        }}>
            <View>
            {
                isAuthenticated ? <HomeScreen /> : <AuthScreen />
            }
            </View>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
